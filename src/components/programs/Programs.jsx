"use client";

import { Calendar } from "../ui/calendar";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  Search,
  BarChart2,
  Menu,
  Clock,
  BookOpen,
  MapPin,
  GraduationCap,
  Briefcase,
  FlaskRoundIcon as Flask,
  Users,
} from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
// import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
} from "../ui/drawer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { CheckCircle, ArrowRight, Download, CalendarIcon } from "lucide-react";
import { CalendarRange } from "lucide-react";
import presentation from "../../assets/programs/presentation.png";
import industry from "../../assets/programs/industrial-revolution.png";
import experiential from "../../assets/programs/seminar.png";
import pulse from "../../assets/programs/market.png";
import bookreview from "../../assets/programs/ratings.png";
import social from "../../assets/programs/share.png";
import industryreview from "../../assets/programs/industry.png";
import companyreview from "../../assets/programs/marketing.png";
import independent from "../../assets/programs/studying.png";
import article from "../../assets/programs/search.png";
import pgdmtps from "../../assets/programs/PGDM-TPS.webp";
import pgdmtpse from "../../assets/programs/PGDM-TPSE.webp";
import pgdmba from "../../assets/programs/PGDM-BA.webp";
import pgdmbifs from "../../assets/programs/PGDM-BIFS.webp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const programs = [
  { id: "fpm/efpm", name: "FPM/EFPM" },
  { id: "pgdm-ba", name: "PGDM BA" },
  { id: "pgdm-bifs", name: "PGDM BIFS" },
  { id: "pgdm-triple-specialisation", name: "PGDM Triple Specialisation" },
];

const sections = [
  { id: "about", name: "About", icon: ChevronRight },
  { id: "specializations", name: "Specializations", icon: ChevronRight },
  {
    id: "managerialCompetency",
    name: "Managerial Competency Development Modules",
    icon: ChevronRight,
  },
  { id: "differentiators", name: "Differentiators", icon: ChevronRight },
  {
    id: "curriculum",
    name: "Program Structure",
    icon: ChevronRight,
    hidden: ["fpm/efpm"],
  },
  { id: "eligibility", name: "Eligibility & Admission", icon: ChevronRight },
];

