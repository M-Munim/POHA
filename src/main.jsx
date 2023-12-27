import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Dashmain from './Components/Dashboard/Dashmain.jsx';
import DashboardLayout from './DashLayout.jsx';
import Bio from './Components/Dashboard/Subjects/Bio.jsx';
import BioPracticals from './Components/Dashboard/BioPracticals/BioPracticals.jsx';
import Chem from './Components/Dashboard/Subjects/Chem.jsx';
import ChemPracticals from './Components/Dashboard/ChemPracticals/ChemPracticals.jsx';
import Physics from './Components/Dashboard/Subjects/Physics.jsx';
import PhyPracticals from './Components/Dashboard/PhyPracticals/PhyPracticals.jsx';
import Emf from './Components/Dashboard/PhyPracticals/Phy9th/Emf.jsx';
import EmfExp from './Components/Dashboard/PhyPracticals/Phy9thexplained/EmfExp.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="Dashmain/*"
          element={
            <DashboardLayout>
              <Routes>
                <Route index element={<Dashmain />} />
                {/* Add a new route for Practicals */}
                <Route path="physics" element={<Physics />} />
                <Route path="phypracticals" element={<PhyPracticals />} />
                <Route path="emf" element={<Emf />} />
                <Route path="EmfExp" element={<EmfExp />} />
                <Route path="bio" element={<Bio />} />
                <Route path="biopracticals" element={<BioPracticals />} />
                <Route path="chem" element={<Chem />} />
                <Route path="chempracticals" element={<ChemPracticals />} />
              </Routes>
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
