import React, { useState, useEffect } from "react";
import { getAllTweets } from "../services/service";
import "./style.css";
export const AllTwitts = ({ Email }) => {
  //Social Activist
  const [tweetsArr, setTweets] = useState([]);

  const tweetsData = async () => {
    let tweet = await getAllTweets();
    setTweets(tweet);
    console.log(tweet);
    console.log(tweetsArr);
  };

  useEffect(() => {
    tweetsData();
  }, []);
  return (
    <div>
      {console.log(tweetsArr.length)}
      {tweetsArr && tweetsArr.length > 0 ? (
        <div>
          <h1>All Tweets Posted</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Text</th>
                <th scope="col">Number Times Tweeted</th>
                <th scope="col">Campaign Hashtag</th>
              </tr>
            </thead>
            <tbody>
              {tweetsArr.map((Tweet) => {
                return (
                  <tr>
                    <th scope="row">{Tweet.Text}</th>
                    <th>{Tweet.TimesTweeted}</th>
                    <th>{Tweet.Campaign_Hashtag}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>No tweets yet</h1>
      )}
    </div>
  );
};
