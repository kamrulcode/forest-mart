# Forest Mart — Next.js e-commerce starter

A responsive, green-forward multi-page e-commerce UI inspired by the supplied reference image and styled with the palette:
- Forest Green `#176B4D`
- Fresh Mint `#DDF3E7`
- Citrus `#C8F169`
- Warm Orange `#F58A4B`

## Run locally

1. Install Node.js 18.17+ (Node 20 LTS recommended).
2. Extract this project and open a terminal in the project directory.
3. Run `npm install`
4. Run `npm run dev`
5. Visit `http://localhost:3000`

## Pages included

- `/` home page
- `/shop` all products
- `/collections` collections overview
- `/category/[slug]` category pages
- `/blog` journal / blog listing
- `/contact` contact form
- `/login` sign-in UI
- `/signup` account creation UI
- `/cart` interactive demo cart quantity/removal
- `/favorites` wishlist preview
- `/checkout` checkout form UI
- `/dashboard` sales overview
- `/dashboard/products` product catalog with demo add/edit/delete interactions
- `/dashboard/orders` order list
- `/dashboard/sales` sales analytics
- `/dashboard/settings` store customization settings

## Important production notes

This is a frontend starter with illustrative data. Product changes are in-memory only; sales, customers and orders are mock data. Login/signup forms are UI demos and checkout does not process payments. Before launch, connect a database (e.g. PostgreSQL + Prisma), secure authentication, image storage, validated server actions/API routes, a real payment provider (e.g. Stripe), email notifications, and shipping/tax logic. Add authorization checks to every dashboard API and server action. Do not enter real payment details into the demo form.

Product imagery currently uses custom emoji / CSS still-life compositions so the project runs without a separate asset bundle. Replace these with licensed product photos when adding your real catalog.
