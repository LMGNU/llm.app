import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo(0,0); }} className="flex items-center gap-3">
            <Logo />
            <span className="hidden sm:inline-block text-sm font-semibold text-muted-foreground border-l border-border pl-3 ml-1">
              by LMGNU
            </span>
          </a>
        </div>
        
        <nav className="flex items-center gap-4">
          <a 
            href="#quickstart" 
            className="hidden md:block text-sm font-medium text-muted-foreground hover:text-white transition-colors"
          >
            Quick Start
          </a>
          <a 
            href="#hardware" 
            className="hidden md:block text-sm font-medium text-muted-foreground hover:text-white transition-colors"
          >
            Hardware
          </a>
          
          <a
            href="https://github.com/LMGNU/llm.cpp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors px-4 py-2 rounded-md font-medium text-sm ml-2"
          >
            <Star className="h-4 w-4 fill-current" />
            <span>Star on GitHub</span>
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
