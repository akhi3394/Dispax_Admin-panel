import React from "react";

const CustomTable = ({
  columns = [],
  data = [],
  renderActions,
  className = "",
  cellClassName = "",
}) => {
  return (
    <div className={`w-full overflow-x-auto rounded-xl ${className}`}>
      <table className="min-w-full text-white text-sm">
        <thead>
          <tr className="bg-[#131060] h-14 text-left">
            {columns.map((col, i) => (
              <th
                key={i}
                className="px-4 font-semibold whitespace-nowrap"
                style={{ width: col.width || "auto" }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-t border-white/20 h-16">
              {columns.map((col, colIdx) => (
                <td
                  key={colIdx}
                  className={`px-4 py-3 whitespace-nowrap ${cellClassName}`}
                >
                  {col.isAction && renderActions
                    ? renderActions(row)
                    : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
