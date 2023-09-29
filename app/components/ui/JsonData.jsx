import React from "react";

const JsonData = ({ data }) => {
  console.log("data: ", data);
  return (
    <div>
      <h2>{data?.title}</h2>
    </div>
  );
};

export default JsonData;
