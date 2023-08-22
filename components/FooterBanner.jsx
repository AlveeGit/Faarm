/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { urlFor } from "../lib/client";

const FooterBanner = ({ footerBanner :{discount, largeText1, largeText2, saleTime, smallText, midText, buttonText, product, image, desc} }) => {
  return (
    <div className="footer-banner-container">

      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <p>{largeText1}</p>
          <p>{largeText2}</p>
          <p>{saleTime}</p>
        </div>

        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          {/* <Link href={`/product/${product}`}>
            <button type="button" >
              {buttonText}
            </button>
          </Link> */}
        </div>

        <img src={urlFor(image)} alt="image" className="footer-banner-image" />
      </div>
    </div>
  );
};
export default FooterBanner;
