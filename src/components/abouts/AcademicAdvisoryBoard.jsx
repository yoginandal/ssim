import { useState } from "react";

export default function AcademicAdvisoryBoard() {
  const teamMembers = [
    {
      name: "Smt. Arathy Sampathy",
      role: "President",
      bio: "President & Chief Executive, SSGI",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/09/Smt_Arathy_Sampathy.jpg",
    },
    {
      name: "Dr. Sailesh Sampathy",
      role: "Vice President",
      bio: "Vice President & Dy. Chief Executive, SSGI",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/09/Dr_Sailesh_Sampathy.jpg",
    },
    {
      name: "Dr. S.V. Raman Rao",
      role: "Director",
      bio: "Director, Siva Sivani Institute of Management",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/10/Dr_S.V._Raman_Rao.jpg",
    },
    {
      name: "Prof. S. Abhirama Krishna",
      role: "Director General",
      bio: "Badruka Group of Institutions, Hyderabad.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/10/Prof_Abhiram_Krishna.jpg",
    },
    {
      name: "Dr. Ashok K. Agarwal",
      role: "Director",
      bio: "Director, EWB India, Member, Governing Council, Badruka Education Society, Hyderabad.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/10/Ashok_K_Agarwal.jpg",
    },
    {
      name: "Dr. Asit Mohapatra",
      role: "Professor of Practice – OB & HRM",
      bio: "Indian Institute of Management, Ranchi.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/10/Dr_Asit-Mohapatra.jpg",
    },
    {
      name: "Sri. M. Gopalakrishna I.A.S. (Retd.)",
      role: "Former Chairman",
      bio: "REC, Hyderabad.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/10/Sri_M.-Gopalakrishna.jpg",
    },
    {
      name: "Sri. Gubba Prashanth",
      role: "Research & Technical Head",
      bio: "Gubba Cold Storage, Secunderabad.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Gubba_Prashant.jpg",
    },
    {
      name: "Sri. Lakshmipathi Itha",
      role: "Human Resource Director",
      bio: "GVK BIO, Hyderabad.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/10/Lakshmipathi_Itha.jpg",
    },
    {
      name: "Smt. Mamatha. M",
      role: "Senior Vice President",
      bio: "HSBC Bank, Hyderabad.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/M_Mamatha.jpg",
    },
    {
      name: "Dr. G.D. Mogli",
      role: "CEO",
      bio: "Dr. Mogli Health Care Management Consultancy, Hyderabad.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Prof-G-D-Mogli.jpg",
    },
    {
      name: "Sri. Murali. R",
      role: "Executive Director",
      bio: "Celkon Mobiles Pvt Ltd, Hyderabad.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/10/Murali_Retineni.jpg",
    },
    {
      name: "Sri. Petluri Srinivas",
      role: "Member",
      bio: "Warehousing Development and Regulatory Authority (WDRA), Delhi.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/10/Raghavendra_Rao.jpg",
    },
    {
      name: "Sri. Raghavendra Rao",
      role: "Director",
      bio: "Global Sales Operations (FS), Hyderabad.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/10/Raghavendra_Rao.jpg",
    },
    {
      name: "Sri. Ram Bhoopal. P",
      role: "Co-Founder",
      bio: "M/s. Riverbridge Tech Venture Pvt. Ltd, Hyderabad.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/P_Rambhoopal.jpg",
    },
    {
      name: "Prof. K.S. Ramachandra Rao",
      role: "CEO",
      bio: "Visishta Consultancy, Secunderabad.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/10/Mr_Ramachandra_Rao.jpg",
    },
    {
      name: "Sri. Ravi Shankar Meela",
      role: "Executive Director",
      bio: "Sudhakar PVC Products Pvt. Ltd, Nalgonda District, Telangana.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/10/Ravishankar_Meela.jpg",
    },
    {
      name: "Sri. Satish Naidu",
      role: "Founder & Chief Visionary",
      bio: "Invensure Life Insurance Pvt. Ltd, Secunderabad.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Satish_Naidu.jpg",
    },
    {
      name: "Sri. C. Shanthan Reddy",
      role: "Managing Partner",
      bio: "Arise Films, Hyderabad.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/SIVA_Kumar.jpg",
    },
    {
      name: "Dr. S. Siva Kumar",
      role: "Divisional Chief Executive",
      bio: "ITC Agro Business Division, Secunderabad.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/SIVA_Kumar.jpg",
    },
    {
      name: "Sri. Srikanth Surampudi",
      role: "General Manager – HR & Regional HR Head",
      bio: "Tata Consultancy Services Ltd, Hyderabad.",
      image:
        "https://ssim.ac.in/wp-content/uploads/2022/10/Srikanth_Surampudi.jpg",
    },
    {
      name: "Prof. V. Venkaiah",
      role: "Director",
      bio: "Centre for Education Technology and Learning Sciences, A.P.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/V_Venkaiah.jpg",
    },
    {
      name: "Prof. B.R. Virmani",
      role: "Chairman",
      bio: "Centre for Organization Research & Development in Management (CORD-M), Hyderabad.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/V_Viswanadham.jpg",
    },
    {
      name: "Prof. V. Viswanadham",
      role: "Formerly Director (Academic)",
      bio: "SSIM, Secunderabad.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/V_Viswanadham.jpg",
    },
    {
      name: "Prof. B. Yerram Raju",
      role: "Adviser",
      bio: "Telangana Industrial Health Clinic Ltd, Govt. of Telangana, Hyderabad.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Yerram_Naidu.jpg",
    },
    {
      name: "Sri. P. Bhaskara Murthy",
      role: "Independent Consultant",
      bio: "IQPRO Analytics.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/Bhaskar_murthy.jpg",
    },
    {
      name: "Dr. V.G. Chari",
      role: "Formerly Assistant Vice President",
      bio: "SSGI.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/VG_CHARI.jpg",
    },
    {
      name: "Prof. A. Sudhakar",
      role: "Former Director – General",
      bio: "SSGI.",
      image: "https://ssim.ac.in/wp-content/uploads/2022/10/VG_CHARI.jpg",
    },
  ];

  return (
    <div className="w-full sm:px-6 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[32px] font-bold text-gray-900 mb-4">
            Academic Advisory Board
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto">
            The Vice President & Dy. Chief Executive is pleased to re-constitute
            the Academic Advisory Board (AAB) to review, restructure and guide
            the conduct of the various academic courses of the Programmes on
            offer with the following as its members:
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-6 sm:p-6 bg-white rounded-lg"
            >
              <div className="max-w-[180px] flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full aspect-[74/85] object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-3xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <hr className="w-[180px] sm:w-full mx-auto border-gray-200 border-[1.5px] my-4" />
                <span className="text-blue-600 mb-4">{member.role}</span>
                <p className="text-gray-500">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
