# 🧠 AI-Content-Generator

**AI-Content-Generator** is a powerful full-stack AI-powered web application that leverages Google’s Generative AI to help users effortlessly generate high-quality, context-aware content across multiple formats.

## 🚀 Features

- 🔹 **15+ AI-Powered Templates**  
  Generate blogs, YouTube SEO content, social media posts, grammar correction, code snippets, and more.

- 🔹 **Intelligent Prompt Engineering**  
  Templates combine user input with predefined instructions for optimized AI responses.

- 🔹 **Modern Responsive UI**  
  Built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui** for a seamless user experience.

- 🔹 **Secure Authentication**  
  Uses **Clerk** for user authentication and session management.

- 🔹 **Serverless PostgreSQL Database**  
  Integrated with **Neon** and managed using **Drizzle ORM** for scalable and efficient data handling.

- 🔹 **Interactive Dashboard**  
  Track AI usage in real-time, view content history, and edit content with a rich text editor.

- 🔹 **Clean Architecture**  
  Features a modular structure, global state management using **React Context**, and dynamic routing for each content template.

## 🛠️ Tech Stack

- **Frontend:** Next.js, TypeScript, Tailwind CSS, shadcn/ui  
- **Backend:** Google Generative AI API, Drizzle ORM  
- **Auth:** Clerk  
- **Database:** Neon (serverless PostgreSQL)  
- **State Management:** React Context API  

## 📸 Screenshots
<img width="1438" height="787" alt="Screenshot 2025-07-08 at 11 31 56 AM" src="https://github.com/user-attachments/assets/353def96-ff17-42e2-9262-b22ddbac6c6d" />
<img width="1440" height="786" alt="Screenshot 2025-07-08 at 11 34 41 AM" src="https://github.com/user-attachments/assets/4a58dbdf-8c59-4429-bc76-1312e1994db5" />
<img width="1440" height="787" alt="Screenshot 2025-07-08 at 11 48 41 AM" src="https://github.com/user-attachments/assets/ce2f5a6d-df7f-4ba8-881c-2b13fafe5c6f" />
<img width="1439" height="697" alt="Screenshot 2025-07-08 at 11 49 11 AM" src="https://github.com/user-attachments/assets/cf88d2f2-f43b-44a3-bad2-1e0e620e4bf9" />



## ✅ Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/ai-content-generator.git

### 2. Install Dependencies

npm install
or
yarn install

### 3. Set up environment variables

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
DATABASE_URL=your_neon_db_url
GENAI_API_KEY=your_google_genai_key
```

### 4. Run the server

npm run dev
or
yarn dev