const programData = {
  "fpm/efpm": {
    name: "FPM/EFPM",
    keyInfo: {
      duration: "3 years",
      credits: "36",
      startDate: "July 2024",
      location: "Full-time On-campus",
      degree: "Fellow Program in Management (FPM)",
    },
    specializations: [
      {
        title: "Accounting & Finance",
        icon: "https://ssim.ac.in/wp-content/uploads/2022/12/5410839.png",
      },
      {
        title: "Organizational Behavior / Human Resource",
        icon: "https://ssim.ac.in/wp-content/uploads/2022/12/human-resource.png",
      },
      {
        title: "Marketing",
        icon: "https://ssim.ac.in/wp-content/uploads/2022/12/marketing.png",
      },
      {
        title: "Economics",
        icon: "https://ssim.ac.in/wp-content/uploads/2022/12/economics.png",
      },
      {
        title: "Operations Management",
        icon: "https://ssim.ac.in/wp-content/uploads/2022/12/OM.png",
      },
      {
        title: "General Management",
        icon: "https://ssim.ac.in/wp-content/uploads/2022/12/GM.png",
      },
      {
        title: "Strategic Management",
        icon: "https://ssim.ac.in/wp-content/uploads/2022/12/SM.png",
      },
    ],
    managerialCompetency: [
      {
        title: "Company Fact Presentation",
        icon: presentation, // Chart for data presentation
      },
      {
        title: "Industry Readiness I",
        icon: industry, // Target/goal icon
      },
      {
        title: "Experiential Learning",
        icon: experiential, // Microscope for hands-on learning
      },
      {
        title: "Market Pulse I",
        icon: pulse, // Upward trend chart
      },
      {
        title: "Book Review Session",
        icon: bookreview, // Books icon
      },
      {
        title: "Industry Readiness II",
        icon: industry, // Target/goal icon
      },
      {
        title: "Social Project",
        icon: social, // People/group icon
      },
      {
        title: "Market Pulse II",
        icon: pulse, // Upward trend chart
      },
      {
        title: "Industry Review Session",
        icon: industryreview, // Factory/industry icon
      },
      {
        title: "Industry Readiness III",
        icon: industry, // Target/goal icon
      },
      {
        title: "Market Pulse III",
        icon: pulse, // Upward trend chart
      },
      {
        title: "Company Review Session",
        icon: companyreview, // Office building icon
      },
      {
        title: "Course of Independent study",
        icon: independent, // Open book icon
      },
      {
        title: "Article Review Session",
        icon: article, // Newspaper/article icon
      },
    ],
    differentiators: [
      {
        title: "Research Focus",
        description:
          "Rigorous interdisciplinary research in contemporary areas of management",
      },
      {
        title: "Publication Support",
        description:
          "Focus on publishing 2 research papers in Scopus indexed journals and 1 case study",
      },
      {
        title: "Financial Support",
        description:
          "Monthly stipend of ₹20,000-30,000 for qualified full-time scholars",
      },
    ],
    // curriculum: [
    //   {
    //     module1: {
    //       title: "Term Thematic: Corporate Impellent",
    //       duration: "3 months",
    //       description:
    //         "Build a solid foundation in programming, statistics, and data manipulation",
    //       topics: [
    //         {
    //           title: "Introduction to Python Programming",
    //         },
    //         {
    //           title: "Statistics for Data Science",
    //         },
    //         {
    //           title: "Data Manipulation and Analysis",
    //           content:
    //             "Working with Pandas, NumPy, and data cleaning techniques",
    //         },
    //         {
    //           title: "Data Visualization",
    //           content:
    //             "Creating effective visualizations with Matplotlib, Seaborn, and Plotly",
    //         },
    //       ],
    //     },
    //     module2: {
    //       title: "Machine Learning Fundamentals",
    //       duration: "3 months",
    //       description:
    //         "Master the core concepts and algorithms of machine learning",
    //       topics: [
    //         {
    //           title: "Supervised Learning",
    //           content:
    //             "Regression, classification, decision trees, and ensemble methods",
    //         },
    //         {
    //           title: "Unsupervised Learning",
    //           content:
    //             "Clustering, dimensionality reduction, and anomaly detection",
    //         },
    //         {
    //           title: "Model Evaluation and Validation",
    //           content: "Cross-validation, metrics, and hyperparameter tuning",
    //         },
    //         {
    //           title: "Feature Engineering",
    //           content:
    //             "Feature selection, extraction, and transformation techniques",
    //         },
    //       ],
    //     },
    //     module3: {
    //       title: "Advanced Machine Learning",
    //       duration: "3 months",
    //       description:
    //         "Explore cutting-edge techniques in deep learning and specialized domains",
    //       topics: [
    //         {
    //           title: "Deep Learning",
    //           content: "Neural networks, CNNs, RNNs, and transfer learning",
    //         },
    //         {
    //           title: "Natural Language Processing",
    //           content:
    //             "Text preprocessing, sentiment analysis, and language models",
    //         },
    //         {
    //           title: "Computer Vision",
    //           content:
    //             "Image processing, object detection, and image classification",
    //         },
    //         {
    //           title: "Time Series Analysis",
    //           content: "Forecasting, ARIMA models, and sequence modeling",
    //         },
    //       ],
    //     },
    //     module4: {
    //       title: "Applied Data Science",
    //       duration: "3 months",
    //       description:
    //         "Apply your skills to real-world problems and prepare for industry",
    //       topics: [
    //         {
    //           title: "Big Data Technologies",
    //           content: "Hadoop, Spark, and distributed computing",
    //         },
    //         {
    //           title: "MLOps and Deployment",
    //           content: "Model deployment, monitoring, and maintenance",
    //         },
    //         {
    //           title: "Data Ethics and Privacy",
    //           content: "Ethical considerations, bias, and responsible AI",
    //         },
    //         {
    //           title: "Capstone Project",
    //           content:
    //             "End-to-end data science project with real-world applications",
    //         },
    //       ],
    //     },
    //     module5: {
    //       title: "Advanced Machine Learning",
    //       duration: "3 months",
    //       description:
    //         "Explore cutting-edge techniques in deep learning and specialized domains",
    //       topics: [
    //         {
    //           title: "Deep Learning",
    //           content: "Neural networks, CNNs, RNNs, and transfer learning",
    //         },
    //         {
    //           title: "Natural Language Processing",
    //           content:
    //             "Text preprocessing, sentiment analysis, and language models",
    //         },
    //         {
    //           title: "Computer Vision",
    //           content:
    //             "Image processing, object detection, and image classification",
    //         },
    //         {
    //           title: "Time Series Analysis",
    //           content: "Forecasting, ARIMA models, and sequence modeling",
    //         },
    //       ],
    //     },
    //     module6: {
    //       title: "Applied Data Science",
    //       duration: "3 months",
    //       description:
    //         "Apply your skills to real-world problems and prepare for industry",
    //       topics: [
    //         {
    //           title: "Big Data Technologies",
    //           content: "Hadoop, Spark, and distributed computing",
    //         },
    //         {
    //           title: "MLOps and Deployment",
    //           content: "Model deployment, monitoring, and maintenance",
    //         },
    //         {
    //           title: "Data Ethics and Privacy",
    //           content: "Ethical considerations, bias, and responsible AI",
    //         },
    //         {
    //           title: "Capstone Project",
    //           content:
    //             "End-to-end data science project with real-world applications",
    //         },
    //       ],
    //     },
    //   },
    // ],
    eligibility: [
      "MBA/PGDM/PG in allied subjects with first class aggregate marks",
      "Graduate with CA/ICWA/CS qualification (minimum 60% aggregate)",
      "Must complete comprehensive examination after coursework",
      "Must submit thesis after minimum 2 years of registration",
    ],
    admission: [
      "Submit application form",
      "Pay acceptance fee of ₹60,000 (non-refundable)",
      "Complete course work and comprehensive examination",
      "Submit research proposal to Research Advisory Committee",
      "Complete thesis work and defense",
    ],
    stats: {
      programFee: 300000,
      stipendYear1: 240000,
      stipendYear2: 300000,
      stipendYear3: 360000,
      maxDuration: 5,
      minThesisPeriod: 2,
    },
  },
  "pgdm-ba": {
    name: "PGDM BA",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      startDate: "2024",
      location: "Full-time On-campus",
      degree: "Post Graduate Diploma in Management - Business Analytics",
    },
    specializations: [
      {
        title: "Marketing Analytics",
        icon: "📊",
      },
      {
        title: "Financial Analytics",
        icon: "💹",
      },
      {
        title: "HR Analytics",
        icon: "👥",
      },
      {
        title: "Operational Analytics",
        icon: "⚙️",
      },
      {
        title: "Artificial Intelligence",
        icon: "🤖",
      },
      {
        title: "Big Data Analytics",
        icon: "📈",
      },
      {
        title: "Cloud Computing",
        icon: "☁️",
      },
    ],
    managerialCompetency: [
      {
        title: "Company Fact Presentation",
        icon: presentation, // Chart for data presentation
      },
      {
        title: "Industry Readiness I",
        icon: industry, // Target/goal icon
      },
      {
        title: "Experiential Learning",
        icon: experiential, // Microscope for hands-on learning
      },
      {
        title: "Market Pulse I",
        icon: pulse, // Upward trend chart
      },
      {
        title: "Book Review Session",
        icon: bookreview, // Books icon
      },
      {
        title: "Industry Readiness II",
        icon: industry, // Target/goal icon
      },
      {
        title: "Social Project",
        icon: social, // People/group icon
      },
      {
        title: "Market Pulse II",
        icon: pulse, // Upward trend chart
      },
      {
        title: "Industry Review Session",
        icon: industryreview, // Factory/industry icon
      },
      {
        title: "Industry Readiness III",
        icon: industry, // Target/goal icon
      },
      {
        title: "Market Pulse III",
        icon: pulse, // Upward trend chart
      },
      {
        title: "Company Review Session",
        icon: companyreview, // Office building icon
      },
      {
        title: "Course of Independent study",
        icon: independent, // Open book icon
      },
      {
        title: "Article Review Session",
        icon: article, // Newspaper/article icon
      },
    ],
    differentiators: [
      {
        title: "Harvard Business School Certification",
        description:
          "Embedded with Harvard Business School Online Business Analytics certification",
      },
      {
        title: "Software Exposure",
        description:
          "Exposure to wide range of software, programming languages and big data processing tools",
      },
      {
        title: "Experiential Learning",
        description:
          "Learning through simulations, gamifications, and practical applications",
      },
      {
        title: "Expert Faculty",
        description:
          "Eminent faculty members with industry, academia and research experience",
      },
      {
        title: "International Exchange",
        description:
          "Exchange programs for students with Herzing University, Atlanta (USA)",
      },
      {
        title: "Paid Internships",
        description: "Earn-while-you-learn through paid summer internships",
      },
    ],
    curriculum: [
      {
        name: "PGDM BA",
        link: pgdmba,
      },
      {
        module1: {
          title: "Term Thematic: Corporate Impellent pgdm-ba",
          duration: "3 months",
          description:
            "Build a solid foundation in programming, statistics, and data manipulation",
          topics: [
            {
              title: "Mgmt. Theory and Organizational Behaviour",
            },
            {
              title: "Managerial Economics",
            },
            {
              title: "Managerial Accounting",
            },
            {
              title: "Statistics for Decision Making",
            },
            {
              title: "Advanced Excel for Managers",
            },
            {
              title: "Entrepreneurship Development - I",
            },
          ],
          mdevelopment: [
            {
              title: "Company Fact Presentation",
            },
            {
              title: "Industry Readiness - I",
            },
            {
              title: "Experiential Learning",
            },
            {
              title: "Market Pulse - I",
            },
            {
              title: "Term End Viva - I",
            },
          ],
        },
        module2: {
          title: "Term Thematic: Corporate Intrinsic",
          duration: "3 months",
          description:
            "Master the core concepts and algorithms of machine learning",
          topics: [
            {
              title: "Python for Analytics",
            },
            {
              title: "SQL for Business Intelligence",
            },
            {
              title: "Corporate Finance",
            },
            {
              title: "Operations Research",
            },
            {
              title: "Marketing Management",
            },
            {
              title: "Entrepreneurship Development - II",
            },
            {
              title: "Art of Business Communication in Digital Era",
            },
          ],
          mdevelopment: [
            {
              title: "Book Review Session",
            },
            {
              title: "Industry Readiness - II",
            },
            {
              title: "Social Project",
            },
            {
              title: "Market Pulse - II",
            },
            {
              title: "Term End Viva - II",
            },
          ],
        },
        module3: {
          title: "Term Thematic: Corporate Integral",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Financial Analytics",
            },
            {
              title: "Marketing Analytics",
            },
            {
              title: "Multivariate Data Analysis",
            },
            {
              title: "Human Resource Management",
            },
            {
              title: "Operations Management",
            },
            {
              title: "Research Methodology",
            },
            {
              title: "Entrepreneurship Development - III",
            },
            {
              title: "Technology Enabled Managerial Communication",
            },
          ],
          mdevelopment: [
            {
              title: "Industry Review Session",
            },
            {
              title: "Industry Readiness - III",
            },
            {
              title: "Market Pulse - III",
            },
            {
              title: "Term End Viva - III",
            },
          ],
        },
        module4: {
          title: "Term Thematic: Corporate Adept",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Project Management",
            },
            {
              title: "Elective - I",
            },
            {
              title: "Elective - I",
            },
            {
              title: "Elective - II",
            },
            {
              title: "Elective - II",
            },
            {
              title: "HR Analytics",
            },
            {
              title: "Machine Learning - I",
            },
            {
              title: "Organisational Communication for Industry 4.0",
            },
          ],
          mdevelopment: [
            {
              title: "Company Review Session",
            },
            {
              title: "Industry Internship Project",
            },
            {
              title: "Course of Independent Study/MOOC/Certificate Course",
            },
            {
              title: "Term End Viva - IV",
            },
          ],
        },
        module5: {
          title: "Term Thematic: Corporate Astute",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Strategic Management",
            },
            {
              title: "Business Analysis Using Case Studies",
            },
            {
              title: "Design Thinking and Innovation",
            },
            {
              title: "Elective - I",
            },
            {
              title: "Elective - II",
            },
          ],
          mdevelopment: [
            {
              title: "Article Review Session",
            },
            {
              title: "Term End Viva - V",
            },
          ],
        },
        module6: {
          title: "Term Thematic: Corporate Ace",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Corporate Governance and Sustainability",
            },
          ],
          mdevelopment: [
            {
              title: "Specialization Project",
            },
          ],
        },
      },
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Strong analytical and quantitative skills",
      "Interest in data-driven decision making",
      "Basic understanding of mathematics and statistics",
    ],
    admission: [
      "Submit online application",
      "Academic credentials review",
      "Entrance test scores",
      "Personal interview",
      "Final selection based on overall profile",
    ],
    stats: {
      programHighlights: {
        dataGenerated: "2.5 quintillion bytes daily",
        growthRate: "25%",
        growthPeriod: "2020-2030",
        uniquePosition:
          "First institute in Telugu states offering specialized PGDM in Business Analytics",
      },
    },
  },
  "pgdm-bifs": {
    name: "PGDM BIFS",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      startDate: "2024",
      location: "Full-time On-campus",
      degree:
        "Post Graduate Diploma in Management - Banking, Insurance and Financial Services",
    },
    specializations: [
      {
        title: "Banking Stream",
        icon: "🏦",
        description:
          "Retail banking, Digital banking, Risk and Treasury management in banks",
      },
      {
        title: "Insurance Stream",
        icon: "🛡️",
        description:
          "Insure-tech, Fraud risk management in insurance reinsurance management",
      },
      {
        title: "Analytical Stream",
        icon: "📊",
        description:
          "Fraud risk analytics, Financial analytics and Algo trading with Python",
      },
    ],
    managerialCompetency: [
      {
        title: "Company Fact Presentation",
        icon: presentation, // Chart for data presentation
      },
      {
        title: "Industry Readiness I",
        icon: industry, // Target/goal icon
      },
      {
        title: "Experiential Learning",
        icon: experiential, // Microscope for hands-on learning
      },
      {
        title: "Market Pulse I",
        icon: pulse, // Upward trend chart
      },
      {
        title: "Book Review Session",
        icon: bookreview, // Books icon
      },
      {
        title: "Industry Readiness II",
        icon: industry, // Target/goal icon
      },
      {
        title: "Social Project",
        icon: social, // People/group icon
      },
      {
        title: "Market Pulse II",
        icon: pulse, // Upward trend chart
      },
      {
        title: "Industry Review Session",
        icon: industryreview, // Factory/industry icon
      },
      {
        title: "Industry Readiness III",
        icon: industry, // Target/goal icon
      },
      {
        title: "Market Pulse III",
        icon: pulse, // Upward trend chart
      },
      {
        title: "Company Review Session",
        icon: companyreview, // Office building icon
      },
      {
        title: "Course of Independent study",
        icon: independent, // Open book icon
      },
      {
        title: "Article Review Session",
        icon: article, // Newspaper/article icon
      },
    ],
    differentiators: [
      {
        title: "III Accreditation",
        description:
          "Program is accredited by Insurance Institute of India (III)",
      },
      {
        title: "Advanced Labs",
        description:
          "NSE Assisted Finance Lab, Equity Levers Certification, CESIM Simulations",
      },
      {
        title: "Experiential Learning",
        description:
          "Corporate interviews, Industrial Visits, NGO Visits, and Simulations",
      },
      {
        title: "International Exchange",
        description: "Exchange programs with Herzing University, Atlanta (USA)",
      },
      {
        title: "Industry Integration",
        description:
          "StratX simulations (Marketing), Equity Levers (Finance Lab), CESIM Simulations",
      },
      {
        title: "Outcome Based Education",
        description: "Focus on practical skills and industry readiness",
      },
    ],
    curriculum: [
      {
        name: "PGDM BIFS",
        link: pgdmbifs,
      },
      {
        module1: {
          title: "Term Thematic: Corporate Impellent",
          duration: "3 months",
          description:
            "Build a solid foundation in programming, statistics, and data manipulation",
          topics: [
            {
              title: "Mgmt. Theory and Organizational Behaviour",
            },
            {
              title: "Managerial Economics",
            },
            {
              title: "Managerial Accounting",
            },
            {
              title: "Statistics for Decision Making",
            },
            {
              title: "Advanced Excel for Managers",
            },
            {
              title: "Entrepreneurship Development - I",
            },
          ],
          mdevelopment: [
            {
              title: "Company Fact Presentation",
            },
            {
              title: "Industry Readiness - I",
            },
            {
              title: "Experiential Learning",
            },
            {
              title: "Market Pulse - I",
            },
            {
              title: "Term End Viva - I",
            },
          ],
        },
        module2: {
          title: "Term Thematic: Corporate Intrinsic",
          duration: "3 months",
          description:
            "Master the core concepts and algorithms of machine learning",
          topics: [
            {
              title: "Banking Law and Operations",
            },
            {
              title: "Insurance and Risk Management",
            },
            {
              title: "Corporate Finance",
            },
            {
              title: "Operations Research",
            },
            {
              title: "Marketing Management",
            },
            {
              title: "Entrepreneurship Development - II",
            },
            {
              title: "Art of Business Communication in Digital Era",
            },
          ],
          mdevelopment: [
            {
              title: "Book Review Session",
            },
            {
              title: "Industry Readiness - II",
            },
            {
              title: "Social Project",
            },
            {
              title: "Market Pulse - II",
            },
            {
              title: "Term End Viva - II",
            },
          ],
        },
        module3: {
          title: "Term Thematic: Corporate Integral",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Business Environment and Law",
            },
            {
              title: "Operations Management",
            },
            {
              title: "Research Methodology",
            },
            {
              title: "Major - I",
            },
            {
              title: "Major - II",
            },
            {
              title: "Major - III",
            },
            {
              title: "Entrepreneurship Development - III",
            },
            {
              title: "Technology Enabled Managerial Communication",
            },
          ],
          mdevelopment: [
            {
              title: "Industry Review Session",
            },
            {
              title: "Industry Readiness - III",
            },
            {
              title: "Market Pulse - III",
            },
            {
              title: "Term End Viva - III",
            },
          ],
        },
        module4: {
          title: "Term Thematic: Corporate Adept",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Project Management",
            },
            {
              title: "Major - IV",
            },
            {
              title: "Major - V",
            },
            {
              title: "Major - VI",
            },
            {
              title: "Minor - I",
            },
            {
              title: "Minor - II",
            },
            {
              title: "Sectoral - I",
            },
            {
              title: "Organisational Communication for Industry 4.0",
            },
          ],
          mdevelopment: [
            {
              title: "Company Review Session",
            },
            {
              title: "Industry Internship Project",
            },
            {
              title: "Course of Independent Study/MOOC/Certificate Course",
            },
            {
              title: "Term End Viva - IV",
            },
          ],
        },
        module5: {
          title: "Term Thematic: Corporate Astute",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Strategic Management",
            },
            {
              title: "InternationalBusiness",
            },
            {
              title: "Design Thinking and Innovation",
            },
            {
              title: "Minor - III",
            },
            {
              title: "Sectoral - II",
            },
          ],
          mdevelopment: [
            {
              title: "Article Review Session",
            },
            {
              title: "Term End Viva - V",
            },
          ],
        },
        module6: {
          title: "Term Thematic: Corporate Ace",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Corporate Governance and Sustainability",
            },
          ],
          mdevelopment: [
            {
              title: "Specialization Project",
            },
          ],
        },
      },
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Strong interest in Banking, Insurance and Financial Services",
      "Analytical and quantitative aptitude",
      "Good communication skills",
    ],
    admission: [
      "Submit online application",
      "Academic credentials review",
      "Entrance test scores",
      "Personal interview",
      "Final selection based on overall profile",
    ],
    stats: {
      careerOptions: [
        "NAV Analysts in Fintech Companies",
        "Private & Public Sector Banks",
        "Life Insurance Companies",
        "General Insurance & Health Insurance Companies",
        "Insurance Intermediaries",
        "Stock Broking Firms",
        "Mutual Fund Companies",
        "Marketing Research Companies",
        "Bancassurance channels",
      ],
      topRecruiters: [
        "Deloitte",
        "Accenture",
        "Aditya Birla",
        "ICICI",
        "Asian Paints",
        "ITC",
        "Factset Systems",
        "Franklin Templeton",
        "InfoEdge",
      ],
      placementRate: 100,
    },
  },
  "pgdm-triple-specialisation": {
    name: "PGDM Triple Specialisation",
    keyInfo: {
      duration: "2 years",
      credits: "120",
      startDate: "2024",
      location: "Full-time On-campus",
      degree: "Post Graduate Diploma in Management",
    },
    specializations: [
      {
        title: "Finance",
        icon: "💰",
      },
      {
        title: "Marketing",
        icon: "📊",
      },
      {
        title: "Human Resource",
        icon: "👥",
      },
      {
        title: "Operations Management",
        icon: "⚙️",
      },
      {
        title: "Business Analytics",
        icon: "📈",
      },
      {
        title: "Digital Marketing",
        icon: "🌐",
      },
      {
        title: "Banking & Insurance",
        icon: "🏦",
      },
      {
        title: "Retail Management",
        icon: "🏪",
      },
      {
        title: "Entrepreneurship",
        icon: "🚀",
      },
      {
        title: "Agribusiness Management",
        icon: "🌾",
      },
      {
        title: "Technology Management",
        icon: "💻",
      },
      {
        title: "Pharma Management",
        icon: "💊",
      },
    ],
    managerialCompetency: [
      {
        title: "Company Fact Presentation",
        icon: presentation, // Chart for data presentation
      },
      {
        title: "Industry Readiness I",
        icon: industry, // Target/goal icon
      },
      {
        title: "Experiential Learning",
        icon: experiential, // Microscope for hands-on learning
      },
      {
        title: "Market Pulse I",
        icon: pulse, // Upward trend chart
      },
      {
        title: "Book Review Session",
        icon: bookreview, // Books icon
      },
      {
        title: "Industry Readiness II",
        icon: industry, // Target/goal icon
      },
      {
        title: "Social Project",
        icon: social, // People/group icon
      },
      {
        title: "Market Pulse II",
        icon: pulse, // Upward trend chart
      },
      {
        title: "Industry Review Session",
        icon: industryreview, // Factory/industry icon
      },
      {
        title: "Industry Readiness III",
        icon: industry, // Target/goal icon
      },
      {
        title: "Market Pulse III",
        icon: pulse, // Upward trend chart
      },
      {
        title: "Company Review Session",
        icon: companyreview, // Office building icon
      },
      {
        title: "Course of Independent study",
        icon: independent, // Open book icon
      },
      {
        title: "Article Review Session",
        icon: article, // Newspaper/article icon
      },
    ],
    differentiators: [
      {
        title: "NBA & NAAC Accreditation",
        description: "Program is accredited by NBA and NAAC",
      },
      {
        title: "Triple Specialization",
        description:
          "Unique opportunity to specialize in three different areas",
      },
      {
        title: "Cross Functional Skills",
        description: "Develop skills across multiple business domains",
      },
      {
        title: "Entrepreneurial Focus",
        description: "Greater scope to develop entrepreneurial skills",
      },
      {
        title: "Simulation Labs",
        description:
          "StratX simulations (Marketing), Equity Levers (Finance Lab), CESIM Simulations",
      },
      {
        title: "International Exchange",
        description: "Exchange programs with Herzing University, Atlanta (USA)",
      },
    ],
    curriculum: [
      {
        name: "PGDM Triple Specialisation",
        link: pgdmtps,
      },
      {
        name: "PGDM Triple Specialisation",
        link: pgdmtpse,
      },
      {
        module1: {
          title: "Term Thematic: Corporate Impellent",
          duration: "3 months",
          description:
            "Build a solid foundation in programming, statistics, and data manipulation",
          topics: [
            {
              title: "Mgmt. Theory and Organizational Behaviour",
            },
            {
              title: "Managerial Economics",
            },
            {
              title: "Managerial Accounting",
            },
            {
              title: "Statistics for Decision Making",
            },
            {
              title: "Advanced Excel for Managers",
            },
            {
              title: "Entrepreneurship Development - I",
            },
          ],
          mdevelopment: [
            {
              title: "Company Fact Presentation",
            },
            {
              title: "Industry Readiness - I",
            },
            {
              title: "Experiential Learning",
            },
            {
              title: "Market Pulse - I",
            },
            {
              title: "Term End Viva - I",
            },
          ],
        },
        module2: {
          title: "Term Thematic: Corporate Intrinsic",
          duration: "3 months",
          description:
            "Master the core concepts and algorithms of machine learning",
          topics: [
            {
              title: "Human Resource Management",
            },
            {
              title: "Marketing Management",
            },
            {
              title: "Corporate Finance",
            },
            {
              title: "Operations Research",
            },
            {
              title: "Mgmt. Information System & Emerging Technologies",
            },
            {
              title: "Entrepreneurship Development - II",
            },
            {
              title: "Art of Business Communication in Digital Era",
            },
          ],
          mdevelopment: [
            {
              title: "Book Review Session",
            },
            {
              title: "Industry Readiness - II",
            },
            {
              title: "Social Project",
            },
            {
              title: "Market Pulse - II",
            },
            {
              title: "Term End Viva - II",
            },
          ],
        },
        module3: {
          title: "Term Thematic: Corporate Integral",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Business Environment and Law",
            },
            {
              title: "Operations Management",
            },
            {
              title: "Research Methodology",
            },
            {
              title: "Major - I",
            },
            {
              title: "Major - II",
            },
            {
              title: "Major - III",
            },
            {
              title: "Entrepreneurship Development - III",
            },
            {
              title: "Technology Enabled Managerial Communication",
            },
          ],
          mdevelopment: [
            {
              title: "Industry Review Session",
            },
            {
              title: "Industry Readiness - III",
            },
            {
              title: "Market Pulse - III",
            },
            {
              title: "Term End Viva - III",
            },
          ],
        },
        module4: {
          title: "Term Thematic: Corporate Adept",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Project Management",
            },
            {
              title: "Major - IV",
            },
            {
              title: "Major - V",
            },
            {
              title: "Major - VI",
            },
            {
              title: "Minor - I",
            },
            {
              title: "Minor - II",
            },
            {
              title: "Sectoral - I",
            },
            {
              title: "Organisational Communication for Industry 4.0",
            },
          ],
          mdevelopment: [
            {
              title: "Company Review Session",
            },
            {
              title: "Industry Internship Project",
            },
            {
              title: "Course of Independent Study/MOOC/Certificate Course",
            },
            {
              title: "Term End Viva - IV",
            },
          ],
        },
        module5: {
          title: "Term Thematic: Corporate Astute",
          duration: "3 months",
          description:
            "Explore cutting-edge techniques in deep learning and specialized domains",
          topics: [
            {
              title: "Strategic Management",
            },
            {
              title: "International Business",
            },
            {
              title: "Design Thinking and Innovation",
            },
            {
              title: "Minor - III",
            },
            {
              title: "Sectoral - II",
            },
          ],
          mdevelopment: [
            {
              title: "Article Review Session",
            },
            {
              title: "Term End Viva - V",
            },
          ],
        },
        module6: {
          title: "Term Thematic: Corporate Ace",
          duration: "3 months",
          description:
            "Apply your skills to real-world problems and prepare for industry",
          topics: [
            {
              title: "Corporate Governance and Sustainability",
            },
          ],
          mdevelopment: [
            {
              title: "Specialization Project",
            },
          ],
        },
      },
    ],
    eligibility: [
      "Bachelor's degree in any discipline",
      "Strong academic background",
      "Leadership potential",
      "Good communication skills",
    ],
    admission: [
      "Submit online application",
      "Academic credentials review",
      "Entrance test scores",
      "Personal interview",
      "Final selection based on overall profile",
    ],
    stats: {
      placementRate: 100,
      facultyCount: {
        fullTime: "25+",
        visiting: "50+",
      },
      topRecruiters: [
        "Deloitte",
        "Accenture",
        "Aditya Birla",
        "ICICI",
        "Asian Paints",
        "ITC",
        "Factset Systems",
        "Franklin Templeton",
        "InfoEdge",
      ],
      experientialLearning: [
        "Corporate Interviews",
        "Industrial Visits",
        "NGO Visits",
        "Simulations",
        "Student Clubs",
        "Event Organization",
      ],
    },
  },
};

