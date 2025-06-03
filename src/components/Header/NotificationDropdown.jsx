import { useState } from "react";

const NotificationDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSettingsClick = () => console.log("Settings clicked");
  const handleMailClick = () => console.log("Mail clicked");
  const handleTransactionClick = () => console.log("Transaction clicked");

  return (
    <>
      {/* Overlay for background dim */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-10"
        />
      )}

      <div className="relative z-20">
        {/* Notification Icon */}
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer relative flex justify-center">
          <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 2C9.477 2 5 6.477 5 12V17C5 18.3261 4.47321 19.5979 3.53553 20.5355L2 22H28L26.4645 20.5355C25.5268 19.5979 25 18.3261 25 17V12C25 6.477 20.523 2 15 2Z" fill="#fff" />
            <circle cx="15" cy="27" r="3" fill="#fff" />
          </svg>
          <span className="absolute -top-1 -right-1 text-white text-xs bg-red-500 rounded-full px-1">3</span>
        </div>

        {isOpen && (
          <div
            className="absolute top-12 left-1/2 transform -translate-x-1/2 w-[254px] rounded-[16px] z-30 p-4"
            style={{
              background: "linear-gradient(167.8deg, #4100B4 0.5%, #1C004E 99.5%)",
              boxShadow: "0px 4px 40px 0px #FFFFFF40",
            }}
          >
            {/* Header */}
            <p className="text-white text-[15px] font-bold mb-4">Notification</p>
            <div className="border-b border-[#979797] opacity-50 mb-4" />

            {/* Item 1 */}
            <div className="flex items-start gap-3 mb-4 cursor-pointer" onClick={handleSettingsClick}>
              <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center"
                   style={{ background: "linear-gradient(180deg, #4E96FF 0%, #80C9FC 100%)" }}>
                <img src="/headericons/settings.svg" alt="Settings" className="w-[13px] h-[16px]" />
              </div>
              <div>
                <p className="text-white text-[14px] font-semibold">Settings</p>
                <p className="text-[#B5B5B5] text-[12px] font-semibold">Update Dashboard</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start gap-3 mb-4 cursor-pointer" onClick={handleMailClick}>
              <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center"
                   style={{ background: "linear-gradient(180deg, #F97FD9 0%, #FFC1E6 100%)" }}>
                <img src="/headericons/eventupdate.svg" alt="Event" className="w-[13px] h-[16px]" />
              </div>
              <div>
                <p className="text-white text-[14px] font-semibold">Event update</p>
                <p className="text-[#B5B5B5] text-[12px] font-semibold">An event date update again</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start gap-3 mb-4 cursor-pointer" onClick={handleMailClick}>
              <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center"
                   style={{ background: "linear-gradient(180deg, #9E8FFF 0%, #EBCBFF 100%)" }}>
                <img src="/headericons/profile.svg" alt="Profile" className="w-[13px] h-[16px]" />
              </div>
              <div>
                <p className="text-white text-[14px] font-semibold">Profile</p>
                <p className="text-[#B5B5B5] text-[12px] font-semibold">Update your profile</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex items-start gap-3 mb-4 cursor-pointer" onClick={handleTransactionClick}>
              <div className="w-[34px] h-[34px] rounded-full flex items-center justify-center"
                   style={{ background: "linear-gradient(180deg, #FF8F8F 0%, #FFC1C1 100%)" }}>
                <img src="/headericons/applicationerror.svg" alt="Error" className="w-[13px] h-[16px]" />
              </div>
              <div>
                <p className="text-white text-[14px] font-semibold">Application error</p>
                <p className="text-[#B5B5B5] text-[12px] font-semibold">Check your running application</p>
              </div>
            </div>

            <div className="border-t border-[#979797] opacity-50 mt-4" />
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationDropdown;
