import {
  ArrowUpRight,
  BriefcaseBusiness,
  CircleChevronLeft,
  CircleChevronRight,
  Dribbble,
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  MonitorSmartphone,
  Palette,
  Phone,
  Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import profileImg from "@/assets/monssef-profile.jpg";
import work1 from "@/assets/work1.jpg";
import work2 from "@/assets/work2.jpg";
import work3 from "@/assets/work3.jpg";
import work4 from "@/assets/work4.jpg";

const services = [
  {
    icon: Globe,
    title: "Software Development",
    description:
      "Strong foundations in algorithms, software architecture, and problem solving with Java, Python, C/C++, and C#.",
  },
  {
    icon: Palette,
    title: "Web Frameworks",
    description:
      "Hands-on project work with Django, Laravel, JavaScript, PHP, HTML, CSS, and WordPress.",
  },
  {
    icon: MonitorSmartphone,
    title: "Databases & DevOps",
    description:
      "Experience with Oracle, MongoDB, MySQL, Firebase, Git, GitHub, Linux, Shell, and Docker.",
  },
];

const experience = [
  {
    period: "06/2025 - 09/2025",
    title: "MaxTeam Visual",
    subtitle: "Built a visual project management web application for audiovisual production tracking in Casablanca.",
  },
];

const education = [
  {
    period: "2020 - 2022",
    title: "Computer Science Studies in China",
    subtitle: "Completed 2 years of computer science studies before continuing my engineering path.",
  },
  {
    period: "10/2022 - Present",
    title: "Engineering in Computer Science and Networks",
    subtitle: "EMSI, Rabat",
  },
  {
    period: "04/2023 - 07/2024",
    title: "ALX Software Engineering Program",
    subtitle: "ALX, Casablanca",
  },
];

const projects = [
  { image: work1, category: "Java / OpenGL", title: "MushroomEngine 2D Game Engine" },
  { image: work2, category: "C# / .NET / SQL", title: "DentaFlow Dental Clinic Platform" },
  { image: work3, category: "Android / MongoDB / Firebase", title: "University Management System" },
  { image: work4, category: "Python / Django / Laravel", title: "Stock Management and Web Platform" },
];

const certifications = [
  {
    image: work1,
    name: "Application Back-end",
    role: "Certification",
    quote:
      "Back-end certification listed on my CV, supporting my practical work on server-side and application architecture.",
  },
  {
    image: work2,
    name: "The Full Stack",
    role: "Certification",
    quote:
      "Full-stack certification backed by project experience across frontend, backend, databases, and deployment workflows.",
  },
  {
    image: work3,
    name: "ALX Software Engineering Program",
    role: "Certificate",
    quote:
      "Intensive ALX training in full-stack engineering and DevOps, reinforced through real project delivery and autonomous learning.",
  },
];

const stackGroups = [
  {
    price: "01",
    title: "Programming Languages",
    description: "Core languages highlighted in my CV.",
    features: ["Java", "Python", "C/C++", "C#", "XML"],
  },
  {
    price: "02",
    title: "Frameworks & Web",
    description: "Technologies used across academic and personal projects.",
    features: ["Laravel", "Django", "JavaScript", "PHP", "WordPress"],
  },
  {
    price: "03",
    title: "Data & Tooling",
    description: "Data stores and development environments I work with.",
    features: ["Oracle", "MongoDB", "MySQL", "Firebase", "Docker"],
  },
];

const languages = [
  {
    image: work4,
    date: "Languages",
    title: "French and English",
    description: "Fluent communication in both French and English.",
  },
  {
    image: work3,
    date: "Languages",
    title: "Spanish",
    description: "Intermediate Spanish for conversation and comprehension.",
  },
  {
    image: work2,
    date: "Languages",
    title: "Arabic",
    description: "Native Arabic speaker.",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Dribbble, href: "#", label: "Dribbble" },
];

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const sectionTitleClass = "mt-3 text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-4xl";
const cvHref = "/Baakka-Monssef-CV.pdf";
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const portfolioCard = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const Index = () => {
  return (
    <div className="bg-white text-slate-950">
      <motion.header
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
          <a href="#home" className="text-[13px] font-semibold uppercase tracking-[0.32em] text-slate-950">
            VALEN
          </a>

          <nav className="hidden items-center gap-6 text-[11px] font-medium uppercase tracking-[0.26em] text-slate-600 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-slate-950">
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      <main>
        <section id="home" className="px-6 pb-16 pt-8 md:px-8 md:pb-20">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-sm bg-[#e8edf3] px-6 py-12 text-center md:px-10 md:py-16"
            >
              <motion.h1
                initial={{ opacity: 0, y: 28, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl font-semibold uppercase tracking-[-0.06em] text-slate-950 md:text-6xl"
              >
                <motion.span
                  initial={{ opacity: 0, letterSpacing: "0.2em" }}
                  animate={{ opacity: 1, letterSpacing: "-0.06em" }}
                  transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  I&apos;M <span className="stroke-text">BAAKKA</span> MONSSEF
                </motion.span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto mt-5 inline-flex flex-wrap items-center justify-center gap-3 bg-white px-5 py-2 text-[11px] uppercase tracking-[0.24em] text-slate-500 shadow-[0_1px_0_rgba(15,23,42,0.06)]"
              >
                <span>EMSI Student</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>Software Engineering</span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>Problem Solver</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-6 py-10 md:px-8 md:py-14">
          <motion.div
            className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[280px_1fr] md:gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp}>
              <div className="overflow-hidden rounded-sm bg-[#d8c4b4] shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
                <motion.img
                  src={profileImg}
                  alt="Baakka Monssef"
                  className="h-[360px] w-full object-cover object-[center_18%] md:h-[420px]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div className="px-3 py-4 text-center">
                <h2 className="text-lg font-semibold tracking-[-0.03em]">Baakka Monssef</h2>
                <div className="mt-3 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.26em] text-slate-500">
                  <span>Open to opportunities</span>
                  <span className="h-2 w-2 rounded-full bg-lime-400" />
                </div>
                <div className="mt-4 flex items-center justify-center gap-4 text-slate-500">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="transition hover:text-slate-950"
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div className="grid gap-8 md:grid-cols-[1.4fr_0.9fr]" variants={fadeUp}>
              <div className="space-y-7">
                <h2 className="max-w-xl text-3xl font-medium leading-[1.35] tracking-[-0.05em] text-slate-950 md:text-[46px]">
                  Hello, I&apos;m Monssef Baakka, an EMSI student focused on software development, backend systems, and problem solving.
                </h2>
                <motion.a
                  href={cvHref}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex items-center justify-center bg-black px-6 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition hover:bg-slate-800"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download CV
                </motion.a>
              </div>

              <motion.div className="grid gap-5 pt-2 text-sm text-slate-500 sm:grid-cols-2 md:grid-cols-1" variants={staggerContainer}>
                <div className="border-t border-slate-200 pt-4">
                  <div className="text-[10px] uppercase tracking-[0.24em]">Address</div>
                  <div className="mt-2 text-slate-950">Rabat, Morocco</div>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="text-[10px] uppercase tracking-[0.24em]">Email</div>
                  <div className="mt-2 text-slate-950">baakkamonssef@gmail.com</div>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="text-[10px] uppercase tracking-[0.24em]">Phone</div>
                  <div className="mt-2 text-slate-950">+212 671 940 316</div>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="text-[10px] uppercase tracking-[0.24em]">Status</div>
                  <div className="mt-2 text-slate-950">Engineering Student at EMSI</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section id="services" className="px-6 py-16 md:px-8 md:py-20">
          <motion.div
            className="mx-auto max-w-6xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="text-center" variants={fadeUp}>
              <p className="eyebrow">Skills</p>
              <h2 className={sectionTitleClass}>Technical Skills</h2>
            </motion.div>

            <motion.div className="mt-12 grid gap-5 md:grid-cols-3" variants={staggerContainer}>
              {services.map(({ icon: Icon, title, description }) => (
                <motion.article
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="rounded-sm bg-[#e8edf3] p-7 transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                >
                  <div className="mb-8 flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-600">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{title}</h3>
                  <p className="mt-3 max-w-[18rem] text-sm leading-7 text-slate-500">{description}</p>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section id="resume" className="bg-[#e8edf3] px-6 py-16 md:px-8 md:py-20">
          <motion.div
            className="mx-auto max-w-6xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="text-center" variants={fadeUp}>
              <p className="eyebrow">Resume</p>
              <h2 className={sectionTitleClass}>Professional Resume</h2>
            </motion.div>

            <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-12">
              <motion.div variants={fadeUp} className="rounded-sm bg-white/35 p-6">
                <p className="eyebrow text-left">Experience</p>
                <div className="mt-6 space-y-6">
                  {experience.map((item) => (
                    <motion.div key={item.title} variants={fadeUp} className="flex gap-4 border-b border-slate-300/70 pb-6">
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-sm border border-slate-300 bg-white text-slate-500">
                        <BriefcaseBusiness className="h-3.5 w-3.5" strokeWidth={1.7} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                          {item.period}
                        </div>
                        <h3 className="mt-2 text-base font-semibold tracking-[-0.03em] text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-sm bg-white/35 p-6">
                <p className="eyebrow text-left">Education</p>
                <div className="mt-6 space-y-6">
                  {education.map((item) => (
                    <motion.div key={item.title} variants={fadeUp} className="flex gap-4 border-b border-slate-300/70 pb-6">
                      <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-sm border border-slate-300 bg-white text-slate-500">
                        <BriefcaseBusiness className="h-3.5 w-3.5" strokeWidth={1.7} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">
                          {item.period}
                        </div>
                        <h3 className="mt-2 text-base font-semibold tracking-[-0.03em] text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="portfolio" className="px-6 py-16 md:px-8 md:py-20">
          <motion.div
            className="mx-auto max-w-6xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="text-center" variants={fadeUp}>
              <p className="eyebrow">Projects</p>
              <h2 className={sectionTitleClass}>Personal Projects</h2>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-5 text-[11px] uppercase tracking-[0.24em] text-slate-500">
              <span className="text-slate-950">All</span>
              <span>Java</span>
              <span>Web</span>
              <span>Android</span>
              <span>Backend</span>
            </motion.div>

            <motion.div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-2" variants={staggerContainer}>
              {projects.map((project) => (
                <motion.article
                  key={`${project.title}-${project.category}`}
                  variants={portfolioCard}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <motion.div
                    className="overflow-hidden rounded-sm bg-[#e8edf3] shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-shadow duration-300 group-hover:shadow-[0_24px_50px_rgba(15,23,42,0.14)]"
                    whileHover={{ rotate: -0.4 }}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.div>
                  <motion.div className="mt-4" initial={false} whileHover="hover">
                    <motion.div
                      className="text-[10px] uppercase tracking-[0.24em] text-slate-500"
                      variants={{ hover: { x: 4, color: "#0f172a" } }}
                    >
                      {project.category}
                    </motion.div>
                    <div className="mt-2 flex items-start justify-between gap-3">
                      <motion.h3
                        className="text-base font-semibold tracking-[-0.03em] text-slate-950"
                        variants={{ hover: { x: 6 } }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div variants={{ hover: { x: 4, y: -4, scale: 1.08 } }}>
                        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-slate-950" />
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="bg-[#e8edf3] px-6 py-16 md:px-8 md:py-20">
          <motion.div
            className="mx-auto max-w-6xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="text-center" variants={fadeUp}>
              <p className="eyebrow">Certificates</p>
              <h2 className={sectionTitleClass}>Certifications</h2>
            </motion.div>

            <motion.div className="mt-14 grid gap-8 md:grid-cols-3" variants={staggerContainer}>
              {certifications.map((item) => (
                <motion.article key={item.name} variants={fadeUp} className="border-t border-slate-400/70 pt-5">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="h-11 w-11 rounded-full object-cover" />
                    <div>
                      <h3 className="text-sm font-semibold text-slate-950">{item.name}</h3>
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{item.role}</p>
                    </div>
                  </div>
                  <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">{item.quote}</p>
                </motion.article>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-3 text-slate-950">
              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }} className="rounded-full border border-slate-400 p-2 transition hover:bg-white" aria-label="Previous certification">
                <CircleChevronLeft className="h-4 w-4" />
              </motion.button>
              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }} className="rounded-full border border-slate-400 p-2 transition hover:bg-white" aria-label="Next certification">
                <CircleChevronRight className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        <section className="px-6 py-16 md:px-8 md:py-20">
          <motion.div
            className="mx-auto max-w-6xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="text-center" variants={fadeUp}>
              <p className="eyebrow">Stack</p>
              <h2 className={sectionTitleClass}>Technology Stack</h2>
            </motion.div>

            <motion.div className="mt-12 grid gap-5 md:grid-cols-3" variants={staggerContainer}>
              {stackGroups.map((plan) => (
                <motion.article
                  key={plan.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="rounded-sm bg-[#e8edf3] p-7 transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                >
                  <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Category {plan.price}</div>
                  <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-950">{plan.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{plan.description}</p>
                  <div className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-slate-950">
                    {plan.price}
                    <span className="ml-1 text-sm font-normal tracking-normal text-slate-500">Section</span>
                  </div>
                  <ul className="mt-6 space-y-3 text-sm text-slate-600">
                    {plan.features.map((feature) => (
                      <li key={feature}>+ {feature}</li>
                    ))}
                  </ul>
                  <motion.a
                    href={cvHref}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex bg-black px-5 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition hover:bg-slate-800"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View CV
                  </motion.a>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section className="px-6 py-16 md:px-8 md:py-20">
          <motion.div
            className="mx-auto max-w-6xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="text-center" variants={fadeUp}>
              <p className="eyebrow">Languages</p>
              <h2 className={sectionTitleClass}>Languages</h2>
            </motion.div>

            <motion.div className="mt-12 grid gap-5 md:grid-cols-3" variants={staggerContainer}>
              {languages.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="overflow-hidden rounded-sm bg-[#e8edf3] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="h-48 w-full object-cover"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="p-6">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">{item.date}</div>
                    <h3 className="mt-3 text-lg font-semibold leading-7 tracking-[-0.03em] text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">{item.description}</p>
                    <motion.a
                      href={cvHref}
                      download
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex bg-black px-5 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition hover:bg-slate-800"
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Download CV
                    </motion.a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <section id="contact" className="px-6 py-16 md:px-8 md:py-20">
          <motion.div
            className="mx-auto max-w-6xl"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="text-center" variants={fadeUp}>
              <p className="eyebrow">Contact</p>
              <h2 className={sectionTitleClass}>Get in Touch with Me!</h2>
            </motion.div>

            <div className="mt-12 grid gap-6 md:grid-cols-[300px_1fr]">
              <motion.div variants={fadeUp} className="rounded-sm bg-[#e8edf3] p-7">
                <div className="space-y-8 text-sm text-slate-600">
                  <div className="flex gap-4">
                    <MapPin className="mt-1 h-4 w-4 text-slate-950" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Address</div>
                      <div className="mt-2 text-slate-950">Rabat, Morocco</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Phone className="mt-1 h-4 w-4 text-slate-950" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Phone Number</div>
                      <div className="mt-2 text-slate-950">+212 671 940 316</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Mail className="mt-1 h-4 w-4 text-slate-950" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-slate-500">Email</div>
                      <div className="mt-2 text-slate-950">baakkamonssef@gmail.com</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.form variants={fadeUp} className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
                <div className="grid gap-4 md:grid-cols-2">
                  <input className="contact-input" placeholder="Your Name" />
                  <input className="contact-input" placeholder="Your Email" type="email" />
                </div>
                <input className="contact-input" placeholder="Your Subject" />
                <textarea className="contact-input min-h-[160px] resize-none" placeholder="Write your message here" />
                <div>
                  <motion.button
                    type="submit"
                    className="inline-flex bg-black px-6 py-3 text-[11px] font-medium uppercase tracking-[0.24em] text-white transition hover:bg-slate-800"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </motion.div>
        </section>
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500 md:px-8"
      >
        Copyright 2024 Baakka Monssef. All Rights Reserved.
      </motion.footer>
    </div>
  );
};

export default Index;
