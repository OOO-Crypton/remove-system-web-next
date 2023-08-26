import { DetailedHTMLProps, SelectHTMLAttributes } from "react";

export interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  options: SelectInterface[];
  selected: {
    label: string;
    disabled?: boolean;
  };
}

export interface SelectInterface {
  value: number | string;
  label: string;
}
