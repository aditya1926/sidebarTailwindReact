import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex justify-center  w-full ">
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
