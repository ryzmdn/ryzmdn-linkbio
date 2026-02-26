import type { ReactNode } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "./ui/scroll-area";

export function DialogAbout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="relative block group size-32 mx-auto p-1! rounded-full"
        >
          {children}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>About Me</DialogTitle>
          <DialogDescription>Lemme introduce myself.</DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[55dvh] pr-5">
          <div className="text-sm/6 text-muted-foreground space-y-5">
            <p>
              I&apos;m a Frontend Developer with a huge passion for building
              intuitive Android mobile apps and dynamic, high-performance
              websites. I&apos;ve successfully delivered dozens of innovative
              projects, showing my ability to balance solid technical skills
              with creative, user-centered design.
            </p>
            <p>
              Through hands-on experience in developing user interfaces,
              I&apos;ve applied UI/UX principles effectively to create apps that
              are not just functional but also visually engaging. I&apos;m
              really comfortable working in a collaborative environment, where I
              can make a real impact on projects while continuously learning and
              adapting to the latest technologies and industry trends.
            </p>
            <p>
              I&apos;m always open to networking with other professionals and
              exploring new opportunities that can challenge my skills and
              broaden my perspective. Let&apos;s connect and chat about how we
              can collaborate to push innovation further!
            </p>
            <p>Feel free to connect with me through my social platforms.</p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
