
---

# **Product Selection Application**

This is a modern product selection interface built using **Next.js**, **React Context API**, **TypeScript**, and **Tailwind CSS**. The application dynamically manages a product inventory, allowing users to add items to their cart, view cart details, and dynamically update product stock levels.

---

## **Features**

1. **Product Grid**: 
   - Displays 20 products with details such as name, price, stock, and category.
   - Dynamically disables the "Add to Cart" button when stock runs out.

2. **Dynamic Stock Management**: 
   - Stock decreases when items are added to the cart.
   - Stock restores when items are removed from the cart.

3. **Persistent Cart**:
   - Cart data is stored in `Cookie Storage`, ensuring it persists across page reloads.

4. **Responsive Design**:
   - Optimized for both desktop and mobile devices.

---

## **Tech Stack**

- **Framework**: Next.js
- **Language**: TypeScript
- **State Management**: React Context API
- **Styling**: Tailwind CSS
- **Persistence**: Cookie Storage

---

## **Notable Design Decisions**

1. **React Context API for State Management**: 
   - Simplifies global cart state without introducing external libraries.
   - Allows centralized control for adding, removing, and clearing cart items.

2. **Cookie Storage for Cart Persistence**:
   - Ensures cart data persists between page reloads without requiring backend storage.

3. **Dynamic Stock Management**:
   - The product grid updates in real time based on the items added or removed from the cart.
   - Stock levels are adjusted directly in the `products` state for seamless updates.

---

## **Installation and Running the Project**

### Prerequisites
- Node.js installed (version 16+ recommended)
- npm or yarn package manager

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run the Development Server**
   ```bash
   npm run dev
   ```
   - Open your browser and navigate to `http://localhost:3000`.

3. **Build and Run for Production**
   ```bash
   npm run build
   npm start
   ```

---

## **Project Structure**

```plaintext
.
├── app/
│   ├── data/products.json     # Mock data
│   ├── components/            # React components (ProductCard, CartModal, etc.)
│   ├── actions/               # Server Action
│   ├── context/               # Context API logic for global cart state
│   ├── utils                  # Utility functions
│   ├── types                  # Types
│   ├── layout.tsx             # Root layout for the application
│   ├── page.tsx               # Main product selection page
├── public/
│   ├── images/                # Product images
├── README.md                  # Project documentation
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── tailwind.config.js         # Tailwind CSS configuration
```

---

### Thank you for exploring the **Product Selection Application**! 🚀