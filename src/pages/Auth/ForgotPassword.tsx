
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import AuthLayout from "./AuthLayout";
import { useToast } from "@/components/ui/use-toast";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would handle the password reset API call here
    console.log("Reset password requested for", email);
    
    toast({
      title: "Reset link sent",
      description: `If ${email} is associated with an account, you'll receive a password reset link.`,
    });
    
    setIsSubmitted(true);
  };

  return (
    <AuthLayout>
      <h2 className="text-xl text-gray-600 text-center mb-6">Reset your password</h2>
      
      {isSubmitted ? (
        <div className="text-center space-y-4">
          <p className="text-gray-600">
            We've sent a password reset link to <strong>{email}</strong>
          </p>
          <p className="text-gray-500 text-sm">
            Please check your email and click on the link to reset your password.
          </p>
          <Button 
            className="mt-4 bg-[#10b981] hover:bg-[#0d9669] transition-all duration-300"
            onClick={() => setIsSubmitted(false)}
          >
            Send another link
          </Button>
        </div>
      ) : (
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
                className="pl-10 border-[#10b981]/30 focus:border-[#10b981] focus:ring-[#10b981]/20"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full bg-[#10b981] hover:bg-[#0d9669] transition-all duration-300">
            Send Reset Link
          </Button>
        </form>
      )}

      <p className="text-center mt-6 text-gray-600">
        Remember your password?{" "}
        <Link to="/login" className="text-[#10b981] hover:text-[#0d9669] font-semibold">
          Back to login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default ForgotPassword;
