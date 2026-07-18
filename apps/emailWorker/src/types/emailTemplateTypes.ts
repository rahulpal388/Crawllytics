import { ComponentType } from "react";

export type EmailTemplate<T> = {
  from: string;
  subject: string;
  react: ComponentType<T>;
  text: (props: T) => string;
};
