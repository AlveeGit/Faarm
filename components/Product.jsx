/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { urlFor } from "../lib/client";
import Image from "next/image";
import { useState } from "react";

const Product = ({ product: { image, slug, price, name } }) => {
  const [src, setSrc] = useState(`${urlFor(image && image[0])}`);

  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <Image
            src={src}
            width={250}
            height={250}
            alt="product"
            className="product-image"
            placeholder="blur"
            blurDataURL="/public/assets/images/blur.jpg"
            onError={() => {
              setSrc("/assets/images/error.jpg");
            }}
          />

          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};
export default Product;
