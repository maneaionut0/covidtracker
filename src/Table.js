import React from "react";
import numeral from "numeral";
import { v4 as uuidv4 } from "uuid";

import "./Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases, index }) => (
        <tr key={index}>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format(",")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
