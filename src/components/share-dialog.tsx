import { useState, useMemo, useCallback, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { socials } from "@/constants/socials";
import { Check, ChevronRight, Copy, Link as LinkIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Svg } from "./svg";
import { cn } from "@/lib/utils";

interface ShareDialogProps {
  children?: ReactNode;
  url?: string;
  title?: string;
  description?: string;
}

export function ShareDialog({
  children,
  url,
  title = "Share link",
  description = "Anyone who has this link will be able to view this.",
}: ShareDialogProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const currentUrl = useMemo(() => {
    if (typeof url === "string") return url;
    if (typeof window !== "undefined") return window.location.href;
    return "";
  }, [url]);

  const handleCopy = useCallback(async () => {
    if (!currentUrl) return;

    await navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [currentUrl]);

  const handleShare = useCallback(
    (share?: (url: string) => string) => {
      if (!share || !currentUrl) return;

      const shareUrl = share(String(currentUrl));
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    },
    [currentUrl]
  );

  const text: string = currentUrl;
  const maxText: number = 25;

  const truncatedText: string =
    text.length > maxText
      ? text.slice(0, maxText) + "..."
      : text;

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ?? <span>Share</span>}
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <ItemGroup className="flex flex-col">
          {socials
            .filter((s) => s.share)
            .map((social) => (
              <Item
                key={social.name}
                size="sm"
                className="px-2 hover:bg-secondary cursor-pointer"
                onClick={() => handleShare(social.share)}
              >
                <ItemMedia
                  className={cn(
                    "size-8 p-2 rounded-full",
                    social.mediaColors?.background
                  )}
                >
                  <Svg
                    draw={[social.svg]}
                    className={cn(
                      "size-full",
                      social.mediaColors?.icon ??
                        "text-secondary-foreground"
                    )}
                  />
                </ItemMedia>

                <ItemContent>
                  <ItemTitle>
                    Share on {social.name}
                  </ItemTitle>
                </ItemContent>

                <ItemActions>
                  <ChevronRight className="size-4" />
                </ItemActions>
              </Item>
            ))}

          <Item variant="outline" size="sm" className="mt-4 p-2.5">
            <ItemMedia className="hidden sm:block">
              <LinkIcon className="size-4" />
            </ItemMedia>

            <ItemContent>
              <ItemTitle className="line-clamp-1 max-w-60">
                {truncatedText}
              </ItemTitle>
            </ItemContent>

            <ItemActions>
              <Button size="sm" variant="secondary" onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check className="hidden size-4 sm:block" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="hidden size-4 sm:block" />
                    Copy
                  </>
                )}
              </Button>
            </ItemActions>
          </Item>
        </ItemGroup>
      </DialogContent>
    </Dialog>
  );
}
