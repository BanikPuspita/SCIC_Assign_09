# Vercel Deployment Configuration Guide

## Problem Fixed
The application was trying to connect to `http://localhost:5000` which is unavailable when deployed on Vercel (cloud environment).

## Solution Implemented
Environment variables have been added to handle different API endpoints for development and production.

---

## 🚀 How to Deploy on Vercel

### Step 1: Deploy the Backend API
First, you need to deploy your Express backend to a cloud service:

**Options:**
- **Render.com** (Free tier available) - Recommended
- **Railway.app**
- **Heroku** (paid)
- **AWS/GCP/Azure**

Example for Render.com:
1. Go to https://render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Set environment variables as needed
5. Deploy
6. Copy your backend URL (e.g., `https://your-app.onrender.com`)

---

### Step 2: Configure Vercel Environment Variables

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add this variable:

```
Name: NEXT_PUBLIC_API_BASE_URL
Value: https://your-backend-api-url.com
```

⚠️ **Important Notes:**
- The variable MUST start with `NEXT_PUBLIC_` to be accessible on the client side
- Replace `https://your-backend-api-url.com` with your actual backend URL
- Remove any trailing slashes from the URL

---

### Step 3: Redeploy on Vercel

After adding the environment variable:
1. Go back to your Vercel project
2. Click **Deployments**
3. Click the three dots on the latest deployment
4. Select **Redeploy**
   
Or simply push a new commit to trigger automatic redeployment.

---

## 📝 Local Development Setup

For local development, the `.env.local` file is already configured:

```
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
```

To use it:
1. Make sure your Express server is running on port 5000
2. Run: `npm run dev`
3. Test at `http://localhost:3000`

---

## 🔍 Testing the Connection

After deployment, test by:
1. Going to your Vercel URL
2. Login with demo credentials
3. Navigate to Products page
4. If items load successfully, the API connection is working! ✅

---

## 🐛 Troubleshooting

**Still getting "Failed to load items"?**

1. **Check backend is deployed and running:**
   - Visit your backend URL directly: `https://your-backend-url/api/items`
   - You should see JSON data

2. **Verify environment variable:**
   - Go to Vercel Settings → Environment Variables
   - Confirm `NEXT_PUBLIC_API_BASE_URL` is set correctly

3. **Check CORS configuration:**
   - Your backend server/index.ts should have CORS enabled
   - Add this if not present: `app.use(cors());`

4. **Check Vercel Logs:**
   - In Vercel dashboard, click "Deployments"
   - Click your deployment
   - Check "Functions" or "Logs" tabs for errors

---

## 📋 Files Modified

- `.env.local` - Local development API URL
- `.env.production` - Production instructions
- `app/items/page.tsx` - Updated to use environment variable
- `app/items/[id]/page.tsx` - Updated to use environment variable
- `app/add-item/page.tsx` - Updated to use environment variable

---

## ✅ Deployment Checklist

- [ ] Backend API deployed to cloud service
- [ ] Backend API URL copied
- [ ] Environment variable added in Vercel
- [ ] Application redeployed on Vercel
- [ ] Login works ✓
- [ ] Products page loads items ✓
- [ ] Can add new items ✓
