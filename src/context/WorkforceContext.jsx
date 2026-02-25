import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WorkforceContext = createContext();

export const useWorkforce = () => {
  const context = useContext(WorkforceContext);
  if (!context) {
    throw new Error("useWorkforce must be used within a WorkforceProvider");
  }
  return context;
};

export const WorkforceProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://backend.jotish.in/backend_dev/gettabledata.php",
        {
          username: "test",
          password: "123456",
        },
      );
      setData(response.data.TABLE_DATA.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching workforce data:", err);
      setError("Failed to fetch workforce data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Derived stats for Analytics
  const stats = {
    totalEmployees: data.length,
    averageSalary:
      data.length > 0
        ? data.reduce((acc, curr) => {
            const salary = parseFloat(curr[5].replace(/[$,]/g, ""));
            return acc + salary;
          }, 0) / data.length
        : 0,
    totalMonthlyPayroll:
      data.length > 0
        ? data.reduce((acc, curr) => {
            const salary = parseFloat(curr[5].replace(/[$,]/g, ""));
            return acc + salary / 12;
          }, 0)
        : 0,
    departmentData: data.reduce((acc, curr) => {
      const dept = curr[1]; // Using Position as a proxy for Department for now
      if (!acc[dept]) acc[dept] = { count: 0, totalSalary: 0 };
      acc[dept].count += 1;
      acc[dept].totalSalary += parseFloat(curr[5].replace(/[$,]/g, ""));
      return acc;
    }, {}),
  };

  const value = {
    data,
    loading,
    error,
    stats,
    refreshData: fetchData,
  };

  return (
    <WorkforceContext.Provider value={value}>
      {children}
    </WorkforceContext.Provider>
  );
};
