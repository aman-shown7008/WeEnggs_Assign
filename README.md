# React + Vite Dynamic Invoice Table

This project is a dynamic invoice/estimate calculator built using **React** and **Vite**, fetching data from a local `data.json` and calculating totals in real-time based on user input.

🌐 **Live Demo**: [https://peaceful-yeot-d1a514.netlify.app/](https://peaceful-yeot-d1a514.netlify.app/)

---

## 🚀 Features

- 🔄 **Dynamic Data Loading**: Fetches structured section/item data from `public/data.json` on page load.
- 🧾 **Real-Time Calculations**:
  - Calculates **item total** (`quantity × unit cost`)
  - Calculates **section-wise total**
  - Displays a **grand total** across all sections
- ✏️ **Editable Inputs**: Quantity and Unit Cost fields are editable and responsive to user input.
- 📐 **Responsive Layout**: Clean and minimal UI using inline styles for better readability.
- ✅ **Field Mapping**:
  - Displays Item Name, Type, Quantity, Unit Cost, Unit, Tax, and Cost Code per item
  - Uses `✔️` to indicate whether a tax rate is applied
- 🧠 **Efficient State Management**: Uses `useState` and `useEffect` hooks to manage and recalculate data reactively.

---

## 🧑‍💻 Tech Stack

- ⚛️ **React** (Functional Components + Hooks)
- ⚡ **Vite** (Blazing fast bundler and dev server)
- 📄 **Vanilla JS + JSX** (No external UI libraries)
- 📁 **Static JSON File** from `/public` folder
- 🧹 **ESLint** for code linting
- 🌐 **Deployed via Netlify**

---

## 🔮 Future Enhancements

Here are some ideas to improve this project:

- ✅ **Validation and Error Handling** for input fields (e.g., negative numbers or invalid cost)
- 📊 **Add Currency Selector** (e.g., USD, INR, etc.)
- 💾 **Save Data to LocalStorage or Backend** to persist edits
- 📤 **Export to PDF or CSV** for invoice printing/sharing
- 🌈 **UI Styling with Tailwind or Material UI** for a more professional look
- 🧪 **Unit Tests** for business logic (calculations, updates, etc.)
- 🗃️ **Pagination or Accordion** view for large data sets

---

## 📦 Getting Started

# Clone the repo
git clone https://github.com/aman-shown7008/WeEnggs_Assign
cd react-invoice-calculator

# Install dependencies
npm install

# Run the dev server
npm run dev

