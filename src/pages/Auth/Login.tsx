
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import AuthLayout from "./AuthLayout";
import PasswordInput from "@/components/ui/PasswordInput";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would handle the login API call here
    console.log("Login form submitted", { email, password });
    
    toast({
      title: "Login successful",
      description: "Welcome back!",
    });
  };

  return (
    <AuthLayout>
      <h2 className="text-xl text-gray-600 text-center mb-6">Login to access your workspace</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="email"
              id="email"
              placeholder="your@email.com"
              className="pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label htmlFor="password" className="block font-medium text-gray-700">
              Password
            </label>
          </div>
          <PasswordInput
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-end">
            <Link to="/forgot-password" className="text-sm text-[#10b981] hover:text-[#0d9669]">
              Forgot password?
            </Link>
          </div>
        </div>

        <Button type="submit" className="w-full bg-[#10b981] hover:bg-[#0d9669]">
          Login
        </Button>
      </form>

      <p className="text-center mt-6">
        Don't have an account?{" "}
        <Link to="/signup" className="text-[#10b981] hover:text-[#0d9669] font-semibold">
          Sign up
        </Link>
      </p>

      <div className="mt-8 pt-6 border-t border-gray-200">
        <p className="text-sm text-center text-gray-500 mb-2">For demo purposes, use:</p>
        <div className="space-y-1 text-sm text-gray-600">
          <p>
            Admin: <a href="mailto:admin@example.com" className="underline">admin@example.com</a> | 
            Password: <span className="font-mono">password123</span>
          </p>
          <p>
            Teacher: <a href="mailto:teacher@example.com" className="underline">teacher@example.com</a> | 
            Password: <span className="font-mono">password123</span>
          </p>
          <p>
            Student: <a href="mailto:student@example.com" className="underline">student@example.com</a> | 
            Password: <span className="font-mono">password123</span>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
