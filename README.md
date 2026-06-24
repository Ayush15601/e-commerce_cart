# 🛒 E-Commerce Shopping Cart

A modern, responsive e-commerce shopping cart application built with **React**, **Redux Toolkit**, and the **FakeStore API**. It allows users to browse products, search for specific items in real-time, manage cart quantities, and toggle between dark/light themes with **LocalStorage** persistence.

---

## ✨ Features

- **Product Listing**: Automatically fetches and displays products from FakeStore API on load.
- **Real-time Search**: Filter products by name as you type.
- **Add to Cart**: One-click add with duplicate prevention — no duplicate entries.
- **Cart Management**: Update quantities, remove items, and see real-time total price with 2-decimal formatting.
- **Dark/Light Theme**: Toggle between themes with a moon/sun icon — preference saved to LocalStorage.
- **Responsive Layout**: Clean layout that adapts perfectly to desktop, tablet, and mobile displays.
- **Error & Loading Handling**: Graceful loading indicators and user-friendly error messages.

---

## 🛠️ Tech Stack

- **Framework**: React 19
- **Routing**: React Router DOM v7
- **State Management**: Redux Toolkit
- **Styling**: Vanilla CSS3 (with CSS custom properties for theming, hover animations, and smooth transitions)
- **API**: FakeStore API
- **Bundler**: Vite
- **Icons**: Boxicons

---

## 📂 Project Structure

```bash
e-commerce-cart/
│
├── App.jsx                   # Main Application shell & route configuration
├── index.html                # HTML entry template
├── package.json              # Project metadata & dependency list
├── vite.config.js            # Vite configuration
├── eslint.config.js          # ESLint rules configuration
│
└── src/
    ├── main.jsx              # React mounting entry point (Provider + BrowserRouter)
    ├── index.css             # Global CSS styling, design tokens & dark theme variables
    │
    ├── redux/
    │   └── store.js          # Redux store configuration
    │
    ├── feature/
    │   ├── cartslice.jsx     # Cart Redux slice (add, remove, update, total)
    │   └── counterslice.jsx  # Products Redux slice (fetch from API)
    │
    ├── components/
    │   ├── navbar.jsx        # Fixed top navbar with theme toggle
    │   ├── box.jsx           # Product card component
    │   └── cartbox.jsx       # Cart item component with quantity controls
    │
    ├── css/
    │   ├── navbar.css        # Navbar layout & theme toggle styles
    │   ├── box.css           # Product card styles
    │   ├── cartbox.css       # Cart item styles
    │   ├── cart.css          # Cart page styles
    │   └── home.css          # Home page & search form styles
    │
    └── pages/
        ├── home.jsx          # Product listing & search page
        └── cart.jsx          # Cart review page
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Ayush15601/e-commerce_cart.git
cd e-commerce-cart
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser to view the application.

---

## 📖 Usage

### Home Page
- Browse products fetched from FakeStore API.
- Use the search bar to filter products by name in real-time.
- Click **Add to Cart** to add a product — clicking again does nothing (no duplicates).

### Cart Page
- View all added products with their quantities.
- Change quantity in the input field and click **Update**.
- Click **Remove** to delete an item from the cart.
- Total price updates automatically with 2-decimal precision.

### Theme Toggle
- Click the moon/sun icon in the navbar to switch between dark and light mode.
- Your preference is saved in LocalStorage and persists across sessions.

---

## 👤 Author

- **Ayush**

---

## 📄 License

This project is fully open source and distributed under the terms of the [MIT License](LICENSE).
