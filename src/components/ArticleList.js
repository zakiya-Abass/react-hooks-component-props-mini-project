import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  // console.log("ArticleList", posts);

  const articlesList = posts.map((member) => (
    <Article
      key={member.id}
      title={member.title}
      date={member.date}
      preview={member.preview}
      minutes={member.minutes}
    />
  ));

  return <main>{articlesList}</main>;
}

export default ArticleList;
