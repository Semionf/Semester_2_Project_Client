import React, { useEffect, useState } from "react";
import { getProductsSpplied, getProductsNotSpplied } from "../services/service";
export const CampaignProductsBought = ({ Email }) => {
  //Activist

  const [productsSuppliedArr, setProductsSupplied] = useState([]);
  const [productsNotSuppliedArr, setProductsNotSupplied] = useState([]);
  useEffect(() => {
    productsData();
  }, []);

  const productsData = async () => {
    let product = await getProductsSpplied(Email);
    let notSupplied = await getProductsNotSpplied(Email);
    setProductsNotSupplied(notSupplied);
    setProductsSupplied(product);
    console.log(notSupplied);
  };

  return (
    <div>
      {productsSuppliedArr && productsSuppliedArr.length > 0 ? (
        <div>
          <h1>Products Supplied</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
                <th scope="col">Campaign Hashtag</th>
                <></>
              </tr>
            </thead>
            <tbody>
              {productsSuppliedArr.length > 0 &&
                productsSuppliedArr.map((Product) => {
                  if (Product.Quantity > 0) {
                    return (
                      <>
                        <tr>
                          <th scope="row">{Product.Name}</th>
                          <th>{Product.Quantity}</th>
                          <th>{Product.Price}</th>
                          <th>{Product.CampaignHashtag}</th>
                        </tr>
                      </>
                    );
                  } else return null;
                })}
            </tbody>
          </table>
        </div>
      ) : null}
      {productsNotSuppliedArr && productsNotSuppliedArr.length > 0 ? (
        <div>
          <h1>Products Not Supplied</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
                <th scope="col">Campaign Hashtag</th>
                <></>
              </tr>
            </thead>
            <tbody>
              {productsNotSuppliedArr.length > 0 &&
                productsNotSuppliedArr.map((Product) => {
                  if (Product.Quantity > 0) {
                    return (
                      <>
                        <tr>
                          <th scope="row">{Product.Name}</th>
                          <th>{Product.Quantity}</th>
                          <th>{Product.Price}</th>
                          <th>{Product.CampaignHashtag}</th>
                        </tr>
                      </>
                    );
                  } else return null;
                })}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
};
