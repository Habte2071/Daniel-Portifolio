import { FaArrowRight } from "react-icons/fa6";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="contact container relative mx-auto my-32 sm:w-4/5">
      <div className="placeHolderComponent h-auto">
        <div className="grid gap-16 lg:grid-cols-7 2xl:grid-cols-2">
          <div className="content-center justify-between max-md:order-1 max-md:mb-12 lg:col-span-3 2xl:col-span-1">
            <div className="relative overflow-hidden bg-white px-12 py-16 shadow-sm ring-1 ring-inset ring-white/10 after:absolute after:right-0 after:top-0 after:-z-10 after:size-60 after:rounded-full after:bg-gradient-to-tr after:from-transparent after:blur-3xl dark:bg-slate-900/70 dark:after:to-indigo-500 max-sm:px-6 sm:rounded-lg">
              <div className="flex flex-col">
                <p className="flex items-center gap-4 font-semibold dark:text-slate-300">
                  <span className="-mt-1 text-2xl text-cyan-500">{`{`}</span>
                  <span className="my-auto text-base">Contact info</span>
                </p>

                <h1 className="py-6 text-4xl font-semibold text-cyan-800 dark:text-cyan-400">
                  Let's get in touch
                </h1>
                <p className="text-base font-normal text-slate-700 dark:text-slate-300">
                  I’m open to new opportunities and collaborations — let’s connect.
                </p>
              </div>
              <div className="mt-16 flex flex-col gap-8 text-base font-medium dark:text-slate-300">
                <div className="flex gap-4">
                  <div className="">
                    <div className="rounded-full bg-cyan-600 p-2 text-white">
                      <MdLocationOn />
                    </div>
                  </div>
                  <p className="my-auto">Ethiopia, Addis Abeba</p>
                </div>
                <div className="flex gap-4">
                  <div className="">
                    <div className="rounded-full bg-cyan-600 p-2 text-white">
                      <MdPhone />
                    </div>
                  </div>
                  <p className="my-auto">+251930322071</p>
                </div>
                <div className="flex gap-4">
                  <div className="">
                    <div className="rounded-full bg-cyan-600 p-2 text-white">
                      <MdMail />
                    </div>
                  </div>
                  <a
                    href="mailto:danieleliaswy@gmail.com"
                    className="my-auto flex cursor-pointer items-center justify-start gap-2 transition-all hover:gap-4 hover:text-cyan-800 dark:hover:text-cyan-400"
                  >
                    danieleliaswy@gmail.com
                    <span>
                      <FaArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="max-md:order-2 max-sm:p-6 lg:col-span-4 2xl:col-span-1">
            <p className="flex items-center gap-4 font-semibold dark:text-slate-300">
              <span className="-mt-1 text-2xl text-cyan-500">{`{`}</span>
              <span className="my-auto text-base">Send me a message</span>
            </p>
            <p className="py-6 text-4xl font-semibold text-cyan-800 dark:text-cyan-400">
              I’ll respond as soon as possible.
            </p>
            <div className="my-6">
              <form className="text-sm" action="" method="post">
                <label
                  className="text-sm font-semibold text-slate-800 dark:text-slate-300"
                  htmlFor="email"
                >
                  Your email
                </label>
                <input
                  id="email"
                  className="my-1 mb-6 w-full rounded-lg bg-white p-3 ring-1 ring-slate-900/15 transition-all hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-slate-800 dark:hover:bg-slate-700/85 dark:focus:bg-slate-700/85"
                  type="email"
                  placeholder="danieleliaswy@gmail.com"
                  required
                />
                <label
                  className="text-sm font-semibold text-slate-800 dark:text-slate-300"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  className="my-1 mb-6 w-full rounded-lg bg-white p-3 ring-1 ring-slate-900/15 transition-all hover:bg-slate-100/70 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-slate-800 dark:hover:bg-slate-700/85 dark:focus:bg-slate-700/85"
                  type="text"
                  placeholder="Let me know how I can help you"
                  required
                />
                <label
                  className="text-sm font-semibold text-slate-800 dark:text-slate-300"
                  htmlFor="msg"
                >
                  Your message
                </label>
                <textarea
                  id="msg"
                  className="my-1 mb-6 w-full rounded-lg bg-white p-3 font-medium ring-1 ring-slate-900/15 transition-all hover:bg-slate-100/70 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-slate-800 dark:hover:bg-slate-700/85 dark:focus:bg-slate-700/85"
                  cols={30}
                  rows={10}
                  placeholder="Leave a comment..."
                  required
                ></textarea>
                <button className="rounded-lg bg-cyan-600 p-4 px-7 text-sm font-semibold text-white transition-all hover:bg-cyan-500">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;