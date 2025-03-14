import Image from "next/image";
import label from "@/libs/english.json";
import { BsTwitter, BsMedium, BsTelegram } from "react-icons/bs";

export default function Hero() {

  // Social Icons and Labels
  const socialButtons = [
    { label: "TWITTER", icon: <BsTwitter className="w-5 h-5" /> },
    { label: "MEDIUM", icon: <BsMedium className="w-5 h-5" /> },
    { label: "TELEGRAM", icon: <BsTelegram className="w-5 h-5" /> },
  ];

  return (
    <div className="hero-background relative w-full min-h-[110vh] bg-[url('/assets/images/prostatix_post_1.jpg')] bg-cover bg-[top] object-cover bg-no-repeat">

      {/* Dark Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

      {/* Hero Content Wrapper */}
      <div className="wrapper w-full flex flex-col items-center justify-center h-[50rem] px-6">
        {/* Image */}
        <div className="w-full flex justify-center">
          <Image src="/assets/icons/logo.webp" alt="Logo" width={370} height={100} className="mb-6" />
        </div>
        {/* Heading*/}
        <div className="content-wrapper w-full flex justify-center text-center">
          <h1 className="text-[#c7c7c7] max-w-[32rem] sm:max-w-[51rem] text-4xl sm:text-6xl md:text-8xl lg:text-8xl leading-tight font-bold font-punk uppercase">
            {label.darknessMeets}
          </h1>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="w-full flex flex-wrap justify-center items-center gap-4 p-6 md:p-8 pb-12 md:pb-20">

        {/* Text */}
        <p className="text-gray-300 text-sm md:text-base lg:text-lg text-center z-10">
          {label.discussionForJoining}
        </p>

        {/* Social Media Buttons */}
        {socialButtons.map(({ label, icon }, index) => (
          <button
            key={index}
            className="relative border-2 border-gray-300 text-gray-300 text-lg uppercase px-10 py-1 rounded-full transition-all duration-300 ease-in-out bg-transparent hover:shadow-[0_0_5px_white,0_0_5px_white,0_0_5px_white] flex items-center gap-3"
          >
            {icon}
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
