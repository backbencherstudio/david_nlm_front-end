"use client";

import { CookieHelper } from "@/helper/cookie.helper";
import {
  DotIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  Settings,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import SiteLogo from "../landing-page/SiteLogo";
import { OverviewIcon, VendorsIcon, EventPlannersIcon, BookingIcon, TransactionsIcon, ServicesIcon, SettingIcon, PrivacyPolicyIcon, LogoutIcon, ChevronDownIcon, SidebarIcon } from "@/icons";
import { ChevronDown } from "lucide-react";
import PendingApprovalIcon from "@/icons/PendingApprovalIcon";
import { useActiveNav } from "@/hooks";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: any;
  label: string;
  href: string;
  type?: "client" | "admin" | "candidate";
  children?: NavItem[];
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

const navItems: NavItem[] = [
  {
    icon: OverviewIcon,
    label: "Overview",
    href: "/dashboard",
    type: "admin",
  },
  {
    icon: VendorsIcon,
    label: "Vendors",
    href: "/vendors",
    type: "admin",
    children: [
      {
        label: "All Vendors",
        href: "/dashboard/vendors",
        icon: EventPlannersIcon
      },
      {
        label: "Pending Requests",
        href: "/dashboard/vendors/pending-requests",
        icon: PendingApprovalIcon
      }
    ]
  },

  {
    icon: EventPlannersIcon,
    label: "Event Planners",
    href: "/event-planners",
    type: "admin",
    children: [
      {
        label: "All Event Planners",
        href: "/dashboard/event-planners",
        icon: EventPlannersIcon
      },
      {
        label: "Pending Requests",
        href: "/dashboard/event-planners/pending-requests",
        icon: PendingApprovalIcon
      }
    ]
  },
  {
    icon: BookingIcon,
    label: "Bookings",
    href: "/bookings",
    type: "admin",
  },
  {
    icon: TransactionsIcon,
    label: "Transactions",
    href: "/transactions",
    type: "admin",
  },
  {
    icon: ServicesIcon,
    label: "Services",
    href: "/services",
    type: "admin",
  }
];

const otherItems = [
  {
    icon: SettingIcon,
    label: "Settings",
    href: "/settings",
    type: "admin",
  },
  {
    icon: PrivacyPolicyIcon,
    label: "Privacy Policy",
    href: "/privacy-policy",
    type: "admin",
  },
  {
    icon: LogoutIcon,
    label: "Logout",
    href: "/logout",
    type: "admin",
  }
]

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const { isActive } = useActiveNav();

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleLogout = () => {
    CookieHelper.destroy({ key: "accessToken" });
    router.push("/login");
  };
  return (
    <div className="h-screen  ">
      {/* Sidebar container */}
      <div
        className={`
          ${isOpen
            ? "z-50 h-full w-full overflow-hidden absolute top-0 left-0"
            : "h-full"
          }
          flex flex-col
          min-h-[calc(100vh-100px)] 
          w-full
          bg-grayBg
          shadow-[0px_-0.3px_5.5px_0px_rgba(0,0,0,0.02)]
          p-5 lg:p-4 overflow-y-auto transition-all duration-300
         
        `}
      >
        {/* Header with Logo and Toggle */}
        <div className="flex items-center justify-between  mb-4 py-2">
          <SiteLogo
            gapKey="gapOne"
            imageSizeKey="imageOne"
            fontSizeKey="fontSizeOne"
            textColorKey="purple"
          />

          <SidebarIcon onclick={onClose} />
        </div>

        {/* Navigation Section */}
        <div className="flex-1 pb-5">
          <div className="space-y-2 mb-8">
            {navItems.map((item, idx) => {
              const active = isActive(item.href, true);
              const isOpenMenu = openMenu === item.label;
              const showChevron = item.children;

              return (
                <div key={idx}>

                  <div
                    onClick={() => {
                      if (item.children) {
                        setOpenMenu(prev =>
                          prev === item.label ? null : item.label
                        );
                      } else {
                        router.push(item.href);
                        onClose();
                      }
                    }}
                    className={`
          flex items-center group gap-3 px-3 py-2.5 lg:py-3 rounded-lg 
          hover:bg-whiteColor text-blackColor transition-all duration-200
          ${active ? "gradient-bg opacity-100 text-white" : ""}
          ${idx === 0 ? "mb-4" : ""}
          cursor-pointer
        `}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex gap-2 items-center">
                        <div className="w-[30px] h-[30px] flex justify-center items-center">
                          <item.icon />
                        </div>

                        <span
                          className={`text-base font-medium whitespace-nowrap ${active
                            ? "text-white"
                            : "text-descriptionColor hover:text-purpleOne"
                            }`}
                        >
                          {item.label}
                        </span>
                      </div>

                      {showChevron && (
                        <ChevronDown
                          className={`transition-transform text-descriptionColor ease-in-out duration-200 ${isOpenMenu ? "rotate-180" : ""
                            }`}
                        />
                      )}
                    </div>
                  </div>


                  {item.children && isOpenMenu && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.children.map((child, childIdx) => {
                        const childActive = isActive(child.href, true);
                        return (
                          <Link
                            key={childIdx}
                            href={child.href}
                            onClick={onClose}
                            className={cn(
                              "flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200",
                              childActive ? "gradient-bg opacity-100 text-white shadow-sm" : "hover:bg-gray-100"
                            )}
                          >
                            <child.icon className={cn("w-4 h-4 transition-colors", childActive ? "text-white" : "text-descriptionColor")} />
                            <span className={cn(
                              "text-[13px] font-medium whitespace-nowrap transition-colors",
                              childActive ? "text-white" : "text-descriptionColor hover:text-purpleOne"
                            )}>
                              {child.label}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="h-[1px] w-full bg-borderColor" />
          {/* Log out section */}
          <div className="mt-8">
            <h3 className="text-sm font-bold text-blackColor mb-2 px-3">Others</h3>
            {otherItems.map((item, idx) => {
              const active = isActive(item.href, false);
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={onClose}
                  className={`
                  flex items-center group gap-3 px-3 py-2.5 lg:py-3 rounded-lg 
                  hover:text-whiteColor hover:bg-whiteColor text-blackColor transition-all duration-200
                  ${active ? "bg-white opacity-100 text-blackColor" : ""}
                 
                `}
                  title={isCollapsed ? item.label : ""}
                >
                  <div className="flex gap-2 items-center">
                    <div className="w-[30px] h-[30px] group  flex justify-center items-center flex-shrink-0 text-xl font-medium text-blackColor">
                      <item.icon
                      // className={`opacity-70 group-hover:opacity-100 transition-opacity duration-200 ${active ? "opacity-100" : ""
                      //   }`}
                      />
                    </div>
                    <span
                      className={`text-base font-medium text-descriptionColor group-hover:text-purpleOne transition-colors duration-200 whitespace-nowrap `}
                    >
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
