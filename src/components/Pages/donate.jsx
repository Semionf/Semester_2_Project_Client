import React, { useEffect, useState } from "react";
import { getAllCampaigns, insertProduct } from "../services/service";
export const Donate = ({ BusinessEmail }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignHashtag, setCampaignHashtag] = useState("");
  const [productName, setProductName] = useState("");
  const [Quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    campaignData();
  }, []);

  const campaignData = async () => {
    let campaign = await getAllCampaigns();
    console.log(campaign);
    setCampaigns(campaign);
  };

  const submitDonation = async () => {
    if (productName === "") alert("Please enter product name");
    else if (Quantity === 0) alert("Please enter quantity");
    else if (price === 0) alert("Please enter price");
    else {
      await insertProduct({
        Name: productName,
        Quantity: Quantity,
        Price: price,
        Business_Email: BusinessEmail,
        CampaignHashtag: campaignHashtag,
      });

      // Reset input fields
      setProductName("");
      setPrice(0);
      setQuantity(0);

      // Reset campaignHashtag
      setCampaignHashtag("");
      alert("Donation submitted successfully!");
    }
  };
  //Buisness
  return (
    <div>
      <h1 className="headline">Donation</h1>
      <label className="rightSpace">Campaign hashtag:</label>
      <select
        className="rightSpace"
        onChange={(event) => {
          setCampaignHashtag(event.target.value);
        }}
        value={campaignHashtag}
        defaultValue={""}
      >
        <option value="">Please choose from the following</option>
        {campaigns !== undefined
          ? campaigns.length > 0 &&
            campaigns.map((c) => {
              return (
                <option
                  key={c.ID}
                  value={c.Hashtag}
                >
                  {c.Hashtag}
                </option>
              );
            })
          : null}
      </select>
      <br />
      <label className="rightSpace">Product Name:</label>
      <input
        id="productName"
        defaultValue={""}
        value={productName === "" ? "" : productName}
        onChange={(event) => {
          setProductName(event.target.value);
        }}
        className="rightSpace"
        type="text"
      />
      <br />
      <label className="rightSpace">Number of products:</label>
      <input
        id="quantity"
        min={0}
        value={Quantity}
        onChange={(event) => {
          console.log(Quantity);
          setQuantity(parseInt(event.target.value));
        }}
        className="rightSpace"
        type="number"
      />
      <br />
      <label className="rightSpace">Price:</label>
      <input
        id="price"
        min={0}
        value={price}
        onChange={(event) => {
          setPrice(parseFloat(event.target.value));
        }}
        className="rightSpace"
        type="number"
      />
      <br />

      <button
        className="rightSpace btn btn-primary"
        onClick={() => {
          submitDonation();
        }}
      >
        Send
      </button>
    </div>
  );
};
