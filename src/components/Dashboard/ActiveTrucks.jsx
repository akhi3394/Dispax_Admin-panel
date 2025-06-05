const ActiveTrucksData = () => {
  return (
    <div className="text-white w-full p-6">
      <div className="flex items-center gap-6 w-[254px] h-[42px] mt-[37px] ml-[16px]">
        <img
          src="/dashboardicons/backbutton.svg"
          alt="Back"
          className="w-[42px] h-[42px] rounded-full cursor-pointer"
          onClick={() => window.history.back()}
        />
        <h1 className="text-[22px] font-semibold leading-[33px] font-poppins">
          Active Trucks
        </h1>
      </div>
    </div>
  );
};

export default ActiveTrucksData;
