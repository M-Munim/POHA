import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import Dashmain from './Components/Dashboard/Dashmain.jsx';
import DashboardLayout from './DashLayout.jsx';
import BioPracticals from './Components/Dashboard/BioPracticals/BioPracticals.jsx';
import ChemPracticals from './Components/Dashboard/ChemPracticals/ChemPracticals.jsx';
import PhyPracticals from './Components/Dashboard/PhyPracticals/PhyPracticals.jsx';
import EmfExp12 from './Components/Dashboard/PhyPracticals/Phy12thexplained/EmfExp12.jsx';
import OhmExp12 from "./Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/OhmExp12.jsx";
import PotentiometerExp12 from "./Components/Dashboard/PhyPracticals/Phy12thexplained/PotentiometerExp12.jsx"
import OhmExp11 from './Components/Dashboard/PhyPracticals/Phy11thexplained/OhmExp11.jsx';
import Procedure from "./Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Procedure.jsx"
import Animation from "./Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Animation.jsx"
import Theory from "./Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Theory.jsx"
import OhmExp12Outlet from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/OhmExp12Outlet.jsx';
import Simulator from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Simulator.jsx';
import Video from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Video.jsx';
import VivaVoice from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/VivaVoice.jsx';
import Resources from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Resources.jsx';
import Feedback from './Components/Dashboard/PhyPracticals/Phy12thexplained/OhmExp12/NavPages/Feedback.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="Dashmain/*" element={
          <DashboardLayout>
            <Routes>
              <Route index element={<Dashmain />} />
              {/* Add a new route for Practicals */}

              <Route path="phypracticals/*" element={
                <Routes>
                  <Route index element={<PhyPracticals />} />
                  <Route path="OhmExp12/*" element={
                    <OhmExp12Outlet>
                      <Routes>
                        {/* <Route index element={<OhmExp12 />} /> */}
                        <Route path="theory" element={<Theory />} />
                        <Route path="procedure" element={<Procedure />} />
                        <Route path="animation" element={<Animation />} />
                        <Route path="simulator" element={<Simulator />} />
                        <Route path="simulator" element={<Simulator />} />
                        <Route path="video" element={<Video />} />
                        <Route path="viva" element={<VivaVoice />} />
                        <Route path="resources" element={<Resources />} />
                        <Route path="feedback" element={<Feedback />} />
                      </Routes>
                    </OhmExp12Outlet>
                  }

                  />


                  {/* <Route path="EmfExp12" element={<EmfExp12 />} />
                  <Route path="PotentiometerExp12" element={<PotentiometerExp12 />} />
                  <Route path="OhmExp11" element={<OhmExp11 />} /> */}
                </Routes>
              } />


              {/* <Route path="emf" element={<Emf />} /> */}


              {/* <Route path="bio" element={<Bio />} />
                <Route path="biopracticals" element={<BioPracticals />} />
                <Route path="chem" element={<Chem />} />
                <Route path="chempracticals" element={<ChemPracticals />} /> */}
            </Routes>
          </DashboardLayout>
        }
        />
      </Routes>
    </Router >
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





























// *********************************************
// import './index.css'
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Layout from './Layout.jsx';
// import Home from './Components/Home/Home.jsx';
// import Dashmain from './Components/Dashboard/Dashmain.jsx';
// import DashboardLayout from './DashLayout.jsx';
// import Bio from './Components/Dashboard/Subjects/Bio.jsx';
// import BioPracticals from './Components/Dashboard/BioPracticals/BioPracticals.jsx';
// import Chem from './Components/Dashboard/Subjects/Chem.jsx';
// import ChemPracticals from './Components/Dashboard/ChemPracticals/ChemPracticals.jsx';
// import Physics from './Components/Dashboard/Subjects/Physics.jsx';
// import PhyPracticals from './Components/Dashboard/PhyPracticals/PhyPracticals.jsx';
// import Emf from './Components/Dashboard/PhyPracticals/Phy9th/Emf.jsx';
// import EmfExp from './Components/Dashboard/PhyPracticals/Phy9thexplained/EmfExp.jsx';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//         </Route>
//         <Route path="Dashmain/*"
//           element={
//             <DashboardLayout>
//               <Routes>
//                 <Route index element={<Dashmain />} />
//                 {/* Add a new route for Practicals */}
//                 <Route path="physics" element={<Physics />} />
//                 <Route path="phypracticals" element={<PhyPracticals />} />
//                 {/* <Route path="emf" element={<Emf />} /> */}
//                 {/* <Route path="EmfExp" element={<EmfExp />} /> */}
//                 <Route path="bio" element={<Bio />} />
//                 <Route path="biopracticals" element={<BioPracticals />} />
//                 <Route path="chem" element={<Chem />} />
//                 <Route path="chempracticals" element={<ChemPracticals />} />
//               </Routes>
//             </DashboardLayout>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
