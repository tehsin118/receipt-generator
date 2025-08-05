import React, { useState } from "react";

const ReceiptForm = ({ receiptData, setReceiptData }) => {
  const [activeTab, setActiveTab] = useState("company");

  const updateField = (field, value) => {
    setReceiptData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateItem = (index, field, value) => {
    setReceiptData((prev) => ({
      ...prev,
      items: prev.items.map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const addItem = () => {
    setReceiptData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          no: prev.items.length + 1,
          description: "",
          qty: 1,
          unit: "Nos",
          amountPerUnit: 0,
          amount: 0,
        },
      ],
    }));
  };

  const calculateTotal = () => {
    return receiptData.items.reduce((sum, item) => sum + item.amount, 0);
  };

  const removeItem = (index) => {
    setReceiptData((prev) => ({
      ...prev,
      items: prev.items
        .filter((_, i) => i !== index)
        .map((item, i) => ({
          ...item,
          no: i + 1,
        })),
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        <button
          onClick={() => setActiveTab("company")}
          className={`px-3 sm:px-4 py-2 rounded-lg font-medium text-sm sm:text-base ${
            activeTab === "company"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Company Details
        </button>
        <button
          onClick={() => setActiveTab("client")}
          className={`px-3 sm:px-4 py-2 rounded-lg font-medium text-sm sm:text-base ${
            activeTab === "client"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Client Details
        </button>
        <button
          onClick={() => setActiveTab("items")}
          className={`px-3 sm:px-4 py-2 rounded-lg font-medium text-sm sm:text-base ${
            activeTab === "items"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Items
        </button>
      </div>

      {activeTab === "company" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">Company Information</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={receiptData.companyName}
                onChange={(e) => updateField("companyName", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Name (Arabic)
              </label>
              <input
                type="text"
                value={receiptData.companyArabic}
                onChange={(e) => updateField("companyArabic", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Slogan
              </label>
              <input
                type="text"
                value={receiptData.companySlogan}
                onChange={(e) => updateField("companySlogan", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Registration Number
              </label>
              <input
                type="text"
                value={receiptData.companyReg}
                onChange={(e) => updateField("companyReg", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                value={receiptData.companyPhone}
                onChange={(e) => updateField("companyPhone", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={receiptData.companyEmail}
                onChange={(e) => updateField("companyEmail", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                value={receiptData.companyLocation}
                onChange={(e) => updateField("companyLocation", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Person
              </label>
              <input
                type="text"
                value={receiptData.contactPerson}
                onChange={(e) => updateField("contactPerson", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Phone
              </label>
              <input
                type="text"
                value={receiptData.contactPhone}
                onChange={(e) => updateField("contactPhone", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === "client" && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">Client Information</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quotation Number
              </label>
              <input
                type="text"
                value={receiptData.quotationNo}
                onChange={(e) => updateField("quotationNo", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date
              </label>
              <input
                type="date"
                value={receiptData.date}
                onChange={(e) => updateField("date", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Validity Date
              </label>
              <input
                type="date"
                value={receiptData.validityDate}
                onChange={(e) => updateField("validityDate", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client Name
              </label>
              <input
                type="text"
                value={receiptData.clientName}
                onChange={(e) => updateField("clientName", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client Title
              </label>
              <input
                type="text"
                value={receiptData.clientTitle}
                onChange={(e) => updateField("clientTitle", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client Company
              </label>
              <input
                type="text"
                value={receiptData.clientCompany}
                onChange={(e) => updateField("clientCompany", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client Location
              </label>
              <input
                type="text"
                value={receiptData.clientLocation}
                onChange={(e) => updateField("clientLocation", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>

            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                value={receiptData.subject}
                onChange={(e) => updateField("subject", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
          </div>
        </div>
      )}

      {activeTab === "items" && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="text-lg font-semibold">Items</h3>
            <button
              onClick={addItem}
              className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base"
            >
              Add Item
            </button>
          </div>

          <div className="space-y-4">
            {receiptData.items.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <h4 className="font-medium">Item {item.no}</h4>
                  <button
                    onClick={() => removeItem(index)}
                    className="text-red-600 hover:text-red-800 font-medium text-sm"
                  >
                    Remove
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
                  <div className="sm:col-span-2 lg:col-span-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    <input
                      type="text"
                      value={item.description}
                      onChange={(e) =>
                        updateItem(index, "description", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Quantity
                    </label>
                    <input
                      type="number"
                      value={item.qty}
                      onChange={(e) => {
                        const newQty = parseFloat(e.target.value) || 0;
                        const newAmount = newQty * item.amountPerUnit;
                        updateItem(index, "qty", newQty);
                        updateItem(index, "amount", newAmount);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Unit
                    </label>
                    <input
                      type="text"
                      value={item.unit}
                      onChange={(e) =>
                        updateItem(index, "unit", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Amount per Unit
                    </label>
                    <input
                      type="number"
                      step="0.001"
                      value={item.amountPerUnit}
                      onChange={(e) => {
                        const newAmountPerUnit =
                          parseFloat(e.target.value) || 0;
                        const newAmount = item.qty * newAmountPerUnit;
                        updateItem(index, "amountPerUnit", newAmountPerUnit);
                        updateItem(index, "amount", newAmount);
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Amount
                    </label>
                    <input
                      type="number"
                      step="0.001"
                      value={item.amount}
                      onChange={(e) =>
                        updateItem(
                          index,
                          "amount",
                          parseFloat(e.target.value) || 0
                        )
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Total Display */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <span className="text-base sm:text-lg font-semibold text-gray-700">
                  Total Amount:
                </span>
                <span className="text-xl sm:text-2xl font-bold text-green-600">
                  {calculateTotal().toFixed(3)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReceiptForm;
