import React, { useEffect, useState } from "react";
import { getCampaigns, postDonation } from "../services/service";
export const Donate = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignName, setCampaignName] = useState("");
  const [productName, setProductName] = useState("");
  const [numberOfProducts, setNumberOfProducts] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    campaignData();
  }, []);

  const campaignData = async () => {
    let campaign = await getCampaigns();
    setCampaigns(campaign);
  };
  const handleChange = (e) => {
    setCampaignName({ selectValue: e.target.value });
  };

  const submitDonation = async () => {
    await postDonation({
      campaignName: campaignName,
      productName: productName,
      numberOfProducts: numberOfProducts,
      value: value,
    });
  };
  //Buisness
  return (
    <div>
      <h1 className="headline">Donation</h1>
      <label className="rightSpace">Campaign name:</label>
      <select
        className="rightSpace"
        onChange={() => {
          handleChange();
        }}
      >
        <option>Please choose from the following</option>
        {campaigns === undefined
          ? campaigns.length > 0 &&
            campaigns.map((c) => {
              return <option>{c.name}</option>;
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
          setNumberOfProducts(parseInt(event.target.value));
        }}
        className="rightSpace"
        type="text"
      />
      <br />
      <label className="rightSpace">Value:</label>
      <input
        onChange={(event) => {
          setValue(parseInt(event.target.value));
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
