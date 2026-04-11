'use client'

import StatCards from "./StateCards";
import DashboardUserTable from "./DashboardUserTable";
import WarningIcon from "@/icons/WarningIcon";
import VendorsIcon from "@/icons/VendorsIcon";
import EventPlannersIcon from "@/icons/EventPlannersIcon";
import MenWithDollarIcon from "@/icons/MenWithDollarIcon";
import DollarIcon from "@/icons/DollarIcon";
import ReveneuOverview from "./overview/ReveneuOverview";
import TodaysBooking from "./todays-booking/TodaysBooking";
import NewSubscription from "./new-subscription/NewSubscription";
import QuickActions from "./quick-actions/QuickActions";




function DashboardPage() {
  const statCards = [
    {
      title: "Total Vendors",
      value: 195,
      percentage: "0.1%",
      icon: <VendorsIcon />,
    },
    {
      title: "   Event Planners",
      value: 7,
      percentage: "0.8%",
      icon: <EventPlannersIcon />,
    },
    {
      title: "Total Customers",
      value: 18,
      percentage: "1.5%",
      icon: <MenWithDollarIcon />,
    },
    {
      title: "Total Revenue",
      value: 635,
      percentage: "72.6%",
      icon: <DollarIcon />,
    },

  ];
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="space-y-5">
        <div className="space-y-1">
          <h3 className="text-lg md:text-xl font-bold text-blackColor leading-[130%]">
            Dashboard Overview
          </h3>
          <p className="text-sm text-descriptionColor leading-[160%]">Monitor your platform performance and manage operations</p>
        </div>

        {/* warning */}
        <div className="flex items-start gap-2.5 bg-warningBg p-3 rounded-xl border-[0.5px] border-warningBorder">
          <div className="pt-1"><WarningIcon /></div>
          <div className="space-y-1">
            <h3 className="text-[#1D1F2C] text-sm font-medium leading-[160%]">11 pending requests require your attention</h3>
            <p className="text-grayColor1 text-xs leading-[160%]">8 vendor applications and 3 event planner applications are awaiting review.</p>
          </div>
        </div>

        <StatCards statCards={statCards} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] mt-10 gap-5">
        <div className="flex-1">
          <ReveneuOverview />
        </div>
        <div className="flex flex-col space-y-5">
          <TodaysBooking />
          <NewSubscription />
        </div>
      </div>

      <div className="mt-5">
        <QuickActions />
      </div>
    </div>
  );
}

export default DashboardPage;
