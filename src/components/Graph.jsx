import React from "react";

const Graph = () => {
  return (
    <div className="w-full h-[400px] flex flex-col pt-4">
      {/* Chart Header Area */}
      <div className="flex justify-between items-center mb-6 px-2">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary shadow-sm"></div>
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Salary
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-200 shadow-sm"></div>
            <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
              Previous Year
            </span>
          </div>
        </div>
      </div>

      {/* Main Graph Area with Skeleton/Placeholder */}
      <div className="flex-1 relative">
        {/* Y-Axis labels */}
        <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] font-bold text-slate-300 pr-4">
          <span>$200k</span>
          <span>$150k</span>
          <span>$100k</span>
          <span>$50k</span>
          <span>0</span>
        </div>

        {/* Grid Lines and Placeholder Visualization */}
        <div className="ml-12 h-full flex flex-col">
          <div className="flex-1 border-b border-l border-slate-100 relative group overflow-hidden rounded-tr-xl">
            {/* Horizontal Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full h-[1px] bg-slate-50/50"></div>
              ))}
            </div>

            {/* Animated Skeleton bars/lines to represent "Loading/No Data" state beautifully */}
            <div className="absolute inset-0 flex items-end justify-around px-8 pb-1">
              {[40, 70, 45, 90, 65, 80, 50].map((height, i) => (
                <div
                  key={i}
                  className="w-12 bg-slate-50 rounded-t-lg transition-all duration-500 hover:bg-primary/5 relative group/bar"
                >
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/10 to-transparent rounded-t-lg animate-pulse"
                    style={{
                      height: `${height}%`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 bg-primary/20 rounded-t-full"
                    style={{ height: `${height - 5}%` }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Status Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white px-4 py-2 rounded-lg shadow-premium border border-border flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                <span className="text-xs font-bold text-text-main">
                  Awaiting Chart Integration...
                </span>
              </div>
            </div>
          </div>

          {/* X-Axis labels */}
          <div className="h-8 flex justify-around items-end text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-4">
            <span>IT</span>
            <span>Design</span>
            <span>Sales</span>
            <span>Ops</span>
            <span>Finance</span>
            <span>HR</span>
            <span>Legal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
