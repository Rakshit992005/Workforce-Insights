import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useWorkforce } from "../context/WorkforceContext";

const Graph = () => {
  const { stats, loading } = useWorkforce();

  const data = stats.chartData || [];

  // Dynamic width based on data length to handle 57 employees cleanly
  const chartWidth = Math.max(800, data.length * 40);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-premium border border-border rounded-xl animate-image-pop">
          <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">
            {label}
          </p>
          <p className="text-lg font-extrabold text-primary">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-slate-50/50 rounded-2xl border border-dashed border-border">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
          <span className="text-sm font-bold text-text-muted">
            Loading Analytics...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-4">
      <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
        <div style={{ width: chartWidth, height: 400 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2b6df5" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#f1f5f9"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#64748b", fontSize: 9, fontWeight: 700 }}
                angle={-45}
                textAnchor="end"
                interval={0}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#cbd5e1", fontSize: 10, fontWeight: 700 }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "#f8fafc" }}
              />
              <Bar
                dataKey="salary"
                radius={[4, 4, 0, 0]}
                barSize={25}
                animationDuration={1500}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill="url(#barGradient)"
                    className="hover:opacity-80 transition-opacity"
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Scroll Indicator */}
      {data.length > 15 && (
        <div className="flex justify-center mt-2">
          <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full border border-border">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M6 8L2 12L6 16" />
              <line x1="2" y1="12" x2="22" y2="12" />
            </svg>
            Scroll horizontally to see all employees
          </p>
        </div>
      )}
    </div>
  );
};

export default Graph;
