import React, { useState, useEffect } from "react";
import { getProductsBought } from "../services/service";

export const ProductsBought = ({ Email }) => {
  const [productsArr, setProducts] = useState([]);

  const productsData = async () => {
    let products = await getProductsBought(Email);
    console.log(products);
    setProducts(products);
  };

  useEffect(() => {
    productsData();
  }, []);
  return (
    <div>
      <h1>Products Bought</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total Price</th>
            <th scope="col">Campaign Hashtag</th>
          </tr>
        </thead>
        <tbody>
          {productsArr.length > 0 &&
            productsArr.map((Product) => {
              return (
                <>
                  <tr>
                    <th scope="row">{Product.Name}</th>
                    <th>{Product.Quantity}</th>
                    <th>{Product.Price * Product.Quantity}</th>
                    <th>{Product.CampaignHashtag}</th>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
