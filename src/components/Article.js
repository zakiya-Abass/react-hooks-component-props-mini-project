import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  function emojiFunction(minutes) {
    let emojiArray = [];

    if (minutes < 30) {
      for (let i = 0; i < Math.ceil(minutes / 5); i++)
        emojiArray.push(<span key={i}>☕️</span>);
    } else {
      for (let i = 0; i < Math.ceil(minutes / 10); i++)
        emojiArray.push(<span key={i}>🍱</span>);
    }

    return emojiArray;
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <small> &bull; </small>
      <small>
        {emojiFunction(minutes)} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
