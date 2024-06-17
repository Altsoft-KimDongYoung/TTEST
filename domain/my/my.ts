export interface MyMenuItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  onClick?: (e: React.MouseEvent) => void;
}
