
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AuthLayout from "./AuthLayout";
import PasswordInput from "@/components/ui/PasswordInput";
import { useToast } from "@/components/ui/use-toast";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

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
    
    // In a real app, you would handle the password reset API call here
    console.log("Reset password form submitted", { password });
    
    toast({
      title: "Password reset successful",
      description: "Your password has been updated. You can now log in with your new password.",
    });
    
    // Redirect to login page
    navigate("/login");
  };

  return (
    <AuthLayout>
      <h2 className="text-xl text-gray-600 text-center mb-6">Enter your new password</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="password" className="block font-medium text-gray-700">
            New Password
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
            Confirm New Password
          </label>
          <PasswordInput
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <Button type="submit" className="w-full bg-[#10b981] hover:bg-[#0d9669]">
          Reset Password
        </Button>
      </form>

      <p className="text-center mt-6">
        Remember your password?{" "}
        <Link to="/login" className="text-[#10b981] hover:text-[#0d9669] font-semibold">
          Back to login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default ResetPassword;
