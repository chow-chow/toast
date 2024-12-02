export type Variants = "error" | "success" | "info" | "warning" | "default";

export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface ToastProps {
  text: string;
  description?: string;
  toastType: Variants;
  hidden: boolean;
  opening: boolean;
}

export interface ToasterProps {
  messages: ToastProps[];
  duration: number;
  position: Position;
}
