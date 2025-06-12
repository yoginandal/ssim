import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tripleSpecialisationData = {
  major: {
    title: "Major Electives",
    color: "bg-amber-50 border-amber-200",
    headerColor: "bg-amber-500",
    specializations: [
      {
        name: "Finance",
        courses: [
          "Investment Analysis and Portfolio Management",
          "Risk Management and Derivatives",
          "Management of Financial Services",
          "Fixed Income Securities",
          "Corporate Valuation",
          "Strategic Financial Management",
        ],
      },
      {
        name: "Agri-Business Management",
        courses: [
          "Basics of Agriculture",
          "Agri-Business Marketing and Sales",
          "Agri-Business Environment and Agri Tech",
          "Rural Banking and Micro Finance Institution",
          "Agri Ware Housing and Supply Chain Management",
          "Agri-Input Marketing/Post Harvest Mgmt./Procurement Mgmt. (Any 1)",
        ],
      },
      {
        name: "Marketing",
        courses: [
          "Consumer Behaviour",
          "Sales Management",
          "Services Marketing and CRM",
          "Integrated Marketing Communication",
          "Business to Business Marketing",
          "Strategic Brand Management",
        ],
      },
      {
        name: "Operations Management",
        courses: [
          "Supply Chain Management",
          "Service Operations Management",
          "Total Quality Management",
          "Logistic Management",
          "Lean Operations and Manufacturing",
          "Technology and Innovation in Operation",
        ],
      },
      {
        name: "Human Resource",
        courses: [
          "Human Resource Development",
          "Industrial Relations and Labor Laws",
          "Performance and Compensation Management",
          "Human Resource Information Systems",
          "HR Analytics",
          "Managing Diversity",
        ],
      },
      {
        name: "Technology Management",
        courses: [
          "Managing Technological Innovation",
          "Software Project and Quality Management",
          "IT Project Management",
          "Data Mining and Business Intelligence",
          "Database Management Systems with SQL",
          "E-Business Technologies and Digital Transformation",
        ],
      },
    ],
  },
  minor: {
    title: "Minor Electives",
    color: "bg-blue-50 border-blue-200",
    headerColor: "bg-blue-600",
    specializations: [
      {
        name: "Finance",
        courses: [
          "Financial Products and Services",
          "Financial Planning & Wealth Management",
          "Financial Markets",
        ],
      },
      {
        name: "Marketing",
        courses: [
          "Sales Management",
          "Services Marketing and CRM",
          "Strategic Brand Management",
        ],
      },
      {
        name: "Operations Management",
        courses: [
          "Supply Chain Management",
          "Total Quality Management",
          "Service Operations Management",
        ],
      },
      {
        name: "Technology Management",
        courses: [
          "Software Project and Quality Management",
          "IT Project Management",
          "E-Business Technologies and Digital Transformation",
        ],
      },
      {
        name: "Human Resource",
        courses: [
          "Performance and Compensation Management",
          "Human Resource Development",
          "Managing Diversity",
        ],
      },
      {
        name: "Banking",
        courses: ["Retail Banking", "Digital Banking"],
      },
      {
        name: "Agri-Business Management",
        courses: [
          "Basics of Agriculture",
          "Agri-Business Marketing and Sales",
          "Agri Warehousing & Supply Chain Management",
        ],
      },
      {
        name: "Business Analytics",
        courses: [
          "Visual Analytics",
          "Machine Learning - I",
          "Machine Learning - II",
        ],
      },
    ],
  },
  sectoral: {
    title: "Sectoral Electives",
    color: "bg-yellow-50 border-yellow-200",
    headerColor: "bg-yellow-500",
    specializations: [
      {
        name: "Digital Marketing",
        courses: ["Digital Marketing", "Social Media and Content Marketing"],
      },
      {
        name: "Entrepreneurship",
        courses: [
          "Innovation Management and Entrepreneurship",
          "Family, Small and Social Entrepreneur",
        ],
      },
      {
        name: "Real Estate Management",
        courses: [
          "Strategic Real Estate Marketing",
          "Advance Real Estate Investment and Development",
        ],
      },
      {
        name: "Retail Management",
        courses: ["Retail Management", "Visual Merchandising"],
      },
      {
        name: "Hospitality and Tourism Management",
        courses: ["Hospitality Management", "Tourism Marketing"],
      },
      {
        name: "Insurance Management",
        courses: [
          "Insurance and Risk Management",
          "Principles and Practice of Life and General Insurance",
        ],
      },
      {
        name: "Business Analytics",
        courses: ["Visual Analytics", "Predictive Analytics Using R"],
      },
      {
        name: "Pharmaceutical Management",
        courses: ["Pharmaceutical Management", "Pharmaceutical Marketing"],
      },
      {
        name: "Banking",
        courses: [
          "Principles and Practices of Banking",
          "Bank Credit Management",
        ],
      },
    ],
  },
};

