import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: 'sidebaricons/dashboard.svg' },
    { label: 'Manage Company', path: '/manage-company', icon: 'sidebaricons/managecompanysvg.svg' },
    { label: 'Order & Shipping', path: '/order-shipping', icon: 'sidebaricons/orderandshimpment.svg' },
    { label: 'Invoice & Payment', path: '/invoice-payment', icon: 'sidebaricons/invoice.svg' },
    { label: 'Reports & Data', path: '/reports-data', icon: 'sidebaricons/reportsanddata.svg' },
    { label: 'Customization', path: '/customization', icon: 'sidebaricons/customization.svg' },
    { label: 'User & Role', path: '/user-role', icon: 'sidebaricons/userandrole.svg' },
    { label: 'Support', path: '/support', icon: 'sidebaricons/support.svg' },
    { label: 'Security', path: '/security', icon: 'sidebaricons/security.svg' }
  ];

  return (
    <div className="w-[260px] bg-[#4100B4] p-5 flex flex-col justify-between">
      {/* Center the logo */}
      <div className="flex justify-center mt-6 mb-8">
        <img src="/LogoDispax.png" alt="Dispax Logo" className="w-[144px] h-[54px]" />
      </div>

      {/* Navigation */}
      <ul className="list-none p-0">
        {navItems.map(item => (
          <li key={item.path} className="flex justify-center mb-2">
            <Link
              to={item.path}
              className={`w-[220px] flex items-center gap-3 p-4 rounded transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-white text-[#000] font-medium'
                  : 'text-white'
              }`}
            >
              <img src={`/${item.icon}`} alt={`${item.label} icon`} className="w-5 h-5" />
              <span className="text-[16px]">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Logout */}
      <Link
        to="/login"
        className="border border-white text-white text-center py-2 rounded w-full mt-4 flex items-center gap-5 mx-3"
      >
         <img src='sidebaricons/logout.svg' alt='logout' className="w-5 h-5" />
        Logout
      </Link>
    </div>
  );
};

export default Sidebar;
