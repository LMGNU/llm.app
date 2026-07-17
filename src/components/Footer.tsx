import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-sm text-muted-foreground border-l border-border pl-3 ml-1">
            by LMGNU
          </span>
        </div>
        
        <div className="flex items-center gap-6 text-sm">
          <a 
            href="https://github.com/LMGNU/llm.cpp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span className="text-muted-foreground">
            GPL 3.0 License
          </span>
        </div>
      </div>
    </footer>
  );
}
