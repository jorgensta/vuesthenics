export type Link = {
  name: String;
  link: String;
};

export type LinkProp = {
  name: String;
  link: String;
  menuLinks?: Array<Link>;
};
