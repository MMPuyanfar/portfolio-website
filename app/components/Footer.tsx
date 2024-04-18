import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border border-[#33353F] border-l-transparent border-r-transparent border-b-transparent ">
      <div className="container p-12 flex justify-between items-center">
        <span>
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              width={100}
              height={100}
              alt="Logo"
              className="ml-10 md:ml-5 w-20 h-20 sm:w-[100px] sm:h-[100px]"
            />
          </Link>
        </span>
        <p className="text-slate-600  ">All rights reserved.</p>
      </div>
    </footer>
  );
}
