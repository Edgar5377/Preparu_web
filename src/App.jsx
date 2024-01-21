import React from "react";
import TrigonometryScreen from "./views/trigonometry";
import FractionScreen from "./views/fractions";
import MenuScreen from "./views/menu";
import Home from "./views/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/fractions" element={<FractionScreen />} />
                {/* <Route path="/adminView" element={<AdminPage />} />
          <Route path="/storeForm" element={<StoreForm />} />
          <Route path="/eventForm" element={<EventForm />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route
              path="/eventDescription"
              element={<EventDescription />}
          /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
