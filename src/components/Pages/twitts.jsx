import React, { useState, useEffect } from "react";
import { getTweets, tweet } from "../services/service";

import "./style.css";
export const Twitts = ({ Email }) => {
  //Social Activist
  const [tweetsArr, setTweets] = useState([]);

  const tweetsData = async () => {
    let tweet = await getTweets(Email);
    setTweets(tweet);
    console.log(tweet);
    console.log(tweetsArr);
  };
  const handleSubmit = async (Tweet) => {
    console.log(Tweet);
    await tweet(Tweet);
    await tweetsData();
  };
  useEffect(() => {
    tweetsData();
  }, []);
  return (
    <div>
      {console.log(tweetsArr)}
      {tweetsArr && tweetsArr.length > 0 ? (
        <div>
          <h1>Tweets Posted</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Text</th>
                <th scope="col">Number Times Tweeted</th>
                <th scope="col">Campaign Hashtag</th>
                <th scope="col">ReTweet</th>
              </tr>
            </thead>
            <tbody>
              {tweetsArr.map((Tweet) => {
                return (
                  <tr>
                    <th scope="row">{Tweet.Text}</th>
                    <th>{Tweet.TimesTweeted}</th>
                    <th>{Tweet.Campaign_Hashtag}</th>
                    <th>
                      <button
                        type="button"
                        class="btn btn-primary"
                        onClick={() => {
                          handleSubmit(Tweet);
                        }}
                      >
                        ReTweet
                      </button>
                    </th>
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
