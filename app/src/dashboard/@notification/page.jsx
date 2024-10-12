import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>Notification</h1>
      <Link href="/dashboard/archived" style={{ textDecoration: "underline" }}>
        Archived
      </Link>
    </div>
  );
};

export default page;
