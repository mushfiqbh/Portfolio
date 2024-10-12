import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Arichved Notification
      <Link href="/dashboard/" style={{ textDecoration: "underline" }}>
        Default
      </Link>
    </div>
  );
};

export default page;
