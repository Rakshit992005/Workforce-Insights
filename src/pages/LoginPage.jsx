import { useState } from "react";
import { Input, Button } from "../components/LoginComponents";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username === "test" && formData.password === "123456") {
      navigate("/listpage");
    } else {
      alert("Invalid username or password");
    }
  };

  // Icons
  const Icons = {
    Pulse: () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    User: () => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    Lock: () => (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    ArrowRight: () => (
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
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    ),
  };

  return (
    <div className="min-h-screen bg-bg-page flex flex-col items-center justify-center p-4">
      <div className="bg-white w-full max-w-[500px] rounded-2xl shadow-2xl p-10 md:p-14 animate-slide-up relative border border-slate-100">
        <header className="text-center mb-10">
          <div className="flex justify-center mb-5">
            <div className="w-12 h-12 bg-primary flex items-center justify-center text-white rounded-xl shadow-lg shadow-primary/30">
              <Icons.Pulse />
            </div>
          </div>
          <h1 className="text-primary text-3xl font-extrabold mb-2 tracking-tight">
            Workforce Insights
          </h1>
          <h2 className="text-text-main text-2xl font-bold mb-2">
            Welcome back
          </h2>
          <p className="text-text-muted text-sm max-w-[300px] mx-auto">
            Please enter your details to manage your workforce data.
          </p>
        </header>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <Input
            label="Username or Email"
            icon={Icons.User}
            id="username"
            name="username"
            placeholder="admin@workforce.com"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <Input
            label="Password"
            icon={Icons.Lock}
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            rightElement={
              <a
                href="#forgot"
                className="text-xs font-semibold text-primary hover:underline transition-all"
              >
                Forgot password?
              </a>
            }
          />

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="w-4 h-4 cursor-pointer accent-primary rounded-md"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label
              htmlFor="rememberMe"
              className="text-sm text-text-muted cursor-pointer hover:text-text-main transition-colors"
            >
              Remember me for 30 days
            </label>
          </div>

          <Button type="submit" className="mt-2">
            Sign In <Icons.ArrowRight />
          </Button>
        </form>
      </div>

      <nav className="flex gap-8 justify-center mt-12 mb-8">
        <a
          href="#privacy"
          className="text-xs font-medium text-text-muted hover:text-primary transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="#terms"
          className="text-xs font-medium text-text-muted hover:text-primary transition-colors"
        >
          Terms of Service
        </a>
        <a
          href="#help"
          className="text-xs font-medium text-text-muted hover:text-primary transition-colors"
        >
          Help Center
        </a>
      </nav>
    </div>
  );
};

export default LoginPage;
