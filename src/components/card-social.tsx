import { EllipsisVertical } from "lucide-react";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { Svg } from "@/components/svg";
import { ShareDialog } from "@/components/share-dialog";
import { Button } from "@/components/ui/button";
import { Magnet } from "@/components/ui/magnet";
import { cn } from "@/lib/utils";
import type { Social } from "@/types/Social";

export function SocialCard({ social }: Readonly<{ social: Social }>) {
  return (
    <Magnet padding={10} magnetStrength={15}>
      <Item variant="outline" className="rounded-xl">
        <a
          href={`https://${social.host}/${social.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-3.5 flex-1"
        >
          <ItemMedia className={cn("size-11 p-3 rounded-full", social.mediaColors?.background ?? "bg-primary-foreground")}>
            <Svg draw={[social.svg]} className={cn("size-full", social.mediaColors?.icon ?? "text-primary")} />
          </ItemMedia>

          <ItemContent>
            <ItemTitle>{social.name}</ItemTitle>
            <ItemDescription className="line-clamp-1">
              {social.host} /{" "}
              <span className="text-secondary-foreground">
                {social.username}
              </span>
            </ItemDescription>
          </ItemContent>
        </a>

        <ItemActions>
          <ShareDialog url={`https://${social.host}/${social.username}`}>
            <Button
              variant="outline"
              size="icon-xs"
              className="rounded-full"
            >
              <EllipsisVertical />
            </Button>
          </ShareDialog>
        </ItemActions>
      </Item>
    </Magnet>
  );
}
