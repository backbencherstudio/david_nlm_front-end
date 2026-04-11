"use client";

import React from "react";
import CircleTickIcon from "@/icons/CircleTickIcon";
import GenericButton from "@/components/Dashboard/auth/GenericButton";

const ConfirmationPassForm = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    return (
        <div className="space-y-8">

            <GenericButton variant="primary" size="md" rounded="2xl" fullWidth onClick={() => console.log("Logged in")}>
                Proceed to login
            </GenericButton>
        </div>
    );
};

export default ConfirmationPassForm;
