import Image from "next/image";
import logo from "@/public/logo.png";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLine } from "react-icons/fa";

import { Input } from "@nextui-org/react";

function Footer() {
  const variants = ["flat", "bordered", "underlined", "faded"];

  return (
    <footer className="mt-4 bg-amber-50 py-8">
      <div className="container mx-auto px-10">
        <div className="grid sm:grid-cols-[1.5fr_1.5fr_2fr]">
          <div className="flex flex-col">
            <div className="mb-4 flex items-center gap-x-2">
              <Image
                src={logo}
                height="50"
                width="50"
                quality={100}
                alt="The luxury CosyNest"
              />
              <span className="mr-4 text-xl font-semibold text-primary-100">
                The Luxury CosyNest
              </span>
            </div>

            <ul className="flex gap-8 [list-style:none]">
              <li className="text-2xl text-[darkgray]">
                <FaInstagram />
              </li>
              <li className="text-2xl text-[darkgray]">
                <FaFacebookSquare />
              </li>
              <li className="text-2xl text-[darkgray]">
                <FaXTwitter />
              </li>
              <li className="text-2xl text-[darkgray]">
                <FaLine />
              </li>
            </ul>

            <p class="text-md mt-10 leading-[1.6] text-[darkgray]">
              Copyright &copy; <span class="year"></span> by Boris Lai rights
              reserved
            </p>
          </div>

          <div className="flex flex-col">
            <p className="mb-8 text-xl text-[darkgray]">CONTANT US</p>
            <address className="flex flex-col text-xl leading-[1.6]">
              <p className="mb-4 text-sm text-[darkgray]">
                台中市北屯區崇德路一段168號7F
              </p>
            </address>
            <div className="mt-auto">
              <p className="text-sm text-[darkgray]">04-221234567</p>
              <p className="text-sm text-[darkgray]">boris@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[darkgray]">For the Luxury CosyNest.</p>
            <p className="text-[darkgray]">Subscribe to get more news</p>

            <Input
              type="email"
              variant={variants[2]}
              label="Email"
              placeholder="Enter your email"
              className="mt-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
