import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      saperate layout
      {children}
    </div>
  );
};

export default layout;

export function generateMetadata({ params }) {
  return {
    title: "Profile Page" + params.id,
    description: "This is description",
  };
}
