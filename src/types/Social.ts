export interface Social {
  name: string;
  host: string;
  username: string;
  svg: string;
  className?: string;
  shareUrl?: (url: string) => string;
}
