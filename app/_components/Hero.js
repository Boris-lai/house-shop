import Image from "next/image";
import headerJPG from "@/public/header.jpg";

async function Hero() {
  return (
    <div className="h-screen text-center">
      <Image
        src={headerJPG}
        alt="The Luxury Cosynest."
        fill
        placeholder="blur"
        quality={80}
        className="object-cover"
      />
      <div className="text-center">
        <h1 className="mb-10 mt-24 text-8xl font-normal tracking-tight text-stone-500 drop-shadow-lg">
          Welcome to CosyNest
        </h1>
      </div>

      <button className="mt-24 rounded-xl bg-slate-100 px-6 py-4 text-stone-500 drop-shadow-lg hover:text-accent-400">
        EXPLORE
      </button>
    </div>
  );
}

export default Hero;
