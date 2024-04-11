import Image from "next/image";
import { navItems } from "../utils/nav.utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-12 py-5">
      <div className="flex gap-3 items-center">
        <div className="w-8 h-8 bg-black rounded-full">
          {/* <Image
            src="/me.jpg"
            width={32}
            height={32}
            alt="Picture of the author"
          /> */}
        </div>
        <p>0x.meet</p>
      </div>

      <nav className="flex gap-2 text-lg font-light items-center">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="px-6 py-1 hover:bg-black hover:text-white hover:rounded-full duration-500"
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
