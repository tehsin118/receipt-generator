import React, { useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Logo from "../components/Logo";
import { useReactToPrint } from "react-to-print";
import "../style/pdf-styles.css";

const ReceiptPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const receiptRef = useRef();
  const receiptData = location.state?.receiptData;

  useEffect(() => {
    if (!receiptData) {
      navigate("/");
    }
  }, [receiptData, navigate]);

  const exportToPDF = async () => {
    try {
      const element = receiptRef.current;

      // Wait for any images to load
      await new Promise((resolve) => setTimeout(resolve, 200));

      const canvas = await html2canvas(element, {
        scale: 3, // Increased scale for better quality
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        width: 794,
        height: 1123,
        logging: false,
        removeContainer: true,
        foreignObjectRendering: false,
        imageTimeout: 15000,
        onclone: (clonedDoc) => {
          // Apply PDF-friendly styles to the cloned document
          const style = clonedDoc.createElement("style");
          style.textContent = `
            * {
              color: #000000 !important;
              background-color: #ffffff !important;
            }
            .bg-white { background-color: #ffffff !important; }
            .bg-gray-100 { background-color: #f3f4f6 !important; }
            .bg-gray-200 { background-color: #e5e7eb !important; }
            .bg-gray-300 { background-color: #d1d5db !important; }
            .bg-gray-600 { background-color: #4b5563 !important; }
            .bg-gray-700 { background-color: #374151 !important; }
            .bg-blue-600 { background-color: #2563eb !important; }
            .bg-blue-700 { background-color: #1d4ed8 !important; }
            .bg-blue-900 { background-color: #1e3a8a !important; }
            .bg-green-600 { background-color: #16a34a !important; }
            .bg-green-700 { background-color: #15803d !important; }
            .bg-red-600 { background-color: #dc2626 !important; }
            
            .text-gray-600 { color: #4b5563 !important; }
            .text-gray-700 { color: #374151 !important; }
            .text-gray-800 { color: #1f2937 !important; }
            .text-white { color: #ffffff !important; }
            .text-red-600 { color: #dc2626 !important; }
            .text-green-600 { color: #16a34a !important; }
            
            .border-gray-200 { border-color: #e5e7eb !important; }
            .border-gray-300 { border-color: #d1d5db !important; }
            .border-red-500 { border-color: #ef4444 !important; }
            .border-black { border-color: #000000 !important; }
            
            /* Ensure proper text rendering */
            body {
              font-family: Arial, sans-serif !important;
              font-size: 12px !important;
              line-height: 1.4 !important;
            }
            
            /* Improve table rendering */
            table {
              border-collapse: collapse !important;
              width: 100% !important;
            }
            
            th, td {
              border: 1px solid #d1d5db !important;
              padding: 4px 8px !important;
              text-align: left !important;
            }
            
            /* Ensure logo renders properly */
            .logo-container {
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
          `;
          clonedDoc.head.appendChild(style);
        },
      });

      const imgData = canvas.toDataURL("image/png", 1.0); // Maximum quality
      const pdf = new jsPDF("p", "mm", "Legal");
      const imgWidth = 216; // Legal width in mm
      const imgHeight = 356; // Legal height in mm

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(`quotation-${receiptData.quotationNo}.pdf`);
    } catch (error) {
      console.error("PDF generation error:", error);
      alert("PDF generation failed. Please try again.");
    }
  };

  const goBack = () => {
    navigate("/");
  };

  const handlePrint = useReactToPrint({
    contentRef: receiptRef,
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
      @media print {
        html, body {
          height: 100vh;
          margin: 0 !important;
          padding: 0 !important;
          overflow: hidden;
        }
        .pdf-receipt {
          width: 100% !important;
          height: 100% !important;
          margin: 0 !important;
          padding: 20px !important;
        }
      }
    `,
    onPrintError: (error) => {
      console.error("Print error:", error);
      // Fallback to browser print
      window.print();
    },
  });

  // Fallback print method
  const handlePrintFallback = () => {
    try {
      const printWindow = window.open("", "_blank");
      const printContent = receiptRef.current.innerHTML;

      printWindow.document.write(`
        <html>
          <head>
            <title>Quotation - ${receiptData.quotationNo}</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 20px;
                font-size: 12px;
              }
              table {
                border-collapse: collapse;
                width: 100%;
                margin: 10px 0;
              }
              th, td {
                border: 1px solid #d1d5db;
                padding: 6px 8px;
                text-align: left;
              }
              th {
                background-color: #f3f4f6;
                font-weight: bold;
              }
              @media print {
                body { margin: 0; }
              }
            </style>
          </head>
          <body>
            ${printContent}
          </body>
        </html>
      `);

      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    } catch (error) {
      console.error("Fallback print error:", error);
      alert("Print failed. Please try again.");
    }
  };

  if (!receiptData) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen bg-gray-100 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                Receipt Preview
              </h1>
              <p className="text-sm sm:text-base text-gray-600">
                Quotation: {receiptData.quotationNo}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={goBack}
                className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base"
              >
                Back to Form
              </button>
              <button
                onClick={exportToPDF}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base"
              >
                Download PDF
              </button>
              <button
                onClick={() => {
                  try {
                    handlePrint();
                  } catch (error) {
                    console.error("Main print failed, trying fallback:", error);
                    handlePrintFallback();
                  }
                }}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base"
              >
                Print
              </button>
            </div>
          </div>
        </div>

        {/* Receipt Preview */}
        <div
          className="bg-white rounded-lg shadow-lg overflow-hidden pdf-receipt"
          ref={receiptRef}
        >
          <div
            className="p-4 sm:p-8 bg-white"
            style={{
              width: "794px",
              minHeight: "1123px",
              margin: "0 auto",
            }}
          >
            {/* Company Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-start mb-6 gap-4">
              <div className="flex-1">
                <h1 className="text-xl sm:text-2xl font-bold text-blue-900 mb-1">
                  {receiptData.companyName}
                </h1>
                {/* <p className="text-base sm:text-lg text-gray-700 mb-1">
                  {receiptData.companyArabic}
                </p> */}
                <p className="text-xs sm:text-sm text-gray-600">
                  {receiptData.companySlogan}
                </p>
              </div>
              <Logo />
            </div>

            {/* Quotation Details */}
            <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm mb-4 gap-2">
              <div>Quotation No. {receiptData.quotationNo}</div>
              <div>Date {receiptData.date}</div>
              {/* <div>Validity Date {receiptData.validityDate}</div> */}
            </div>
            <div className="border-b-2 border-red-500 mb-6"></div>

            {/* Client Information */}
            <div className="mb-6">
              <div className="text-xs sm:text-sm">
                <p>{receiptData.clientName}</p>
                <p>{receiptData.clientTitle}</p>
                <p>{receiptData.clientCompany}</p>
                <p>{receiptData.clientLocation}</p>
                <p className="mt-2">Dear Sir,</p>
              </div>
            </div>

            {/* Subject */}
            <div className="mb-4">
              <p className="font-bold underline text-xs sm:text-sm">
                SUB: {receiptData.subject}
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-6">
              <p className="text-xs sm:text-sm">
                We thank you for inviting us to quote for above job and are
                pleased to submit our best price as follows
              </p>
            </div>

            {/* Items Table */}
            <div className="mb-6 overflow-x-auto">
              <table className="w-full text-xs border-collapse min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-2 py-1 text-left">
                      No
                    </th>
                    <th className="border border-gray-300 px-2 py-1 text-left w-[300px] ">
                      Description
                    </th>
                    <th className="border border-gray-300 px-2 py-1 text-center">
                      Qty
                    </th>
                    <th className="border border-gray-300 px-2 py-1 text-center">
                      Unit
                    </th>
                    <th className="border border-gray-300 px-2 py-1 text-center">
                      Amount per unit
                    </th>
                    <th className="border border-gray-300 px-2 py-1 text-center">
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {receiptData.items.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 px-2 py-1">
                        {item.no}
                      </td>
                      <td className="border border-gray-300 px-2 py-1">
                        {item.description}
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-center">
                        {item.qty}
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-center">
                        {item.unit}
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-center">
                        {item.amountPerUnit.toFixed(3)}
                      </td>
                      <td className="border border-gray-300 px-2 py-1 text-center">
                        {item.amount.toFixed(3)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Total and Terms */}
            <div className="mb-6">
              <p className="font-bold text-xs sm:text-sm mb-2">
                Vat Not included in our price
              </p>
              <p className="font-bold text-xs sm:text-sm mb-2">
                PAYMENT TERMS:
              </p>
              <p className="text-xs sm:text-sm">Terms of Payment: As agreed</p>
            </div>

            {/* Closing */}
            <div className="mb-6">
              <p className="text-xs sm:text-sm">
                Assuring you of our best services at all times, we remain at
                your service. If you require any further clarification, please
                feel free to contact {receiptData.contactPerson} at{" "}
                {receiptData.contactPhone}.
              </p>
            </div>

            {/* Signature */}
            <div className="mb-6">
              <p className="text-xs sm:text-sm mb-2">Thanking you,</p>
              <div className="flex flex-col sm:flex-row items-end gap-4">
                <div className="border-b-2 border-black w-32"></div>
                <div className="text-xs sm:text-sm">
                  <p>Manager</p>
                  <p>FCMC, W. L. L</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t-2 border-red-500 pt-4">
              <p className="text-xs text-center">
                {receiptData.companyReg}, Tel-{receiptData.companyPhone},{" "}
                {receiptData.companyEmail}, {receiptData.companyLocation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPage;
