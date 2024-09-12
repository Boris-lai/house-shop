import { Image } from "@nextui-org/react";
import { Gallery, Item } from "react-photoswipe-gallery";

function ProductImages({ product }) {
  const { images } = product;

  return (
    <Gallery>
      <section className="bg-blue-50 p-3">
        <div className="container mx-auto">
          {images.length === 1 ? (
            <Item
              original={images[0]}
              thumbnail={images[0]}
              width="1000"
              height="600"
            >
              {({ ref, open }) => (
                <Image
                  alt="Card background"
                  ref={ref}
                  onClick={open}
                  className="w-[70%] cursor-pointer object-cover *:rounded-xl"
                  src={images[0]}
                  height={300}
                  width={300}
                />
              )}
            </Item>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`${images.length === 3 && index == 2 ? "col-span-2" : "col-span-1"}`}
                >
                  <Item
                    original={image}
                    thumbnail={image}
                    width="1000"
                    height="600"
                  >
                    {({ ref, open }) => (
                      <Image
                        src={image}
                        ref={ref}
                        onClick={open}
                        alt=""
                        className="w-full cursor-pointer object-cover"
                        rounded-xl
                        height={200}
                        width={500}
                      />
                    )}
                  </Item>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Gallery>
  );
}

export default ProductImages;
