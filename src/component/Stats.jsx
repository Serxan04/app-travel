import React, { Fragment } from "react";

const Stats = ({ items }) => {
  const num = items.length;
  const toplanmislar = items.filter((item) => item.packed).length;
  const faiz = Math.trunc((toplanmislar / num) * 100);
  return (
    <Fragment>
      <footer className="stats">
        <em>
          💼 Cantanda {num} element var. Ve heleki {toplanmislar} (
          {toplanmislar === 0 ? "" : faiz}%)qederini toplamisan.{" "}
        </em>
      </footer>
    </Fragment>
  );
};

export default Stats;
