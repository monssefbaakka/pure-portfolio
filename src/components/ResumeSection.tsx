import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experience = [
  { period: "2021 - Present", company: "Themeforest Market", role: "Web Designer" },
  { period: "2021 - 2023", company: "Envato Theme Developer", role: "Web Development" },
  { period: "2021 - 2022", company: "Marketing Expert GRP", role: "Web Developer & Business Partner" },
];

const education = [
  { period: "2013 - 2015", institution: "Bachelor Degree of Information Technology", place: "State University" },
  { period: "2021 - 2024", institution: "Higher Secondary Education", place: "Premium College" },
  { period: "2021 - 2024", institution: "Webster College", place: "UI/UX Design" },
];

const ResumeSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Experience</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Professional Resume
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mt-16">
          <div className="space-y-0">
            {experience.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="border-l-2 border-border pl-8 pb-10 relative"
              >
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-foreground" />
                <span className="text-xs font-body text-muted-foreground tracking-wider">{item.period}</span>
                <h4 className="font-heading text-lg font-semibold text-foreground mt-2">{item.company}</h4>
                <p className="font-body text-sm text-muted-foreground mt-1">{item.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-0">
            {education.map((item, i) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="border-l-2 border-border pl-8 pb-10 relative"
              >
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-foreground" />
                <span className="text-xs font-body text-muted-foreground tracking-wider">{item.period}</span>
                <h4 className="font-heading text-lg font-semibold text-foreground mt-2">{item.institution}</h4>
                <p className="font-body text-sm text-muted-foreground mt-1">{item.place}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
