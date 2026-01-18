import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

interface Item {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category?: string;
  stock?: number;
}

let items: Item[] = [
  {
    id: 1,
    name: "Laptop",
    price: 1200,
    description: "High-performance laptop with 16GB RAM and 512GB SSD storage. Perfect for professionals and content creators.",
    image: "https://images.unsplash.com/photo-1515377905703-c84dc28fbb38?w=400&h=300&fit=crop",
    category: "Electronics",
    stock: 15
  },
  {
    id: 2,
    name: "Wireless Mouse",
    price: 45,
    description: "Ergonomic wireless mouse with 2.4GHz technology. Precision tracking up to 16,000 DPI.",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
    category: "Accessories",
    stock: 50
  },
  {
    id: 3,
    name: "USB-C Hub",
    price: 35,
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your connectivity.",
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop",
    category: "Accessories",
    stock: 30
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 120,
    description: "RGB mechanical keyboard with Cherry MX switches. 100+ hour battery life. Fully programmable.",
    image: "https://images.unsplash.com/photo-1587829191301-2f98e508106d?w=400&h=300&fit=crop",
    category: "Peripherals",
    stock: 25
  },
  {
    id: 5,
    name: "4K Monitor",
    price: 450,
    description: "27-inch 4K UHD monitor with HDR support. Perfect for video editing and gaming.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    category: "Electronics",
    stock: 10
  },
  {
    id: 6,
    name: "Wireless Headphones",
    price: 180,
    description: "Premium noise-cancelling wireless headphones. 30-hour battery life with fast charging.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    category: "Audio",
    stock: 20
  },
  {
    id: 7,
    name: "USB-C Fast Charger",
    price: 55,
    description: "65W USB-C power adapter with dual ports. Fast charging for laptops and phones.",
    image: "https://images.unsplash.com/photo-1591553895911-0055eca6a589?w=400&h=300&fit=crop",
    category: "Accessories",
    stock: 45
  },
  {
    id: 8,
    name: "Webcam 4K",
    price: 95,
    description: "4K resolution webcam with auto-focus. Perfect for streaming, conferencing, and content creation.",
    image: "https://images.unsplash.com/photo-1598872200969-2b650d56bd16?w=400&h=300&fit=crop",
    category: "Accessories",
    stock: 18
  },
  {
    id: 9,
    name: "Laptop Stand",
    price: 40,
    description: "Adjustable aluminum laptop stand. Ergonomic design for better posture and cooling.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    category: "Accessories",
    stock: 35
  },
  {
    id: 10,
    name: "Portable SSD 1TB",
    price: 120,
    description: "Fast portable SSD with 1TB capacity. Read speeds up to 1000MB/s. Perfect for backups.",
    image: "https://images.unsplash.com/photo-1597872200969-2b650d56bd16?w=400&h=300&fit=crop",
    category: "Storage",
    stock: 22
  },
  {
    id: 11,
    name: "Wireless Charger",
    price: 35,
    description: "Fast wireless charging pad for all Qi-enabled devices. LED indicator and non-slip surface.",
    image: "https://images.unsplash.com/photo-1591553895911-0055eca6a589?w=400&h=300&fit=crop",
    category: "Accessories",
    stock: 60
  },
  {
    id: 12,
    name: "Cable Organizer Set",
    price: 25,
    description: "Complete cable management solution with multiple organizers. Keep your desk tidy.",
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=300&fit=crop",
    category: "Accessories",
    stock: 80
  },
  {
    id: 13,
    name: "Mechanical Gaming Mouse",
    price: 75,
    description: "High-precision gaming mouse with 16,000 DPI sensor. Customizable RGB lighting.",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop",
    category: "Peripherals",
    stock: 28
  },
  {
    id: 14,
    name: "Monitor Arm Mount",
    price: 60,
    description: "Single monitor arm with full articulation. Reduces desk clutter and improves viewing angle.",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop",
    category: "Accessories",
    stock: 16
  },
  {
    id: 15,
    name: "USB 3.0 Flash Drive 256GB",
    price: 45,
    description: "Fast USB 3.0 flash drive with 256GB capacity. Read speeds up to 400MB/s.",
    image: "https://images.unsplash.com/photo-1591553895911-0055eca6a589?w=400&h=300&fit=crop",
    category: "Storage",
    stock: 40
  },
  {
    id: 16,
    name: "Desk Lamp LED",
    price: 50,
    description: "Smart LED desk lamp with adjustable brightness. USB-powered with memory function.",
    image: "https://images.unsplash.com/photo-1565636192335-14c46fa1120f?w=400&h=300&fit=crop",
    category: "Lighting",
    stock: 24
  },
  {
    id: 17,
    name: "iPad Pro 12.9",
    price: 1099,
    description: "Powerful iPad Pro with M2 chip. 512GB storage, stunning Liquid Retina display.",
    image: "https://images.unsplash.com/photo-1533519227268-a92b5a18e667?w=400&h=300&fit=crop",
    category: "Electronics",
    stock: 8
  }
];

let nextId = 18;

// Get all items
app.get("/api/items", (req: Request, res: Response) => {
  res.json(items);
});

// Get single item by ID
app.get("/api/items/:id", (req: Request, res: Response) => {
  const item = items.find(i => i.id === Number(req.params.id));
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.json(item);
});

// Add new item
app.post("/api/items", (req: Request, res: Response) => {
  const { name, price, description, image, category, stock } = req.body;

  // Validation
  if (!name || !price || !description) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newItem: Item = {
    id: nextId++,
    name,
    price,
    description,
    image: image || "https://via.placeholder.com/400x300",
    category: category || "General",
    stock: stock || 0
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// Delete item (optional)
app.delete("/api/items/:id", (req: Request, res: Response) => {
  const index = items.findIndex(i => i.id === Number(req.params.id));
  if (index === -1) {
    return res.status(404).json({ error: "Item not found" });
  }
  const deletedItem = items.splice(index, 1);
  res.json(deletedItem[0]);
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
