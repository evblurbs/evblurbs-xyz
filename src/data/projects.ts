// Shared source of truth for projects, used by both the Projects page and
// the homepage preview. `slug` maps to the /projects/<slug> route.
export type Project = {
  title: string;
  description: string;
  slug: string;
};

export const projects: Project[] = [
  {
    title: "10YC",
    description:
      "A mobile native app that allows users to discover and index meals in 10YC under $10.",
    slug: "10yc",
  },
  {
    title: "Saturday Hoops NYC",
    description:
      "A web app for my pick-up basketball community in NYC — players sign up for games, pay, get balanced teams, and view their highlights.",
    slug: "saturday-hoops",
  },
  {
    title: "Portfolio",
    description:
      "This website which shares what I've read, projects that I've worked on, and my resume.",
    slug: "portfolio",
  },
];
