import { BriefcaseBusiness } from "lucide-react";
import { ItemGroup } from "@/components/ui/item";
import Layout from "./layout";
import { socials } from "./constants/socials";
import { SocialCard } from "./components/card-social";
import { BadgeVerified } from "./components/badge-verified";
import { AnimateBlur } from "./components/ui/animate-blur";

export default function Home() {
  const excluded: string[] = ["Email", "Whatsapp"];

  return (
    <Layout>
      <section className="w-full bg-transparent pt-28 pb-16">
        <div className="relative size-32 mx-auto rounded-full bg-foreground/5 p-2 ring-1 ring-foreground/10 ring-inset">
          <img
            src="https://avatars.githubusercontent.com/u/134961138?v=4"
            alt="Profile Picture"
            className="size-full bg-background shadow-xl ring-1 ring-foreground/10 rounded-full"
          />

          <BadgeVerified />
        </div>

        <div className="w-full text-center">
          <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-balance text-primary mt-5 mb-2">
            Rizky Ramadhan
          </h1>

          <div className="flex justify-center items-center gap-x-3 text-muted-foreground">
            <BriefcaseBusiness className="size-4" />
            <div className="w-px h-4 bg-primary/20 rounded-full" />
            <p>Software Engineer</p>
          </div>
        </div>
      </section>

      <section className="w-full bg-transparent">
        <ItemGroup className="flex flex-col gap-y-4">
          {socials.filter((s) => !excluded.includes(s.name)).map((social, index) => (
            <AnimateBlur key={social.name} direction="up" delay={0.15 + index * 0.05} inView>
              <SocialCard social={social} />
            </AnimateBlur>
          ))}
        </ItemGroup>
      </section>
    </Layout>
  );
}
