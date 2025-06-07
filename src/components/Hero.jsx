import { motion } from "framer-motion";
function Hero() {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32 "
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        ></motion.div>

        <motion.div
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-6xl">
            Kelechukwu Awoke
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">
            Web Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I'm a passionate Front-End Developer who builds fast, responsive,
            and accessible web interfaces using HTML, Tailwind CSS, JavaScript,
            React and Next.js. I love simplifying complex ideas into clean,
            user-friendly designs and aim for pixel-perfect detail. I’m always
            learning and building real-world projects that solve problems and
            deliver real value.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
