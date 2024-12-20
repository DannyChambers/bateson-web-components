// --------------------------------------------
// Table -> Component
// --------------------------------------------

import React from "react";
import clsx from "clsx";
import styles from "./Table.module.css";

// --------------------------------------------
// Types
// --------------------------------------------

export interface TableProps {
  headers: string[];
  data: Array<Record<string, any>>; // Adjust to accept any type
  hideHeaders?: boolean;
  appearance?: "body-1" | "body-2" | "body-3";
}

// --------------------------------------------
// Component
// --------------------------------------------

const Table: React.FC<TableProps> = ({
  headers,
  data,
  hideHeaders = false,
  appearance = "body-2",
}) => {
  return (
    <table
      data-component="Table"
      className={clsx(
        styles.table,
        hideHeaders && styles["table--noheaders"],
        styles[`table--${appearance}`],
      )}
    >
      {!hideHeaders && (
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.keys(row).map((key, cellIndex) => (
              <td key={cellIndex}>
                {/* Render React elements or values */}
                {typeof row[key] === "object" ? row[key] : String(row[key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// --------------------------------------------
// Export
// --------------------------------------------

export default Table;
