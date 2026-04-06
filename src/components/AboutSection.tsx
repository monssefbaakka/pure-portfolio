import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import profileImg from "@/assets/profile.jpg";

const skills = ["Logo Design", "Social Marketing", "Branding Identity", "Digital Marketing", "Web Design", "Product Design"];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="bg-secondary rounded-2xl p-6 md:p-8 inline-block">
            <img
              src={profileImg}
              alt="Kane Walker"
              className="rounded-xl w-full max-w-sm object-cover"
              width={640}
              height={800}
            />
            <div className="mt-4 text-center">
              <h3 className="font-heading text-xl font-semibold text-foreground">Kane Walker</h3>
              <span className="inline-block mt-2 text-xs font-body uppercase tracking-widest text-muted-foreground border border-border rounded-full px-4 py-1">
                Available for Work
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Hello, I'm Kane Walker,{" "}
            <span className="border-b-2 border-foreground pb-1">Framer Developer</span>{" "}
            and UX / UI Designer Based in California.
          </h2>

          <a
            href="#contact"
            className="inline-block mt-10 bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Download CV
          </a>

          <div className="mt-12 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm font-body text-muted-foreground border border-border rounded-full px-5 py-2"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
