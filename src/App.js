import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SalesVsOrdersChart from './components/SalesVsOrdersChart';
import PortionOfSalesChart from './components/PortionOfSalesChart';

function App() {
  return (
    <div className="App">
      {/* <Dashboard/> */}
      <div className='dashboard-container'>
        <Header/>
        <Sidebar/>
        <div className='dashboard-content dashboard-content-with-sidebar'>
          <div className="charts-row">
          <SalesVsOrdersChart/>
          <PortionOfSalesChart/> 
          </div>
          

        </div>
      </div>
        
    </div>
  );
}

export default App;
