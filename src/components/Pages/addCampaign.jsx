import React, { useState } from "react";
import { newCampaign } from "../services/service";

export const AddCampaign = ({ Email }) => {
  const [link, setLink] = useState("");
  const [hashtag, setHashtag] = useState("");

  function handleSubmit() {
    let campaign = { Link: link, Hashtag: hashtag, Email: Email };
    newCampaign(campaign);
    setLink("");
    setHashtag("");
    console.log(link, hashtag, Email);
  }
  return (
    <div>
      <h1>Create new campaign</h1>
      <label className="rightSpace">
        Link to campaign landing page:
        <input
          className="rightSpace"
          type="email"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </label>
      <br />
      <label className="rightSpace">
        Hashtag:
        <input
          className="rightSpace"
          type="text"
          value={hashtag}
          onChange={(e) => setHashtag(e.target.value)}
        />
      </label>
      <br />

      <button
        className="btn btn-primary rightSpace"
        type="submit"
        onClick={() => {
          handleSubmit();
        }}
      >
        Submit
      </button>
    </div>
  );
};
