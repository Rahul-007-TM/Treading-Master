"use client";

import { useRouter } from "next/navigation";
import React from "react";

const MaintenanceProvider = ({ children }) => {
    const router = useRouter();

    const MaintenanceMode = true;
    if (MaintenanceMode) router.push("/down");

    return <>{children}</>;
};

export default MaintenanceProvider;
