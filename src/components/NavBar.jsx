import { useNavigate, NavLink } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const navLinkClass = ({ isActive }) =>
    `transition-colors hover:text-primary pb-0.5 ${
      isActive
        ? "text-primary border-b-2 border-primary font-bold"
        : "text-text-muted font-medium"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border px-6 py-4 flex items-center justify-between">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => navigate("/listpage")}
      >
        <div className="w-8 h-8 bg-primary flex items-center justify-center text-white rounded-lg shadow-vibrant">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        </div>
        <span className="text-lg font-bold text-text-main tracking-tight">
          Workforce Insights
        </span>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/listpage" className={navLinkClass}>
            Employees
          </NavLink>
          <NavLink to="/analytics" className={navLinkClass}>
            Analytics
          </NavLink>
          <NavLink to="/add-employee" className={navLinkClass}>
            Add Employee
          </NavLink>
        </div>

        <div className="flex items-center gap-3 border-l border-border pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-text-main">Admin User</p>
            <p className="text-[10px] text-text-muted">Super Admin</p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
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
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
