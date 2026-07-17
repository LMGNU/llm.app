import { useState } from "react";
import { motion } from "framer-motion";
import { CopyButton } from "./CopyButton";

export function QuickStart() {
  const [activeTab, setActiveTab] = useState<"python" | "cpp">("python");

  const pythonCode = `# 1. Create a virtual environment
python -m venv .venv
.venv/Scripts/python.exe -m pip install --upgrade pip

# 2. Install dependencies
cd backend
../.venv/Scripts/python.exe -m pip install -r requirements.txt

# 3. Interactive chat (PyTorch inference)
python engine/inference.py --checkpoint "engine/best_model.pt"

# 4. Single generation
python engine/inference.py --checkpoint "engine/best_model.pt" --prompt "Hello" --max-new-tokens 100 --temperature 1.0`;

  const cppCode = `# 1. Build
g++ -std=c++17 -O2 -I. -Iinclude -o llm.exe main.cpp

# 2. Train from scratch
./llm.exe data/input.txt

# 3. Chat mode
./llm.exe data/input.txt --chat

# 4. Generation mode
./llm.exe data/input.txt --generate`;

  return (
    <section id="quickstart" className="py-24 px-4 md:px-6 max-w-5xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Get running in minutes.</h2>
          <p className="text-muted-foreground text-lg">Choose your preferred environment to get started.</p>
        </div>

        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
          <div className="flex border-b border-border">
            <button
              onClick={() => setActiveTab("python")}
              className={`flex-1 py-4 px-6 text-sm font-medium transition-colors relative ${
                activeTab === "python" ? "text-primary bg-white/5" : "text-muted-foreground hover:text-white hover:bg-white/5"
              }`}
            >
              Python / PyTorch
              {activeTab === "python" && (
                <motion.div 
                  layoutId="activeTabIndicator" 
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" 
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab("cpp")}
              className={`flex-1 py-4 px-6 text-sm font-medium transition-colors relative ${
                activeTab === "cpp" ? "text-primary bg-white/5" : "text-muted-foreground hover:text-white hover:bg-white/5"
              }`}
            >
              C++ Native
              {activeTab === "cpp" && (
                <motion.div 
                  layoutId="activeTabIndicator" 
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" 
                />
              )}
            </button>
          </div>

          <div className="p-1 sm:p-4 bg-[#0d0d12]">
            {activeTab === "python" && (
              <CodeBlock code={pythonCode} />
            )}
            {activeTab === "cpp" && (
              <CodeBlock code={cppCode} />
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative group rounded-lg overflow-hidden bg-black/40"
    >
      <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <CopyButton value={code} className="bg-white/10 hover:bg-white/20 text-white" />
      </div>
      <pre className="p-6 overflow-x-auto text-sm font-mono text-gray-300 leading-relaxed">
        <code>
          {code.split('\n').map((line, i) => {
            if (line.startsWith('#')) {
              return <span key={i} className="text-muted-foreground block">{line}</span>;
            }
            // Basic highlighting
            let formattedLine = line
              .replace(/(--[\w-]+)/g, '<span class="text-primary">$1</span>')
              .replace(/(".*?")/g, '<span class="text-green-400">$1</span>')
              .replace(/^(python|g\+\+|\.\/llm\.exe|cd)/g, '<span class="text-blue-400">$1</span>');
              
            return <span key={i} className="block" dangerouslySetInnerHTML={{ __html: formattedLine || ' ' }} />;
          })}
        </code>
      </pre>
    </motion.div>
  );
}
