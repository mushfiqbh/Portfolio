import React from "react";

const layout = ({ children, analytics, report, notification, login }) => {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <div className="dashboard">
      <div>{children}</div>
      <div className="flex">
        <div className="flex-col">
          <div className="bg-blue-600">{analytics}</div>
          <div className="bg-slate-600">{report}</div>
        </div>
        <div className="bg-red-600">{notification}</div>
      </div>
    </div>
  ) : (
    <div>
      <div>{login}</div>
    </div>
  );
};

export default layout;
