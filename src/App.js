import { useEffect, useState } from "react";
import Article from "./Article";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("webdev");

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`).then((res) => {
      if (res.status !== 200) {
        console.log("Error!");
        return;
      }
      res.json().then((data) => {
        if (data) {
          console.log(data);
          setArticles(data.data.children);
        }
      });
    });
  }, [subreddit]);

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          className="input"
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
        />
      </header>
      <div className="articles">
        {articles
          ? articles.map((article) => (
              <Article key={uuidv4()} article={article.data} />
            ))
          : ""}
      </div>
    </div>
  );
}
