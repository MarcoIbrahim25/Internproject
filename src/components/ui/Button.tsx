import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
};

export default function Button({
  children,
  type = "button",
  disabled,
  loading,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className="rounded-xl bg-slate-900 px-4 py-2 text-white disabled:opacity-60"
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
