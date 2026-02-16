import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Link, Share } from "lucide-react";
import { ToggleTheme } from "@/components/theme-toggle";
import { ShareDialog } from "./share-dialog";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { AnimateBlur } from "./ui/animate-blur";

export function Header() {
  const [time, setTime] = useState<string>("");
  const [smallDevice, setSmallDevice] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatted = now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 399px)");

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setSmallDevice(e.matches);
    };

    handleChange(mediaQuery);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <AnimateBlur
      delay={0.15}
      inView
      className="absolute top-5 left-1/2 -translate-x-1/2 w-full"
    >
      <header
        id="appHeader"
        className="w-full h-auto mx-auto max-w-xl px-4 sm:px-0"
      >
        <Item
          variant="outline"
          size="sm"
          className="py-2 backdrop-blur-sm rounded-full"
        >
          <ItemMedia className="text-primary">
            <Link className="size-4" />
            <span className="hidden text-pretty sm:block">Ryzmdn</span>
            <span className="block text-pretty sm:hidden">Riz</span>
          </ItemMedia>
          <ItemContent>
            <ItemTitle className="text-[0.5rem] font-normal text-muted-foreground mx-auto sm:text-xs">
              <time dateTime={time} className="font-mono">
                {time}
              </time>
            </ItemTitle>
          </ItemContent>
          <ItemActions className="max-sm:gap-1">
            <ToggleTheme size={smallDevice} />
            <ShareDialog>
              <Button variant="ghost" size={smallDevice ? "icon-xs" : "icon-sm"}>
                <Share />
              </Button>
            </ShareDialog>
          </ItemActions>
        </Item>
      </header>
    </AnimateBlur>
  );
}
