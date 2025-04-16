
import { useState } from "react";
import { Input } from "./input";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const PasswordInput = ({ id, value, onChange, placeholder = "••••••••" }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        id={id}
        placeholder={placeholder}
        className="pr-10 border-[#10b981]/30 focus:border-[#10b981] focus:ring-[#10b981]/20"
        value={value}
        onChange={onChange}
        required
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <EyeOff className="h-5 w-5" />
        ) : (
          <Eye className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
