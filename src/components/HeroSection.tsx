import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-secondary rounded-3xl py-24 md:py-36 px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight"
          >
            I'M <span className="italic font-normal">KANE</span> WALKER
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-8 inline-flex items-center gap-4 border border-border rounded-full px-8 py-3"
          >
            <span className="text-sm font-body text-muted-foreground">UI Designer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
            <span className="text-sm font-body text-muted-foreground">Webflow Developer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40" />
            <span className="text-sm font-body text-muted-foreground">Marketer</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
