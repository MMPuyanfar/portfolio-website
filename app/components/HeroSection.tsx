import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import TypingAnimation from "./TypingAnimation";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400  to-pink-600">
              Hello, I'm{" "}
            </span><br />
            <TypingAnimation />
          </h1>
          <p className="text-[#ADB7BE] mb-6 text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Reiciendis et eligendi alias
            facilis delectus esse dignissimos autem sapiente
            ratione maxime eos, accusantium ullam corporis,
            quibusdam incidunt est. Reiciendis, ducimus ea.
          </p>
          <div className="text-red-800">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 hover:bg-gradient-to-tl  text-white">
              Hire Me
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/programmer.png"
              alt="programmer"
              width={300}
              height={300}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}