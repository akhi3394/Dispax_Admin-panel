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
      status: <span className="bg-[#6763F1] px-3 py-1 rounded-full text-white text-sm">In transit</span>,
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
      action: <span className="text-2xl">•••</span>,
    },
    // Repeat more rows here if needed...
  ];

const shipmentStats = [
  { label: "Total Shipment", value: 2457, note: "+124 this month", noteColor: "text-[#14AE5C]" },
  { label: "In-Transit", value: 87, note: "42 due today", noteColor: "text-[#6763F1]" },
  { label: "Delivered Shipment", value: 2156, note: "98% on time", noteColor: "text-[#14AE5C]" },
  { label: "Issue Reported", value: 14, note: "5 required attention", noteColor: "text-[#EC221F]" },
];

const TotalShipment = () => {
  const navigate = useNavigate();
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
        <h1 className="text-[22px] font-semibold leading-[33px] font-poppins">Total Shipments</h1>
      </div>

      {/* Dropdown + Stats */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-4">
          <label htmlFor="company" className="text-[#F9F9F9] font-poppins font-medium text-[16px]">
            Monitor Shipment of
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {shipmentStats.map((stat, i) => (
            <div
              key={i}
              className="w-full h-[101px] border border-[#1C1889] rounded-md px-6 py-2"
              style={{
                background: "linear-gradient(167.8deg, #4100B4 0.5%, #1C004E 99.5%)",
              }}
            >
              <div className="font-semibold text-[#BFBFBF] text-[16px]">{stat.label}</div>
              <div className="font-semibold text-[24px] mt-1">{stat.value}</div>
              <div className={`font-semibold text-[16px] mt-1 ${stat.noteColor}`}>{stat.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Table + Pagination */}
      <div className="w-full">
        <CustomTable
          columns={columns}
          data={data}
          renderActions={(row) => row.action} />       
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

export default TotalShipment;
