import React, { useState } from "react";

import SearchIcon from "../../assets/images/search.svg"

const Search = () => {
  const [name, setName] = useState("");

  return (
    <form className="search">
      <div className="form-control">
        {name ? (
          <i className="ph-arrow-left"></i>
        ) : (
          <img src={SearchIcon} alt="Whatsapp-Clone" />
        )}
        <input
          type="text"
          id="name"
          placeholder="Search or start new chat"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="close">
          <i className="ph-x" onClick={() => setName("")}></i>
        </span>
      </div>
    </form>
  );
};

export default Search;
