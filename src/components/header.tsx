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

export function Header() {
  const [time, setTime] = useState<string>("");

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

  return (
    <header
      id="appHeader"
      className="absolute top-5 left-1/2 -translate-x-1/2 w-full h-auto max-w-xl px-4 sm:px-0"
    >
      <Item
        variant="outline"
        size="sm"
        className="py-2 backdrop-blur-sm rounded-full"
      >
        <ItemMedia className="text-primary">
          <Link className="size-4" />
          <span className="text-pretty">LinkBio</span>
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="text-[0.5rem] font-normal text-muted-foreground mx-auto sm:text-xs">
            <time dateTime={time} className="font-mono">{time}</time>
          </ItemTitle>
        </ItemContent>
        <ItemActions>
          <ToggleTheme />
          <ShareDialog>
            <Button variant="ghost" size="icon-sm">
              <Share />
            </Button>
          </ShareDialog>
        </ItemActions>
      </Item>
    </header>
  );
}
