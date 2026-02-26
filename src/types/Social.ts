export interface Social {
  name: string;
  host: string;
  username: string;
  svg: string | string[];
  className?: string;
  mediaColors?: { icon?: string; background?: string };
  share?: (url: string) => string;
}
