'use client'
import Image from "next/image";
import Link from "next/link";
import Github from "../../public/github-icon.svg";
import Linkedin from "../../public/linkedin-icon.svg";

export default function EmailSection() {
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitedEmail = (new FormData(e.target as HTMLFormElement)).get('email');
    alert(`Thanks for submitting this email: ${submitedEmail}.`)
  };
  return (
    <section
      className="grid md:grid-cols-2 my-12 py-24 gap-4 px-4 xl:px-16"
      id="contact"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2 ">
          Let&apos;s connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md ">
          I&apos;m currently looking for new opportunities.
          Whether you have a question or just want to say
          hi, I&apos;ll get back to you! Leave your Email
          here for me.
        </p>
        <div className="flex flex-row gap-2">
          <Link href={"https://github.com/MMPuyanfar"}>
            <Image src={Github} alt="Github-logo" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/mmpuyanfar"}
          >
            <Image src={Linkedin} alt="LinkedIn-logo" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4" onSubmit={(e)=>handleSubmit(e)}>
          <label
            htmlFor="email"
            className="text-white block mb-2 text-sm font-medium"
          >
            Your Email{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="your@email.com"
            className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          />
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full "
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
