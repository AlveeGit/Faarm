/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product :{image, slug, price, name}}) => {
  return <div>
    <Link href={`/product/${slug}`}>
      <div className="product-card">
        <img
          src={urlFor(image && image[0])}
          width={250}
          height={250}
          alt="product"
          className="product-image"
        />
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
      </div>
    </Link>
  </div>;
};
export default Product;
