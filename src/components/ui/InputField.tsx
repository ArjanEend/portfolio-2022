import React from "react";

export interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  type?: "text" | "tel" | "email" | "textarea";
  rows?: number;
  placeholder?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
  className?: string;
}

export default function InputField({
  label,
  id,
  name,
  type = "text",
  rows = 5,
  placeholder,
  required = false,
  value,
  onChange,
  className = "",
}: InputFieldProps) {
  const containerClasses = `flex flex-col ${className}`;
  const labelClasses = "font-bold text-sm uppercase tracking-wider text-strong mb-2 block";
  
  // High contrast focus outline that is WCAG compliant
  const inputClasses = "w-full border-[3px] border-black p-4 bg-white text-strong font-medium shadow-brutal focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-brutal-lg focus-visible:ring-4 focus-visible:ring-black transition-all duration-100 placeholder:text-gray-500";

  return (
    <div className={containerClasses}>
      <label htmlFor={id} className={labelClasses}>
        {label} {required && <span className="text-duck-beak" aria-hidden="true">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputClasses}
          aria-required={required}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputClasses}
          aria-required={required}
        />
      )}
    </div>
  );
}
