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
    quotationNo: "FCMC-163",
    date: "2025-06-13",
    validityDate: "2025-07-05",
    clientName: "M/s. Abdul Majeed",
    clientTitle: "General Manager",
    clientCompany: "Sika Gulf",
    clientLocation: "Kingdom of Bahrain",
    subject:
      "Plant DSU Unit.Split AC unit and Window A.C Quotation for servicing",
    items: [
      {
        no: 1,
        description: "Up to 3 TR Split A/C Units- normal service only.",
        qty: 39,
        unit: "Nos",
        amountPerUnit: 15.0,
        amount: 585.0,
      },
      {
        no: 2,
        description:
          "Split A/C indoor unit- remove and pressure water service only.",
        qty: 39,
        unit: "Nos",
        amountPerUnit: 10.0,
        amount: 390.0,
      },
      {
        no: 3,
        description:
          "Split A/C Outdoor unit - remove and preessure water service only.",
        qty: 39,
        unit: "Nos",
        amountPerUnit: 10.0,
        amount: 390.0,
      },
      {
        no: 4,
        description:
          "Window A/C - Pressure water service and chemical service.",
        qty: 8,
        unit: "Nos",
        amountPerUnit: 7.0,
        amount: 56.0,
      },
      {
        no: 5,
        description:
          "Split A/C indoor and outdoor unit- Remove and water service only",
        qty: 39,
        unit: "Nos",
        amountPerUnit: 20.0,
        amount: 780.0,
      },
      {
        no: 6,
        description: "5 TR Unit - indoor and outdoor unit water service only.",
        qty: 12,
        unit: "Nos",
        amountPerUnit: 25.0,
        amount: 300.0,
      },
    ],
    contactPerson: "Mr. Ravinson",
    contactPhone: "3652-6900",
    companyName: "FIRST CARE MAINTENANCE CONTRACTING W.L.L",
    companyArabic: "فيرست كير لمقاولات الصيانة ذ.م.م .",
    companySlogan:
      "(Approved environmental license contractor for air conditioning work)",
    companyReg: "Cr No. 175386-1",
    companyPhone: "39152628",
    companyEmail: "fcmcontracting04@gmail.com",
    companyLocation: "kingdom of Bahrain",
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
