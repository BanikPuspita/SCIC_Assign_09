# 🔐 Environment Variables Setup Guide

## Overview
This project uses environment variables to manage different configurations for **local development** and **production deployment**.

---

## 📁 Environment Files

### `.env.example`
- Template showing all available environment variables
- **Commit this to git** (no sensitive data)
- Use as reference for what variables are needed

### `.env.local`
- **Local development** environment
- Automatically loaded by Next.js during development
- **DO NOT commit to git** (add to .gitignore - already done)
- Uses `http://localhost:5000` for backend

### `.env.production`
- **Production/Vercel** environment
- Instructions for setting in Vercel dashboard
- **DO NOT commit to git**
- Uses your deployed backend URL

---

## 🚀 Quick Setup

### For Local Development
```bash
# .env.local already configured with:
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
NODE_ENV=development
PORT=5000
```

**To run locally:**
```bash
# Terminal 1: Start backend
npm run server

# Terminal 2: Start frontend
npm run dev

# Open http://localhost:3000
```

---

### For Production (Vercel)

#### Step 1: Deploy Backend
Deploy your backend to Render.com, Railway.app, or similar:
- **Render.com:** Get URL like `https://techhub-api.onrender.com`
- **Railway.app:** Get URL like `https://your-project.up.railway.app`

#### Step 2: Set Vercel Environment Variable
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. **Settings** → **Environment Variables**
4. Add new variable:
   ```
   Name: NEXT_PUBLIC_API_BASE_URL
   Value: https://your-backend-url.onrender.com
   ```
5. **Save** and redeploy

#### Step 3: Verify
1. Go to your Vercel URL
2. Login and navigate to Products
3. If items load, it works! ✅

---

## 📋 All Available Variables

| Variable | Purpose | Local Value | Production Value |
|----------|---------|-------------|------------------|
| `NEXT_PUBLIC_API_BASE_URL` | Frontend API endpoint | `http://localhost:5000` | `https://your-backend-url.com` |
| `NODE_ENV` | Application environment | `development` | `production` |
| `PORT` | Backend server port | `5000` | N/A (Render/Railway sets this) |

---

## ⚠️ Important Notes

1. **NEXT_PUBLIC_ prefix is required**
   - Variables starting with `NEXT_PUBLIC_` are exposed to the browser
   - Accessible via `process.env.NEXT_PUBLIC_API_BASE_URL`
   - Never put secrets in NEXT_PUBLIC_ variables

2. **Local vs Production**
   - Local dev: Backend is `http://localhost:5000`
   - Production: Backend is your deployed URL (HTTPS)
   - Frontend auto-selects based on `.env.local` vs Vercel settings

3. **No Trailing Slashes**
   - ✅ Correct: `https://api.example.com`
   - ❌ Wrong: `https://api.example.com/`

4. **.gitignore Configuration**
   - `.env.local` is already in `.gitignore`
   - `.env.production` should also be in `.gitignore`
   - `.env.example` IS committed (template only)

---

## 🔄 How Environment Variables Work

### Development (npm run dev)
```
Next.js reads .env.local
↓
process.env.NEXT_PUBLIC_API_BASE_URL = http://localhost:5000
↓
Frontend connects to local backend
```

### Production (Vercel)
```
Vercel Environment Variables (dashboard)
↓
process.env.NEXT_PUBLIC_API_BASE_URL = https://your-backend.onrender.com
↓
Frontend connects to deployed backend
```

---

## 🐛 Troubleshooting

### "Failed to load items" Error
**Problem:** Frontend can't connect to backend

**Solutions:**
1. Check `NEXT_PUBLIC_API_BASE_URL` is set correctly in Vercel
2. Verify backend is actually deployed and running
3. Test backend directly: `https://your-backend-url/api/items`
4. Check CORS is enabled in backend (`server/index.ts`)

### Wrong URL in Vercel
1. Go to Vercel Settings → Environment Variables
2. Click the variable to edit it
3. Update to correct URL
4. Click Save
5. Go to Deployments → Redeploy

### Still Using Localhost in Production
1. Your .env.local is NOT being used (correct for production)
2. Vercel environment variable must be set
3. Application must be redeployed after setting variable

---

## 📚 Files Modified

- `.env.example` - Template (committed to git)
- `.env.local` - Development config (in .gitignore)
- `.env.production` - Production instructions (in .gitignore)
- `app/items/page.tsx` - Uses env variable
- `app/items/[id]/page.tsx` - Uses env variable
- `app/add-item/page.tsx` - Uses env variable

---

## ✅ Deployment Checklist

- [ ] Backend deployed to Render.com / Railway.app
- [ ] Backend URL copied (e.g., `https://techhub-api.onrender.com`)
- [ ] Environment variable added in Vercel dashboard
- [ ] Application redeployed on Vercel
- [ ] Test: Go to Products page → Items load ✓
- [ ] Test: Can add new items ✓
- [ ] Test: Login works ✓

---

## 🎯 Summary

**Local Development:**
- `.env.local` is auto-loaded
- Backend on `http://localhost:5000`
- Run `npm run dev` and `npm run server` in different terminals

**Production:**
- Set `NEXT_PUBLIC_API_BASE_URL` in Vercel dashboard
- Use your deployed backend URL (HTTPS)
- Redeploy application after setting variables

That's it! The environment variables handle the different configurations automatically. 🚀
