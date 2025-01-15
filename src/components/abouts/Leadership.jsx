import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Quote, ChevronRight, ExternalLink } from 'lucide-react';

const leaders = [
  {
    role: "Manager",
    name: "Rev. Sr. Nilima",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    content: [
      "I am extremely delighted to welcome you to St. Teresa's College. A vision, which was planted by Sr. Teresa of Rose of Lima, our foundress and Mother, a women with extraordinary vision and foresight who believed that social transformation was possible through educating and empowering women.",
      "We have been empowering and transforming lives since 1925 when the college was established in the heart of the Cochin city. The college provides exciting educational opportunities for students from all backgrounds and locations. The faculty and staff are dedicated professionals who excel in connecting with students and providing an overall educational experience.",
      "St. Teresa's represents a way of life to the students, and creates a community of extended families and friends, fostering life long bonds, a shared sense of responsibility and reliance to each other."
    ]
  },
  {
    role: "Director",
    name: "Rev. Sr. Emeline CSST",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    quote: "The future belongs to those who believe in the beauty of their dreams",
    quoteAuthor: "Eleanor Roosevelt",
    content: [
      "Holistic education paves the way to knowledge, skills, creativity and empowerment. Today's world demands that we think out of the box. The motto of St.Teresa's College is to empower today's women for tomorrow.",
      "The seed that was sown by our foundress, Mother Teresa of St. Rose of Lima, has now grown into a gigantic tree which has provided guidance, solace and means of livelihood to thousands of young women.",
      "Women, who form half of the population, are often marginalized due to lack of opportunities. The college offers the key to open doorways into a bright future where women can stand on their own feet, gain confidence and self esteem and speak up for their rights. The college provides a conducive ambience for learning and growing."
    ]
  }
];

function LeaderCard({ leader }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group shadow-lg overflow-hidden border-none transition-all duration-300">
        <CardContent className="p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[250px_1fr] items-start">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
              <img
                src={leader.image}
                alt={`${leader.role} - ${leader.name}`}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-semibold text-white drop-shadow-md">{leader.name}</h3>
                <p className="text-sm text-white/80 drop-shadow-md">{leader.role}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  {leader.role}
                </h2>
                <p className="text-lg text-muted-foreground">{leader.name}</p>
              </div>
              <Separator className="bg-primary/20" />
              {leader.quote && (
                <motion.div 
                  className="relative mt-4 pl-6 border-l-4 border-primary/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Quote className="absolute -left-[17px] -top-1 w-6 h-6 text-primary/40" />
                  <p className="italic text-lg">{leader.quote}</p>
                  {leader.quoteAuthor && (
                    <p className="mt-2 text-sm text-muted-foreground">- {leader.quoteAuthor}</p>
                  )}
                </motion.div>
              )}
              <div className="text-muted-foreground">
                <p className="text-base leading-relaxed line-clamp-3">{leader.content[0]}</p>
              </div>
              <Button
                onClick={() => setIsDialogOpen(true)}
                variant="ghost"
                className="group flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                aria-label={`Read more about ${leader.name}`}
              >
                Read more
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{leader.name} - {leader.role}</DialogTitle>
            <DialogDescription>Learn more about our college leadership</DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-4">
            {leader.quote && (
              <div className="relative pl-6 border-l-4 border-primary/20">
                <Quote className="absolute -left-[17px] -top-1 w-6 h-6 text-primary/40" />
                <p className="italic text-lg">{leader.quote}</p>
                {leader.quoteAuthor && (
                  <p className="mt-2 text-sm text-muted-foreground">- {leader.quoteAuthor}</p>
                )}
              </div>
            )}
            {leader.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}

export default function Leadership() {
  return (
    <section className="w-full py-12 lg:py-16">
      <div className="container px-4 md:px-6 mx-auto max-w-5xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Our Leaders Message
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries guiding Siva Sivani Institute of Management (SSIM) towards excellence and empowerment.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-12">
          {leaders.map((leader) => (
            <LeaderCard key={leader.role} leader={leader} />
          ))}
        </div>
      </div>
    </section>
  );
}
