import NavLink from "./NavLink";

interface Link {
  linkText: string;
  href: string;
}
interface MenuOverlayProps {
  links: Link[];
}
export default function MenuOverlay({
  links,
}: MenuOverlayProps) {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden gap-2">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink linkText={link.linkText} href={link.href} />
        </li>
      ))}
    </ul>
  );
}
