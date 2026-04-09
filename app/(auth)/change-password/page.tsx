import DashboardContainer from "@/app/(admin)/dashboard/_components/DashboardContainer";
import React from "react";
import AuthRightSection from "../_components/AuthRightSection";
import LoginForm from "../login/_components/LoginForm";
import BackIcon from "../_components/BackIcon";
import ChangePassForm from "./_components/ChangePassForm";

const ChangePassword = () => {
  return (
    <DashboardContainer className="flex flex-col lg:flex-row min-h-screen">
      {/* LEFT SECTION */}
      <div className="flex justify-center items-center w-full lg:w-1/2 px-4">
        <div className="w-full max-w-[28rem] flex flex-col justify-center space-y-8">
          {/* Header */}
          <div className="space-y-6">
            <BackIcon />
            <div className="space-y-2">
              <h2 className="text-blackColor text-2xl sm:text-[2rem] font-semibold leading-[130%]">
                Set your new password{" "}
              </h2>
              <p className="text-descriptionColor text-base leading-[160%]">
                Enter your new password
              </p>
            </div>
          </div>

          {/* Form */}
          <ChangePassForm />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <AuthRightSection />
    </DashboardContainer>
  );
};

export default ChangePassword;
