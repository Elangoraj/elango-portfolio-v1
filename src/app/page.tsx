'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaMedium, FaDownload, FaEnvelope } from 'react-icons/fa';
import cvData from '../data/cv_info.json';
import { clsx } from 'clsx';

// Type definitions for our data
type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
};

const projects: Project[] = [
  {
    title: 'Image Super-Resolution',
    description: 'Advanced Computer Vision techniques to enhance remote sensing imagery quality from satellites and drones using SRCNN architectures.',
    tags: ['Python', 'PyTorch', 'OpenCV', 'AWS'],
    link: 'https://github.com/Elangoraj/Image-Super-Resolution',
    image: '/images/SR1.jpg',
  },
  {
    title: 'Product Recommendations',
    description: 'Deep Neural Network model predicting optimal product distribution for retail outlets, achieving 80% accuracy in stock optimization.',
    tags: ['Python', 'AWS Redshift', 'Spark SQL', 'Statistics'],
    link: '#',
    image: '/images/recommendation-engine.jpg',
  },
  {
    title: 'Satellite Scene Classification',
    description: 'CNN-based scene classification system identifying 10+ land-use categories from satellite imagery with high precision.',
    tags: ['Python', 'Docker', 'Tensorflow', 'CNN'],
    link: 'https://github.com/Elangoraj/LandCover-Image-Classification',
    image: '/images/sateliteImage.jpg',
  },
];

export default function Home() {
  const titles = cvData.personalInfo.title.split('|').map(t => t.trim());
  const typeSequence = titles.flatMap(t => [t, 2000]);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-sky-100 selection:text-sky-900">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 px-6 md:px-12 flex justify-between items-center">
        <h1 className="text-xl font-bold font-mono tracking-tight text-slate-900 cursor-pointer">
          Elango<span className="text-sky-600">.Raj</span>
        </h1>
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <li><a href="#about" className="hover:text-sky-600 transition-colors">About</a></li>
          <li><a href="#experience" className="hover:text-sky-600 transition-colors">Experience</a></li>
          <li><a href="#skills" className="hover:text-sky-600 transition-colors">Skills</a></li>
          <li><a href="#work" className="hover:text-sky-600 transition-colors">Work</a></li>
          <li><a href="#contact" className="px-5 py-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-all font-semibold">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 max-w-5xl mx-auto">
        <div className="mb-8 relative w-48 h-48 md:w-56 md:h-56">
          <Image
            src="/images/headshot.jpg"
            alt="Elango Raj"
            fill
            className="rounded-full object-cover shadow-2xl border-4 border-white"
            priority
          />
        </div>
        <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-sky-700 text-xs font-semibold uppercase tracking-wide">
          {cvData.personalInfo.location}
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight text-slate-900 leading-tight">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">AI Solutions</span> <br className="hidden md:block" /> for the Enterprise.
        </h1>

        <div className="text-xl md:text-2xl text-slate-500 mb-10 max-w-2xl font-light h-[40px]">
          <TypeAnimation
            sequence={typeSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-medium text-slate-700"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a href="#work" className="px-8 py-3.5 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            View Projects
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-all">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-slate-900">Experience</h2>

          <div className="space-y-12">
            {cvData.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                  <div className="md:w-1/4 mb-2 md:mb-0">
                    <span className="inline-block px-3 py-1 rounded bg-white border border-slate-200 text-slate-500 text-sm font-medium shadow-sm">
                      {exp.period}
                    </span>
                  </div>
                  <div className="md:w-3/4 border-l-2 border-slate-200 pl-8 pb-12 relative">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-sky-600 border-4 border-white shadow-sm"></div>
                    <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                    <div className="text-slate-600 font-medium mb-4">{exp.company}, {exp.location}</div>
                    <ul className="space-y-3">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="text-slate-600 leading-relaxed text-[15px] flex items-start">
                          <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-slate-400 rounded-full flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Speaking & Leadership Section */}
      <section id="speaking" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-slate-900">Public Speaking & Community</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transform translate-y-4">
              <Image src="/images/speaking-panel.jpg" alt="Panel Discussion" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg transform -translate-y-4">
              <Image src="/images/speaking-conference.jpg" alt="Conference Speaking" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">Communicating AI to the World</h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              As an active speaker at major AI conferences and events, I specialize in demystifying complex artificial intelligence concepts for diverse audiences. From technical deep dives to high-level strategic overviews, I bridge the gap between cutting-edge research and practical application.
            </p>
            <div className="flex gap-4">
              <span className="px-4 py-2 bg-sky-50 text-sky-700 rounded-lg text-sm font-medium">✨ Technical Storytelling</span>
              <span className="px-4 py-2 bg-sky-50 text-sky-700 rounded-lg text-sm font-medium">🎤 Conference Speaker</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-600 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
                <Image src="/images/toastmasters.jpg" alt="Toastmasters Leadership" fill className="object-cover" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-6">Leadership & Toastmasters</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-sky-400">VP Education</h4>
                  <p className="text-slate-300 text-sm mb-4">City of London Toastmasters Club</p>
                  <p className="text-slate-400 leading-relaxed">
                    Curating educational programs and mentoring members to achieve their communication goals.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-sky-400">AI Stream Curator</h4>
                  <p className="text-slate-300 text-sm mb-4">Toastmasters Conference 2026</p>
                  <p className="text-slate-400 leading-relaxed">
                    Designing and curating the AI content track, selecting speakers and defining the narrative for the future of communication in the age of AI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-slate-900">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(cvData.skills).map(([category, items]) => (
            <div key={category} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold mb-6 text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded bg-sky-500"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 text-sm rounded bg-slate-50 text-slate-600 border border-slate-100 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-24 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-slate-900">Selected Work</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-200 transition-colors shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300">
                <div className="h-48 bg-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-200 group-hover:bg-slate-100 transition-colors">
                    <Image src={project.image} alt={project.title} fill className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-lg font-bold mb-3 text-slate-900">{project.title}</h3>
                  <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-slate-50 border border-slate-100 text-slate-500">{tag}</span>
                    ))}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-700 transition-colors group/link">
                    View Project <svg className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-slate-900">About Me</h2>
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-12">
          {cvData.summary}
        </p>
        <div className="flex justify-center gap-6">
          <a href="/docs/Elangoraj.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors">
            <FaDownload /> Download Resume
          </a>
          <a href="mailto:elangorj@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors">
            <FaEnvelope /> Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-slate-200 text-center text-slate-500">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://github.com/Elangoraj" className="text-2xl hover:text-slate-900 transition-colors"><FaGithub /></a>
          <a href="https://linkedin.com/in/ElangoRaj" className="text-2xl hover:text-blue-700 transition-colors"><FaLinkedin /></a>
          <a href="https://twitter.com/ElangoRj/" className="text-2xl hover:text-sky-400 transition-colors"><FaTwitter /></a>
          <a href="#" className="text-2xl hover:text-black transition-colors"><FaMedium /></a>
        </div>
        <p className="mb-2 text-sm">© {new Date().getFullYear()} {cvData.personalInfo.name}</p>
      </footer>
    </main>
  );
}
