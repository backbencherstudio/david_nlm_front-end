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
import LoginForm from "../../login/_components/LoginForm";

const ForgetPassForm = () => {


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
      </div>

      <CustomButton className="w-full gradient-bg rounded-2xl py-2 px-3 flex justify-center text-white text-sm">
        Send OTP
      </CustomButton>

   
    </div>
  );
};

export default ForgetPassForm;
