import {
  FaTelegram,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <section className="footer mt-24 bg-slate-900">
      <div className="container mx-auto h-auto py-12 max-sm:px-6 sm:w-4/5">
        <div className="flex gap-6 text-slate-300 max-lg:flex-col">
          <div className="my-auto">
            <h1 className="text-2xl font-medium text-cyan-400">Daniel Elias</h1>
            <p className="text-medium mt-1 text-lg">
              Building quality software since 2023.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <span className="flex gap-1">
              <a href="mailto:danieleliaswy@gmail.com">danieleliaswy@gmail.com</a>
                <IoMail className="my-auto" />
                {/* <a href="mailto:danieleliaswy@gmail.com">danieleliaswy@gmail.com</a> */}
              </span>
              <span className="flex gap-1">
                <FaWhatsapp className="my-auto" />
                <span>+2519303220071</span>
              </span>
            </div>
          </div>

          <div className="my-auto flex flex-col gap-4 lg:ml-auto">
            <ul className="my-auto flex flex-wrap gap-5 font-medium lg:mx-auto">
              <li>Home</li>
              <li>Project</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
            <div className="footer-social-links flex flex-wrap gap-6 text-lg lg:mx-auto">
              <a href="https://t.me/Daniconn" target="_blank" rel="noopener noreferrer">
                <FaTelegram />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100075251709436" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.linkedin.com/in/daniel-elias-3137312b8" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/Habte2071" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-950 max-sm:px-6">
        <div className="container mx-auto h-auto py-3 sm:w-4/5">
          <div className="mx-auto w-fit text-sm text-slate-300">
            Copyright &copy; {new Date().getFullYear()}. Made by{" "}
            <a
              href="https://www.linkedin.com/in/daniel-elias-3137312b8"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cyan-400"
            >
              Daniel Elias
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;