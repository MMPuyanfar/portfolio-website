import Image from "next/image";

export default function AboutSections() {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src={"/images/about-image.png"}
          alt="desktop computer"
          width={500}
          height={500}
          className="rounded-3xl"
        />
        <div className="mt-5">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-justify text-base lg:text-lg">
            I&apos;m a self-taught front-end developer with a
            passion for creating interactive and responsive
            web applications. I have experience working with
            JavaScript, TypeScript, React, Redux, NextJS,
            Sass, Tailwind, Bootstrap, HTML5, CSS3, Python,
            Linux and Git. I&apos;m always a student and try to
            expand my knowledge and skills.
          </p>
        </div>
      </div>
    </section>
  );
}
