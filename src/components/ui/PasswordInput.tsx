
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Key } from "lucide-react";

interface PasswordInputProps {
  id: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = ({ id, placeholder = "••••••••", value, onChange }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Key className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        type={showPassword ? "text" : "password"}
        id={id}
        className="pl-10 pr-10"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center pr-3"
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <EyeOff className="h-5 w-5 text-gray-400" />
        ) : (
          <Eye className="h-5 w-5 text-gray-400" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
