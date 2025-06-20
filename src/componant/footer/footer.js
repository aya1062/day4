import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="https://flowbite.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite company logo"
              width={32}
              height={32}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/about" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link
            href="https://flowbite.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Flowbite™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
