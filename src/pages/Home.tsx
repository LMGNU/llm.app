import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { QuickStart } from "@/components/QuickStart";
import { Hardware } from "@/components/Hardware";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <QuickStart />
        <Hardware />
      </main>
      <Footer />
    </div>
  );
}
