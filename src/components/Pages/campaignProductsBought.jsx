import React, { useEffect, useState } from "react";
import { getProducts } from "../services/service";
export const CampaignProductsBought = () => {
  //Organization (Per Campaign)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productsData();
  }, []);
  const productsData = async () => {
    let product = await getProducts();
    setProducts(product);
  };

  const supply = async () => {};
  return (
    <div>
      {products.length > 0 ? (
        <div>
          <table>
            
          </table>
          <button
            className="rightSpace btn btn-primary"
            onClick={() => {
              supply();
            }}
          >
            Send
          </button>
        </div>
      ) : (
        <h1>No products bought yet</h1>
      )}
    </div>
  );
};
