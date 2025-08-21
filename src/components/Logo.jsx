import React from "react";
import file from "../assets/icons/logo.jpg";
const Logo = ({ size = "w-16 h-16", textSize = "text-xl" }) => {
  return (
    <div className="text-center logo-container">
      {/* <div
        className={`${size} bg-red-600 rounded-full flex items-center justify-center text-white font-bold ${textSize} mb-1`}
        style={{
          backgroundColor: "#dc2626",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontWeight: "bold",
          marginBottom: "4px",
        }}
      >
        FC
      </div>
      <p
        className="text-sm font-semibold text-red-600"
        style={{
          fontSize: "14px",
          fontWeight: "600",
          color: "#dc2626",
        }}
      >
        FCMC
      </p> */}
      <img src={file} alt="" className="w-[64px] h-[56px]" />
    </div>
  );
};

export default Logo;
