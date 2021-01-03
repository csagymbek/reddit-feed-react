export default function Article({ article }) {
  return (
    <article>
      <a href={`https://www.reddit.com${article.permalink}`} target="_blank">
        <h3>{article.title}</h3>
      </a>
    </article>
  );
}
