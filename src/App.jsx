 import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Layout from "./components/Layout";
 import Dashboard from "./pages/Dashboard";
 import Overview from "./pages/Overview";
 import Skills from "./pages/Skills";
 import Projects from "./pages/Projects";
 import Learning from "./pages/Learning";
 import './App.css'
 function App() {
   return (
     <BrowserRouter>
       <Layout>
         <Routes>
           <Route path="/" element={<Dashboard />} />

           <Route path="/Overview" element={<Overview />} />
           <Route path="/skills" element={<Skills />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/learning" element={<Learning />} />
         </Routes>
         {/* <Dashboard /> */}
       </Layout>
     </BrowserRouter>
   );
 }

export default App;
