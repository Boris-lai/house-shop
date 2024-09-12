import HeroInfoImg from "@/public/images/heroinfo.jpg";
import Image from "next/image";

function HeroInfo() {
  return (
    <div className="py-16">
      <div className="mx-[auto] my-[0] grid h-96 max-w-[130rem] items-center px-12 sm:grid-cols-2">
        <div className="p-8">
          <blockquote>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </blockquote>
        </div>
        <div className="mx-[auto] my-[0]">
          <Image
            className="rounded-lg [box-shadow:0_4px_8px_rgba(0,_0,_0,_0.2)] sm:w-80"
            src={HeroInfoImg}
            width={370}
            height={480}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroInfo;
