import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const DetailsPAge = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {
    item: [
      "Alexander Sterling",
      "Senior Solutions Architect",
      "San Francisco",
      "SF-101",
      "2023-01-15",
      "$150,000",
    ],
  };

  const [profileImage, setProfileImage] = useState(
    location.state?.capturedImage ||
      "https://ui-avatars.com/api/?name=" +
        item[0] +
        "&background=random&size=200",
  );

  const handleCapture = () => {
    navigate("/capture", { state: { item } });
  };

  const personalDetails = [
    {
      label: "Name",
      value: item[0],
      icon: (
        <>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </>
      ),
    },
    {
      label: "Position",
      value: item[1],
      icon: (
        <>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </>
      ),
    },
    {
      label: "City",
      value: item[2],
      icon: (
        <>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </>
      ),
    },
    {
      label: "Office Code",
      value: item[3],
      icon: (
        <>
          <line x1="4" y1="9" x2="20" y2="9" />
          <line x1="4" y1="15" x2="20" y2="15" />
          <line x1="10" y1="3" x2="8" y2="21" />
          <line x1="16" y1="3" x2="14" y2="21" />
        </>
      ),
    },
    {
      label: "Joining Date",
      value: item[4],
      icon: (
        <>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </>
      ),
    },
    {
      label: "Salary",
      value: item[5],
      icon: (
        <>
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page animate-fade-in pb-20">
      <NavBar />

      <div className="max-w-5xl mx-auto px-6 pt-8">
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
          <span className="font-medium">Back to list</span>
        </button>

        <div className="bg-white rounded-3xl shadow-premium border border-border overflow-hidden animate-slide-up">
          <div className="p-8 md:p-12 bg-gradient-to-br from-slate-50 to-white border-b border-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-100 border-4 border-white shadow-lg overflow-hidden flex items-center justify-center transition-transform group-hover:scale-[1.02]">
                  <img
                    src={profileImage}
                    alt={item[0]}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-lg border-2 border-white">
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
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-text-main mb-2 tracking-tight">
                  {item[0]}
                </h2>
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                  <span className="px-3 py-1 bg-primary-light text-primary text-sm font-bold rounded-full">
                    {item[1]}
                  </span>
                  <span className="text-slate-400 font-medium">•</span>
                  <span className="text-text-muted font-medium flex items-center gap-1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {item[2]}
                  </span>
                </div>
              </div>

              <button
                onClick={handleCapture}
                className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl font-bold transition-all shadow-vibrant hover:shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer"
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
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
                Capture Photo
              </button>
            </div>
          </div>

          {/* Details Grid Section */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-lg font-bold text-text-main whitespace-nowrap">
                Professional Information
              </h3>
              <div className="h-[1px] bg-border w-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {personalDetails.map((detail, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-50 text-slate-400 group-hover:bg-primary-light group-hover:text-primary rounded-xl transition-colors">
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
                        {detail.icon}
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-1">
                        {detail.label}
                      </p>
                      <p className="text-base font-semibold text-text-main">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPAge;
