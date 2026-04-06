import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Contact</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Let's Work Together
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="font-body text-muted-foreground leading-relaxed max-w-md">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "kane@example.com" },
                { icon: Phone, label: "+1 (555) 123-4567" },
                { icon: MapPin, label: "California, United States" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <Icon size={20} className="text-foreground" />
                  </div>
                  <span className="font-body text-sm text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="font-body text-sm bg-secondary rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-foreground transition-all"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="font-body text-sm bg-secondary rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-foreground transition-all"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full font-body text-sm bg-secondary rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-foreground transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full font-body text-sm bg-secondary rounded-xl px-5 py-4 text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-foreground transition-all resize-none"
            />
            <button
              type="submit"
              className="bg-primary text-primary-foreground font-body text-sm font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
