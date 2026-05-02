# 🥭 Mango Library - Modern Online Book Borrowing Platform

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![BetterAuth](https://img.shields.io/badge/BetterAuth-Secure-blueviolet?style=for-the-badge)](https://www.better-auth.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

![Mango Library Hero](<img width="1919" height="945" alt="Screenshot 2026-05-03 032208" src="https://github.com/user-attachments/assets/0f89c4ca-e1ac-473e-875c-79e6618e42a2" />)

, high-performance digital library platform built with the modern web stack. It digitizes the traditional library experience, offering users a seamless way to browse, search, and borrow books with a stunning user interface.

## ✨ Key Features

-   **🚀 High-Impact Visuals**: Immersive landing page featuring SwiperJS-powered banners and dynamic marquee animations.
-   **🔍 Intelligent Search**: Real-time book discovery with instant search functionality.
-   **📁 Category-Driven Navigation**: Easy-to-use filtering for Story, Tech, Science, and more.
-   **🔐 Enterprise-Grade Auth**: Secure authentication powered by BetterAuth, featuring Google Social Login and Email/Password support.
-   **👤 User Workspace**: Personalized profile management where users can update their identity and track activity.
-   **📱 Edge-to-Edge Responsive**: Optimized for a flawless experience across mobile, tablet, and desktop devices.
-   **🎨 Premium UI/UX**: Crafted with DaisyUI 5 and Lucide icons for a sleek, modern aesthetic.

## 🛠️ Tech Stack

-   **Frontend**: [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/)
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [DaisyUI 5](https://daisyui.com/)
-   **Authentication**: [BetterAuth](https://www.better-auth.com/)
-   **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
-   **Animations**: [Animate.css](https://animate.style/), [SwiperJS](https://swiperjs.com/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## 🚀 Getting Started

### Prerequisites

-   Node.js 18.x or later
-   MongoDB Atlas account or local MongoDB instance
-   Google Cloud Console account (for Social Login)

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/your-username/mango-library.git
    cd mango-library
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Configure Environment Variables**
    Create a `.env.local` file in the root directory:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    BETTER_AUTH_SECRET=your_auth_secret
    BETTER_AUTH_URL=http://localhost:3000
    GOOGLE_CLIENT_ID=your_google_id
    GOOGLE_CLIENT_SECRET=your_google_secret
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    ```

4. **Run the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```text
src/
├── app/            # Next.js App Router (Pages & Layouts)
├── components/     # Reusable UI Components
├── data/           # Static data and mock JSONs
├── lib/            # Shared utilities and configurations
├── models/         # Mongoose schemas and models
└── styles/         # Global styles and Tailwind configs
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with ❤️ by the Mango Library Team
</p>
