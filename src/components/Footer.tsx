import bgGrid from "../assets/images/footer-grid.svg";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "../variables";

const Footer = () => {
  return (
    <footer className="w-full pb-10 pt-20" id="contact">
      {/* background grid */}
      <div className="absolute -bottom-3 left-0 max-h-96 w-full overflow-hidden">
        <img src={bgGrid} alt="grid" className="h-full w-full object-contain" />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h2>

        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <a href="mailto:torralbaarfeloreed@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © 2024 Adrian Hajdin
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border
                border-black-300 bg-black-200 bg-opacity-75 saturate-150 backdrop-blur-lg
                backdrop-filter"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
