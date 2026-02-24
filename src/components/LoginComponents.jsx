import React from "react";

export const Input = ({
  label,
  icon: Icon,
  type = "text",
  id,
  name,
  placeholder,
  value,
  onChange,
  required,
  rightElement,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-semibold text-text-main" htmlFor={id}>
          {label}
        </label>
        {rightElement}
      </div>
      <div className="relative group">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-primary transition-colors">
          <Icon />
        </span>
        <input
          type={type}
          id={id}
          name={name}
          className="w-full pl-11 pr-4 py-3.5 border border-border rounded-xl text-sm bg-secondary focus:outline-none focus:border-primary/50 focus:bg-white focus:ring-4 focus:ring-primary/5 transition-all outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
};

export const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary hover:bg-primary-hover text-white py-4 px-6 rounded-xl text-base font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/20 active:scale-[0.98] transition-all transform ${className}`}
    >
      {children}
    </button>
  );
};
