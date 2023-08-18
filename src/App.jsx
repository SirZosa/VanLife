import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/home.jsx'
import Layout from './components/Layout.jsx';
import About from './pages/about.jsx';
import Vans from './pages/vans.jsx';
import './server.js'
import VanDetails from './pages/vanDetails.jsx';
import Host from './pages/host/host.jsx';
import Income from './pages/host/income.jsx';
import HostVans from './pages/host/hostVans.jsx';
import HostVanDetails from './pages/host/hostVanDetails.jsx';
import Reviews from './pages/host/reviews.jsx';
import HostVanInfo from './pages/host/hostVanInfo.jsx';
import HostVanPricing from './pages/host/hostVanPricing.jsx';
import HostVanPhotos from './pages/host/hostVanPhotos.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="*" element={<div>
          <h1>Page not found</h1>
          <Link to="/">Return home</Link>
        </div>} />
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="vans" element={<Vans/>}/>
          <Route path='vans/:id' element={<VanDetails/>}/>

          <Route path='host' element={<Host />}>
            <Route path='income' element={<Income />}/>
            <Route path='vans' element={<HostVans />}/>
            <Route path='vans/:id' element={<HostVanDetails />}>
              <Route index element={<HostVanInfo/>}/>
              <Route path='pricing' element={<HostVanPricing/>}/>
              <Route path='photos' element={<HostVanPhotos/>}/>
            </Route>
            <Route index element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
