import { clsx } from "clsx";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx(className, "px-4 lg:px-6")}>
      <div className="mx-auto max-w-2xl md:max-w-5xl lg:max-w-[1320px]">
        {children}
      </div>
    </div>
  );
}
