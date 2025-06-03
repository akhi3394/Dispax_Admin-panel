import { useState } from "react";
import manageIcon from "../../../public/headericons/manageaccount.svg";
import passwordIcon from "../../../public/headericons/changepassword.svg";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 w-[203px] h-[44px] cursor-pointer">
        <img src="https://via.placeholder.com/44" alt="Admin" className="w-[44px] h-[44px] rounded-full object-cover" />
        <div className="text-white text-sm leading-tight">
          <div className="font-bold text-[14px]">Admin Name</div>
          <div className="text-[12px] font-semibold">Admin</div>
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 top-12 w-[205px] h-[96px] rounded-[14px] z-20 p-2 flex flex-col justify-around"
          style={{
            background: "linear-gradient(167.8deg, #4100B4 0.5%, #1C004E 99.5%)",
            boxShadow: "0px 4px 40px 0px #FFFFFF40",
          }}
        >
          <div className="flex items-center gap-2 px-3 py-2 text-white text-[14px] font-semibold cursor-pointer">
            <img src={manageIcon} className="w-[18px] h-[16px]" alt="Manage" />
            Manage Account
          </div>
          <div className="flex items-center gap-2 px-3 py-2 text-white text-[14px] font-semibold cursor-pointer">
            <img src={passwordIcon} className="w-[18px] h-[16px]" alt="Password" />
            Change Password
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
