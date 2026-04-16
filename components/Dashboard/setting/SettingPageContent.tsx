import React from "react";
import GenericSelect from "../common/GenericSelectInput";

const SettingPageContent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
      <GenericSelect
        label="Booking Fee Type"
        options={[
          { value: "percentage", label: "Percentage" },
          { value: "fixed", label: "Fixed Amount" },
        ]}
        borderRadius="rounded-full"
        height="h-12!"
      />
      <GenericSelect
        label="Booking Fee Type"
        options={[
          { value: "percentage", label: "Percentage" },
          { value: "fixed", label: "Fixed Amount" },
        ]}
        borderRadius="rounded-full"
        height="h-12!"
      />
      <GenericSelect
        label="Booking Fee Type"
        options={[
          { value: "percentage", label: "Percentage" },
          { value: "fixed", label: "Fixed Amount" },
        ]}
        borderRadius="rounded-full"
        height="h-12!"
      />
      <GenericSelect
        label="Booking Fee Type"
        options={[
          { value: "percentage", label: "Percentage" },
          { value: "fixed", label: "Fixed Amount" },
        ]}
        borderRadius="rounded-full"
        height="h-12!"
      />
       <GenericSelect
        label="Booking Fee Type"
        options={[
          { value: "percentage", label: "Percentage" },
          { value: "fixed", label: "Fixed Amount" },
        ]}
        borderRadius="rounded-full"
        height="h-12!"
      />
    </div>
  );
};

export default SettingPageContent;
