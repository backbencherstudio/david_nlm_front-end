"use client";

import { Menu, PlusIcon, X } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdNotifications } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import Search from "./Search";
import NotificationIcon from "@/icons/NotificationIcon";
import BlueDot from "@/icons/BlueDot";
import { SearchResult } from "@/types";
import { GenericSearch } from "../Dashboard/search/GenericSearch";
import ChevronDownIcon from "@/icons/ChevronDownIcon";
import { PAGE_LINKS } from "@/data/nav";
import { useHeaderHeading } from "@/hooks/useHeaderHeading";
import GenericButton from "../Dashboard/auth/GenericButton";

interface HeaderProps {
  onNotificationClick?: () => void;
  adminName?: string;
  sidebarOpen: boolean;
  onMenuClick: () => void;
}

function searchNavigation(query: string) {
  const q = query.toLowerCase();
  return PAGE_LINKS.filter(
    (item) =>
      item.label.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q),
  );
}

const Header: React.FC<HeaderProps> = ({
  onMenuClick,
  sidebarOpen,
}: HeaderProps) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const { heading, description } = useHeaderHeading({ path });
  const isOverView = path === "/dashboard";
  const isServices = path === "/dashboard/services";

  return (
    <nav className="  bg-grayBg p-5">
      <div className="relative flex justify-between w-full mb-1 z-50">
        {/* Mobile menu button */}
        <div>
          <div className=" xl:hidden h-full flex items-center">
            <button
              onClick={onMenuClick}
              className=" pr-2 py-2  text-[#4A4C56]"
            >
              {sidebarOpen ? (
                <X className=" z-50 bg-black " />
              ) : (
                <Menu className="text-blackColor" />
              )}
            </button>
          </div>
        </div>

        {/* Notification and Profile Group */}
        <div className="flex items-center gap-2 lg:gap-6 justify-between w-full">
          <div className=" lg:block">
            <h2 className="text-blackColor font-medium text-2xl">{heading}</h2>
            <p className="text-descriptionColor leading-[160%] hidden xl:block">
              {description}
            </p>
          </div>

          <div className="flex items-center gap-2 lg:gap-5 justify-between">
            <div className="hidden md:block w-full">
              {isOverView && (
                <GenericSearch
                  onSearch={searchNavigation as any}
                  onSelect={(item: any) => {
                    if (item && item.id) {
                      router.push(item.id);
                    }
                  }}
                  placeholder="Search pages and settings..."
                  debounceMs={0}
                  minChars={1}
                  size="lg"
                />
              )}
              {isServices && (
                <GenericButton variant="primary" size="xlg" icon={<PlusIcon />}>
                  Create new Service
                </GenericButton>
              )}
            </div>

            <div className="flex items-center gap-3">
              <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                <PopoverTrigger
                  className="cursor-pointer relative flex justify-center items-center bg-white rounded-full p-[0.402rem] border-[0.5px] border-borderColor w-9 h-9"
                  onClick={() => setPopoverOpen(!popoverOpen)}
                >
                  <div className="absolute top-1.5 right-1.5">
                    <BlueDot />
                  </div>
                  <NotificationIcon />
                </PopoverTrigger>

                <PopoverContent className="w-70 md:w-[267px] mt-4 p-0 max-h-[500px] flex flex-col mr-6">
                  {/* Header */}
                  <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
                    <h4 className="text-base font-bold md:text-lg text-headerColor">
                      Notifications
                    </h4>

                    <button
                      onClick={() => setPopoverOpen(false)}
                      className="text-[#455468] bg-bgColor w-[35px] h-[35px] shadow-sm rounded-full cursor-pointer text-lg font-bold flex items-center justify-center"
                    >
                      <X className="" />
                    </button>
                  </div>

                  <div className="overflow-y-auto px-4 py-3 flex-1">
                    <p className="text-center text-sm text-gray-500 py-6">
                      No notifications available
                    </p>
                  </div>
                </PopoverContent>
              </Popover>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex gap-3 h-full items-center cursor-pointer">
                    <div className=" w-9 h-9  rounded-full overflow-hidden">
                      <Image
                        src={"/vendly_profile.jpg"}
                        alt="Admin Avatar"
                        width={36}
                        height={36}
                        className="rounded-full w-full h-full"
                      />
                    </div>

                    <button className=" cursor-pointer">
                      <ChevronDownIcon purple />
                    </button>
                  </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-4 py-2">
                    <p className="text-sm font-semibold text-headerColor">
                      {"User"}
                    </p>
                    <p className="text-xs text-textColor">
                      {"admin@company.com"}
                    </p>
                  </div>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onClick={() => {
                      router.push("/login");
                    }}
                    className="text-redColor hover:bg-redColor/10! flex justify-center w-full hover:text-redColor! hover:border hover:border-redColor font-semibold cursor-pointer"
                  >
                    Log Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" md:hidden px-4">
        <SearchInput
          onSearch={searchLocally}
          onSelect={(c) => console.log(c.label)}
          placeholder="Search"
          debounceMs={0}
          minChars={1}
        />
      </div> */}
    </nav>
  );
};

export default Header;
