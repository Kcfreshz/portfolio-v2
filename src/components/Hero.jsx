import image from "/image.jpg";
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
        >
          <img
            src={image}
            alt="profile px"
            className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />

          {/* <div
            className="container max-w-3xls h-[400pxs] min-h-[480pxs]  my-5 mx-auto bgs-[linear-gradient(rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.4)_100%)] bg-orange-100  rounded-md flex items-end"
            style={{
              backgroundImage: `
    linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%),
    url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQazoW7ERn_4kOfNznmfxos4Wi3EKLdaxmQ-9tdP90QZ3U76ciC8LaWDlpujkR8kASDLSo8RQzAOje9k6d_3kFUYQ459gihNqdP_eqJLiPWfO6szStmwTN7O_mkxc0fBDV96wPgoCvrjsPVFQXQAfL9wfB4bNH9Q6BCS8qcNkTEWYJI3L829bJyriebYgXoAKqnND9NL-Zpo56UIsPCdS3Lz7aQV_GOMsryUmhl-6ZUTZakM_xkDmrab6IEzm6p_3GZxGOsP_aTZag')
  `,
            }}
          >
            <div className="m-10">
              <h2 className="text-white lg:text-4xl text-2xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Kelechukwu Awoke
              </h2>
              <div className="flex  gap-3 mt-3">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-blue-950 hover:bg-blue-900 text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                  Contact Me
                </button>
                <button className="bg-slate-900 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                  View Projects
                </button>
              </div>
            </div>
          </div> */}
        </motion.div>

        <motion.div
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Kelechukwu Awoke
          </h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">
            Web Developer
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            voluptatibus. Dicta facilis iste provident deserunt nihil
            repudiandae saepe aliquid assumenda iusto ut commodi dolore odit
            fuga adipisci facere illum labore quidem incidunt, repellendus quasi
            sit sint atque. Repudiandae nihil illum minima voluptatibus?
            Mollitia excepturi quo illo atque, quaerat voluptatem rem.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
