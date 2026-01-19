# 🎓 Complete Environment Variables Setup - Tutorial

## What This Does

Environment variables allow your application to work in different environments (local, Vercel, Render, etc.) without changing code.

---

## 📁 All Environment Files Created

### In Your Project Root:
```
e:\SCIC\ecommerce-app\
│
├── .env.example               [1.6 KB] ← COMMIT TO GIT
├── .env.local                 [0.8 KB] ← DO NOT COMMIT (development)
├── .env.production            [1.4 KB] ← DO NOT COMMIT (reference)
│
├── ENV_SETUP_GUIDE.md         ← Detailed setup guide
├── ENVIRONMENT_VARIABLES_SUMMARY.md ← Quick reference
├── ENVIRONMENT_SETUP_COMPLETE.md    ← This checklist
└── VERCEL_DEPLOYMENT_GUIDE.md       ← Vercel specific
```

---

## 🔍 File Contents

### `.env.example` (Template - Safe to Commit)
```dotenv
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
PORT=5000
NODE_ENV=development
```

### `.env.local` (Development - In .gitignore)
```dotenv
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
NODE_ENV=development
PORT=5000
```

### `.env.production` (Reference - In .gitignore)
```dotenv
NEXT_PUBLIC_API_BASE_URL=https://your-backend-url.onrender.com
NODE_ENV=production
```

---

## 🔑 Key Variables Explained

### `NEXT_PUBLIC_API_BASE_URL`
- **What:** Where the frontend finds the backend API
- **Dev Value:** `http://localhost:5000` (your local machine)
- **Prod Value:** `https://your-backend.onrender.com` (cloud server)
- **Why NEXT_PUBLIC_:** Accessible in browser JavaScript

### `NODE_ENV`
- **What:** Tells app whether it's development or production
- **Dev Value:** `development`
- **Prod Value:** `production`

### `PORT`
- **What:** What port backend listens on
- **Dev Value:** `5000`
- **Prod Value:** Set by Render/Railway (not needed)

---

## 🚀 How It Works - Flow Diagram

### Local Development
```
npm run dev
    ↓
Next.js loads .env.local
    ↓
process.env.NEXT_PUBLIC_API_BASE_URL = "http://localhost:5000"
    ↓
Frontend connects to localhost backend
    ↓
http://localhost:3000 ← Works!
```

### Production (Vercel)
```
Vercel Dashboard → Set Environment Variable
    ↓
NEXT_PUBLIC_API_BASE_URL = "https://backend-url.com"
    ↓
Redeploy Application
    ↓
process.env.NEXT_PUBLIC_API_BASE_URL = "https://backend-url.com"
    ↓
Frontend connects to cloud backend
    ↓
https://your-app.vercel.app ← Works!
```

---

## 💻 Step-by-Step Setup

### Part 1: Local Development (Already Done!)

Your `.env.local` is already configured. To test:

```bash
# Terminal 1: Start backend
npm run server
# Backend running on http://localhost:5000

# Terminal 2: Start frontend
npm run dev
# Frontend at http://localhost:3000
```

**That's it!** Next.js automatically loads `.env.local`

---

### Part 2: Deploy Backend (Do This First)

Choose one:

#### Option A: Render.com (Recommended - Free)
1. Go to https://render.com
2. Sign up with GitHub
3. Click "New +" → "Web Service"
4. Select your repository
5. Fill in:
   - Name: `techhub-api`
   - Build: `npm install`
   - Start: `npm run server`
6. Click "Create Web Service"
7. Wait 2-3 minutes
8. **Copy the URL** from top: `https://techhub-api.onrender.com`

#### Option B: Railway.app (Also Free)
1. Go to https://railway.app
2. Click "New Project"
3. Select "Deploy from GitHub"
4. Select your repo
5. Wait for deployment
6. **Copy the URL** from settings

---

### Part 3: Configure Vercel (Do This Second)

