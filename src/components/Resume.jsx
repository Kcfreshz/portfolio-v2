import { motion } from "framer-motion";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function Resume() {
  return (
    <ScrollReveal>
      <section id="resume" className="pl-10 md:pl-[400px] p-4 md:py-24">
        <div className="container max-w-3xls mx-auto">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3">
            Resume
          </h2>

          <div className="flex gap-4 px-4">
            {/* View Resume Button */}
            <a
              href="/Kelechukwu_Awoke_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition-colors"
            >
              <FaEye className="mr-2" />
              View Resume
            </a>

            {/* Download Resume Button */}
            <a
              href="/Kelechukwu_Awoke_resume.pdf"
              download="Kelechukwu_Awoke_Resume.pdf"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-900 transition-colors"
            >
              <FaCloudDownloadAlt className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

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

export default Resume;
