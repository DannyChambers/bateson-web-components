// ------------------------------------------------------------- //
//                                                               //
//  Manifest                                                     //
//                                                               //
// ------------------------------------------------------------- //

// ------------------------------------------------------------- //
//  Styles                                                       //
// ------------------------------------------------------------- //

import "@/foundation/color/color.css";
import "@/foundation/reset/reset.css";
import "@/foundation/dimension/dimension.css";
import "@/foundation/duration/duration.css";
import "@/foundation/typography/typography.css";

// ------------------------------------------------------------- //
//  Foundation                                                   //
// ------------------------------------------------------------- //

export { color } from "@/foundation/color/color";
export { breakpoint, size, radius } from "@/foundation/dimension/dimension";

// ------------------------------------------------------------- //
//  Components                                                   //
// ------------------------------------------------------------- //

export { useTheme, ThemeProvider } from "./components/ThemeProvider";
export type { ThemeProviderProps } from "./components/ThemeProvider";

export { SchemeProvider } from "./components/SchemeProvider";
export type { SchemeProviderProps } from "./components/SchemeProvider";

export { Button, ButtonGroup } from "@/components/Button";
export type { ButtonProps } from "@/components/Button";

export { Image } from "@/components/Image";
export type { ImageProps } from "@/components/Image";

export { Video } from "@/components/Video";
export type { VideoProps } from "@/components/Video";

export { Link, LinkGroup } from "@/components/Link";
export type { LinkProps } from "@/components/Link";

export { List } from "@/components/List";
export type { ListProps } from "@/components/List";

export { PageSection } from "@/components/PageSection";
export type { PageSectionProps } from "@/components/PageSection";

export { Card } from "@/components/Card";
export type { CardProps } from "@/components/Card";

export { Layout } from "@/components/Layout";
export type { LayoutProps } from "@/components/Layout";

export { Text } from "@/components/Text";
export type { TextProps } from "@/components/Text";

export { Stage } from "@/components/Stage";
export type { StageProps } from "@/components/Stage";

export { Modal } from "@/components/Modal";
export type { ModalProps } from "@/components/Modal";

export { TextInput } from "@/components/TextInput";
export type { TextInputProps } from "@/components/TextInput";

export { Flyout } from "@/components/Flyout";
export type { FlyoutProps } from "@/components/Flyout";

export {
  PrimaryNavigation,
  PrimaryNavigationItem,
  PrimarySubNavigation,
  PrimarySubNavigationItem,
} from "@/components/PrimaryNavigation";
export type {
  PrimaryNavigationProps,
  PrimaryNavigationItemProps,
  PrimarySubNavigationProps,
  PrimarySubNavigationItemProps,
} from "@/components/PrimaryNavigation";

export { PrimaryUtility } from "@/components/PrimaryUtility";
export type { PrimaryUtilityProps } from "@/components/PrimaryUtility";

export { Tabs } from "@/components/Tabs";
export type { TabsProps } from "@/components/Tabs";

export { Checkbox } from "@/components/Checkbox";
export type { CheckboxProps } from "@/components/Checkbox";

export { Table } from "@/components/Table";
export type { TableProps } from "@/components/Table";

export { Avatar } from "@/components/Avatar";
export type { AvatarProps } from "@/components/Avatar";

export { PageHeader } from "@/components/PageHeader";
export type { PageHeaderProps } from "@/components/PageHeader";

export { PageFooter } from "@/components/PageFooter";
export type { PageFooterProps } from "@/components/PageFooter";

export { SiteFooter } from "@/components/SiteFooter";
export type { SiteFooterProps } from "@/components/SiteFooter";

export { Logo } from "@/components/Logo";
export type { LogoProps } from "@/components/Logo";

export { PairedList } from "@/components/PairedList";
export type { PairedListProps } from "@/components/PairedList";

export { Icon } from "@/components/Icon";
export type { IconProps } from "@/components/Icon";
