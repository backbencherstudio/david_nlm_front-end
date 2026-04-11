import AdminMenu from "@/components/reusable/AdminMenu";
import Loader from "@/components/reusable/Loader";
import React, { Suspense } from "react";
import "../../globals.css"

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Suspense fallback={<Loader />}>
          <AdminMenu>{children}</AdminMenu>
        </Suspense>
      </body>
    </html>
  );
}

export default AdminLayout;
