import React, { useEffect, useState } from "react";
import { getAllCampaigns, insertProduct } from "../services/service";
export const Donate = ({ BusinessEmail }) => {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignHashtag, setCampaignHashtag] = useState("");
  const [productName, setProductName] = useState("");
  const [Quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  useEffect(() => {
    campaignData();
  }, []);

  const campaignData = async () => {
    let campaign = await getAllCampaigns();
    console.log(campaign);
    setCampaigns(campaign);
  };
  let CampaignHashtag;
  const submitDonation = async () => {
    await insertProduct({
      Name: productName,
      Quantity: Quantity,
      Price: price,
      Business_Email: BusinessEmail,
      CampaignHashtag: CampaignHashtag,
    });
    setProductName("");
    setPrice("");
    setCampaignHashtag("");
    setQuantity("");
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
      >
        <option>Please choose from the following</option>
        {campaigns !== undefined
          ? campaigns.length > 0 &&
            campaigns.map((c) => {
              return (
                <option key={c.ID}>{(CampaignHashtag = c.Hashtag)}</option>
              );
            })
          : null}
      </select>
      <br />
      <label className="rightSpace">Product Name:</label>
      <input
        onChange={(event) => {
          setProductName(event.target.value);
        }}
        className="rightSpace"
        type="text"
      />
      <br />
      <label className="rightSpace">Number of products:</label>
      <input
        onChange={(event) => {
          setQuantity(parseInt(event.target.value));
        }}
        className="rightSpace"
        type="text"
      />
      <br />
      <label className="rightSpace">Price:</label>
      <input
        onChange={(event) => {
          setPrice(parseFloat(event.target.value));
        }}
        className="rightSpace"
        type="text"
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
