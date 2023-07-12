import { MouseEventHandler } from "react";

export interface NavItem {
  title: string;
  id: string;
}

export interface MobileNavProps {
  items: NavItem[];
  toggleShowMobileMenu: () => void;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  className?: string;
  text: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
