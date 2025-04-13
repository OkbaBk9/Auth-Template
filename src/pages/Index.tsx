
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#e6f7f0]">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-sm p-8 text-center">
        <h1 className="text-4xl font-bold text-[#10b981] mb-4">Welcome to JM3IA</h1>
        <p className="text-xl text-gray-600 mb-8">Authentication Demo</p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <Link to="/login">
            <Button className="w-full md:w-auto bg-[#10b981] hover:bg-[#0d9669]">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="w-full md:w-auto bg-white text-[#10b981] border border-[#10b981] hover:bg-gray-50">
              Create Account
            </Button>
          </Link>
          <Link to="/forgot-password">
            <Button variant="ghost" className="w-full md:w-auto text-gray-600 hover:text-gray-900">
              Forgot Password?
            </Button>
          </Link>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-6">
          <p className="text-gray-500">
            This is a demo of authentication screens including login, signup, password reset, and new password entry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
