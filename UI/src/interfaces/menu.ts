export interface MenuItem {
  name: string;
  icon?: JSX.Element;
  child?: ChildItem[];
  url?:string
}

export interface ChildItem {
  name: string;
  url: string;
}

export interface SidebarProps {
  isSmScreen: boolean;
  isOpen: boolean;
}
