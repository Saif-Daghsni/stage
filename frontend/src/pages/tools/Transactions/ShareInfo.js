import React, { useState } from "react";
import "./ShareInfo.css";

const ShareInfo = () => {
  const [selected, setselected] = useState(false);
  return (
    <div
      className={selected ? "ShareInfo-active" : "ShareInfo-inactive"}
      onClick={() => setselected(!selected)}
    >
      <div className="ShareInfo-div-img">
        <img src="/Users/Avatar.png" alt="Avatar" />
      </div>

      <div className="ShareInfo-name">
        <h5>Tony Reichert</h5>
      </div>

      <label
        className="ShareInfo-checkbox"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="checkbox"
          className="prixcheckbox"
          checked={selected}
          onChange={() => setselected(!selected)}
          name="agree"
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default ShareInfo;
