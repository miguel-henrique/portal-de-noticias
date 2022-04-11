import React from "react";

import { truncStr } from "./utils";

const MovieCard = props => {
  const { title, articles } = props.item;

  return (
    <div>

      <div>
        <h5>{movie.articles[0].title}</h5>
      </div>
        <h3>{truncStr(title, 19)}</h3>

    </div>
  );
};

export default MovieCard;
