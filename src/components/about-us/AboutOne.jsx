import { Card } from "@/components/ui/card";
import { Twitter, Facebook, Instagram } from "lucide-react";

export default function AboutUs() {
  return (
    <Card className="relative overflow-hidden bg-background p-8 lg:p-12">
      {/* Decorative Asterisk */}
      <div className="absolute left-8 top-8 lg:left-12 lg:top-12">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-8 w-8"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M12 2L12 22M2 12L22 12M4.93 4.93L19.07 19.07M19.07 4.93L4.93 19.07"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image Section */}
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="Designer at work"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between">
            <div className="space-y-6">
              <h1 className="font-display text-4xl font-bold tracking-tight lg:text-6xl">
                ABOUT US
              </h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We&apos;re here to build up a special creative studio here in
                downtown Michigan, aiming to help home buyers to make do with
                the new space that they fall in love in. If you&apos;re looking
                forward to a makeover, we&apos;d be happy to help out. Come see
                beyond the walls and floor plans - and be there with them from
                the get-go!
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently, we offer house builder, interior design, and
                architecture services in order to help our customers fit their
                dream homes as well as possible. We&apos;re a small team, but
                we&apos;re passionate to advise everything else, ensuring that
                we won&apos;t take &quot;OK&quot; as an answer.
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-6">
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
