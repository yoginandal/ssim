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
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Card className="border-none shadow-2xl overflow-hidden">
          <CardHeader className="bg-primary text-primary-foreground p-6 md:p-10">
            <CardTitle className="text-3xl md:text-4xl font-extrabold">
              Contact Us
            </CardTitle>
            <CardDescription className="text-lg md:text-xl mt-2">
              We&apos;d love to hear from you!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <MapPin className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Our Location</h3>
                      <p className="text-sm text-muted-foreground">
                        123 Business Ave, San Francisco, CA 94107
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <Phone className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Phone Number</h3>
                      <p className="text-sm text-muted-foreground">
                        +1 (555) 123-4567
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="flex items-center space-x-4 p-6">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">Email Address</h3>
                      <p className="text-sm text-muted-foreground">
                        contact@example.com
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First Name" />
                      <Input placeholder="Last Name" />
                    </div>
                    <Input type="email" placeholder="Email" />
                    <Input placeholder="Subject" />
                    <Textarea
                      placeholder="Your message"
                      className="min-h-[120px]"
                    />
                    <Button className="w-full">Send Message</Button>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1034176616337!2d-122.41941708468212!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085d0d06c05%3A0x7c6d7df5f3bd7d9e!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1639125435079!5m2!1sen!2s"
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
