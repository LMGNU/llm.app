import { motion } from "framer-motion";
import { Cpu, TerminalSquare } from "lucide-react";
import { SiApple, SiNvidia, SiIntel, SiAmd } from "react-icons/si";

const hardwareItems = [
  { name: "Apple Silicon (Mac M-series)", icon: SiApple, color: "text-white" },
  { name: "NVIDIA RTX (consumer)", icon: SiNvidia, color: "text-[#76B900]" },
  { name: "NVIDIA H100 / A100 / T4", icon: SiNvidia, color: "text-[#76B900]" },
  { name: "Intel iGPU", icon: SiIntel, color: "text-[#0071C5]" },
  { name: "AMD GPU", icon: SiAmd, color: "text-[#ED1C24]" },
  { name: "CPU x86-64", icon: Cpu, color: "text-gray-400" },
  { name: "CPU x86 (32-bit)", icon: Cpu, color: "text-gray-500" },
  { name: "CPU ARM / ARM64", icon: TerminalSquare, color: "text-primary" },
];

export function Hardware() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="hardware" className="py-24 px-4 md:px-6 w-full bg-black/20 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Optimized for your hardware.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Same codebase runs on NVIDIA GPUs, integrated GPUs, Apple Silicon, and any CPU. No recompilation, no config.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {hardwareItems.map((hw, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:bg-white/[0.03] hover:border-border/80 transition-colors"
            >
              <div className="bg-background border border-border p-3 rounded-lg flex-shrink-0 shadow-inner">
                <hw.icon className={`w-6 h-6 ${hw.color}`} />
              </div>
              <span className="font-medium text-white text-sm">{hw.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
