import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Book,
  BookOpen,
  GraduationCap,
  Library,
  Download,
  Microscope,
  Video,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { resourcesData } from "./footerData";
// Data structure for resources
import Heading from "../../components/Heading";
export default function OnlineLearningResources() {
  const renderCards = (resources) => {
    return resources.map((resource, index) => {
      const IconComponent = resource.icon;
      return (
        <Card key={index} className="rounded-md transition-all hover:shadow-lg">
          <CardHeader className="flex flex-col gap-3 justify-between items-center pb-5 sm:flex-row sm:gap-0">
            <div className="flex-1">
              <CardTitle className="flex gap-2 items-center text-lg">
                <IconComponent className="w-5 h-5" />
                {resource.title}
              </CardTitle>
              <CardDescription className="mt-2">
                {resource.description}
              </CardDescription>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-2 w-full text-sm rounded  sm:ml-4 sm:w-auto sm:text-base"
              onClick={() => window.open(resource.link, "_blank")}
            >
              <Download className="mr-2 w-4 h-4" />
              Download
            </Button>
          </CardHeader>
        </Card>
      );
    });
  };

  return (
    <div className="container py-8 mx-auto">
      <div className="p-4 mx-auto max-w-4xl">
        <Heading
          title="Online Learning Resources"
          subtitle="Access a wide range of resources for your learning journey"
          titleClassName="text-secondary-color text-center lg:text-5xl"
          subtitleClassName="text-gray-500 text-center m-0 lg:text-lg lg:font-normal lg:max-w-full"
          className="lg:pb-10"
        />

        <Tabs defaultValue="ebooks" className="w-full">
          <TabsList className="grid grid-cols-1 gap-2 w-full h-auto md:grid-cols-3 sm:h-10">
            <TabsTrigger
              value="ebooks"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded"
            >
              <Book className="mr-2 w-4 h-4" />
              E-Books
            </TabsTrigger>
            <TabsTrigger
              value="journals"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded"
            >
              <BookOpen className="mr-2 w-4 h-4" />
              E-Journals & E-Resources
            </TabsTrigger>
            <TabsTrigger
              value="oer"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground h-full rounded"
            >
              <GraduationCap className="mr-2 w-4 h-4" />
              Open Educational Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ebooks" className="mt-4 space-y-4">
            {renderCards(resourcesData.ebooks)}
          </TabsContent>

          <TabsContent value="journals" className="mt-4 space-y-4">
            {renderCards(resourcesData.journals)}
          </TabsContent>

          <TabsContent value="oer" className="mt-4 space-y-4">
            {renderCards(resourcesData.oer)}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
