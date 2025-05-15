import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronRight,
  ClipboardList,
  FileText,
  Info,
  Layers,
  Shield,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function IQAC() {
  return (
    <div className="min-h-screen bg-blue-50">
      {/* <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Internal Quality Assurance Cell
              </h1>
              <p className="text-slate-600 mt-1">
                Ensuring excellence in academic and administrative performance
              </p>
            </div>
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-slate-100 border-slate-200"
            >
              Est. 2016
            </Badge>
          </div>
        </div>
      </header> */}

      <main className="container max-w-7xl mx-auto px-4 py-10 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          <div className="lg:col-span-2 sticky top-20 space-y-8">
            <section className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center gap-2 mb-2">
                <Info className="h-5 w-5 text-red-500" />
                <h2 className="text-2xl font-bold text-mainBlue">
                  The Primary Aim of IQAC
                </h2>
              </div>
              <hr className="mb-3 border-t-2 border-gray-200 ml-1" />
              <div className="space-y-4 text-slate-700">
                <p>
                  To play the role as a catalyst and develop a system for
                  conscious and consistent improvement in the academic and
                  administrative performance of the institution.
                </p>
                <p>
                  To promote measures for institutional functioning towards
                  quality enhancement and sustenance through internalization of
                  quality culture and institutionalization of best practices.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-red-500" />
                <h2 className="text-2xl font-bold text-mainBlue">
                  Quality Policy
                </h2>
              </div>
              <hr className="mb-3 border-t-2 border-gray-200 ml-1" />
              <p className="text-slate-700">
                The Institute is committed to deliver quality education for all
                round development of the students to meet the varying
                requirements of industry, business and society.
              </p>
            </section>

            <section className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-red-500" />
                <h2 className="text-2xl font-bold text-mainBlue">
                  Composition of the IQAC
                </h2>
              </div>
              <hr className="mb-3 border-t-2 border-gray-200 ml-1" />
              <p className="text-slate-700 mb-4">
                IQAC may be constituted in the institution under the
                Chairmanship of the Head of the institution with heads of
                important academic and administrative units and a few teachers
                and a few distinguished educationists and representatives of
                local management and stakeholders.
              </p>

              <h3 className="text-lg font-medium text-slate-800 mb-3">
                The composition of the IQAC may be as follows:
              </h3>

              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>Chairperson: Head of the Institution</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>Teachers to represent all level (Three to eight)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>One member from the Management</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>Few Senior administrative officers</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>
                    One nominee each from local society, Students and Alumni
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>
                    One nominee each from Employers, Industrialists/Stakeholders
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="h-5 w-5 text-slate-500 shrink-0 mt-0.5" />
                  <span>
                    One of the senior teachers as the coordinator/Director of
                    the IQAC
                  </span>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-xl shadow p-6">
              <div className="flex items-center gap-2 mb-2">
                <ClipboardList className="h-5 w-5 text-red-500" />
                <h2 className="text-2xl font-bold text-mainBlue">Functions</h2>
              </div>
              <hr className="mb-3 border-t-2 border-gray-200 ml-1" />
              <p className="text-slate-700 mb-4">
                Some of the functions of the IQAC are as follows:
              </p>

              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Development and application of quality benchmarks and
                    setting parameters for various academic and administrative
                    activities of the Institution.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Facilitating the creation of a learner-centric environment
                    conducive to quality education and faculty maturation to
                    adopt the required knowledge and technology for
                    participatory teaching and learning process.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Arrangement for feedback response from students, parents and
                    other stakeholders on quality-related institutional
                    processes.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Dissemination of information on various quality parameters
                    of higher education.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Organization of inter and intra institutional workshops,
                    seminars on quality related themes and promotion of quality
                    circles.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Documentation of the various programmes/activities leading
                    to quality improvement.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Acting as a nodal agency of the Institution for coordinating
                    quality-related activities, including adoption and
                    dissemination of best practices.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Development and maintenance of institutional database
                    through MIS for the purpose of maintaining /enhancing the
                    institutional quality.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Development of Quality Culture in the institution.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>
                    Preparation and submission of the Annual Quality Assurance
                    Report (AQAR) as per guidelines and parameters of NAAC.
                  </span>
                </li>
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            {/* <Tabs defaultValue="approvals" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="approvals">Approvals</TabsTrigger>
                <TabsTrigger value="accreditations">Accreditations</TabsTrigger>
                <TabsTrigger value="committees">Committees</TabsTrigger>
              </TabsList>

              <TabsContent value="approvals" className="mt-4"></TabsContent>

              <TabsContent
                value="accreditations"
                className="mt-4"
              ></TabsContent>

              <TabsContent value="committees" className="mt-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-amber-500" />
                      List of Committees
                    </CardTitle>
                    <CardDescription>Institutional committees</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        "BOG MEMBERS AUG 2021",
                        "BOS CONSTITUTION",
                        "BOS MEMBERS - PGDM 22-23",
                        "AAB CONSTITUTION 2022",
                        "DISCIPLINARY COMMITTEE",
                        "ICC COMMITTEE",
                        "IQAC COMMITTEE 2022-23",
                        "GRIEVANCE REDRESSEL COMMITTEE",
                        "ANTI RAGGING SQUAD",
                        "ANTI RAGGING COMMITTEE",
                      ].map((item, index) => (
                        <Link
                          href="#"
                          key={index}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100  transition-colors"
                        >
                          <Users className="h-4 w-4 text-slate-500" />
                          <span className="text-sm">{item}</span>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs> */}

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-amber-500" />
                  AICTE Approvals
                </CardTitle>
                <CardDescription>Year-wise approval status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {[2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017].map(
                    (year) => (
                      <Link
                        href="#"
                        key={year}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <Calendar className="h-4 w-4 text-slate-500" />
                        <span className="text-sm font-medium">
                          AICTE {year}
                        </span>
                      </Link>
                    )
                  )}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Star className="h-5 w-5 text-amber-500" />
                  Accreditations
                </CardTitle>
                <CardDescription>Quality certifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {[
                    "Insurance Institute of India of Siva Sivani Inst.of Management Exemption Letter (2023)",
                    "Insurance Institute of India of Siva Sivani Inst.of Management Exemption Letter (2021)",
                    "Insurance Institute of India of Siva Sivani Inst.of Management (2016)",
                    "AIU Equivalence Certificate",
                    "NAAC Accreditation",
                    "NBA Accreditation",
                    "SAQS Accreditation",
                  ].map((item, index) => (
                    <Link
                      href="#"
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100  transition-colors"
                    >
                      <Shield className="h-4 min-w-4 text-slate-500" />
                      <span className="text-sm">{item}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <FileText className="h-5 w-5 text-slate-700" />
                  Annual Audit Report
                </CardTitle>
                <CardDescription>Financial statements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "SSIM Annual Accounts - 2021 - 22",
                    "SSIM Annual Accounts - 2020 - 21",
                    "SSIM Annual Accounts - 2019 - 20",
                  ].map((item, index) => (
                    <Link
                      href="#"
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100  transition-colors"
                    >
                      <FileText className="h-4 w-4 text-slate-500" />
                      <span className="text-sm">{item}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Layers className="h-5 w-5 text-slate-700" />
                  AAB and BOG
                </CardTitle>
                <CardDescription>Meeting minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {[
                    "BOG JULY 2022 MINUTES OF THE MEETING",
                    "BOG AUG 2021 MINUTES OF THE MEETING",
                    "BOG MINUTES OF THE MEETING JUNE 2020",
                    "BOG MINUTES OF THE MEETING JAN 2020",
                    "BOG MINUTES OF THE MEETING JULY 2019",
                  ].map((item, index) => (
                    <Link
                      href="#"
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <FileText className="h-4 w-4 text-slate-500" />
                      <span className="text-sm">{item}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-slate-700" />
                  IQAC Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["SSR 21-22", "AQAR 20-21"].map((item, index) => (
                    <Link
                      href="#"
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <FileText className="h-4 w-4 text-slate-500" />
                      <span className="text-sm">{item}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Info className="h-5 w-5 text-slate-700" />
                  Mandatory Disclosure 2023
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link
                  href="#"
                  className="flex items-center justify-center gap-2 w-full p-3 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors"
                >
                  <FileText className="h-5 w-5 text-slate-700" />
                  <span className="font-medium">View Disclosure Document</span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
