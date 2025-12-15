import * as React from "react";

import { cn } from "@/lib/utils";

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="checkbox"
        ref={ref}
        className={cn(
          "h-4 w-4 rounded border border-zinc-300 text-black outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:focus-visible:ring-white dark:focus-visible:ring-offset-black",
          className,
        )}
        {...props}
      />
    );
  },
);
Checkbox.displayName = "Checkbox";
