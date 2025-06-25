import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateField(name, value); // Validation on each change
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value); // Additional validation on blur
  };

  const validateField = (name, value) => {
    let errorMsg = "";
    if (name === "firstName" || name === "lastName") {
      if (!/^[A-Za-z]+$/.test(value)) {
        errorMsg = "Only letters are allowed.";
      }
    } else if (name === "phone") {
      if (!/^[6-9]\d{9}$/.test(value)) {
        errorMsg =
          "Phone number must be 10 digits and start with 6, 7, 8, or 9.";
      }
    } else if (name === "email") {
      if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        errorMsg = "Invalid email format.";
      }
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid =
      Object.values(errors).every((error) => error === "") &&
      Object.values(formData).every((value) => value.trim() !== "");
    if (isValid) {
      console.log("Form data:", formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      }); // Reset form after successful submission
      setErrors({});
    } else {
      console.error("Validation errors:", errors);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Card className="border-none shadow-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-900 via-blue-400 to-blue-900 text-primary-foreground p-6 md:p-10">
            <CardTitle className="text-3xl md:text-4xl font-extrabold">
              Contact Us
            </CardTitle>
            <CardDescription className="text-lg text-gray-200 md:text-xl mt-2">
              We&apos;d love to hear from you!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="space-y-5">
                <Card>
                  <CardContent className="flex items-start space-x-4 p-4">
                    <MapPin className="h-6 min-w-6 text-primary text-red-600" />
                    <div>
                      <h3 className="font-semibold">Our Location</h3>
                      <p className="text-sm text-muted-foreground">
                        Siva Sivani Institute of Management, NH 44, Kompally,
                        Secunderabad, Telangana - 500100.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start space-x-4 p-4">
                    <Phone className="h-6 min-w-6 text-primary text-red-600" />
                    <div>
                      <h3 className="font-semibold">Admissions Office</h3>
                      <p className="text-sm text-gray-600">
                        <strong>Email:</strong> info@ssim.ac.in
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Call:</strong> 040-2716 5451 / 53 / 54
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start space-x-4 p-4">
                    <Phone className="h-6 min-w-6 text-primary text-red-600" />
                    <div>
                      <h3 className="font-semibold">
                        Corporate Relations Office
                      </h3>
                      <p className="text-sm text-gray-600">
                        <strong>Email:</strong> info@ssim.ac.in
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Call:</strong> 040-2716 5451 / 53 / 54
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start space-x-4 p-4">
                    <Phone className="h-6 min-w-6 text-primary text-red-600" />
                    <div>
                      <h3 className="font-semibold">PGP Office</h3>
                      <p className="text-sm text-gray-600">
                        <strong>Email:</strong> info@ssim.ac.in
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Call:</strong> 040-2716 5451 / 53 / 54
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-start space-x-4 p-4">
                    <Mail className="h-6 min-w-6 text-primary text-red-600" />
                    <div>
                      <h3 className="font-semibold">
                        Examination Department (For student verification)
                      </h3>
                      <p className="text-sm text-gray-600">
                        <strong>Email:</strong> info@ssim.ac.in
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Call:</strong> 040-2716 5451 / 53 / 54
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              {/* Contact Form */}
              <Card className="lg:col-span-2 flex flex-col justify-center">
                <CardHeader>
                  <CardTitle className="text-red-600">
                    Send us a message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.firstName && (
                        <p className="text-red-500">{errors.firstName}</p>
                      )}
                      <Input
                        placeholder="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.lastName && (
                        <p className="text-red-500">{errors.lastName}</p>
                      )}
                    </div>
                    <Input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                    <Input
                      placeholder="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.phone && (
                      <p className="text-red-500">{errors.phone}</p>
                    )}
                    <Input
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Textarea
                      placeholder="Your message"
                      name="message"
                      className="min-h-[180px]"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <Button className="w-full bg-mainBlue">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        {/* Map Section */}
        <Card className="mt-8 border-none shadow-2xl overflow-hidden">
          <CardContent className="p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.444089771495!2d78.48308207436037!3d17.534030983378358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb855abbdd1bd9%3A0x40fab830f7127b5!2sSiva%20Sivani%20Institute%20of%20Management%20%5BBschool%20in%20Hyderabad%5D!5e0!3m2!1sen!2sin!4v1734608560811!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
