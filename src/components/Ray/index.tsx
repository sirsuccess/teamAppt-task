import React from "react";

import "./styles.scss";

function Ray() {
  const rays = [1,2,3,4,5,6,7,8,9]
  return (
    <div className="ray-container">
      {
        rays.map(ray=>(
          <div className="ray" key={ray}> </div>
        ))
      }
    </div>
  );
}

export default Ray;
