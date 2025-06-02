const Dashboard = () => {
  return (
    <div className="flex flex-col gap-5 w-full text-white">
      <div className="grid grid-cols-3 gap-5">
        <div className="bg-sidebar-header-bg p-5 rounded-lg text-center">
          <h3 className="text-base mb-2">Active Company</h3>
          <p className="text-2xl font-bold">18</p>
        </div>
        <div className="bg-sidebar-header-bg p-5 rounded-lg text-center">
          <h3 className="text-base mb-2">Total Shippings</h3>
          <p className="text-2xl font-bold">2,587</p>
        </div>
        <div className="bg-sidebar-header-bg p-5 rounded-lg text-center">
          <h3 className="text-base mb-2">Active Trucks</h3>
          <p className="text-2xl font-bold">187</p>
        </div>
        <div className="bg-sidebar-header-bg p-5 rounded-lg text-center">
          <h3 className="text-base mb-2">Active Drivers</h3>
          <p className="text-2xl font-bold">285</p>
        </div>
        <div className="bg-sidebar-header-bg p-5 rounded-lg text-center">
          <h3 className="text-base mb-2">Pending Orders & Completed Order</h3>
          <p className="text-2xl font-bold">2,587</p>
        </div>
        <div className="bg-sidebar-header-bg p-5 rounded-lg text-center">
          <h3 className="text-base mb-2">Revenue & Subscription</h3>
          <p className="text-2xl font-bold">$98,875</p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="bg-sidebar-header-bg p-5 rounded-lg flex-1">
          <h3 className="text-lg mb-2">Activity Overview</h3>
          <p className="text-sm mb-5">Shipment and Deliveries over time</p>
          <div className="h-48 bg-gray-700 flex items-center justify-center rounded">Graph Placeholder</div>
        </div>
        <div className="bg-sidebar-header-bg p-5 rounded-lg flex-1">
          <h3 className="text-lg mb-2">Order Overview</h3>
          <p className="text-sm mb-5">Revenue: $45,895</p>
          <div className="h-48 bg-gray-700 flex items-center justify-center rounded">Graph Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
