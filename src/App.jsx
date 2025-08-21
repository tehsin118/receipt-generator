import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ReceiptForm from "./components/ReceiptForm";
import ReceiptPage from "./pages/ReceiptPage";

const FormPage = () => {
  const navigate = useNavigate();
  const [receiptData, setReceiptData] = useState({
    quotationNo: "Breeze-001",
    date: "",
    validityDate: "",
    clientName: "",
    clientTitle: "",
    clientCompany: "",
    clientLocation: "Kingdom of Bahrain",
    subject: "",
    items: [],
    contactPerson: "Muhammad Babar",
    contactPhone: "+973 6691 8612",
    companyName: "Breeze Cool",
    companyArabic: "",
    companySlogan:
      "(Approved environmental license contractor for air conditioning work)",
    companyReg: "95770.3",
    companyPhone: "+973 6691 8612",
    companyEmail: "breezecool018@gmail.com",
    companyLocation: "Kingdom of Bahrain",
  });

  const generateReceipt = () => {
    navigate("/receipt", { state: { receiptData } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto p-2 sm:p-4">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Receipt Generator
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Fill in the form below to create your professional quotation
              </p>
            </div>
            <button
              onClick={generateReceipt}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 sm:px-8 py-2 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-lg"
            >
              Generate Receipt
            </button>
          </div>
        </div>

        {/* Form */}
        <ReceiptForm
          receiptData={receiptData}
          setReceiptData={setReceiptData}
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/receipt" element={<ReceiptPage />} />
      </Routes>
    </Router>
  );
};

export default App;
