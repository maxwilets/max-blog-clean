export type ResumeProps = {
  id: string;
  title: string;
  company: string;
  startYear: string;
  endYear: string;
  date: string;
  role1: string;
  role2: string;
  role3?: string;
  role4?: string;
  role5?: string;
};

type Tag = {
  name: string;
};

export type PostProps = {
  __typename: string;
  id: string;
  slug: string;
  title: string;
  date: string;
  tags: Tag[];
  summary: string;
};

export type SkillProp = {
  id: string;
  level: string;
  skillName: string;
};

type Photo = {
  id: string;
  altText: string;
  image: { publicUrlTransformed: string };
};

export type SchoolProp = {
  id: string;
  name: string;
  title: string;
  photo: Photo;
  location: string;
  time: string;
};
