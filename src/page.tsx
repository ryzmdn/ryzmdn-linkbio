import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { ItemGroup } from "@/components/ui/item";
import Layout from "./layout";
import { socials } from "./constants/socials";
import { SocialCard } from "./components/card-social";
import { BadgeVerified } from "./components/badge-verified";
import { AnimateBlur } from "./components/ui/animate-blur";
import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import Picture from "@/assets/images/picture.webp";

export default function Home() {
  const excluded: string[] = ["Email", "Whatsapp"];

  return (
    <Layout>
      <section className="w-full bg-transparent pt-28 pb-16">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="relative block group size-32 mx-auto p-1! rounded-full"
            >
              <div className="shrink-0 size-full overflow-hidden rounded-full transition-all duration-300 group-hover:brightness-50">
                <img
                  src={Picture}
                  alt="Profile Picture"
                  loading="lazy"
                  className="size-full group-hover:scale-150 bg-background shadow-xl ring-1 ring-foreground/10 transition-transform duration-500"
                />
              </div>

              <div className="text-primary-foreground absolute inset-0 z-10 flex size-full translate-x-1/2 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <div className="absolute flex justify-center items-center size-12 p-2.5 bg-secondary/25 backdrop-blur-sm rounded-full">
                  <ArrowRight className="size-full text-stone-200" />
                </div>
              </div>
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>About Me</DialogTitle>
              <DialogDescription>
                Hi, I'm Rizky Ramadhan 👋 A passionate frontend developer
                focused on clean architecture, performance optimization, and
                continuous learning.
              </DialogDescription>
            </DialogHeader>

            <div className="pt-4 text-sm text-muted-foreground">
              Feel free to connect with me through my social platforms.
            </div>
          </DialogContent>
        </Dialog>

        <div className="w-full text-center">
          <AnimateBlur
            delay={0.25}
            direction="up"
            inView
            className="w-max mx-auto"
          >
            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight text-balance text-primary mt-5 mb-2 sm:text-3xl">
              Rizky Ramadhan <BadgeVerified />
            </h1>
          </AnimateBlur>

          <div className="flex justify-center items-center gap-x-3 text-secondary-foreground">
            <AnimateBlur delay={0.25 * 1} direction="left" inView>
              <BriefcaseBusiness className="size-4" />
            </AnimateBlur>
            <AnimateBlur delay={0.25 * 1.5} direction="right" inView>
              <div className="w-px h-4 bg-primary/20 rounded-full" />
            </AnimateBlur>
            <AnimateBlur delay={0.25 * 2} direction="right" inView>
              <p>Software Engineer</p>
            </AnimateBlur>
          </div>

          <p className="text-base/7 text-accent-foreground mt-4">
            I have a knack for software engineering with an interest in building
            scalable and efficient web and mobile systems, designed using modern
            architecture approaches and industry best practices.
          </p>
        </div>
      </section>

      <section className="w-full bg-transparent">
        <ItemGroup className="flex flex-col gap-y-4">
          {socials
            .filter((s) => !excluded.includes(s.name))
            .map((social, index) => (
              <AnimateBlur
                key={social.name}
                direction="up"
                delay={0.15 + index * 0.05}
                inView
              >
                <SocialCard social={social} />
              </AnimateBlur>
            ))}
        </ItemGroup>
      </section>
    </Layout>
  );
}
