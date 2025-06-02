import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col pl-[248px]">
        <Header />
        <div className="flex-1 overflow-y-auto pt-[98px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;