const useMediaQuery = (query) => {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

const ProgramStats = ({ programId }) => {
  const program = programData[programId];

  const data = [
    { name: "Applicants", value: program.stats.applicants },
    { name: "Enrolled", value: program.stats.enrolled },
    { name: "Graduates", value: program.stats.graduates },
    { name: "Avg. Salary", value: program.stats.avgSalary / 1000 },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{program.name} Statistics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-4">
        <p>Employment Rate: {program.stats.employmentRate}%</p>
        <p>Average Time to Graduate: {program.stats.avgTimeToGraduate} years</p>
      </div>
    </div>
  );
};

const ProgramComparison = ({ programs }) => {
  const comparisonData = [
    { feature: "Duration", key: "duration" },
    { feature: "Credits", key: "credits" },
    { feature: "Start Date", key: "startDate" },
    { feature: "Location", key: "location" },
    { feature: "Degree", key: "degree" },
    { feature: "Applicants", key: "applicants" },
    { feature: "Enrolled", key: "enrolled" },
    { feature: "Graduates", key: "graduates" },
    { feature: "Employment Rate", key: "employmentRate" },
    { feature: "Avg. Salary", key: "avgSalary" },
    { feature: "Avg. Time to Graduate", key: "avgTimeToGraduate" },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-mainBlue">
        Program Comparison
      </h2>
      <Table>
        <TableHeader className="bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200">
          <TableRow>
            <TableHead className="text-[#293794]">Feature</TableHead>
            {programs.map((program) => (
              <TableHead className="text-[#293794]" key={program.id}>
                {program.name}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {comparisonData.map(({ feature, key }) => (
            <TableRow key={key}>
              <TableCell className="font-medium text-base">{feature}</TableCell>
              {programs.map((program) => (
                <TableCell className="text-base" key={program.id}>
                  {key in programData[program.id].keyInfo
                    ? programData[program.id].keyInfo[key]
                    : key in programData[program.id].stats
                    ? key === "avgSalary"
                      ? `$${programData[program.id].stats[
                          key
                        ].toLocaleString()}`
                      : key === "employmentRate" || key === "avgTimeToGraduate"
                      ? `${programData[program.id].stats[key]}%`
                      : programData[program.id].stats[key].toLocaleString()
                    : "N/A"}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const KeyInformation = ({ info }) => {
  const iconMap = {
    duration: Clock,
    credits: BookOpen,
    startDate: CalendarRange,
    location: MapPin,
    degree: GraduationCap,
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Key Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(info).map(([key, value]) => {
          const Icon = iconMap[key];
          return (
            <Card
              key={key}
              className={`overflow-hidden ${
                key === "degree" ? "md:col-span-2" : ""
              }`}
            >
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="bg-mainBlue rounded-full p-3 flex-shrink-0">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-base text-gray-800 capitalize">
                    {key}
                  </h4>
                  <p className="text-lg font-semibold text-red-600 break-words">
                    {value}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const Specializations = ({ specializations }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Specializations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {specializations.map((spec, index) => (
          <Card
            key={index}
            className="overflow-hidden flex flex-row items-center gap-4 p-2"
          >
            {spec.icon.startsWith("http") ? (
              <img src={spec.icon} alt={spec.title} className="w-20 h-20" />
            ) : (
              <div className="min-w-20 h-20 flex items-center justify-center text-4xl bg-gray-50 rounded-lg">
                {spec.icon}
              </div>
            )}
            <CardTitle className="text-xl text-red-600">{spec.title}</CardTitle>
          </Card>
        ))}
      </div>
    </div>
  );
};
const ManagerialCompetency = ({ managerialCompetency }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Managerial Competency Development Modules
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {managerialCompetency.map((spec, index) => (
          <Card
            key={index}
            className="overflow-hidden flex flex-row items-center gap-4 p-2"
          >
            <img src={spec.icon} alt={spec.title} className="w-16 h-16" />
            <CardTitle className="text-xl text-red-600">{spec.title}</CardTitle>
          </Card>
        ))}
      </div>
    </div>
  );
};

const Differentiators = ({ differentiators }) => {
  const iconMap = {
    0: Briefcase,
    1: Flask,
    2: Users,
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-red-600">
        Program Differentiators
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {differentiators.map((diff, index) => {
          const Icon = iconMap[index] || Users;
          return (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <div className="bg-mainBlue rounded-full p-2">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-red-600">{diff.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{diff.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

const Curriculum = ({ curriculum }) => {
  // Find the detailed curriculum object, which contains module1, module2, etc.
  const detailedCurriculumData = curriculum?.find((item) => item.module1);
  // Filter for image-based curriculum items.
  const imageCurriculum = curriculum?.filter((item) => item.link);

  return (
    <>
      {curriculum && (
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-red-600">
            Program Structure
          </h3>

          {/* Renders the tab-based detailed curriculum view if data for it exists */}
          {detailedCurriculumData && (
            <section className={`py-5`}>
              <div className="container mx-auto relative z-10">
                <Tabs defaultValue="module1" className="max-w-4xl mx-auto">
                  <TabsList className="grid grid-cols-6 mb-12 p-1 bg-slate-100 rounded-full">
                    {/* Static tabs for now */}
                    <TabsTrigger
                      value="module1"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 1
                    </TabsTrigger>
                    <TabsTrigger
                      value="module2"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 2
                    </TabsTrigger>
                    <TabsTrigger
                      value="module3"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 3
                    </TabsTrigger>
                    <TabsTrigger
                      value="module4"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 4
                    </TabsTrigger>
                    <TabsTrigger
                      value="module5"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 5
                    </TabsTrigger>
                    <TabsTrigger
                      value="module6"
                      className="rounded-full data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all duration-300"
                    >
                      Term 6
                    </TabsTrigger>
                  </TabsList>

                  {Object.keys(detailedCurriculumData).map(
                    (moduleKey, moduleIndex) => {
                      const data = detailedCurriculumData[moduleKey];
                      return (
                        <TabsContent
                          key={moduleIndex}
                          value={moduleKey}
                          className="transition-all duration-500 ease-in-out"
                        >
                          <div className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1 h-min bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                              <h3 className="text-xl font-bold mb-2">
                                {data.title}
                              </h3>
                              <div className="flex items-center gap-2 mb-4">
                                <Badge variant="outline" className="text-sm">
                                  <CalendarIcon className="h-3 w-3 mr-1" />
                                  {data.duration}
                                </Badge>
                              </div>
                              <p className="text-muted-foreground mb-6">
                                {data.description}
                              </p>
                              <div className="mt-auto pt-4 border-t">
                                <Button
                                  variant="outline"
                                  className="w-full gap-2"
                                >
                                  Download Syllabus{" "}
                                  <Download className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                            <div className="md:col-span-2">
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                              >
                                {data.topics.map((topic, index) => (
                                  <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="bg-white mb-4 rounded-xl border border-slate-100 overflow-hidden group data-[state=open]:shadow-md transition-all duration-300"
                                  >
                                    <AccordionTrigger className="px-6 py-4 hover:no-underline group-data-[state=open]:bg-slate-50 transition-colors duration-300">
                                      <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                          <span className="font-bold text-primary">
                                            {index + 1}
                                          </span>
                                        </div>
                                        <span className="text-lg font-medium">
                                          {topic.title}
                                        </span>
                                      </div>
                                    </AccordionTrigger>
                                  </AccordionItem>
                                ))}
                              </Accordion>
                            </div>
                          </div>
                        </TabsContent>
                      );
                    }
                  )}
                </Tabs>
              </div>
            </section>
          )}

          {/* Renders image-based curriculum items */}
          <div className="space-y-8">
            {imageCurriculum?.map((item, index) => (
              <div key={index}>
                <img src={item.link} alt={item.name} className="w-full" />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

const EligibilityAdmission = ({ eligibility, admission }) => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-red-600">
          Eligibility Criteria
        </h3>
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-2">
              {eligibility.map((criteria, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span>{criteria}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-red-600">
          Admission Procedure
        </h3>
        <Card>
          <CardContent className="p-6">
            <ol className="space-y-4">
              {admission.map((step, index) => (
                <li key={index} className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <span>{step}</span>
                  {index < admission.length - 1 && (
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  )}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ProgramSection = ({ programId, activeSection }) => {
  const program = programData[programId];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-mainBlue">
        {program.name} Program
      </h2>
      {activeSection === "about" && <KeyInformation info={program.keyInfo} />}
      {activeSection === "specializations" && (
        <Specializations specializations={program.specializations} />
      )}
      {activeSection === "managerialCompetency" && (
        <ManagerialCompetency
          managerialCompetency={program.managerialCompetency}
        />
      )}
      {activeSection === "differentiators" && (
        <Differentiators differentiators={program.differentiators} />
      )}
      {activeSection === "curriculum" && (
        <Curriculum curriculum={program.curriculum} />
      )}
      {activeSection === "eligibility" && (
        <EligibilityAdmission
          eligibility={program.eligibility}
          admission={program.admission}
        />
      )}
    </div>
  );
};

const ProgramsOverview = () => {
  const [activeProgram, setActiveProgram] = useState(programs[0].id);
  const [activeSection, setActiveSection] = useState("about");
  const [searchTerm, setSearchTerm] = useState("");
  const [showComparison, setShowComparison] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const filteredSections = sections.filter((section) => {
    const matchesSearch = section.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const isHidden = section.hidden?.includes(activeProgram);
    return matchesSearch && !isHidden;
  });

  const Overlay = isDesktop ? Dialog : Drawer;
  const OverlayContent = isDesktop ? DialogContent : DrawerContent;

  const SidebarContent = () => (
    <>
      {/* <div className="mb-4 relative">
        <Input
          type="text"
          placeholder="Search sections..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div> */}
      {/* <ScrollArea className="h-[calc(100vh-200px)] lg:h-auto"> */}
      <ul className="space-y-2">
        {filteredSections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => {
                setActiveSection(section.id);
                if (!isDesktop) setSidebarOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-sm transition-colors ${
                activeSection === section.id
                  ? "bg-gradient-to-r from-red-600 via-red-400 to-red-600 text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
            >
              <span className="flex items-center">
                {section.name}
                {activeSection === section.id ? (
                  <ChevronDown className="ml-auto min-w-6" />
                ) : (
                  <ChevronRight className="ml-auto min-w-6" />
                )}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {/* </ScrollArea> */}
      <div className="flex flex-col sm:flex-row gap-2 mt-4">
        <Button
          onClick={() => {
            setShowComparison(!showComparison);
            if (!isDesktop) setSidebarOpen(false);
          }}
          className="w-full sm:flex-1 bg-gradient-to-r from-mainBlue via-[#2f65ca] to-mainBlue text-white hover:bg-mainBlue/80"
        >
          {showComparison ? "Hide Comparison" : "Compare Programs"}
        </Button>
        <Overlay>
          <OverlayContent className="">
            <ProgramStats programId={activeProgram} />
          </OverlayContent>
        </Overlay>
      </div>
    </>
  );

  return (
    <div className="container max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-20">
      <h1 className="text-4xl font-bold mb-16 text-center text-primary">
        Graduate Programs
      </h1>
      <Tabs
        value={activeProgram}
        onValueChange={setActiveProgram}
        className="mb-8"
      >
        <TabsList className="w-full flex flex-wrap text-[#293794] bg-gradient-to-r from-blue-200 via-blue-50 to-blue-200 justify-center gap-2 p-1 h-auto">
          {programs.map((program) => (
            <TabsTrigger
              key={program.id}
              value={program.id}
              className="flex-grow sm:flex-grow text-sm sm:text-base px-4 py-2 h-auto data-[state=active]:bg-mainBlue data-[state=active]:text-primary-foreground"
            >
              {program.name}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
      <div className="flex flex-col lg:flex-row gap-8">
        {isDesktop ? (
          <nav className="lg:w-1/4">
            <SidebarContent />
          </nav>
        ) : (
          <Drawer open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <DrawerTrigger asChild>
              <Button
                variant="outline"
                className="lg:hidden mb-4 w-full justify-between"
              >
                <span className="flex items-center">
                  <Menu className="mr-2 h-4 w-4" />
                  Menu
                </span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="p-4">
                <SidebarContent />
              </div>
              <DrawerClose asChild>
                <Button className="mt-4">Close</Button>
              </DrawerClose>
            </DrawerContent>
          </Drawer>
        )}
        <main className="lg:w-3/4 overflow-hidden">
          <AnimatePresence mode="wait">
            {!showComparison ? (
              <motion.div
                key={`${activeProgram}-${activeSection}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProgramSection
                  programId={activeProgram}
                  activeSection={activeSection}
                />
              </motion.div>
            ) : (
              <motion.div
                key="comparison"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ProgramComparison programs={programs} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default ProgramsOverview;
