import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import ListItems from "../components/ListItems";
import { useWorkforce } from "../context/WorkforceContext";

const ListPage = () => {
  const { data, loading, refreshData } = useWorkforce();
  const navigate = useNavigate();

  const downloadHandler = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-bg-page animate-fade-in">
      <NavBar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="animate-slide-up">
            <h1 className="text-3xl font-extrabold text-text-main tracking-tight mb-2">
              Employee Directory
            </h1>
            <p className="text-text-muted font-medium">
              Manage and monitor your global workforce insights in real-time.
            </p>
          </div>

          <div
            className="flex items-center gap-3 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <button
              onClick={refreshData}
              className="bg-white p-2.5 rounded-xl cursor-pointer border border-border shadow-premium hover:bg-slate-50 transition-colors"
              title="Refresh Data"
            >
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
                <path d="M23 4v6h-6" />
                <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
              </svg>
            </button>
            <button
              onClick={downloadHandler}
              className="bg-white p-2.5 rounded-xl cursor-pointer border border-border shadow-premium hover:bg-slate-50 transition-colors"
            >
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
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </button>
          </div>
        </header>

        <div
          className=" print-area bg-white rounded-2xl shadow-premium border border-border overflow-hidden animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Table Header */}
          <div className=" grid grid-cols-6 gap-4 px-6 py-4 bg-slate-50 border-b border-border">
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
              Employee Name
            </span>
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
              Position
            </span>
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
              City
            </span>
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
              Office Code
            </span>
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
              Joining Date
            </span>
            <span className="text-xs font-bold text-text-muted uppercase tracking-wider">
              Salary
            </span>
          </div>

          <div className="  divide-y divide-slate-100">
            {loading ? (
              <div className="py-20 flex flex-col items-center justify-center gap-4">
                <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
                <p className="text-sm font-medium text-text-muted">
                  Fetching latest workforce data...
                </p>
              </div>
            ) : (
              data.map((item, idx) => (
                <ListItems className="cursor-pointer" key={idx} item={item} />
              ))
            )}
          </div>

          {!loading && data.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-text-muted">No records found.</p>
            </div>
          )}

          <footer className="px-6 py-4 bg-slate-50/50 border-t border-border flex items-center justify-between">
            <p className="text-xs font-medium text-text-muted">
              Showing{" "}
              <span className="text-text-main font-bold">{data.length}</span>{" "}
              entries
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-bold border border-border rounded-md bg-white opacity-50 cursor-not-allowed">
                Previous
              </button>
              <button className="px-3 py-1 text-xs font-bold border border-border rounded-md bg-white hover:bg-slate-50 transition-colors">
                Next
              </button>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default ListPage;
