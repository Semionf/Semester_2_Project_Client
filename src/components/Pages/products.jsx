import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/service";
import "./style.css";

export const Products = () => {
  //Social Activist
  const [productsArr, setProducts] = useState([]);
  const descArr = [];
  const [display, setDisplay] = useState(false);
  const [key, setKey] = useState();
  const [totalPrice, setTotalPrice] = useState();

  const productsData = async () => {
    let product = await getAllProducts();
    console.log(product);
    setProducts(product);
  };

  const DescriptionDesplay = (ID) => {
    if (descArr[ID - 1] === undefined) {
      setDisplay(!display);
      descArr[ID - 1] = display;
      console.log(descArr[ID - 1]);
      setKey(ID);
      return;
    }
    descArr[ID - 1] = !descArr[ID - 1];
  };

  useEffect(() => {
    productsData();
  }, []);

  return (
    <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Units in stock</th>
            <th scope="col">Enter how many to buy</th>
            <th scope="col">Total price</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>
          {productsArr.length >= 0 &&
            productsArr.map((Product) => {
              return (
                <>
                  <tr>
                    <th scope="row">{Product.Name}</th>
                    <th>{Product.Price}$</th>
                    <th>{Product.Quantity}</th>
                    <th>
                      <input
                        className="inputSize"
                        placeholder="Press here"
                        onChange={(event) => {
                          setTotalPrice(
                            parseInt(Product.Price) *
                              parseInt(event.target.value),
                          );
                        }}
                      ></input>
                    </th>
                    <th>{totalPrice}</th>
                    <th className="space">
                      {" "}
                      <button
                        className="btn btn-success"
                        onClick={() => {
                          DescriptionDesplay(Product.ID);
                        }}
                      >
                        Buy
                      </button>
                    </th>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
