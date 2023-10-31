export interface Link {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
  type: "social" | "project" | "url";
}

export interface LinkQuery {
  data: {
    urls: Link[];
  };
}
