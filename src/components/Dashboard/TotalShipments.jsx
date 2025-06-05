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
      action: <span className="text-2xl">
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.2901 9.06063C16.5201 9.06063 15.0801 7.62062 15.0801 5.85062C15.0801 4.08062 16.5201 2.64062 18.2901 2.64062C20.0601 2.64062 21.5001 4.08062 21.5001 5.85062C21.5001 7.62062 20.0601 9.06063 18.2901 9.06063ZM18.2901 4.13063C17.3501 4.13063 16.5801 4.90062 16.5801 5.84063C16.5801 6.78062 17.3501 7.55062 18.2901 7.55062C19.2301 7.55062 20.0001 6.78062 20.0001 5.84063C20.0001 4.90062 19.2301 4.13063 18.2901 4.13063Z" fill="white"/>
<path d="M7.21001 9.06063C5.44001 9.06063 4 7.62062 4 5.85062C4 4.08062 5.44001 2.64062 7.21001 2.64062C8.98001 2.64062 10.42 4.08062 10.42 5.85062C10.42 7.62062 8.98001 9.06063 7.21001 9.06063ZM7.21001 4.13063C6.27001 4.13063 5.5 4.90062 5.5 5.84063C5.5 6.78062 6.27001 7.55062 7.21001 7.55062C8.15001 7.55062 8.92 6.78062 8.92 5.84063C8.92 4.90062 8.16001 4.13063 7.21001 4.13063Z" fill="white"/>
<path d="M18.2901 21.3692C16.5201 21.3692 15.0801 19.9292 15.0801 18.1592C15.0801 16.3892 16.5201 14.9492 18.2901 14.9492C20.0601 14.9492 21.5001 16.3892 21.5001 18.1592C21.5001 19.9292 20.0601 21.3692 18.2901 21.3692ZM18.2901 16.4392C17.3501 16.4392 16.5801 17.2092 16.5801 18.1492C16.5801 19.0892 17.3501 19.8592 18.2901 19.8592C19.2301 19.8592 20.0001 19.0892 20.0001 18.1492C20.0001 17.2092 19.2301 16.4392 18.2901 16.4392Z" fill="white"/>
<path d="M7.21001 21.3692C5.44001 21.3692 4 19.9292 4 18.1592C4 16.3892 5.44001 14.9492 7.21001 14.9492C8.98001 14.9492 10.42 16.3892 10.42 18.1592C10.42 19.9292 8.98001 21.3692 7.21001 21.3692ZM7.21001 16.4392C6.27001 16.4392 5.5 17.2092 5.5 18.1492C5.5 19.0892 6.27001 19.8592 7.21001 19.8592C8.15001 19.8592 8.92 19.0892 8.92 18.1492C8.92 17.2092 8.16001 16.4392 7.21001 16.4392Z" fill="white"/>
</svg>

      </span>,
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
