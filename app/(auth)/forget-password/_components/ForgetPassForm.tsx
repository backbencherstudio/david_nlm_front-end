"use client";

import CustomButton from "@/components/reusable/CustomButton";
import ReusableInput from "@/components/reusable/InputFiled/ReusableInput";
import EmailIcon from "@/icons/EmailIcon";


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

      <CustomButton className="w-full gradient-bg rounded-2xl py-2 px-3 flex justify-center text-white text-sm h-12">
        Send OTP
      </CustomButton>

   
    </div>
  );
};

export default ForgetPassForm;
