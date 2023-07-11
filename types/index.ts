export interface NavItem {
  title: string;
  id: string;
}

export interface MobileNavProps {
  items: NavItem[];
  toggleShowMobileMenu: () => void;
}
