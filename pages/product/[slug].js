/* eslint-disable @next/next/no-img-element */

import { Product } from "@/components";
import { client, urlFor } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { useState } from "react";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
  // const [index, setPriceDetails] = useState([]);
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image && image[0])} alt="" />
          </div>

          {/* <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
              src={urlFor(item)} 
              key={index} 
              alt="" 
              className=""
              onMouseEnter='' />
            ))}
          </div> */}
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>

          <div>
            <div className="reviews">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <p>(18)</p>
            </div>
          </div>

          <h4>Details :</h4>
          <p>{details}</p>
          <p className="price">${price}</p>

          <div className="quantity">
            <h3>Quantity</h3>
            <p className="quantity-desc ">
              <span className="minus" onClick="">
                <AiOutlineMinus />
              </span>
              <span className="num">0</span>
              <span className="plus" onClick="">
                <AiOutlinePlus />
              </span>
            </p>
          </div>

          <div className="buttons">
            <button type="button" className="add-to-cart" onClick="">
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick="">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container ">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {

  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const product = await client.fetch(query);

  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  return {
    props: { product, products },
  };
};
