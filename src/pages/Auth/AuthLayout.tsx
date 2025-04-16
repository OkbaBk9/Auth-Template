
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e6f7f0] to-[#c8f5e3]">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-[#a7e9d2]/30">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#10b981] drop-shadow-sm">JM3IA</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
