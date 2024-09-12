import Image from "next/image";

import gallery001 from "@/public/images/gallery001.jpg";
import gallery002 from "@/public/images/gallery002.jpg";

function Gallery() {
  return (
    <div className="grid grid-cols-2 py-8">
      <div className="relative">
        <Image src={gallery001} className="brightness-90" />
        <p className="absolute bottom-24 left-5 text-2xl text-white">
          Hello world!
        </p>
        <p className="absolute bottom-10 left-5 text-white">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </p>
      </div>
      <div className="relative">
        <Image src={gallery002} className="brightness-75" />
      </div>
    </div>
  );
}

export default Gallery;
