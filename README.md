# Receipt Generator

A professional receipt and quotation generator built with React, Tailwind CSS, and Ant Design. This application allows you to create, customize, and export professional business documents as PDF files.

## Features

- **Professional Design**: Clean, business-ready layout matching professional quotation standards
- **Editable Content**: Customize all company details, client information, and line items
- **PDF Export**: Download receipts and quotations as high-quality PDF files
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Preview**: See changes instantly as you edit
- **Multiple Items**: Add, edit, and remove line items with automatic calculations

## Screenshots

The application recreates the design from your screenshot with:

- Company header with logo and Arabic text
- Quotation details (number, date, validity)
- Client information section
- Professional itemized table
- Payment terms and closing remarks
- Company footer with contact information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd react-tailwind-startup
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Creating a Receipt

1. **View the Preview**: The receipt preview is shown on the left side
2. **Edit Content**: Click "Edit Receipt" to open the form editor
3. **Customize Details**: Use the tabs to edit:
   - **Company Details**: Company name, contact info, registration details
   - **Client Details**: Client information, quotation number, dates
   - **Items**: Add, edit, or remove line items with quantities and prices
4. **Download PDF**: Click "Download PDF" to export the receipt

### Customizing Content

- **Company Information**: Update company name, Arabic text, slogan, and contact details
- **Client Details**: Modify client name, title, company, and location
- **Quotation Details**: Set quotation number, date, and validity period
- **Line Items**: Add services or products with descriptions, quantities, and pricing
- **Contact Information**: Update contact person and phone numbers

## Technology Stack

- **React 19**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Ant Design**: UI component library
- **jsPDF**: PDF generation library
- **html2canvas**: HTML to canvas conversion for PDF export
- **Vite**: Fast build tool and development server

## Project Structure

```
src/
├── components/
│   ├── ReceiptGenerator.jsx    # Main receipt display component
│   ├── ReceiptForm.jsx         # Editable form component
│   └── Logo.jsx               # Company logo component
├── App.jsx                     # Main application component
└── main.jsx                    # Application entry point
```

## PDF Export

The application uses `html2canvas` and `jsPDF` to convert the receipt preview into a downloadable PDF file. The PDF maintains the professional layout and styling of the web version.

## Customization

### Styling

- Modify Tailwind classes in components to change colors, spacing, and layout
- Update the Logo component to use your company's branding
- Adjust the receipt dimensions in `ReceiptGenerator.jsx`

### Content

- Update default values in `App.jsx` for your company information
- Modify the receipt template structure in `ReceiptGenerator.jsx`
- Add new fields to the form in `ReceiptForm.jsx`

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue in the repository or contact the development team.
