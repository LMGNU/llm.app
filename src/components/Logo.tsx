import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  large?: boolean;
}

export function Logo({ className, large = false }: LogoProps) {
  return (
    <div
      className={cn(
        "font-mono font-bold tracking-tight select-none flex items-center",
        large ? "text-5xl sm:text-7xl md:text-8xl" : "text-xl",
        className
      )}
    >
      <span className="text-muted-foreground">//</span>
      <span className="text-white">++</span>
      <span className={cn("text-white", large ? "ml-4 sm:ml-6" : "ml-2")}>llm</span>
      <span className="text-primary">.cpp</span>
    </div>
  );
}