1. Go to https://vercel.com/dashboard
2. Click your project
3. Click **"Settings"** tab
4. Click **"Environment Variables"** in left menu
5. Click **"Add New"**
6. Fill in:
   ```
   Name: NEXT_PUBLIC_API_BASE_URL
   Value: https://your-backend-url.onrender.com
   ```
   (Use your actual URL from Part 2)
7. Click **"Save"**

---

### Part 4: Redeploy on Vercel (Do This Third)

1. Still in Vercel
2. Click **"Deployments"** tab
3. Click the **⋮ (three dots)** on latest deployment
4. Click **"Redeploy"**
5. Wait for redeployment (1-2 minutes)

---

### Part 5: Test (Do This Last)

1. Go to your Vercel URL (https://your-app.vercel.app)
2. Login with:
   - Email: `user@example.com`
   - Password: `password123`
3. Click "Products" in navbar
4. If items load → **SUCCESS!** ✅

---

## 🐛 Debugging Checklist

If something doesn't work:

- [ ] Backend is deployed and running (check Render.com dashboard)
- [ ] Backend URL is correct (test it in browser: `https://url/api/items`)
- [ ] Environment variable is set in Vercel (check Settings → Environment Variables)
- [ ] Vercel app was redeployed after setting env var
- [ ] No trailing slash in URL (e.g., `https://api.com` not `https://api.com/`)
- [ ] Variable name is exactly `NEXT_PUBLIC_API_BASE_URL`
- [ ] Variable value is HTTPS in production, HTTP in local dev

---

## 📊 Quick Reference Table

| Step | Location | Action | Value |
|------|----------|--------|-------|
| 1 | `npm run server` | Start backend locally | N/A |
| 2 | `npm run dev` | Start frontend locally | Uses `.env.local` |
| 3 | Render.com | Deploy backend to cloud | Get URL |
| 4 | Vercel Settings | Add env variable | `NEXT_PUBLIC_API_BASE_URL` |
| 5 | Vercel | Set variable value | Your backend URL |
| 6 | Vercel Deployments | Redeploy | Click redeploy button |
| 7 | Your app | Test products page | Should load items ✓ |

---

## ✨ Example Complete Setup

### Local (Your Machine)
```
NEXT_PUBLIC_API_BASE_URL = http://localhost:5000
→ Frontend at: http://localhost:3000
→ Backend at: http://localhost:5000
```

### Production (Cloud)
```
NEXT_PUBLIC_API_BASE_URL = https://techhub-api.onrender.com
→ Frontend at: https://my-app.vercel.app
→ Backend at: https://techhub-api.onrender.com
```

---

## 🎯 Summary

| File | Where | Purpose | Commit? |
|------|-------|---------|---------|
| `.env.example` | Git repo | Reference template | ✅ YES |
| `.env.local` | Your machine | Local development | ❌ NO (.gitignore) |
| `.env.production` | Reference only | Production guide | ❌ NO (.gitignore) |

---

## 🚀 You're Ready!

✅ Environment variables configured
✅ All files created
✅ Code updated
✅ Documentation complete

**Next:** Deploy backend → Set Vercel env var → Redeploy → Test!

---

## 📞 Quick Help

**Lost track of what to do?**

1. Are you deploying for the first time?
   → Read `VERCEL_DEPLOYMENT_GUIDE.md`

2. Do you need detailed setup instructions?
   → Read `ENV_SETUP_GUIDE.md`

3. Do you need a quick overview?
   → Read `ENVIRONMENT_VARIABLES_SUMMARY.md`

4. Want step-by-step with checkboxes?
   → Read `ENVIRONMENT_SETUP_COMPLETE.md`

**Need help with Vercel?**
→ See `VERCEL_DEPLOYMENT_GUIDE.md`

**Still stuck?**
→ Check troubleshooting section above

---

## 🎓 Learning Resources

- **Environment Variables Concept:** Variables that change based on where app runs
- **NEXT_PUBLIC_ Prefix:** Makes variable available in browser (visible in client code)
- **Security:** Never put secrets in NEXT_PUBLIC_ variables
- **Git:** `.env*` files ignored automatically (in `.gitignore`)

---

**Everything is set up! You're ready to deploy! 🚀**
