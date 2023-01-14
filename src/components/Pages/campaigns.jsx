import React, { useState, useEffect } from "react";
import { getAllCampaigns, getCampaigns } from "../services/service";

export const Campaigns = ({ Email }) => {
  const [campaignsArr, setCampaign] = useState([]);

  const campaignsData = async () => {
    let campaign;
    if (Email !== "sfurlender@gmail.com") {
      campaign = await getCampaigns(Email);
    } else {
      campaign = await getAllCampaigns();
    }
    console.log(campaign);
    setCampaign(campaign);
  };

  useEffect(() => {
    campaignsData();
  }, []);
  return (
    <div>
      <h1>All Campaigns</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Link</th>
            <th scope="col">Hashtag</th>
          </tr>
        </thead>
        <tbody>
          {campaignsArr.length >= 0 &&
            campaignsArr.map((Campaign, index) => {
              return (
                <React.Fragment key={index}>
                  <tr>
                    <th scope="row">{Campaign.Link}</th>
                    <th>{Campaign.Hashtag}</th>
                  </tr>
                </React.Fragment>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
