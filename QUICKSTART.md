// Quick Start Guide
// ==================

// 1. START EXPRESS SERVER (Backend)
// Terminal 1: Run from root directory
npm run server
// Server will run on http://localhost:5000

// 2. START NEXT.JS APP (Frontend) 
// Terminal 2: Run from root directory
npm run dev
// App will run on http://localhost:3000

// 3. OPEN IN BROWSER
// Visit: http://localhost:3000

// 4. TEST THE APPLICATION

// A. PUBLIC PAGES (No login required)
//    - Home Page: http://localhost:3000/
//    - Browse Products: http://localhost:3000/items
//    - View Product Details: http://localhost:3000/items/1

// B. LOGIN
//    - Login Page: http://localhost:3000/login
//    - Email: user@example.com
//    - Password: password123
//    - Click Login and you'll be redirected to items page

// C. PROTECTED PAGE (Only accessible when logged in)
//    - Add Product: http://localhost:3000/add-item
//    - This page will redirect to login if you're not authenticated
//    - After login, you'll see it in the navbar menu

// ✅ APPLICATION FEATURES IMPLEMENTED:

// 1. LANDING PAGE (7+ Sections)
//    ✓ Hero Section with CTA
//    ✓ About Us Section
//    ✓ Why Choose Us (3 Cards)
//    ✓ Featured Products Preview
//    ✓ How It Works (4-Step Process)
//    ✓ Customer Testimonials
//    ✓ Final CTA Section

// 2. AUTHENTICATION
//    ✓ Mock Login with Email/Password
//    ✓ Cookie-based Session Storage
//    ✓ Protected Routes (redirects to login)
//    ✓ Logout Functionality
//    ✓ Session Persistence

// 3. PRODUCT LISTING
//    ✓ Fetch from Express API
//    ✓ Responsive Grid Layout
//    ✓ Product Cards with Images
//    ✓ Stock Status Badge
//    ✓ Price Display

// 4. PRODUCT DETAILS
//    ✓ Dynamic Route ([id])
//    ✓ Full Product Information
//    ✓ Stock Information
//    ✓ Add to Cart / Wishlist Buttons
//    ✓ SKU Display

// 5. ADD PRODUCT PAGE (Protected)
//    ✓ Only accessible when logged in
//    ✓ Form Validation
//    ✓ Category Selection
//    ✓ Image URL Input
//    ✓ Stock Management
//    ✓ Toast Notifications on Success
//    ✓ Redirect to items page after adding

// 6. NAVBAR
//    ✓ Dynamic Display (Login/Logout)
//    ✓ Show Username when Logged In
//    ✓ "Add Item" Link only when Logged In
//    ✓ Navigation Links

// 7. STYLING
//    ✓ Tailwind CSS v4
//    ✓ Responsive Design
//    ✓ Mobile-First Approach
//    ✓ Animations (Toast Slide-in)
//    ✓ Hover Effects

// 8. BACKEND API
//    ✓ GET /api/items - Fetch all products
//    ✓ GET /api/items/:id - Fetch single product
//    ✓ POST /api/items - Add new product
//    ✓ DELETE /api/items/:id - Delete product
//    ✓ CORS Enabled
//    ✓ Data Validation

// 9. ADDITIONAL FEATURES
//    ✓ Loading States
//    ✓ Error Handling
//    ✓ Toast Notifications
//    ✓ Form Validation
//    ✓ Type Safety (TypeScript)
//    ✓ README with Full Documentation

// FILE STRUCTURE
// ==============
// ecommerce-app/
// ├── app/
// │   ├── layout.tsx ........................ Root layout with Navbar/Footer
// │   ├── page.tsx ......................... Landing page (7+ sections)
// │   ├── login/
// │   │   └── page.tsx ..................... Login page
// │   ├── items/
// │   │   ├── page.tsx ..................... Products list
// │   │   └── [id]/
// │   │       └── page.tsx ................. Product details
// │   └── add-item/
// │       └── page.tsx ..................... Protected add product page
// ├── components/
// │   ├── Navbar.tsx ....................... Navigation with auth
// │   ├── Footer.tsx ....................... Footer component
// │   ├── Toast.tsx ........................ Toast notifications
// │   └── ProtectedRoute.tsx ............... Route protection wrapper
// ├── lib/
// │   ├── auth.ts .......................... Authentication utilities
// │   └── cookies.ts ....................... Cookie management
// ├── server/
// │   └── index.ts ......................... Express backend API
// ├── globals.css .......................... Global styles with Tailwind
// ├── package.json ......................... Dependencies
// ├── tailwind.config.js ................... Tailwind configuration
// ├── postcss.config.mjs ................... PostCSS configuration
// └── README.md ............................ Complete documentation

// TECHNOLOGIES USED
// =================
// • Next.js 16 (App Router)
// • React 19
// • TypeScript 5
// • Tailwind CSS 4
// • Express.js
// • Node.js
// • PostCSS
// • CORS

// COMMANDS
// ========
// npm install ............................ Install dependencies
// npm run dev ............................ Start Next.js dev server
// npm run build .......................... Build Next.js app
// npm start .............................. Start production server
// npm run server ......................... Start Express backend
// npm run server:dev ..................... Start Express with watch mode

// API ENDPOINTS (Backend runs on port 5000)
// ==========================================
// GET    http://localhost:5000/api/items ............ Get all items
// GET    http://localhost:5000/api/items/:id ....... Get single item
// POST   http://localhost:5000/api/items ........... Add new item
// DELETE http://localhost:5000/api/items/:id ....... Delete item

// NEXT.JS ROUTES (Frontend runs on port 3000)
// ============================================
// GET  http://localhost:3000/ ..................... Landing page
// GET  http://localhost:3000/login ................ Login page
// GET  http://localhost:3000/items ................ Products list
// GET  http://localhost:3000/items/:id ............ Product details
// POST http://localhost:3000/add-item ............. Add product (protected)

// LOGIN CREDENTIALS
// =================
// Email: user@example.com
// Password: password123
