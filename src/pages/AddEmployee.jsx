import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useWorkforce } from "../context/WorkforceContext";

const AddEmployee = () => {
  const navigate = useNavigate();
  const { addEmployee } = useWorkforce();

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    city: "",
    officeCode: "",
    joiningDate: "",
    salary: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Format data for central context
    const newEmployee = [
      formData.name,
      formData.position,
      formData.city,
      formData.officeCode,
      formData.joiningDate,
      `$${formData.salary.replace(/[$,]/g, "")}`,
    ];

    setTimeout(() => {
      addEmployee(newEmployee);
      setIsSubmitting(false);
      setStatus({
        type: "success",
        message: "Employee added successfully! Redirecting...",
      });
      setTimeout(() => navigate("/listpage"), 1500);
    }, 1000);
  };

  const inputClasses =
    "w-full bg-slate-50 border border-border rounded-xl px-4 py-3 text-text-main focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none font-medium placeholder:text-slate-400";
  const labelClasses =
    "block text-xs font-bold text-text-muted uppercase tracking-wider mb-2 ml-1";

  return (
    <div className="min-h-screen bg-bg-page animate-fade-in pb-20">
      <NavBar />

      <div className="max-w-3xl mx-auto px-6 pt-8">
        {/* Header Actions */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-text-muted hover:text-primary mb-8 transition-colors group cursor-pointer"
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
            className="transition-transform group-hover:-translate-x-1"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span className="font-medium">Cancel and return</span>
        </button>

        <div className="bg-white rounded-[2.5rem] shadow-premium border border-border overflow-hidden animate-slide-up">
          <div className="p-8 md:p-12 border-b border-slate-50">
            <h1 className="text-3xl font-extrabold text-text-main tracking-tight mb-2">
              Add New Employee
            </h1>
            <p className="text-text-muted font-medium">
              Enter the professional details to register a new member to the
              workforce.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            {status.message && (
              <div
                className={`mb-8 p-4 rounded-2xl flex items-center gap-3 animate-image-pop ${status.type === "success" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-red-50 text-red-700 border border-red-100"}`}
              >
                {status.type === "success" ? (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                )}
                <span className="text-sm font-bold">{status.message}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="md:col-span-2">
                <label className={labelClasses}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. John Doe"
                  className={inputClasses}
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className={labelClasses}>Position</label>
                <input
                  type="text"
                  name="position"
                  required
                  placeholder="e.g. Software Engineer"
                  className={inputClasses}
                  value={formData.position}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className={labelClasses}>City</label>
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="e.g. San Francisco"
                  className={inputClasses}
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className={labelClasses}>Office Code</label>
                <input
                  type="text"
                  name="officeCode"
                  required
                  placeholder="e.g. SF-101"
                  className={inputClasses}
                  value={formData.officeCode}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label className={labelClasses}>Joining Date</label>
                <input
                  type="date"
                  name="joiningDate"
                  required
                  className={inputClasses}
                  value={formData.joiningDate}
                  onChange={handleChange}
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelClasses}>Annual Salary</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-text-muted">
                    $
                  </span>
                  <input
                    type="text"
                    name="salary"
                    required
                    placeholder="0.00"
                    className={`${inputClasses} pl-8`}
                    value={formData.salary}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary hover:bg-primary-hover disabled:opacity-50 text-white py-4 rounded-2xl font-bold transition-all shadow-vibrant hover:shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                    Register Employee
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <p className="text-center mt-8 text-text-muted text-sm font-medium">
          New employees will be automatically synchronized with your central
          analytics engine.
        </p>
      </div>
    </div>
  );
};

export default AddEmployee;
