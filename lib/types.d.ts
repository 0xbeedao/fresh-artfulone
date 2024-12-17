export interface ArtPiece {
  title: string;
  description?: string;
  media: string;
  url: string;
  hash?: string;
  mime: string;
  width: number;
  height: number;
  slug: string;
  galleries?: string[];
}

export interface SimpleLink {
  href: string;
  text: string;
}

export interface Social {
  href: string;
  icon: string;
  text: string;
}
