import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  BookmarkIcon,
  Heart,
  MessageCircle,
  Share2,
  Clock,
  Calendar,
  ArrowLeft,
} from "lucide-react";

export default function BlogDetail() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Example blog data
  const blog = {
    title: "The Future of Artificial Intelligence in Education",
    author: {
      name: "Dr. Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      role: "AI Research Lead",
    },
    publishDate: "March 15, 2024",
    readTime: "8 min read",
    categories: ["Education", "Technology", "AI"],
    content: `
      \n\u003Cp\u003E\u003Cstrong\u003E\u003Cstrong\u003EEmpower Your Marketing Journey: Hyderabad Welcomes PGDM in Marketing Management at SSIM\u003C/strong\u003E\u003C/strong\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003EThe marketing world is constantly changing. With the digital space, consumer behavior, and marketing trends always evolving, a career in marketing needs you to be flexible, creative, and have a strong understanding of the basics. If you&#8217;re looking to boost your marketing goals and become a future leader in this field, Hyderabad&#8217;s top business school, Siva Sivani Institute of Management (SSIM), offers an outstanding PGDM in Marketing Management program.\u003C/p\u003E\n\n\n\n\u003Cp\u003E&nbsp;This blog will take you inside the exciting world of marketing at SSIM, exploring the program&#8217;s classes, teachers’ knowledge, industry focus, and the lively city of Hyderabad itself.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003E&nbsp;A Curriculum Designed for Marketing Success\u003C/strong\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003E&nbsp;The PGDM in Marketing Management at SSIM gives you the skills you need to handle the challenges of the modern marketing world.&nbsp; The carefully planned curriculum combines a strong foundation in marketing basics with advanced specializations, covering areas like:\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003E&nbsp;Marketing Strategy &amp; Research:\u003C/strong\u003E Develop a good understanding of how to research marketing, analyse consumer behaviour, and plan marketing strategies.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EDigital Marketing &amp; Social Media:\u003C/strong\u003E Master the art of digital marketing tools and techniques, including content marketing, search engine optimization (SEO), social media marketing, and influencer marketing.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EBrand Management &amp; Communication:\u003C/strong\u003E Learn about brand building strategies, effective communication techniques, and the art of crafting powerful brand stories.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EProduct Management &amp; Sales:\u003C/strong\u003E Learn about product development, pricing strategies, and effective sales techniques to bring products and services to market successfully.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EData Analysis for Marketing:\u003C/strong\u003E Use the power of data analysis to make marketing decisions, segment customers, and measure how well your campaigns are doing.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003ERenowned Faculty with Industry Experience\u003C/strong\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003ESSIM has a respected group of marketing professionals who bring a wealth of industry experience and academic knowledge to the classroom.&nbsp; Professors are not only accomplished teachers but also seasoned practitioners who integrate real-world case studies, industry trends, and practical applications into their teaching. This unique mix ensures that students graduate with a well-rounded perspective and the ability to turn theoretical knowledge into real business results.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003E&nbsp;Industry Focus and Hands-on Learning\u003C/strong\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003ESSIM understands the importance of hands-on learning and exposure to the industry. The program incorporates various initiatives to bridge the gap between theory and practice, such as:\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EGuest Lectures:\u003C/strong\u003E Well-known marketing leaders and industry experts are invited to share their insights and experiences with students, providing valuable perspectives on current marketing trends and challenges.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EIndustry Visits:\u003C/strong\u003E Students go on tours of leading marketing agencies and companies, gaining firsthand knowledge of how marketing strategies are put into action in real-world settings.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003ELive Projects &amp; Internships\u003C/strong\u003E: The program provides opportunities for students to take on live projects with industry partners, allowing them to apply their acquired skills to solve real-world marketing problems. Internship placements with well-known companies further enhance their practical experience and professional networks.\u003C/p\u003E\n\n\n\n\u003Cp\u003EHyderabad offers a perfect setting for your marketing education journey. The city boasts a rich cultural heritage, a growing IT sector, and a thriving business environment. This dynamic environment allows students to witness marketing principles in action across different industries.\u003C/p\u003E\n\n\n\n\u003Ch2 class=\"wp-block-heading has-text-align-center\"\u003E\u003Cstrong\u003E&nbsp;Become a Marketing Leader with SSIM&#8217;s PGDM Program\u003C/strong\u003E\u003C/h2\u003E\n\n\n\n\u003Cfigure class=\"wp-block-image aligncenter size-full\"\u003E\u003Cimg fetchpriority=\"high\" decoding=\"async\" width=\"1000\" height=\"667\" src=\"https://ssim.ac.in/wp-content/uploads/2022/12/img-1.jpg\" alt=\"\" class=\"wp-image-6846\" srcset=\"https://ssim.ac.in/wp-content/uploads/2022/12/img-1.jpg 1000w, https://ssim.ac.in/wp-content/uploads/2022/12/img-1-300x200.jpg 300w, https://ssim.ac.in/wp-content/uploads/2022/12/img-1-768x512.jpg 768w\" sizes=\"(max-width: 1000px) 100vw, 1000px\" /\u003E\u003C/figure\u003E\n\n\n\n\u003Cp\u003E&nbsp;The PGDM in Marketing Management at SSIM is your gateway to a rewarding career in the dynamic field of marketing. With its well-rounded curriculum, respected faculty, industry focus, and vibrant location advantage, the program empowers you to become a future leader in the marketing domain.\u003C/p\u003E\n\n\n\n\u003Cp\u003E&nbsp;\u003Cstrong\u003ETake the Next step.\u003C/strong\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003E&nbsp;If you&#8217;re passionate about marketing and aspire to make a significant impact in the business world, consider the PGDM in Marketing Management program at SSIM. Visit the SSIM website, https://ssim.ac.in/, to learn more about the program, admission requirements, and the exciting world of marketing opportunities that await you.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003E&nbsp;Why Choose SSIM?\u003C/strong\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003E&nbsp;Here&#8217;s a quick recap of the benefits of pursuing the PGDM in Marketing Management at SSIM:\u003C/p\u003E\n\n\n\n\u003Cp\u003E&nbsp;\u003Cstrong\u003EComprehensive Curriculum:\u003C/strong\u003E Gain a thorough understanding of marketing fundamentals and advanced specializations.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003ERenowned Faculty:\u003C/strong\u003E Learn from experienced marketing professionals who bring industry expertise to the classroom.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EIndustry Focus &amp; Hands-on Learning:\u003C/strong\u003E Apply your knowledge through guest lectures, industry visits, live projects, and internships.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EHyderabad Advantage:\u003C/strong\u003E Thrive in a dynamic city with a rich culture and flourishing business ecosystem.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EEquip yourself with the skills you need and start your marketing journey to success with SSIM &#8211; Your Launchpad to a Fulfilling Marketing Career\u003C/strong\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003EA career in marketing offers endless possibilities. From crafting compelling brand stories to driving sales through innovative digital campaigns, marketing allows you to be creative, analytical, and a strategic thinker. &nbsp;SSIM&#8217;s PGDM in Marketing Management program equips you with the necessary skills and knowledge to thrive in this ever-evolving landscape.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EHere&#8217;s what sets SSIM apart:\u003C/strong\u003E\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003ETriple Specialization Option:\u003C/strong\u003E SSIM offers a unique “Triple Specialization&#8221; option, allowing you to pursue a major and minor specialization along with a sectoral specialization. This approach broadens your skillset and makes you highly desirable to potential employers.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EStrong Alumni Network:\u003C/strong\u003E SSIM boasts a robust alumni network of over 5,000 successful professionals across various marketing domains. This network provides invaluable mentorship opportunities, career guidance, and potential job prospects.\u003C/p\u003E\n\n\n\n\u003Cp\u003E\u003Cstrong\u003EExcellent Placement Record:\u003C/strong\u003E SSIM has a history of exceptional placement records. The program boasts a consistent placement rate exceeding 98%, with graduates securing positions in top-tier marketing firms, multinational corporations, and leading startups.\u003C/p\u003E\n\n\n\n\u003Cp\u003EHyderabad &#8211; A Vibrant Hub for Marketing: Hyderabad is a flourishing hub for IT, e-commerce, and various other industries. This dynamic environment provides a wealth of internship and job opportunities for marketing professionals.\u003C/p\u003E\n\n\n\n\u003Ch2 class=\"wp-block-heading has-text-align-center\"\u003E\u003Cstrong\u003EInvest in Your Future with SSIM\u003C/strong\u003E\u003C/h2\u003E\n\n\n\n\u003Cp\u003EThe PGDM in Marketing Management at SSIM is an investment in your future success. The program offers a comprehensive curriculum, industry-focused learning, and a supportive learning environment that prepares you to become a future leader in the marketing world.\u003C/p\u003E\n\n\n\n\u003Cp\u003ETake the first step towards your marketing dream. Visit the SSIM website https://ssim.ac.in/ to learn more about the PGDM program and application process.\u003C/p\u003E\n\n\n\n\u003Cp\u003EWe look forward to welcoming you to SSIM and empowering you on your marketing journey!\u003C/p\u003E\n
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  };

  return (
    <div className="min-h-screen bg-slate-50/50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          className="mb-8 text-blue-600 hover:text-blue-700 hover:bg-blue-50 -ml-2"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Articles
        </Button>

        {/* Main Content */}
        <article className="space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <div className="flex gap-2 flex-wrap">
              {blog.categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                >
                  {category}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              {blog.title}
            </h1>

            {/* Author and Meta Info */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12 border-2 border-blue-100">
                  <AvatarImage
                    src={blog.author.avatar}
                    alt={blog.author.name}
                  />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-slate-900">
                    {blog.author.name}
                  </p>
                  <p className="text-sm text-slate-600">{blog.author.role}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-slate-600">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {blog.publishDate}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {blog.readTime}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img
              src={blog.imageUrl}
              alt="Blog featured image"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <Card className="border-none shadow-lg">
            <CardContent className="p-8 py-1">
              <div className="prose prose-blue max-w-none">
                {blog.content.split("\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-slate-700 leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{
                      __html: paragraph,
                    }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Engagement Section */}
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className={`flex items-center space-x-2 ${
                  isLiked
                    ? "text-red-500 hover:text-red-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`h-5 w-5 ${isLiked ? "fill-current" : ""}`} />
                <span>123</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-2 text-slate-600 hover:text-slate-900"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Comments</span>
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className={`${
                  isBookmarked ? "text-blue-600" : "text-slate-600"
                } hover:text-blue-700`}
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <BookmarkIcon
                  className={`h-5 w-5 ${isBookmarked ? "fill-current" : ""}`}
                />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-slate-900"
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Separator className="my-8" />
        </article>
      </div>
    </div>
  );
}
