"use client";

import CustomButton from "@/components/reusable/CustomButton";
import ReusableInput from "@/components/reusable/InputFiled/ReusableInput";
import EmailIcon from "@/icons/EmailIcon";
import LockIcon from "@/icons/LockIcon";
import React from "react";

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
        <CustomButton className="w-full gradient-bg rounded-2xl py-2 px-3 flex justify-center text-white text-sm h-12">
          Set Password
        </CustomButton>

        <CustomButton
          className="w-full   rounded-2xl py-2 px-3 flex
         justify-center border border-purpleOne bg-gradient-to-r 
         from-purpleOne via-purpleTwo to-purpleThree bg-clip-text
          text-transparent text-sm font-semibold h-12"
        >
          Back to Sign in
        </CustomButton>
      </div>

      {/* Social Login */}
    </div>
  );
};

export default ChangePassForm;