const bfisData = {
  minor: {
    title: "Minor Electives",
    color: "bg-blue-50 border-blue-200",
    headerColor: "bg-blue-600",
    specializations: [
      {
        name: "Finance",
        courses: [
          "Financial Products and Services",
          "Financial Planning & Wealth Management",
          "Financial Markets",
        ],
      },
      {
        name: "Marketing",
        courses: [
          "Sales Management",
          "Services Marketing and CRM",
          "Strategic Brand Management",
        ],
      },
      {
        name: "Operations Management",
        courses: [
          "Supply Chain Management",
          "Total Quality Management",
          "Service Operations Management",
        ],
      },
      {
        name: "Technology Management",
        courses: [
          "Software Project and Quality Management",
          "IT Project Management",
          "E-Business Technologies and Digital Transformation",
        ],
      },
      {
        name: "Human Resource",
        courses: [
          "Performance and Compensation Management",
          "Human Resource Development",
          "Managing Diversity",
        ],
      },
      {
        name: "Banking",
        courses: ["Retail Banking", "Digital Banking"],
      },
      {
        name: "Agri-Business Management",
        courses: [
          "Basics of Agriculture",
          "Agri-Business Marketing and Sales",
          "Agri Warehousing & Supply Chain Management",
        ],
      },
      {
        name: "Business Analytics",
        courses: [
          "Visual Analytics",
          "Machine Learning - I",
          "Machine Learning - II",
        ],
      },
    ],
  },
  sectoral: {
    title: "Sectoral Electives",
    color: "bg-yellow-50 border-yellow-200",
    headerColor: "bg-yellow-500",
    specializations: [
      {
        name: "Digital Marketing",
        courses: ["Digital Marketing", "Social Media and Content Marketing"],
      },
      {
        name: "Entrepreneurship",
        courses: [
          "Innovation Management and Entrepreneurship",
          "Family, Small and Social Entrepreneur",
        ],
      },
      {
        name: "Real Estate Management",
        courses: [
          "Strategic Real Estate Marketing",
          "Advance Real Estate Investment and Development",
        ],
      },
      {
        name: "Retail Management",
        courses: ["Retail Management", "Visual Merchandising"],
      },
      {
        name: "Hospitality and Tourism Management",
        courses: ["Hospitality Management", "Tourism Marketing"],
      },
      {
        name: "Insurance Management",
        courses: [
          "Insurance and Risk Management",
          "Principles and Practice of Life and General Insurance",
        ],
      },
      {
        name: "Business Analytics",
        courses: ["Visual Analytics", "Predictive Analytics Using R"],
      },
      {
        name: "Pharmaceutical Management",
        courses: ["Pharmaceutical Management", "Pharmaceutical Marketing"],
      },
      {
        name: "Banking",
        courses: [
          "Principles and Practices of Banking",
          "Bank Credit Management",
        ],
      },
    ],
  },
};

const baData = {
  minor: {
    title: "Minor Electives",
    color: "bg-blue-50 border-blue-200",
    headerColor: "bg-blue-600",
    specializations: [
      {
        name: "Finance",
        courses: [
          "Financial Products and Services",
          "Financial Planning & Wealth Management",
          "Financial Markets",
        ],
      },
      {
        name: "Marketing",
        courses: [
          "Sales Management",
          "Services Marketing and CRM",
          "Strategic Brand Management",
        ],
      },
      {
        name: "Human Resource",
        courses: [
          "Performance and Compensation Management",
          "Human Resource Development",
          "Managing Diversity",
        ],
      },
      {
        name: "Operations Management",
        courses: [
          "Supply Chain Management",
          "Total Quality Management",
          "Service Operations Management",
        ],
      },
    ],
  },
};

export default function CourseLayout() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Electives Offered
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose from our comprehensive range of specialized courses across
          major, minor, and sectoral electives
        </p>
      </div>

      {/* Course Categories */}
      <div className="space-y-16">
        {Object.entries(tripleSpecialisationData).map(([key, category]) => (
          <section key={key} className="relative">
            {/* Category Header */}
            <div className="flex items-center mb-8">
              <div
                className={`${category.headerColor} text-white px-6 py-3 rounded-lg shadow-lg`}
              >
                <h2 className="text-2xl md:text-3xl font-bold">
                  {category.title}
                </h2>
              </div>
              <div className="flex-1 h-px bg-gray-300 ml-6"></div>
            </div>

            {/* Specializations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.specializations.map((specialization, index) => (
                <Card
                  key={index}
                  className={`${category.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-semibold text-gray-800 flex items-center justify-between">
                      {specialization.name}
                      <Badge variant="secondary" className="ml-2 text-xs">
                        {specialization.courses.length} courses
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {specialization.courses.map((course, courseIndex) => (
                        <li
                          key={courseIndex}
                          className="text-sm text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-200 cursor-pointer"
                        >
                          <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2 flex-shrink-0 mt-1.5"></span>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Ready to Choose Your Electives?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact our academic advisors for personalized guidance on selecting
            the right combination of electives for your career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
              Contact Advisor
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
              Download Curriculum
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
