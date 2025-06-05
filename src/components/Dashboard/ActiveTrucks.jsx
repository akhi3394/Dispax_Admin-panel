import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../hooks/CustomTable";
import CustomPagination from "../../hooks/CustomPagination";

const columns = [
  { header: "Shipment ID", accessor: "id" },
  { header: "Customer", accessor: "customer" },
  { header: "Route", accessor: "route" },
  { header: "Status", accessor: "status" },
  { header: "Driver/Truck", accessor: "driver" },
  { header: "Date", accessor: "date" },
  { header: "Weight", accessor: "weight" },
  { header: "Action", accessor: "action", isAction: true },
];

const data = [
  {
    id: "SIP #89745564",
    customer: "John Smith",
    route: "From Chicago, IL to Newyork, NY",
    status: (
      <span className="bg-[#6763F1] px-3 py-1 rounded-full text-white text-sm">
        In transit
      </span>
    ),
    driver: (
      <div>
        <div className="font-semibold">TRK-2548</div>
        <div className="text-xs">John Smith</div>
      </div>
    ),
    date: (
      <div className="text-xs">
        Expected <br /> 2025/05/05
      </div>
    ),
    weight: "5,200 lbs",
    action: (
      <span className="text-2xl">
        {/* SVG icon */}
      </span>
    ),
  },
];

const ActiveTrucksData = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("Trucks");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  return (
    <div className="text-white w-full p-6">
      {/* Back Button + Heading */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/dashboardicons/backbutton.svg"
          alt="Back"
          className="w-[42px] h-[42px] rounded-full cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-[22px] font-semibold leading-[33px] font-poppins">
          Truck & Drivers
        </h1>
      </div>

      {/* Dropdown */}
      <div className="flex items-center gap-4 mb-6">
        <label
          htmlFor="company"
          className="text-[#F9F9F9] font-poppins font-medium text-[16px]"
        >
          Monitor Trucks/Drivers of
        </label>
        <select
          id="company"
          className="w-[244px] h-[56px] rounded-[8px] bg-[#F7F7F7] text-black px-4"
        >
          <option value="Company A">Company A</option>
          <option value="Company B">Company B</option>
          <option value="Company C">Company C</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="w-full overflow-hidden mb-6 relative h-[52px]">
        <div className="absolute top-[2px] left-[2px] flex">
          {/* Trucks Tab */}
          <div
            onClick={() => setSelectedTab("Trucks")}
            className={`w-[220px] h-[48px]  flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
              selectedTab === "Trucks"
                ? "bg-[#0A0666] text-white"
                : "bg-[#0E0C3A] text-white"
            }`}
          >
            Trucks
          </div>

          {/* Drivers Tab */}
          <div
            onClick={() => setSelectedTab("Drivers")}
            className={`w-[220px] h-[48px] flex items-center justify-center font-semibold text-[22px] cursor-pointer ${
              selectedTab === "Drivers"
                ? "bg-[#0A0666] text-white"
                : "bg-[#0E0C3A] text-[#BFBFBF]"
            }`}
          >
            Drivers
          </div>
        </div>
      </div>

      {/* Table + Pagination */}
      <div className="w-full">
        <CustomTable columns={columns} data={data} renderActions={(row) => row.action} />
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-white/70">Showing 6 out of 120 results</p>
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ActiveTrucksData;
