import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export const Links = [{ name: 'Home', href: '/', Icon: FaHome }];

function LinkList() {
  return (
    <ul>
      {Links.map((link) => (
        <li
          key={link.name}
          className="group relative px-2 py-3 text-white hover:bg-brown-100/10 rounded mt-2 cursor-pointer"
        >
          <Link href={link.href} className="flex items-center md:ml-4 lg:ml-6">
            <link.Icon />
            <p className="mx-4 block md:hidden lg:block">{link.name}</p>
          </Link>
          <span className="absolute left-0 top-0 h-full w-1 rounded-tr-lg rounded-br-lg bg-brown-100/10" />
        </li>
      ))}
    </ul>
  );
}

export default LinkList;
