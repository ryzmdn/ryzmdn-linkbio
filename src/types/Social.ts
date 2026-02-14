export interface Social {
  name: string;
  host: string;
  username: string;
  svg: string;
  className?: string;
  mediaColors?: { icon?: string; background?: string };
  shareUrl?: (url: string) => string;
}
