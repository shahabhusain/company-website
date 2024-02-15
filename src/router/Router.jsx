import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../Pages/Home";
// import About from "../Pages/About";
import RecentWork from "../Pages/RecentWork";
import RootLayout from "../components/Layout/RootLayout";
import Winnerwin from "../Pages/Castudy/Winnerwin";
import Skiwit from "../Pages/Castudy/Skiwit";
import Local from "../Pages/Castudy/Local";
import Askmid from "../Pages/Castudy/Askmid";
import Cheaps from "../Pages/Castudy/Cheaps";
import Development from '../Pages/Castudy/Development'
import Movla from '../Pages/Castudy/Movla'
import Omni from '../Pages/Castudy/Omni'
export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}
      <Route path="/recent" element={<RecentWork />} />
      <Route path="/winner" element={<Winnerwin />} />
      <Route path="/local" element={<Local />} />
      <Route path="/skiwit" element={<Skiwit />} />
      <Route path="/askmid" element={<Askmid />} />
      <Route path="/cheap" element={<Cheaps />} />
      <Route path="/develop" element={<Development />} />
      <Route path="/movla12" element={<Movla />} />
      <Route path="/omni" element={<Omni />} />

    </Route>

    
    </>
  )
);
