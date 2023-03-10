import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Chart from './components/pages/Chart';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Page404 from './components/pages/Page404';
import Pricing from './components/pages/Pricing';
import Profile from './components/pages/Profile';
import Table from './components/pages/Table';
import UIElement from './components/pages/UIElement';

const App = () => {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/table" element={<Table />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/ui-element" element={<UIElement />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/404" element={<Page404 />} />
      </Routes>
    </Router>
  </>);
}

export default App;
