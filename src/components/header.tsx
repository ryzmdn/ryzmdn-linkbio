import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Link, Moon, Share } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header
      id="appHeader"
      className="absolute top-5 left-1/2 -translate-x-1/2 w-full h-auto max-w-xl"
    >
      <Item variant="outline" size="sm" className="py-2 backdrop-blur-sm rounded-full">
        <ItemMedia>
          <Link className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>LinkBio</ItemTitle>
        </ItemContent>
        <ItemActions>
          <Button variant="ghost" size="icon-sm">
            <Moon />
          </Button>
          <Button variant="ghost" size="icon-sm">
            <Share />
          </Button>
        </ItemActions>
      </Item>
    </header>
  );
}
