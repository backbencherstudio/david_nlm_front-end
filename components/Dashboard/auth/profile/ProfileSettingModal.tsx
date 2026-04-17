"use client";

import React, { useState } from "react";
import ModalWrapper from "../../common/modal/ModalWrapper";
import ModalBody from "../../common/modal/ModalBody";
import ProfileIcon from "@/icons/ProfileIcon";
import SecurityIcon from "@/icons/SecurityIcon";
import ProfileContent from "./ProfileContent";
import { ModalHeader } from "../../common/modal/ModalHeader";

const ProfileSettingTabs = [
  {
    id: 1,
    key: "profile",
    label: "Profile",
    icon: ProfileIcon,
  },
  {
    id: 2,
    key: "security",
    label: "Security",
    icon: SecurityIcon,
  },
];

const ProfileSettingModal = ({ onClose }: { onClose: () => void }) => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <ModalWrapper isOpen={true} onClose={onClose} size="full" >
      <ModalBody className="flex flex-col md:flex-row gap-4">
        <div className="bg-grayBg p-2 md:p-5 rounded-lg ">
          <h2 className="text-blackColor text-xl font-semibold mb-2 md:mb-6">
            Profile Setting
          </h2>

          {/* Layout */}
        
            {/* Sidebar Tabs */}
            <div className="flex flex-row md:flex-col gap-6 w-[180px] pr-4 space-y-2 ">
              {ProfileSettingTabs.map((item) => {
                const active = activeTab === item.key;

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(item.key)}
                    className={`
                      flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200
                      ${
                        active
                          ? "gradient-bg text-white"
                          : "hover:bg-gray-100 text-descriptionColor"
                      }
                    `}
                  >
                    <item.icon />

                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                );
              })}
            </div>
         
        </div>
        
            {/* Content Area */}
            <div className="flex-1">
              {activeTab === "profile" && <ProfileContent />}

              {activeTab === "security" && <div>Security Content Here</div>}
            </div>
      </ModalBody>
    </ModalWrapper>
  );
};

export default ProfileSettingModal;
