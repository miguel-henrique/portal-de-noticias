import React from "react";

import { truncStr } from "./utils";

const MovieCard = props => {
  const { title, vote_average } = props.item;

  return (
    <div>
      <div>
        <span >{vote_average}</span>
      </div>

      <div>
        <h3 >{truncStr(title, 19)}</h3>
      </div>
    </div>
  );
};

export default MovieCard;
