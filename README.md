# Workforce Insights

Workforce Insights is a premium, data-driven dashboard designed for modern organizations to manage employee records, visualize compensation structures, and monitor workforce analytics in real-time.

## 🚀 Features

- **Centralized State Management**: Powered by the React Context API to ensure data consistency across the entire application.
- **Interactive Analytics**:
  - Real-time calculation of Total Employees, Average Annual Salary, and Total Monthly Payroll.
  - High-performance, responsive bar charts showing salary distribution using **Recharts**.
  - Horizontal scrolling support for large datasets (e.g., 50+ employees).
- **Employee Directory**: A sleek, searchable list of the global workforce with instant navigation to detailed profiles.
- **Dynamic Profile Management**:
  - Professional view of personal and occupational data.
  - **Live Photo Capture**: Integrated camera functionality to capture and update employee profile pictures on the fly.
- **Modern Authentication**: Secure login interface with persistent session options.
- **Premium Design System**:
  - Built with **Tailwind CSS 4.0**.
  - Custom glassmorphism effects and backdrop blurs.
  - Fluid micro-animations and slide-up transitions.
  - Print-ready employee directory views.

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS 4.0 (Vanilla CSS fallback for custom tokens)
- **Routing**: React Router 7
- **Visualization**: Recharts
- **HTTP Client**: Axios
- **Icons**: Optimized inline SVG components

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd workforce-insights
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

- `src/context`: Centralized data and analytics logic.
- `src/pages`: Main application views (Login, Directory, Analytics, Details, Capture, Add Employee).
- `src/components`: Reusable UI modules and complex functional components like the Recharts wrapper.
- `src/theme.css`: Core design tokens and animation definitions.

## 📄 License

© 2026 Workforce Insights. All rights reserved.
