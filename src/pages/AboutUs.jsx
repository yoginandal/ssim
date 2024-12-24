import AboutLayout from "@/components/about-us/AboutLayout";
import { Card } from "@/components/ui/card";

const partners = [
  { name: "Ashok Leyland", logo: "/partners/ashok-leyland.png" },
  { name: "Cisco", logo: "/partners/cisco.png" },
  { name: "IBM", logo: "/partners/ibm.png" },
  { name: "ETE", logo: "/partners/ete.png" },
  { name: "Engineering Council", logo: "/partners/engineering.png" },
];

function AboutUs() {
  return (
    <AboutLayout>
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Accreditation & Tie-ups
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To provide a learning environment in which all students are
            challenged to develop their intellectual, practical and social
            skills in a holistic way focusing on leadership, socially
            responsible behaviour and lifelong learning.
          </p>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner) => (
            <Card
              key={partner.name}
              className="p-6 flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-[120px] h-auto object-contain"
              />
            </Card>
          ))}
        </div>
      </div>
    </AboutLayout>
  );
}

export default AboutUs;
