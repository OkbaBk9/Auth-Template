
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6f7f0]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-sm">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-[#10b981]">JM3IA</h1>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
