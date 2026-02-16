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
  const text: string = social.username;
  const maxText: number = 7;

  const truncatedText: string =
    text.length > maxText
      ? text.slice(0, maxText) + "..."
      : text;

  return (
    <Magnet padding={10} magnetStrength={15} className="w-full">
      <Item variant="outline" className="rounded-xl">
        <a
          href={`https://${social.host}/${social.username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-3.5 flex-1"
        >
          <ItemMedia
            className={cn(
              "size-11 p-3 rounded-full",
              social.mediaColors?.background ?? "bg-primary-foreground",
            )}
          >
            <Svg
              draw={[social.svg]}
              className={cn(
                "size-full",
                social.mediaColors?.icon ?? "text-primary",
              )}
            />
          </ItemMedia>

          <ItemContent>
            <ItemTitle>{social.name}</ItemTitle>
            <ItemDescription className="text-xs/5 line-clamp-1 sm:text-sm/6">
              {social.host} /{" "}
              <span className="text-secondary-foreground">
                {truncatedText}
              </span>
            </ItemDescription>
          </ItemContent>
        </a>

        <ItemActions className="shrink-0!">
          <ShareDialog url={`https://${social.host}/${social.username}`}>
            <Button variant="outline" size="icon-xs" className="rounded-full">
              <EllipsisVertical />
            </Button>
          </ShareDialog>
        </ItemActions>
      </Item>
    </Magnet>
  );
}
