import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex items-center bg-[#4100B4] w-full h-[98px] px-6 gap-[150px]">
      {/* Search */}
      <div className="relative min-w-[388px] h-[38px]">
        <input
          type="text"
          placeholder="Search by Company, Driver, or Order Number"
          className="w-full h-full pl-4 pr-10 rounded-full text-sm text-black placeholder-gray-500 focus:outline-none"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
          {/* Search Icon */}
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.1441 12.535C11.8739 11.3748 13.1464 8.22136 11.9863 5.49152C10.8261 2.76168 7.67265 1.4892 4.94281 2.64936C2.21297 3.80951 0.94049 6.96297 2.10064 9.69281C3.2608 12.4226 6.41426 13.6951 9.1441 12.535Z"
                stroke="#202224"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8408 11.3887L15.0062 15.5546"
                stroke="#202224"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Notification */}
      <div className="relative min-w-[30px] h-[31.5px] flex items-center justify-center">
        <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.5 19.75C23.3284 19.75 24 20.4216 24 21.25V22.75C24 23.5784 23.3284 24.25 22.5 24.25H1.5C0.671573 24.25 2.41598e-08 23.5784 0 22.75V21.25C0 20.4216 0.671573 19.75 1.5 19.75H4.5L5.55566 10.2529C5.80895 7.97419 7.73459 6.25017 10.0273 6.25H13.9727C16.2654 6.25017 18.1911 7.97419 18.4443 10.2529L19.5 19.75H22.5Z" fill="#4880FF"/>
          <rect opacity="0.9" x="9" y="25.75" width="6" height="6" rx="2.25" fill="white"/>
          <path opacity="0.173224" fillRule="evenodd" clipRule="evenodd" d="M21 18.25C25.9706 18.25 30 14.2206 30 9.25C30 4.27944 25.9706 0.25 21 0.25C16.0294 0.25 12 4.27944 12 9.25C12 14.2206 16.0294 18.25 21 18.25Z" fill="#FF4F4F" fillOpacity="0.6"/>
        </svg>
        <span className="absolute -top-1 -right-1 text-white text-xs bg-red-500 rounded-full px-1">6</span>
      </div>

      {/* Language Dropdown */}
      <select className="min-w-[123px] h-[27px] rounded bg-transparent text-white border border-white px-2 text-sm">
        <option className="text-black">English</option>
        <option className="text-black">Hindi</option>
      </select>

      {/* Profile */}
      <div className="flex items-center gap-2 w-[203px] h-[44px] ml-auto">
        <img
          src="https://via.placeholder.com/44"
          alt="Admin"
          className="w-[44px] h-[44px] rounded-full object-cover"
        />
        <div className="text-white text-sm leading-tight">
          <div className="font-semibold">Admin Name</div>
          <div className="text-xs">Admin</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
