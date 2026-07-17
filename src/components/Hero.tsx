import { motion } from "framer-motion";
import { CopyButton } from "./CopyButton";
import { Logo } from "./Logo";

export function Hero() {
  const cloneCommand = "git clone https://github.com/LMGNU/llm.cpp";

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-4 pt-16">
      {/* Background gradients or effects can go here */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none -z-10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center w-full max-w-4xl mx-auto flex flex-col items-center"
      >
        <Logo large className="mb-8" />
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Fast LLM inference.<br className="hidden sm:block" /> Local, private, yours.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Native C++ and PyTorch inference. No cloud. No API keys. Run frontier models on your own hardware.
        </p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-between bg-card border border-border rounded-lg p-2 pl-4 mb-8 shadow-lg shadow-black/50 backdrop-blur-sm">
            <code className="text-sm md:text-base font-mono text-gray-300 overflow-x-auto whitespace-nowrap scrollbar-hide text-left">
              {cloneCommand}
            </code>
            <CopyButton value={cloneCommand} className="ml-2 flex-shrink-0 bg-muted/50 hover:bg-muted" />
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium">
            <a 
              href="https://github.com/LMGNU/llm.cpp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors flex items-center group"
            >
              View on GitHub 
              <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
            <a 
              href="https://github.com/LMGNU/llm.cpp#readme" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-colors flex items-center group"
            >
              Read the docs 
              <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
