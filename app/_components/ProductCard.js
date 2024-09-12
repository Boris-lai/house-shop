"use client";
import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";
import ProductModal from "./ProductModal";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../slices/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const { _id, name, category, price, description, images } = product;

  function handleAddToCart() {
    const newItem = {
      productId: _id,
      name,
      quantity: 1,
      price,
      totalPrice: price * 1,
      images,
    };
    dispatch(addItemToCart(newItem));
  }

  return (
    <Card key={product.id} className="flex items-center py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        {/* <p className="text-tiny font-bold uppercase">{description}</p> */}
        <div className="text-md text-default-500">{category}</div>
        <div className="flex max-w-full gap-x-8">
          <h4 className="text-large font-bold">{name}</h4>
          <h4 className="text-large font-bold text-green-700">$ {price}</h4>
        </div>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-fit rounded-md"
          src={images[0]}
          width={600}
        />
        <div className="mt-4 flex gap-4">
          <ProductModal product={product} />
          <Button
            size="sm"
            radius="full"
            className="mr-12 justify-self-end bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
