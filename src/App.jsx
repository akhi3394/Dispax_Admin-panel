import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import ManageCompany from './pages/ManageCompany/ManageCompany';
import OrderShipping from './pages/OrderShipping/OrderShipping';
import InvoicePayment from './pages/InvoicePayment/InvoicePayment';
import ReportsData from './pages/ReportsData/ReportsData';
import Customization from './pages/Customization/Customization';
import UserRole from './pages/UserRole/UserRole';
import Support from './pages/Support/Support';
import Security from './pages/Security/Security';
import { Provider } from 'react-redux';
import store from './redux/store';
import ActiveCompany from './components/Dashboard/ActiveCompany';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div
          className="min-h-screen w-full"
          style={{
            background: 'radial-gradient(circle at center, #080625 100%, #6F1AFF 0%)',
          }}
        >
          <Routes>
            {/* Routes without Sidebar and Header */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/" element={<Login />} />

            {/* Routes with Sidebar and Header */}
            <Route element={<Layout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/manage-company" element={<ManageCompany />} />
              <Route path="/order-shipping" element={<OrderShipping />} />
              <Route path="/invoice-payment" element={<InvoicePayment />} />
              <Route path="/reports-data" element={<ReportsData />} />
              <Route path="/customization" element={<Customization />} />
              <Route path="/user-role" element={<UserRole />} />
              <Route path="/support" element={<Support />} />
              <Route path="/security" element={<Security />} />
              <Route path="/dashboard/active-company" element={<ActiveCompany/>} /> 
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;