'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaMedium, FaDownload, FaEnvelope, FaMapMarkerAlt, FaGraduationCap, FaCertificate, FaBookOpen, FaArrowRight, FaTrophy, FaMicrophoneAlt, FaQuoteLeft, FaBrain } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';
import cvData from '../data/cv_info.json';
import Navbar from '../components/Navbar';
import Reveal from '../components/Reveal';

const { personalInfo } = cvData;

const socialLinks = [
  { href: personalInfo.social.linkedin, label: 'LinkedIn', icon: FaLinkedin },
  { href: personalInfo.social.github, label: 'GitHub', icon: FaGithub },
  { href: personalInfo.social.medium, label: 'Medium', icon: FaMedium },
  { href: personalInfo.social.fiverr, label: 'Fiverr', icon: SiFiverr },
  { href: personalInfo.social.twitter, label: 'Twitter', icon: FaTwitter },
];

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-14">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-heading">{title}</h2>
    </Reveal>
  );
}

export default function Home() {
  const titles = personalInfo.title.split('|').map(t => t.trim());
  const typeSequence = titles.flatMap(t => [t, 2000]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen selection:bg-sky-100 selection:text-sky-900">

        {/* Hero Section */}
        <section id="hero" className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-sky-200/50 dark:bg-sky-500/10 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          </div>

          <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16 max-w-5xl mx-auto">
            <Reveal>
              <div className="mb-8 relative w-40 h-40 md:w-52 md:h-52 mx-auto">
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 opacity-70 blur-sm" />
                <Image
                  src="/images/web/headshot.jpg"
                  alt={personalInfo.name}
                  fill
                  sizes="(min-width: 768px) 208px, 160px"
                  className="rounded-full object-cover shadow-2xl border-4 border-white dark:border-slate-900"
                  priority
                />
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-200 dark:border-sky-900 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-xs font-semibold uppercase tracking-wide">
                <FaMapMarkerAlt aria-hidden /> {personalInfo.location}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black mb-6 tracking-tight text-slate-900 dark:text-white leading-[1.05]">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-500">AI Solutions</span>{' '}
                <br className="hidden md:block" />for the Enterprise.
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 mb-2">
                Hi, I&apos;m <span className="font-semibold text-slate-800 dark:text-slate-200">{personalInfo.name}</span>
              </p>
              <div className="text-lg md:text-2xl mb-10 max-w-2xl min-h-[2.5em] md:min-h-[1.5em]">
                <TypeAnimation
                  sequence={typeSequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-medium text-slate-700 dark:text-slate-300"
                />
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#work" className="px-8 py-3.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  View Projects
                </a>
                <a href="#contact" className="px-8 py-3.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
                  Get in Touch
                </a>
              </div>
              <div className="flex justify-center gap-6 mt-10 text-2xl text-slate-400">
                {socialLinks.map(({ href, label, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                    <Icon />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="About" title="Making AI practical, trustworthy and transformational" />
            <div className="grid lg:grid-cols-5 gap-12">
              <Reveal className="lg:col-span-3">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                  {cvData.summary}
                </p>
                {cvData.about.map((para) => (
                  <p key={para} className="text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{para}</p>
                ))}
                <div className="mb-3" />
                <div className="flex flex-wrap gap-4">
                  <a href="/docs/Elangoraj.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <FaDownload aria-hidden /> Download Resume
                  </a>
                  <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium hover:opacity-90 transition-opacity">
                    <FaEnvelope aria-hidden /> Get in Touch
                  </a>
                </div>
              </Reveal>
              <div className="lg:col-span-2 grid grid-cols-2 gap-4 content-start">
                {cvData.highlights.map((h, i) => (
                  <Reveal key={h.label} delay={i * 0.05}>
                    <div className="card p-6 h-full">
                      <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 dark:from-sky-400 dark:to-blue-500">{h.value}</div>
                      <div className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-snug">{h.label}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto">
            <SectionHeader eyebrow="Career" title="Experience" />

            <ol className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-2 md:ml-0 space-y-12">
              {cvData.experience.map((exp, idx) => (
                <li key={idx} className="pl-8 relative">
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-sky-600 dark:bg-sky-400 border-4 border-slate-50 dark:border-slate-950" />
                  <Reveal>
                    <span className="inline-block mb-3 px-3 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 text-sm font-medium shadow-sm">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <div className="text-slate-600 dark:text-slate-400 font-medium mb-4">{exp.company} · {exp.location}</div>
                    <ul className="space-y-3">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] flex items-start">
                          <span className="mr-3 mt-2 w-1.5 h-1.5 bg-sky-500 rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Toolkit" title="Technical Expertise" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(cvData.skills).map(([category, items], i) => (
                <Reveal key={category} delay={(i % 3) * 0.05}>
                  <div className="card p-8 h-full hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded bg-sky-500" />
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {(items as string[]).map((skill) => (
                        <span key={skill} className="chip">{skill}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <SectionHeader eyebrow="Projects" title="Selected Work" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cvData.projects.map((project, i) => (
                <Reveal key={project.title} delay={i * 0.05}>
                  <article className="group card overflow-hidden h-full flex flex-col hover:border-sky-200 dark:hover:border-sky-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="h-48 bg-slate-100 dark:bg-slate-800 relative overflow-hidden">
                      {project.image ? (
                        <Image src={project.image} alt={project.title} fill sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw" className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />
                          <FaBrain aria-hidden className="relative text-6xl text-white/80 group-hover:scale-110 transition-transform duration-700" />
                        </div>
                      )}
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white">{project.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-500 dark:text-slate-400">{tag}</span>
                        ))}
                      </div>

                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-sky-600 dark:text-sky-400 hover:text-sky-700 transition-colors group/link">
                          {project.linkLabel} <FaArrowRight aria-hidden className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                        </a>
                      ) : (
                        <span className="mt-auto text-sm font-medium text-slate-400">{project.context}</span>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Public Speaking & Leadership Section */}
        <section id="speaking" className="py-24 px-6 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <SectionHeader eyebrow="Community" title="Public Speaking & Leadership" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <Reveal>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg translate-y-4">
                    <Image src="/images/web/speaking-panel.jpg" alt="Elango speaking on a panel discussion" fill sizes="(min-width: 1024px) 300px, 50vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg -translate-y-4">
                    <Image src="/images/web/speaking-conference.jpg" alt="Elango speaking at a conference" fill sizes="(min-width: 1024px) 300px, 50vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Communicating AI to the World</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  I represent Just Group externally as an AI speaker, demystifying complex AI for diverse audiences, from technical deep dives to strategic overviews for executives. I also speak at internal seminars and mentor professionals moving into data and AI.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {cvData.speakingTopics.map((topic) => (
                    <span key={topic} className="px-4 py-2 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 rounded-lg text-sm font-medium">{topic}</span>
                  ))}
                </div>
                <ul className="space-y-4">
                  {cvData.talks.map((talk) => (
                    <li key={talk.event} className="flex items-start gap-3">
                      <FaMicrophoneAlt aria-hidden className="mt-1 text-sky-500 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">{talk.event}</div>
                        {talk.topic && <div className="text-sm text-slate-500 dark:text-slate-400">{talk.topic}</div>}
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal>
              <div className="bg-slate-900 dark:bg-slate-900 dark:border dark:border-slate-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2" />

                <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
                  <div className="w-full lg:w-1/3">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                      <Image src="/images/web/toastmasters.jpg" alt="Toastmasters leadership" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                    </div>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <h3 className="text-2xl font-bold mb-6">Leadership & Toastmasters</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                      {cvData.leadership.map((item) => (
                        <div key={item.role}>
                          <h4 className="text-lg font-semibold mb-1 text-sky-400">{item.role}</h4>
                          <p className="text-slate-300 text-sm mb-3">{item.org} · {item.period}</p>
                          <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Education, Certifications & Publications Section */}
        <section id="education" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Learning" title="Education & Credentials" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal>
                <div className="card p-8 h-full">
                  <h3 className="flex items-center gap-2 text-lg font-bold mb-6 text-slate-900 dark:text-white">
                    <FaGraduationCap aria-hidden className="text-sky-500" /> Education
                  </h3>
                  <ul className="space-y-6">
                    {cvData.education.map((edu) => (
                      <li key={edu.degree}>
                        <div className="font-semibold text-slate-900 dark:text-white">{edu.degree}</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">{edu.institution}</div>
                        <div className="text-sm text-slate-500 dark:text-slate-500">
                          {edu.year}{edu.details ? ` · ${edu.details}` : ''}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="card p-8 h-full">
                  <h3 className="flex items-center gap-2 text-lg font-bold mb-6 text-slate-900 dark:text-white">
                    <FaCertificate aria-hidden className="text-sky-500" /> Certifications
                  </h3>
                  <ul className="space-y-3">
                    {cvData.certifications.map((cert) => (
                      <li key={cert} className="flex items-start text-slate-600 dark:text-slate-300">
                        <span className="mr-3 mt-2 w-1.5 h-1.5 bg-sky-500 rounded-full flex-shrink-0" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="card p-8 h-full">
                  <h3 className="flex items-center gap-2 text-lg font-bold mb-6 text-slate-900 dark:text-white">
                    <FaBookOpen aria-hidden className="text-sky-500" /> Publications
                  </h3>
                  <ul className="space-y-5">
                    {cvData.publications.map((pub) => (
                      <li key={pub.title}>
                        {pub.link ? (
                          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 dark:text-white hover:text-sky-600 dark:hover:text-sky-400 transition-colors">{pub.title}</a>
                        ) : (
                          <div className="font-semibold text-slate-900 dark:text-white">{pub.title}</div>
                        )}
                        <div className="text-sm text-slate-500 dark:text-slate-400">{pub.venue}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="card p-8 h-full">
                  <h3 className="flex items-center gap-2 text-lg font-bold mb-6 text-slate-900 dark:text-white">
                    <FaTrophy aria-hidden className="text-sky-500" /> Honours & Awards
                  </h3>
                  <ul className="space-y-3">
                    {cvData.awards.map((award) => (
                      <li key={award} className="flex items-start text-slate-600 dark:text-slate-300">
                        <span className="mr-3 mt-2 w-1.5 h-1.5 bg-sky-500 rounded-full flex-shrink-0" />
                        {award}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-24 px-6 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto">
            <SectionHeader eyebrow="Recommendations" title="What people say" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cvData.testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.05}>
                  <figure className="card p-8 h-full flex flex-col">
                    <FaQuoteLeft aria-hidden className="text-2xl text-sky-500/60 mb-4" />
                    <blockquote className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed flex-1">{t.quote}</blockquote>
                    <figcaption className="mt-6">
                      <div className="font-semibold text-slate-900 dark:text-white">{t.name}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{t.title}</div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
          <Reveal className="max-w-3xl mx-auto text-center">
            <p className="section-eyebrow">Contact</p>
            <h2 className="section-heading">Let&apos;s build something together</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-10">
              Open to conversations about applied AI, GenAI strategy, speaking opportunities, consulting and mentoring.
              The quickest way to reach me is by email or LinkedIn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href={`mailto:${personalInfo.email}`} className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-medium hover:opacity-90 transition-opacity">
                <FaEnvelope aria-hidden /> {personalInfo.email}
              </a>
              <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 px-8 py-3.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-medium hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                <FaLinkedin aria-hidden /> Connect on LinkedIn
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 dark:text-slate-400">
        <div className="flex justify-center space-x-8 mb-6">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-2xl hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
              <Icon />
            </a>
          ))}
        </div>
        <p className="text-sm">© {new Date().getFullYear()} {personalInfo.name}</p>
      </footer>
    </>
  );
}
