# TechHub Ecommerce Application

A modern, full-stack ecommerce application built with **Next.js 16** (App Router), **Express.js**, **Tailwind CSS**, and **TypeScript**.

## 📋 Project Description

TechHub is a complete ecommerce platform for purchasing technology products. It features a responsive frontend with product browsing, authentication, user account management, and the ability for authenticated users to add new products. The backend API provides RESTful endpoints for managing inventory.

**Key Technologies:**
- **Frontend**: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js, TypeScript, CORS
- **Authentication**: Cookie-based session management with mock credentials

## 🚀 Features Implemented

### Core Features
✅ **Landing Page** - 7+ sections including hero, about, features, products preview, how-it-works, testimonials, and CTA  
✅ **Responsive Design** - Mobile-first approach using Tailwind CSS  
✅ **Authentication System** - Mock login with email/password stored in cookies  
✅ **Product Listing** - Fetch and display products from Express API with images, prices, descriptions  
✅ **Product Details** - Dynamic product detail pages with full specifications  
✅ **Protected Routes** - Add Item page restricted to authenticated users only  
✅ **Add Product Form** - Form validation, category selection, stock management  
✅ **Toast Notifications** - Success/error messages with animations  
✅ **Navbar** - Dynamic navigation with user info and logout functionality  
✅ **Footer** - Persistent footer across all pages  

## 📦 Tech Stack

| Component | Technology |
|-----------|-----------|
| Frontend Framework | Next.js 16 |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Backend | Express.js |
| Runtime | Node.js |
| HTTP Client | Fetch API |

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the Express backend server** (Terminal 1)
   ```bash
   npm run server
   ```
   The server will run on `http://localhost:5000`

4. **Start the Next.js development server** (Terminal 2)
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

### For Production

```bash
# Build the Next.js application
npm run build

# Start the production server
npm start

# Start backend server
npm run server
```

## 📍 Route Summary

### Public Routes
| Route | Description |
|-------|-------------|
| `/` | Landing page with 7+ sections |
| `/items` | Product listing page |
| `/items/[id]` | Individual product details page |
| `/login` | User login page |

### Protected Routes (Authentication Required)
| Route | Description |
|-------|-------------|
| `/add-item` | Add new product form (only for logged-in users) |

### API Endpoints (Express Backend)
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/items` | Fetch all products |
| GET | `/api/items/:id` | Fetch single product |
| POST | `/api/items` | Create new product |
| DELETE | `/api/items/:id` | Delete product (optional) |

## 🔐 Login Credentials

**Demo Account for Testing:**

```
Email:    user@example.com
Password: password123
```

These credentials work with the mock authentication system. After logging in:
- You'll be redirected to the items page
- The "Add Item" link will appear in the navbar
- You can add new products to the inventory
- Click "Logout" to end your session

## 📄 Feature Descriptions

### 1. **Landing Page (7+ Sections)**
   - Hero Section with CTA
   - About Us
   - Why Choose Us (3 feature cards)
   - Featured Products Preview
   - How It Works (4-step process)
   - Customer Testimonials
   - Call-to-Action Section

### 2. **Authentication System**
   - Mock login with email and password
   - Credentials stored in browser cookies
   - Protected routes redirect to login
   - Logout functionality
   - Session persistence across page reloads

### 3. **Product Management**
   - RESTful API endpoints for CRUD operations
   - Product images from Unsplash
   - Product categories and stock management
   - Form validation on add product page

### 4. **User Experience**
   - Toast notifications for actions
   - Loading states
   - Error handling
   - Responsive grid layouts
   - Hover effects and transitions

## 📱 Responsive Design

- **Desktop**: Full layout with multi-column grids
- **Tablet**: 2-column layouts for products
- **Mobile**: Single column with touch-friendly buttons

## 🔧 Environment Configuration

The application uses the following default configuration:

- **Backend API**: `http://localhost:5000`
- **Frontend**: `http://localhost:3000`
- **Node Environment**: Development (npm run dev)

## 📧 API Response Examples

### Get All Items
```json
GET /api/items

Response:
[
  {
    "id": 1,
    "name": "Laptop",
    "price": 1200,
    "description": "High-performance laptop with 16GB RAM",
    "image": "https://...",
    "category": "Electronics",
    "stock": 15
  }
]
```

### Create Item
```json
POST /api/items
Content-Type: application/json

{
  "name": "USB Hub",
  "price": 35,
  "description": "7-in-1 USB-C hub",
  "image": "https://...",
  "category": "Accessories",
  "stock": 30
}

Response: 201 Created
```

## 🎨 Tailwind CSS Configuration

- **Breakpoints**: Mobile-first responsive design
- **Colors**: Blue primary, gray neutral palette
- **Animations**: Slide-in effects for toasts
- **Utilities**: Flexbox, grid layouts, shadows, hover states

## 🚨 Troubleshooting

### "Failed to load items" Error
- Ensure Express server is running: `npm run server`
- Check if port 5000 is available
- Verify CORS is enabled in backend

### Authentication Not Working
- Clear browser cookies and try again
- Ensure you're using the correct demo credentials
- Check browser console for errors

### Styling Not Applied
- Run `npm run dev` to ensure Tailwind builds properly
- Clear `.next` build folder
- Verify `globals.css` imports `tailwindcss`

## 📝 Project Structure

```
ecommerce-app/
├── app/
│   ├── layout.tsx              # Root layout with Navbar/Footer
│   ├── page.tsx                # Landing page (7+ sections)
│   ├── login/
│   │   └── page.tsx            # Login page
│   ├── items/
│   │   ├── page.tsx            # Products list
│   │   └── [id]/
│   │       └── page.tsx        # Product details
│   └── add-item/
│       └── page.tsx            # Protected add product page
├── components/
│   ├── Navbar.tsx              # Navigation with auth
│   ├── Footer.tsx              # Footer component
│   ├── Toast.tsx               # Toast notifications
│   └── ProtectedRoute.tsx       # Route protection wrapper
├── lib/
│   ├── auth.ts                 # Authentication utilities
│   └── cookies.ts              # Cookie management
├── server/
│   └── index.ts                # Express backend API
├── globals.css                 # Global styles with Tailwind
└── package.json                # Dependencies
```

## 🤝 Contributing

Feel free to submit pull requests to improve the application.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Created as a full-stack ecommerce learning project using Next.js and Express.js.

---

**Last Updated**: January 2026  
**Status**: ✅ Complete with all required features
