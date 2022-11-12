import React, { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./pages/home/Home";
import Team from "./pages/team/Team";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import GetTicket from "./pages/getTicket/GetTicket";
import TicketMain from "./pages/ticket/TicketMain";

import { Routes, Route, useLocation } from "react-router-dom";
import Certificate from "./components/certificateGenrator/Certificate";

const App = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 100 });

    setTimeout(() => {
      setIsLoading(false);
    }, 6500);

    setTimeout(() => {
      setShowPage(true);
    }, 5000);
  }, [showPage]);

  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <div>
      {isLoading && <Loader></Loader>}
      {showPage && (
        <>
          <Menu></Menu>
          <Routes>
            {isHome && (
              <>
                <Route path="/" element={<Home />}></Route>
              </>
            )}
            <Route path="/team" element={<Team />}></Route>
            <Route path="/allaccesspass" element={<GetTicket />}></Route>
            <Route path="/certificates" element={<Certificate/>}></Route>
            <Route path="/ticket" element={<TicketMain/>}></Route>
          </Routes>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default App;
