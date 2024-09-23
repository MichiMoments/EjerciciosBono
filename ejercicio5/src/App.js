
import React, { useState, useRef, useEffect } from "react";
import PasswordGenerator from "./PasswordGenerator";
 
const App = () => {
    return (
        <div
            style={{ textAlign: "center", margin: "auto" }}>
            <PasswordGenerator/>
        </div>
    );
};
 
export default App;