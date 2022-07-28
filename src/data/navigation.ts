export interface INavigationItem {
  id: NavId;
  name: string;
}

export enum NavId {
  HOME = 'link-home',
  ABOUT = 'link-about',
  CASES = 'link-cases',
  BLOG = 'link-blog',
  CONTACT = 'link-Contact',
}

export const navItems: INavigationItem[] = [
  {
    id: NavId.HOME,
    name: 'Home',
  },
  {
    id: NavId.ABOUT,
    name: 'About',
  },
  {
    id: NavId.CASES,
    name: 'Cases',
  },
  {
    id: NavId.BLOG,
    name: 'Blog',
  },
  {
    id: NavId.CONTACT,
    name: 'Contact',
  },
];
