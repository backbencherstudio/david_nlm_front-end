"use client";

import React from "react";
import CustomButton from "@/components/reusable/CustomButton";
import ReusableInput from "@/components/reusable/InputFiled/ReusableInput";
import AppleIcon from "@/icons/AppleIcon";
import EmailIcon from "@/icons/EmailIcon";
import GoogleIcon from "@/icons/GoogleIcon";
import LockIcon from "@/icons/LockIcon";
import { Checkbox } from "@/components/ui/checkbox";
import HorizontalLineIcon from "@/icons/HorizontalLineIcon";
import AppleIconBlack from "@/icons/AppleIconBlack";
import GenericButton from "../../_components/GenericButton";

const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <ReusableInput
          label="Email"
          type="email"
          icon={<EmailIcon />}
          containerClassName="w-full"
          placeholder="sarahjohnson@mail.com"
          className="rounded-2xl"
        />
        <ReusableInput
          label="Password"
          type={showPassword ? "text" : "password"}
          icon={<LockIcon />}
          className="rounded-2xl"
          placeholder="•••••••••"
          showPassword={showPassword}
          togglePasswordVisibility={togglePasswordVisibility}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {" "}
            <Checkbox className="" />
            <span className="text-xs text-descriptionColor leading-[160%]">
              Remember me
            </span>
          </div>
          <span className="text-sm bg-gradient-to-r from-purpleOne via-purpleTwo to-purpleThree bg-clip-text text-transparent cursor-pointer">
            Forgot your password?
          </span>
        </div>
      </div>

      <GenericButton variant="primary" size="md" rounded="2xl" fullWidth onClick={() => console.log("Logged in")}>
        Log in
      </GenericButton>

      {/* Social Login */}
      <div className="space-y-4">
        <div className="flex justify-center items-center gap-2">
          <HorizontalLineIcon />
          <p className="text-center text-descriptionColor text-sm leading-[160%] whitespace-nowrap">
            Or continue with
          </p>
          <HorizontalLineIcon />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <CustomButton
            className="flex-1 flex items-center justify-center gap-2 w-full border border-borderColor rounded-2xl py-2 px-3 h-12"
            fullWidth
          >
            <GoogleIcon />
            Google
          </CustomButton>

          <CustomButton
            className="flex-1 flex items-center justify-center gap-2 w-full border border-borderColor rounded-2xl py-2 px-3 h-12"
            fullWidth
          >
            <AppleIconBlack />
            Apple
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
