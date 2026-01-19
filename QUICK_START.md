# ⚡ QUICK START - Environment Variables

## 🎯 In 3 Steps

### 1. Deploy Backend (5 min)
```
https://render.com → New Web Service → Select repo → Deploy
Get URL like: https://techhub-api.onrender.com
```

### 2. Set Vercel Variable (2 min)
```
Vercel Dashboard → Settings → Environment Variables
Add: NEXT_PUBLIC_API_BASE_URL = https://your-backend-url.onrender.com
```

### 3. Redeploy & Test (3 min)
```
Vercel Dashboard → Deployments → Redeploy
Open your app → Login → Products page → See items ✅
```

---

## 📚 Full Guides

**Need help?** Pick one:

```
START HERE → README_ENVIRONMENT_VARS.md (navigation index)
     ↓
CHOOSE YOUR LEVEL:
├─ Complete beginner? → ENV_TUTORIAL.md
├─ Just want steps? → ENVIRONMENT_SETUP_COMPLETE.md  
├─ Want deep dive? → ENV_SETUP_GUIDE.md
├─ Using Vercel? → VERCEL_DEPLOYMENT_GUIDE.md
├─ Need summary? → ENVIRONMENT_VARIABLES_SUMMARY.md
└─ Want overview? → SETUP_SUMMARY.md
```

---

## ✅ What Exists

**Config Files:**
- `.env.example` - Template (commit to git)
- `.env.local` - Development (don't commit)
- `.env.production` - Production (don't commit)

**Code Updated:**
- `app/items/page.tsx`
- `app/items/[id]/page.tsx`
- `app/add-item/page.tsx`

**All use:** `process.env.NEXT_PUBLIC_API_BASE_URL`

---

## 🔧 Local Testing (Right Now!)

```bash
# Terminal 1
npm run server

# Terminal 2
npm run dev

# Browser
http://localhost:3000
```

**It just works!** Uses `.env.local` automatically.

---

## 🆘 If Something Fails

1. **"Failed to load items"**
   - Check env var in Vercel Settings
   - Verify backend URL is correct
   - Redeploy Vercel

2. **Backend URL not working**
   - Test directly: `https://your-url/api/items`
   - Make sure it's deployed to Render/Railway/etc
   - Check it returns JSON

3. **Still stuck?**
   - Read [VERCEL_DEPLOYMENT_GUIDE.md](VERCEL_DEPLOYMENT_GUIDE.md)
   - Check backend logs at Render.com
   - Check Vercel logs at Dashboard

---

## 📞 Need Full Instructions?

→ **[README_ENVIRONMENT_VARS.md](README_ENVIRONMENT_VARS.md)**

This file has navigation to all other guides!

---

## 🚀 You're Ready!

✅ Environment setup complete
✅ All documentation created
✅ Code updated
✅ Ready to deploy

**Follow the 3 steps above and you're done! 🎉**
