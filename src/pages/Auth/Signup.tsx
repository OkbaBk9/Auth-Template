
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User, Mail } from "lucide-react";
import AuthLayout from "./AuthLayout";
import PasswordInput from "@/components/ui/PasswordInput";
import { useToast } from "@/components/ui/use-toast";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please ensure both passwords are the same",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Password too short",
        description: "Password must be at least 6 characters long",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Account created successfully",
      description: "You can now log in with your credentials",
    });
    
    // In a real app, you would handle the signup API call here
    console.log("Signup form submitted", { fullName, email, password });
  };

  return (
    <AuthLayout>
      <h2 className="text-xl text-gray-600 text-center mb-6">Create a new account</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="fullName" className="block font-medium text-gray-700">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              type="text"
              id="fullName"
              placeholder="John Doe"
              className="pl-10"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        </div>

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
          <label htmlFor="password" className="block font-medium text-gray-700">
            Password
          </label>
          <PasswordInput
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-sm text-gray-500 mt-1">At least 6 characters</p>
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block font-medium text-gray-700">
            Confirm Password
          </label>
          <PasswordInput
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full bg-[#10b981] hover:bg-[#0d9669]">
          Create Account
        </Button>
      </form>

      <p className="text-center mt-6">
        Already have an account?{" "}
        <Link to="/login" className="text-[#10b981] hover:text-[#0d9669] font-semibold">
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Signup;
