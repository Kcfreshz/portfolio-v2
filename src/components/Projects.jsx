import image1 from "/1a.jpg";
import image2 from "/2a.jpg";
import image3 from "/3a.jpg";
import image4 from "/4a.jpg";
import image5 from "/5a.2.jpg";
import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "Workflow Organisation Tool",
    description:
      "This app allows users to create, manage, and track various tasks, projects, or wireframes in a structured interface. It features a clean layout with sections for folders, task statuses, and development stages, making it ideal for teams working on creative or technical projects.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
  },

  {
    image: image2,
    title: "Cloud-Based Storage and Management System",
    description:
      "A modern cloud storage app that combines a playful, cartoon-style interface with powerful file management capabilities. Designed for seamless storage, organization, and sharing of documents, videos, and more, it offers intuitive storage tracking and compression tools. Perfect for users seeking a visually engaging and efficient way to manage their digital assets.",
    technologies: ["TypeScript", "Next.js", "Tailwind", "PostgreSQL"],
  },

  {
    image: image3,
    title: "Futuristic Project Management App",
    description:
      "A cutting-edge project management app with a futuristic twist, designed for creative and technical teams. Featuring a stunning sci-fi interface, it allows users to craft, organize, and monitor wireframes, tasks, and development stages with ease. Ideal for innovators seeking a dynamic and visually immersive tool to elevate their workflow and collaboration experience.",
    technologies: ["TypeScript", "React", "Tailwind", "Supabase"],
  },

  {
    image: image4,
    title: "Restaurant E-commerce Website",
    description:
      "A stylish e-commerce app tailored for fashion enthusiasts, offering a seamless shopping experience for clothing and lifestyle products. With an intuitive interface, it provides easy navigation through various categories, secure account management, and dedicated customer support. Perfect for users looking to explore and purchase trendy apparel with convenience and ease. ",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
  },

  {
    image: image5,
    title: "SpaceVoyager: Spacecraft Simulation App",
    description:
      "SpaceVoyager is an innovative app that brings the wonders of space exploration to life with stunning spacecraft simulations. Set against breathtaking planetary landscapes, it allows users to design, navigate, and explore futuristic spacecraft, offering an immersive experience for space enthusiasts and gamers alike. Perfect for those passionate about the cosmos and cutting-edge technology. ",
    technologies: ["React", "Tailwind", "Docker", "MySQL"],
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
