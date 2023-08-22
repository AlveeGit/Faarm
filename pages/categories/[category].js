import { Product } from "@/components";
import { client } from "../../lib/client";

const CategoryDetails = ({ products, category }) => {
  return (
    <div className="maylike-products-wrapper">
      <h2>Category : {category}</h2>

      <p className="text-2xl p-3  text-center">
        {products.length > 0
          ? `${products.length} Products found in this category`
          : "No Products found in this category"}
      </p>
      <div className="marquee">
        <div className="maylike-products-container  ">
          {products.map((item) => (
            <Product key={item._id} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CategoryDetails;

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{category}`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      category: product.category,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { category } }) => {
  const query = `*[_type == "product" && category == "${category}"]`;
  const products = await client.fetch(query);

  return {
    props: { products, category },
  };
};
