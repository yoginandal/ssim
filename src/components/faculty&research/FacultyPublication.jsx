import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  FileText,
  Users,
  Calendar,
  Award,
  Loader2,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function FacultyPublication() {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://www.bfis.in/ssim_backend/api/publications");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPapers(data);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching publications:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPublications();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto py-16 sm:py-20 px-4 max-w-7xl">
        <Card className="shadow-lg border-0 bg-gradient-to-br from-slate-50 to-white">
          <CardContent className="p-8">
            <div className="flex flex-col items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600 mb-4" />
              <p className="text-slate-600">Loading publications...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-16 sm:py-20 px-4 max-w-7xl">
        <Card className="shadow-lg border-0 bg-gradient-to-br from-slate-50 to-white">
          <CardContent className="p-8">
            <div className="flex flex-col items-center justify-center py-12">
              <div className="text-red-500 mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <p className="text-red-600 font-medium mb-2">
                Error loading publications
              </p>
              <p className="text-slate-600 text-sm">{error}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-16 sm:py-20 px-4 max-w-7xl">
      <Card className="shadow-lg border-0 bg-gradient-to-br from-slate-50 to-white">
        <CardHeader className="pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <FileText className="h-6 w-6 text-blue-600" />
                Academic Publications
              </CardTitle>
              <CardDescription className="text-slate-600 mt-1">
                Research papers and publications database
              </CardDescription>
            </div>
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search papers..."
                className="pl-10 bg-white border-slate-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {papers.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 px-6">
              <FileText className="h-12 w-12 text-slate-400 mb-4" />
              <p className="text-slate-600 font-medium mb-2">
                No publications found
              </p>
              <p className="text-slate-500 text-sm">
                Publications will appear here when available
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-slate-50 hover:bg-slate-50 border-slate-200">
                    <TableHead className="font-semibold text-slate-700 py-4 px-6">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Title of Paper
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-slate-700 py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        Author(s)
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-slate-700 py-4 px-6">
                      Journal
                    </TableHead>
                    <TableHead className="font-semibold text-slate-700 py-4 px-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Year
                      </div>
                    </TableHead>
                    <TableHead className="font-semibold text-slate-700 py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        UGC/SCOPUS
                      </div>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {papers.map((paper, index) => (
                    <TableRow
                      key={paper.id}
                      className={`
                        hover:bg-blue-50/50 transition-colors duration-200 border-slate-100
                        ${index % 2 === 0 ? "bg-white" : "bg-slate-50/30"}
                      `}
                    >
                      <TableCell className="py-4 px-6 max-w-md">
                        <div className="font-medium text-slate-800 leading-relaxed">
                          {paper.title}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-6 max-w-xs">
                        <div className="text-slate-600 text-sm leading-relaxed">
                          {paper.authors}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-6">
                        <div className="text-slate-700 font-medium text-sm">
                          {paper.journal}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-6 text-center">
                        <div className="text-slate-600 font-medium">
                          {paper.year}
                        </div>
                      </TableCell>
                      <TableCell className="py-4 px-6">
                        <div className="text-slate-600 font-medium">
                          {paper.classification}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}

          {/* <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-slate-600">
              <div>Showing {papers.length} publications</div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-100 border border-blue-300 rounded"></div>
                  <span>SCOPUS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
                  <span>UGC</span>
                </div>
              </div>
            </div>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
}
