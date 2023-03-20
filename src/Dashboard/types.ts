import { ReactElement } from "react";

export interface SidebarProps {
  children?: JSX.Element | JSX.Element[];
}

export interface ToolbarProps {
  children?: JSX.Element | JSX.Element[];
}

export interface ContentProps {
  children: JSX.Element;
}

export interface LinkListProps {
  title: string;
  items: Array<{ path: string; name: string }>;
}

export interface DashboardProps {
  children:
    | ReactElement<SidebarProps>
    | ReactElement<ToolbarProps>
    | ReactElement<ContentProps>
    | Array<
        | ReactElement<SidebarProps>
        | ReactElement<ToolbarProps>
        | ReactElement<ContentProps>
      >;
}
