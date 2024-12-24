export const navlinks = [
  { name: "HOME", path: "/" },
  {
    name: "PROGRAMS",
    path: "/programs",
    dropdown: [
      { name: "PGDM", path: "/programs/pgdm" },
      { name: "Executive PGDM", path: "/programs/executive-pgdm" },
    ],
  },
  {
    name: "About Us",
    path: "/about",
    dropdown: [
      { name: "Message", path: "/about/message" },
      { name: "Our Values", path: "/about/values" },
      { name: "What Sets Us Apart", path: "/about/set-us-apart" },
    ],
  },
  {
    name: "ADMISSIONS",
    path: "/admissions",
    dropdown: [
      { name: "Admission Process", path: "/admissions/process" },
      { name: "Apply Now", path: "/admissions/apply" },
    ],
  },
  {
    name: "PLACEMENT",
    path: "/placement",
    dropdown: [
      { name: "Overview", path: "/placement/overview" },
      { name: "Statistics", path: "/placement/statistics" },
    ],
  },
  {
    name: "STUDENT'S LIFE",
    path: "/students-life",
    dropdown: [
      { name: "Campus Life", path: "/students-life/campus" },
      { name: "Activities", path: "/students-life/activities" },
    ],
  },
  {
    name: "INTERNATIONAL RELATIONS",
    path: "/international-relations",
  },
  { name: "CONTACT US", path: "/contact-us" }, // Added Contact Us link
];
