import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";
import CodeWindow from "./CodeWindow";
import Bubbles from "./Bubbles";
import { TextEffect } from "../motion/TextEffect";

const Hero = () => {
  return (
    <section className="hero container relative mx-auto sm:w-4/5">
      <Bubbles />
      <div className="relative grid w-full grid-cols-1 pt-32 lg:grid-cols-7 xl:pt-40 2xl:grid-cols-2 2xl:pt-64">
        <div className="justify-between pt-16 max-sm:px-6 lg:col-span-3 2xl:col-span-1">
          <div className="pb-20 sm:py-20">
            <p className="-ml-px text-sm font-semibold text-slate-800 dark:text-slate-300">
              Hi there, I&apos;m
            </p>
            <TextEffect className="-ml-1 py-2 pb-4 text-5xl font-semibold text-cyan-800 dark:text-cyan-400">
              Daniel Elias
            </TextEffect>
            <h1 className="flex items-center gap-4 text-lg font-medium text-slate-800 dark:text-slate-300">
              <span className="-mt-1 text-2xl font-semibold text-cyan-500 max-sm:-mt-1.5 max-sm:text-5xl max-sm:font-normal">
                {`{`}
              </span>
              <TextEffect preset="slide" className="my-auto">
                Software Developer from Ethiopia
              </TextEffect>
            </h1>

            <div className="flex gap-3 pt-16">
              <a
                href="/Dani-resume.pdf"
                download="Dani-resume.pdf"
                target="_blank"
                className="group relative inline-block rounded-lg bg-slate-900 p-4 text-xs text-white transition hover:bg-slate-800 dark:ring-1 dark:ring-white/10 dark:hover:bg-slate-800/70"
              >
                <span className="relative">Download Resume</span>
              </a>
              
              <div className="my-auto flex gap-3 text-xl dark:text-white">
                {/* Telegram Link */}
                <a
                  href="https://t.me/Daniconn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-200 p-2 transition hover:text-cyan-500 dark:bg-slate-900 dark:hover:text-cyan-400"
                >
                  <FaTelegram />
                </a>
                {/* GitHub Link */}
                <a
                  href="https://github.com/Habte2071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-200 p-2 transition hover:text-cyan-500 dark:bg-slate-900 dark:hover:text-cyan-400"
                >
                  <FaGithub />
                </a>
                {/* LinkedIn Link */}
                <a
                  href="https://www.linkedin.com/in/daniel-elias-3137312b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-slate-200 p-2 transition hover:text-cyan-500 dark:bg-slate-900 dark:hover:text-cyan-400"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4 w-full 2xl:col-span-1">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
};

export default Hero;