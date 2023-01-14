import React, { useState, useEffect } from "react";
import { getProducts, supplyProduct } from "../services/service";
import "./style.css";
export const ProductsBought = ({ BusinessEmail }) => {
  //Business section where he can see which donations been bought and he needs to supply
  const [productsArr, setProducts] = useState([]);

  const productsBought = async () => {
    let products = await getProducts(BusinessEmail);
    setProducts(products);
    console.log(productsArr);
  };
  const handleSubmit = async (Product) => {
    console.log("This is " + Product.ID);
    supplyProduct(Product);
    updateList();
  };
  function updateList() {
    new Promise((resolve) => setTimeout(resolve, 1000));
    productsBought();
  }
  useEffect(() => {
    productsBought();
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
            <th scope="col">Send</th>
          </tr>
        </thead>
        <tbody>
          {productsArr.length > 0 &&
            productsArr.map((Product) => {
              if (Product.Quantity > 0) {
                return (
                  <>
                    <tr>
                      <th scope="row">{Product.Name}</th>
                      <th>{Product.Quantity}</th>
                      <th>{Product.Price * Product.Quantity}</th>
                      <th>{Product.CampaignHashtag}</th>
                      <th className="size">
                        {Product.isSent === false ? (
                          <button
                            className="btn btn-primary"
                            onClick={() => {
                              console.log(Product);

                              handleSubmit(Product);
                            }}
                          >
                            Send
                          </button>
                        ) : (
                          <p>Supplied</p>
                        )}
                      </th>
                    </tr>
                  </>
                );
              } else return null;
            })}
        </tbody>
      </table>
    </div>
  );
};
