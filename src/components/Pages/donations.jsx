import React, { useState, useEffect } from "react";
import { getDonations } from "../services/service";

export const Donations = ({ Email }) => {
  const [donationsArr, setDonation] = useState([]);

  const donationsData = async () => {
    let donation = await getDonations(Email);
    console.log(donation);
    setDonation(donation);
  };

  useEffect(() => {
    donationsData();
  }, []);
  return (
    <div>
      <h1>All Donations</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Business Name</th>
          </tr>
        </thead>
        <tbody>
          {donationsArr.length >= 0 &&
            donationsArr.map((Donation) => {
              return (
                <>
                  <tr>
                    <th scope="row">{Donation.Name}</th>
                    <th>{Donation.Quantity}</th>
                    <th>{Donation.Business_Email}</th>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
