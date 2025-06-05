import React from "react";

const CustomTable = ({
  columns = [],
  data = [],
  renderActions,
  className = "",
  cellClassName = "",
}) => {
  return (
    <div className={`w-full rounded-xl ${className}`}>
      {/* Scroll wrapper constrained to parent width */}
      <div className="relative w-full overflow-x-auto">
        <table className="w-full text-white text-sm border-collapse table-fixed">
          <thead className="sticky top-0 z-1">
            <tr className="bg-[#131060] h-14 text-left">
              {columns.map((col, i) => (
                <th
                  key={i}
                  scope="col"
                  className="px-4 py-3 font-semibold whitespace-nowrap"
                  style={{ width: col.width || `${100 / columns.length}%` }}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="border-t border-white/20 h-16 hover:bg-white/5 transition-colors"
                >
                  {columns.map((col, colIdx) => (
                    <td
                      key={colIdx}
                      className={`px-4 py-3 whitespace-nowrap truncate ${cellClassName}`}
                    >
                      {col.isAction && renderActions
                        ? renderActions(row)
                        : row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-4 py-6 text-center text-white/70"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomTable;