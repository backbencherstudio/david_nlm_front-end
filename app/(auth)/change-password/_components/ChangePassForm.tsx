"use client";

import CustomButton from "@/components/reusable/CustomButton";
import ReusableInput from "@/components/reusable/InputFiled/ReusableInput";
import EmailIcon from "@/icons/EmailIcon";
import LockIcon from "@/icons/LockIcon";
import React from "react";
import { GenericButton } from "../../_components/GenericButton";

const ChangePassForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <ReusableInput
          label="Password"
          type={showPassword ? "text" : "password"}
          icon={<LockIcon />}
          className="rounded-2xl"
          placeholder="•••••••••"
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
        />
      </div>

      <div className="space-y-5">
        <GenericButton
          variant="primary"
          size="md"
          rounded="2xl"
          onClick={() => console.log("Saved")}
          fullWidth
        >
         Set Password
        </GenericButton>

         <GenericButton
          variant="outline"
          size="md"
          rounded="2xl"
          onClick={() => console.log("Saved")}
          fullWidth
        >
         Back to sign in
        </GenericButton>
      </div>

      {/* Social Login */}
    </div>
  );
};

export default ChangePassForm;
