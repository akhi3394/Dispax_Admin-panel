import { useNavigate } from "react-router-dom";
import ActiveTrucks from "./ActiveTrucks";
import DashboardWidgets from "./dashboardGraphs";
import LiveTrackingMap from "./LiveTrackingMap";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5 w-full relative p-6 text-white">
      <div className="grid grid-cols-3 gap-[10px] cursor-pointer">
        <div
          className="bg-[linear-gradient(167.8deg,_#4100B4_0.5%,_#1C004E_99.5%)] border border-[#1C1889] rounded-lg w-full h-[146px] flex items-center justify-between px-5"
          onClick={() => navigate('/dashboard/active-company')}
        >
          <div>
            <h3 className="text-[20px] font-medium text-[#BFBFBF] mb-1">Active Company</h3>
            <p className="text-[32px] font-semibold text-white">18</p>
          </div>
          <img src="/dashboardicons/activecompany.svg" alt="Active Company" className="w-[62px] h-[62px]" />
        </div>

        <div
          className="bg-[linear-gradient(167.8deg,_#4100B4_0.5%,_#1C004E_99.5%)] border border-[#1C1889] rounded-lg w-full h-[146px] flex items-center justify-between px-5"
          onClick={() => navigate('/dashboard/total-shipments')}
        >
          <div>
            <h3 className="text-[20px] font-medium text-[#BFBFBF] mb-1">Total Shipments</h3>
            <p className="text-[32px] font-semibold text-white">2,587</p>
          </div>
          <img src="/dashboardicons/totalshipments.svg" alt="Total Shipments" className="w-[62px] h-[62px]" />
        </div>

        <div
          className="bg-[linear-gradient(167.8deg,_#4100B4_0.5%,_#1C004E_99.5%)] border border-[#1C1889] rounded-lg w-full h-[146px] flex items-center justify-between px-5"
          onClick={() => navigate('/dashboard/active-trucks')}
        >
          <div>
            <h3 className="text-[20px] font-medium text-[#BFBFBF] mb-1">Active Trucks</h3>
            <p className="text-[32px] font-semibold text-white">187</p>
          </div>
          <img src="/dashboardicons/activetrucks.svg" alt="Active Trucks" className="w-[62px] h-[62px]" />
        </div>

        <div
          className="bg-[linear-gradient(167.8deg,_#4100B4_0.5%,_#1C004E_99.5%)] border border-[#1C1889] rounded-lg w-full h-[146px] flex items-center justify-between px-5"
          onClick={() => navigate('/dashboard/active-drivers')}
        >
          <div>
            <h3 className="text-[20px] font-medium text-[#BFBFBF] mb-1">Active Drivers</h3>
            <p className="text-[32px] font-semibold text-white">285</p>
          </div>
          <img src="/dashboardicons/activedrivers.svg" alt="Active Drivers" className="w-[62px] h-[62px]" />
        </div>

        <div
          className="bg-[linear-gradient(167.8deg,_#4100B4_0.5%,_#1C004E_99.5%)] border border-[#1C1889] rounded-lg w-full h-[146px] flex items-center justify-between px-5"
          onClick={() => navigate('/dashboard/order-status')}
        >
          <div>
            <h3 className="text-[20px] font-medium text-[#BFBFBF] mb-1 leading-[1.2]">
              Pending Orders &<br />Completed Order
            </h3>
            <p className="text-[32px] font-semibold text-white">2,587</p>
          </div>
          <img src="/dashboardicons/pendingorcompleted.svg" alt="Pending/Completed" className="w-[62px] h-[62px]" />
        </div>

        <div
          className="bg-[linear-gradient(167.8deg,_#4100B4_0.5%,_#1C004E_99.5%)] border border-[#1C1889] rounded-lg w-full h-[146px] flex items-center justify-between px-5"
          onClick={() => navigate('/dashboard/revenue')}
        >
          <div>
            <h3 className="text-[20px] font-medium text-[#BFBFBF] mb-1">Revenue & Subscription</h3>
            <p className="text-[32px] font-semibold text-white">$98,875</p>
          </div>
          <img src="/dashboardicons/revenue.svg" alt="Revenue" className="w-[62px] h-[62px]" />
        </div>
      </div>

      <DashboardWidgets />
      <ActiveTrucks />
      <LiveTrackingMap />
    </div>
  );
};

export default Dashboard;
