import { useState } from "react";
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
import { Check, ChevronRight, Copy, Link, Share } from "lucide-react";
import { Button } from "./ui/button";
import { Svg } from "./svg";

interface ShareDialogProps {
  url?: string;
  title?: string;
  description?: string;
}

export function ShareDialog({
  url = typeof window !== "undefined" ? window.location.href : "",
  title = "Share link",
  description = "Anyone who has this link will be able to view this.",
}: ShareDialogProps = {}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShare = (social: (typeof socials)[0]) => {
    if (social.shareUrl) {
      const shareUrl = social.shareUrl(url);
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon-sm">
          <Share />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <ItemGroup className="flex flex-col">
          {socials
            .filter((social) => social.shareUrl)
            .map((social) => (
              <Item
                key={social.name}
                variant="default"
                size="sm"
                className="px-2 hover:bg-secondary cursor-pointer"
                onClick={() => handleShare(social)}
              >
                <ItemMedia className="size-8 bg-muted p-2 rounded-full">
                  <Svg draw={[social.svg]} className="size-full text-secondary-foreground" />
                </ItemMedia>
                <ItemContent>
                  <ItemTitle>Share on {social.name}</ItemTitle>
                </ItemContent>
                <ItemActions>
                  <ChevronRight className="size-4" />
                </ItemActions>
              </Item>
            ))}

          <Item variant="outline" size="sm" className="mt-4 p-2.5">
            <ItemMedia>
              <Link className="size-4" />
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="truncate">{url}</ItemTitle>
            </ItemContent>
            <ItemActions>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleCopy}
              >
                {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
                {copied ? "Copied" : "Copy"}
              </Button>
            </ItemActions>
          </Item>
        </ItemGroup>
      </DialogContent>
    </Dialog>
  );
}
