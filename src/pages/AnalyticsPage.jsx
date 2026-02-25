import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Graph from "../components/Graph";
import { useWorkforce } from "../context/WorkforceContext";

const AnalyticsPage = () => {
  const navigate = useNavigate();
  const { stats: centralizedStats, loading } = useWorkforce();

  const formattedStats = [
    {
      label: "Average Annual Salary",
      value: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(centralizedStats.averageSalary),
      trend: "+4.2%",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      label: "Total Monthly Payroll",
      value: new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }).format(centralizedStats.totalMonthlyPayroll),
      trend: "+2.1%",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
      color: "text-emerald-500",
      bg: "bg-emerald-50",
    },
    {
      label: "Total Employees",
      value: centralizedStats.totalEmployees.toString(),
      trend: "+12",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      color: "text-indigo-500",
      bg: "bg-indigo-50",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page animate-fade-in pb-20">
      <NavBar />

      <div className="max-w-7xl mx-auto px-6 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="animate-slide-up">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-text-muted hover:text-primary mb-4 transition-colors group cursor-pointer"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:-translate-x-1"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span className="text-sm font-bold uppercase tracking-wider">
                Back to list
              </span>
            </button>
            <h1 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight mb-2">
              Compensation Analytics
            </h1>
            <p className="text-text-muted font-medium max-w-2xl">
              Real-time overview of workforce expenditure and salary
              distributions across departments.
            </p>
          </div>

          <div
            className="flex flex-wrap items-center gap-3 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <button className="flex items-center gap-2 bg-white border border-border px-4 py-2.5 rounded-xl text-sm font-bold text-text-main hover:bg-slate-50 transition-all shadow-sm cursor-pointer">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Last 12 Months
            </button>
            <button className="flex items-center gap-2 bg-white border border-border px-4 py-2.5 rounded-xl text-sm font-bold text-text-main hover:bg-slate-50 transition-all shadow-sm cursor-pointer">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
              </svg>
              Filter
            </button>
            <button className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-vibrant hover:shadow-lg active:scale-95 cursor-pointer">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Export Data
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {formattedStats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl border border-border shadow-premium animate-slide-up"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                  {stat.icon}
                </div>
                <span
                  className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trend.startsWith("+") ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}
                >
                  {stat.trend}
                </span>
              </div>
              <p className="text-sm font-bold text-text-muted uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              <h3 className="text-3xl font-extrabold text-text-main tracking-tight">
                {loading ? (
                  <div className="h-9 w-32 bg-slate-100 animate-pulse rounded-lg"></div>
                ) : (
                  stat.value
                )}
              </h3>
            </div>
          ))}
        </div>

        <div
          className="bg-white rounded-[2rem] shadow-premium border border-border overflow-hidden animate-slide-up"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="p-8 border-b border-slate-50 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-text-main mb-1">
                Salary Distribution by Department
              </h3>
              <p className="text-sm text-text-muted font-medium">
                Average annual compensation across organizational units.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-slate-50 text-slate-400 rounded-lg transition-colors cursor-pointer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </button>
              <button className="p-2 hover:bg-slate-50 text-slate-400 rounded-lg transition-colors cursor-pointer">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="19" cy="12" r="1" />
                  <circle cx="5" cy="12" r="1" />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-8 bg-gradient-to-b from-white to-slate-50/30">
            <Graph />
          </div>

          <div className="px-8 py-6 bg-slate-50/50 border-t border-border flex flex-wrap gap-8 items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-3 bg-slate-200 rounded-full animate-pulse"></div>
              <div className="w-16 h-3 bg-slate-100 rounded-full animate-pulse"></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-3 bg-slate-200 rounded-full animate-pulse"></div>
              <div className="w-20 h-3 bg-slate-100 rounded-full animate-pulse"></div>
            </div>
            <div className="ml-auto">
              <div className="w-24 h-4 bg-primary/10 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <p className="text-center mt-12 text-text-muted text-sm font-medium">
          © 2026 Workforce Insights Analytics Engine. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default AnalyticsPage;
