/// <reference types="react" />
export interface MyMenuItem {
    icon: React.ReactNode;
    actionIcon?: React.ReactNode;
    title: string;
    description: string;
    onClick?: (e: React.MouseEvent) => void;
}
export interface MyMenuActionItem extends MyMenuItem {
    link: string;
}
