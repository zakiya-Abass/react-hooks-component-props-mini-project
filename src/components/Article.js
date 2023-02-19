import { render } from "@testing-library/react";
import react from "react";

function Article(props) {
  render(
    <Article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </Article>
  );
}
