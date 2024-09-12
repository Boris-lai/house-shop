"use client";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

import Image from "next/image";
import { Button } from "@nextui-org/react";

import deleteProduct from "../actions/deleteProduct";
import { useState } from "react";
import EditProductModal from "./EditProductModal";

// import deleteProduct from "../actions/deleteProduct";

function ProfileProducts({ products: initialProducts }) {
  const [products, setProducts] = useState(initialProducts);

  const handleDeleteProduct = (productId) => {
    Swal.fire({
      title: "你確定要刪除此商品?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "刪除了!",
          text: "",
          icon: "success",
        });
        deleteProduct(productId);
        const updatedProducts = products.filter(
          (product) => product._id !== productId,
        );

        setProducts(updatedProducts);
      } else {
        return;
      }
    });

    // await deleteProduct(productId);
  };

  return products.map((product) => (
    <>
      <div>
        <Image src={product.images[0]} width={100} height={100} />
      </div>
      <div className="text-sm text-blue-900">{product.name}</div>
      <div className="text-sm text-blue-900">{product.category}</div>
      <div className="text-sm text-blue-900">${product.price}</div>
      <div className="text-sm text-blue-900">{product.description}</div>
      <div className="flex gap-x-1 text-blue-900">
        {/* <Button
          size="sm"
          color="warning"
          onClick={() => handleDeleteProduct(product._id)}
        >
          Edit
        </Button> */}
        <EditProductModal product={product} />
        <Button
          size="sm"
          color="danger"
          onClick={() => handleDeleteProduct(product._id)}
        >
          刪除
        </Button>
      </div>
    </>
  ));
}

export default ProfileProducts;
