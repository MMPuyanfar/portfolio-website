import Link from "next/link";

interface NavLinkProp {
  linkText: string;
  href: string;
}

export default function NavLink({
  linkText,
  href,
}: NavLinkProp) {
  return (
    <Link
      href={href}
      className="py-2 px-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {linkText}
    </Link>
  );
}
