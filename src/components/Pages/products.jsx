import React, { useEffect, useState } from "react";
import {
  buyProduct,
  getAllProducts,
  getBalance,
  tweet,
} from "../services/service";
import "./style.css";

export const Products = ({ Email }) => {
  //Social Activist
  const [productsArr, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState({});
  const [totalSum, setTotalSum] = useState(0);
  const [balance, setBalance] = useState(0);
  const [productID, setID] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [value, setValue] = useState(0);
  const [price, setPrice] = useState("");

  const productsData = async () => {
    let product = await getAllProducts();

    await setProducts(product);
    socialBalanceData();
  };

  const socialBalanceData = async () => {
    let tempBalance = await getBalance(Email);

    await setBalance(tempBalance);
  };

  const setTotal = (Price, ID) => {
    setQuantity(0);
    if (!totalPrice[ID]) {
      setTotalPrice({ ...totalPrice, [ID]: 0 });
    }
    setTotalPrice({ ...totalPrice, [ID]: Price });
    setPrice(Price);
    setTotalSum(
      Object.values(totalPrice).reduce((sum, price) => sum + price, 0),
    );
  };

  function handleSubmit(Product) {
    let product = {
      ID: productID,
      Name: Product.Name,
      Quantity: quantity,
      Price: price,
      CampaignHashtag: Product.CampaignHashtag,
      Activist_Email: Email,
    };
    console.log(Email);

    if (quantity > 0) {
      buyProduct(product);
      if (quantity === 1)
        alert("You have purchased: " + quantity + " " + product.Name);
      else if (quantity > 1)
        alert("You have purchased: " + quantity + " " + product.Name + "s");
      tweet({
        Campaign_Hashtag: product.CampaignHashtag,
        Social_Activist_Email: Email,
        Product_Name: product.Name,
        Quantity: product.Quantity,
      });
      productsData();
      const input = document.getElementById(`quantity-${Product.ID}`);
      input.value = 0;
    }
  }

  function handleSubmitAll() {
    const productsToBuy = productsArr
      .map((product) => {
        const quantity = document.getElementById(
          `quantity-${product.ID}`,
        ).value;
        if (quantity > 0) {
          return {
            ID: product.ID,
            Name: product.Name,
            Quantity: parseInt(quantity),
            Price: product.Price * parseInt(quantity),
            CampaignHashtag: product.CampaignHashtag,
            Activist_Email: Email,
          };
        }
        return null;
      })
      .filter((product) => product !== null);
    console.log("All Products:");
    productsToBuy.map((product) => {
      console.log(product);
      alert("you have bought " + product.Quantity + " " + product.Name);
      buyProduct(product);
      const input = document.getElementById(`quantity-${product.ID}`);
      input.value = 0;
    });
    productsData();
  }

  function handleBuyAllClick() {
    productsArr.forEach((product) => {
      const quantity = document.getElementById(`quantity-${product.ID}`).value;
      setTotal(product.Price * quantity, product.ID);
    });
    handleSubmitAll();
  }

  useEffect(
    () => {
      productsData();
      setTotalSum(
        Object.values(totalPrice).reduce((sum, price) => sum + price, 0),
      );
    },
    [totalPrice],
    [productsArr],
  );

  return (
    <>
      <h3>Balance: {balance}$</h3>
      <div className="tableContainer">
        <table className="table">
          <thead>
            <tr>
              <th>Campaign Hashtag</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Units in stock</th>
              <th scope="col">Enter how many to buy</th>
              <th scope="col">Total price</th>
              <th>Buy</th>
            </tr>
          </thead>
          <tbody>
            {productsArr.length > 0 &&
              productsArr.map((Product, idx) => {
                if (totalPrice[Product.ID] === undefined)
                  totalPrice[Product.ID] = 0;
                return (
                  <>
                    <tr key={Product.ID}>
                      <th>{Product.CampaignHashtag}</th>
                      <th>{Product.Name}</th>
                      <th>{Product.Price}$</th>
                      <th>{Product.Quantity}</th>
                      <th>
                        <input
                          className="inputSize"
                          defaultValue={0}
                          type="number"
                          min="0"
                          max={
                            balance > 0 && balance >= totalSum
                              ? Product.Quantity
                              : 0
                          }
                          id={`quantity-${Product.ID}`}
                          onChange={(event) => {
                            setTotal(
                              event.target.value === ""
                                ? 0
                                : parseFloat(event.target.value) *
                                    Product.Price,
                              Product.ID,
                            );
                            setID(Product.ID);
                            setQuantity(parseInt(event.target.value));
                          }}
                        ></input>
                      </th>
                      <th>
                        {totalPrice[Product.ID] ? totalPrice[Product.ID] : 0}$
                      </th>
                      <th className="space size">
                        {balance > totalSum ? (
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              console.log(Product);

                              handleSubmit(Product);
                            }}
                          >
                            Buy
                          </button>
                        ) : (
                          <button className="btn btn-danger" disabled>
                            Balance too low
                          </button>
                        )}
                      </th>
                    </tr>
                  </>
                );
              })}

            <tr>
              <th>
                {" "}
                <h1 className="totalSum">Total Sum: {totalSum}$</h1>
              </th>
              <th className="space">
                {balance > totalSum ? (
                  <button
                    className="totalSumBtn btn btn-success"
                    onClick={handleBuyAllClick}
                  >
                    Buy All
                  </button>
                ) : (
                  <button className="totalSumBtn btn btn-danger" disabled>
                    Balance too low
                  </button>
                )}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
