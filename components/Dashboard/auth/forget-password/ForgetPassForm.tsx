"use client";

import CustomButton from "@/components/reusable/CustomButton";
import ReusableInput from "@/components/reusable/InputFiled/ReusableInput";
import EmailIcon from "@/icons/EmailIcon";
import { GenericButton } from "../GenericButton";


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

      <GenericButton variant="primary" size="md" fullWidth rounded="2xl" onClick={() => console.log("Reset link sent")}>Send OTP</GenericButton>


    </div>
  );
};

export default ForgetPassForm;
