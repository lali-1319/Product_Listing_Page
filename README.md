# Product_Listing_Page
Here's a **complete and detailed description** of your project based on the extracted structure, naming conventions, and standard practices in modern full-stack development:

---

## 🛍️ **Project Overview: Product Listing Web Application**

This is a **modern, responsive e-commerce web application** built with **Next.js (App Router)** and styled using **Tailwind CSS**. The project is modular, scalable, and component-based. It serves as a product listing website where users can browse, filter, and interact with products. It may also include features like authentication, theming, toast notifications, and responsive design.

---

## 🧱 **Tech Stack**

* **Framework:** [Next.js](https://nextjs.org/) (React + SSR/SSG + Routing)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** TypeScript
* **Package Manager:** pnpm
* **Component Design:** Modular with reusable UI (atomic design principle)
* **Theme Management:** Context-based theme toggling (likely dark/light mode)
* **Responsive:** Mobile-first design using custom hooks and Tailwind utilities

---

## 📁 Project Structure & Responsibilities

### 📁 `app/` – **Routing and Pages**

This is the **entry point for routing**, using Next.js App Router.

#### Key Files:

* `layout.tsx`: Wraps every page with shared UI (e.g., `Navbar`, `Footer`, `ThemeProvider`)
* `page.tsx`: The homepage (`/`)
* `globals.css`: Global styles (base Tailwind styles, fonts)

#### Subfolders (Each with its own `page.tsx`):

* **`/shop`**: Shows a product grid with a filter sidebar
* **`/about`**, **`/contact`**, **`/skills`**, **`/stories`**, **`/auth`**: Pages for site info, forms, blogs, or authentication

---

### 📁 `components/` – **Core Reusable Components**

Reusable blocks that compose UI across pages.

#### Highlights:

* `product-grid.tsx`: Dynamically displays products in a grid layout
* `filter-sidebar.tsx`: Filtering options by category, price, etc.
* `navbar.tsx` / `footer.tsx`: Main site navigation and footer
* `theme-provider.tsx`: Handles app-wide theme switching

---

### 📁 `components/ui/` – **UI Atoms and Molecules**

Minimal, highly reusable components (inputs, cards, modals, etc.)

#### Example Components:

* **Display:** `card.tsx`, `badge.tsx`, `avatar.tsx`, `accordion.tsx`
* **Form:** `input.tsx`, `checkbox.tsx`, `radio-group.tsx`, `select.tsx`
* **Popups:** `toast.tsx`, `tooltip.tsx`, `dialog.tsx`, `popover.tsx`
* **Navigation:** `tabs.tsx`, `menu.tsx`, `pagination.tsx`
* **Layout:** `carousel.tsx`, `resizable.tsx`, `separator.tsx`

These components are often used inside layout files or other functional components like `ProductGrid`.

---

### 📁 `hooks/` – **Custom React Hooks**

Custom logic wrappers to encapsulate reusable logic.

* `use-toast.ts`: Displays toast messages on events (like “Added to cart”)
* `use-mobile.tsx`: Detects mobile screen widths and adapts components accordingly

---

### 📁 `lib/` – **Shared Utilities and Business Logic**

Utility functions, global types, and application context.

* `api.ts`: Functions to fetch or send product data
* `types.ts`: TypeScript interfaces (e.g., `Product`, `Category`, `User`)
* `utils.ts`: Helper functions used throughout the app
* `auth-context.tsx`: React context for managing user authentication state

---

### 📁 `public/` – **Static Assets**

Contains images and logos available to the browser (used for avatars, placeholders, branding).

---

### 📁 `styles/`

Tailwind-based global CSS file, may overlap with `app/globals.css`.

---

### 🔧 Configuration Files

#### `package.json`

* Defines dependencies like React, Tailwind, shadcn/ui
* Contains scripts: `dev`, `build`, `start`

#### `tailwind.config.ts`

* Customizes Tailwind: color themes, font families, spacing, breakpoints

#### `next.config.mjs`

* Next.js-specific config: domain whitelist for images, route customization

#### `tsconfig.json`

* TypeScript compiler options and module resolution

---

## 🔁 Application Flow

1. **User opens `/shop`**

   * `layout.tsx` renders `Navbar` and `Footer`
   * `page.tsx` inside `/shop` uses `ProductGrid` and `FilterSidebar`
   * Data is pulled from `api.ts` or passed statically
   * Product card is rendered using `components/ui/card.tsx`

2. **User filters by category/price**

   * `FilterSidebar` triggers a state update or re-fetch
   * `ProductGrid` re-renders based on filtered data

3. **User adds to cart**

   * `use-toast` shows a success notification using `toast.tsx`

4. **User toggles theme**

   * `theme-provider.tsx` listens to system settings or button click and switches dark/light styles

---

## 📱 Mobile Optimization

* Uses `use-mobile.tsx` to detect screen width
* Sidebar may collapse into drawer or modal
* Tailwind classes provide responsive layouts via `md:`, `lg:` breakpoints

---

## ✅ Features Summary

| Feature           | Details                                              |
| ----------------- | ---------------------------------------------------- |
| Product Listing   | Grid layout with filters, cards, images              |
| Routing           | Fully dynamic pages with Next.js App Router          |
| Theming           | Light/dark mode support via context                  |
| Toasts            | Success or error messages (e.g., item added to cart) |
| Reusable UI       | Built on a clean, scalable component system          |
| Responsive Design | Fully mobile-ready with Tailwind + custom hook       |
| Authentication    | Placeholder for login/register via `/auth`           |
| API-Ready         | Fetch logic abstracted in `lib/api.ts`               |

---

Would you like me to create a **visual architecture diagram** or a **PDF project report** based on this description?
