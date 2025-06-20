import image1 from "/img-editor.jpg";
import image2 from "/utm.png";
import image3 from "/ibank-img.jpg";
import { IoIosLink } from "react-icons/io";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "EditSnap - Smart Image Editing in Your Browser",
    description: `EditSnap is a sleek, browser-based image editor that allows users to resize, rotate, flip, and apply various filters (brightness, contrast, saturation, grayscale, sepia, blur) to their images in real-time. It also supports format conversion (JPG, PNG, WebP) with customizable quality levels, offering a fast and intuitive experience without any need for downloads or paid tools.
      
      This project deepened my understanding of the HTML5 Canvas API, image manipulation techniques, and how to create clean, user-friendly interfaces with Tailwind CSS and JavaScript.`,
    technologies: [
      "HTML",
      "Tailwind CSS",
      "JavaScript",
      "Canvas API",
      "DOM API",
    ],
    liveLink: "https://editsnap.netlify.app/",
  },

  {
    image: image2,
    title: "UTM Link Generator",
    description:
      "A simple, intuitive tool that helps businesses, marketers, and content creators generate UTM-tagged URLs to track traffic sources across platforms. With this tool, users can create trackable links to understand where their visitors are coming from, which campaigns are performing best, and which channels need improvement — all without relying on complex analytics tools.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    liveLink: "https://utmgenerate.netlify.app/",
  },

  {
    image: image3,
    title: "iBanking - Modern Digital Banking Interface",
    description:
      "iBanking is a sleek, responsive banking dashboard interface designed to simulate real-world online banking systems. Built as a frontend project, it features account overviews, transaction history, quick transfers, and intuitive UI components. This project highlights my skills in modern web design, responsive layouts, and user-centric interface development, reflecting industry-standard banking app aesthetics.",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    liveLink: "https://ibankings.netlify.app/",
  },
];

function ScrollReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
}

function ProjectCard({ project }) {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image}
          alt=""
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 w-fit rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-600 transition"
            >
              <IoIosLink /> Live Preview
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

function Projects() {
  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:py-24 "
    >
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          My Projects
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
