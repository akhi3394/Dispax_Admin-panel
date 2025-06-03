import React, { useState } from "react";
import CustomTable from "../../hooks/CustomTable";
import CustomPagination from "../../hooks/CustomPagination";

const columns = [
  { header: "Company", accessor: "company" },
  { header: "Status", accessor: "status" },
  { header: "Driver", accessor: "driver" },
  { header: "Trucks", accessor: "trucks" },
  { header: "Last Activity", accessor: "lastActivity" },
  { header: "Subscription", accessor: "subscription" },
//   { header: "Actions", accessor: "actions", isAction: true },
];

const rows = [
  {
    company: "Global Express Shipping",
    status: <span className="bg-[#1AB759] text-white text-xs px-3 py-1 rounded-full">Active</span>,
    driver: 89,
    trucks: 75,
    lastActivity: "2 minutes ago",
    subscription: <span className="bg-[#1E1B74] text-white text-xs px-3 py-1 rounded-full">Premium</span>,
  },
  {
    company: "QuickHaul Transport",
    status: <span className="bg-[#F4C045] text-white text-xs px-3 py-1 rounded-full">In-Active</span>,
    driver: "Los-Angeles Port",
    trucks: "Chicago Terminal",
    lastActivity: "2 minutes ago",
    subscription: <span className="bg-[#0F0D42] text-white text-xs px-3 py-1 rounded-full">Standard</span>,
  },
  // Add more rows as needed
];

const ActiveTrucks = () => {
  const [page, setPage] = useState(1);

  return (
      <>
      <h2 className="text-white text-[22px] font-semibold mb-3">Active Truck & Drivers</h2>
      <div className=" rounded-xl w-full">
          <CustomTable
              columns={columns}
              data={rows}
              renderActions={() => (
                  <button className="text-sm text-blue-400 underline">View</button>
              )}
              className="bg-[#131060]" />

        <div className="flex justify-between">
              <p className="text-white mt-4">Showing {rows.length} out of 120 result</p>

          <CustomPagination
              currentPage={page}
              totalPages={10}
              onPageChange={setPage}
              className="mt-2" />
        </div>
      </div></>
  );
};

export default ActiveTrucks;
