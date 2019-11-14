export type Link = {
  name: any;
  link: String;
};

export type LinkProp = {
  name: String;
  link: String;
  menuLinks?: Array<Link>;
};
