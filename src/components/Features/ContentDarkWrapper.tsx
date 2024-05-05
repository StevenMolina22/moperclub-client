import React from "react";

// interactive cards props type declaration
interface Props {
  title?: string;
  subtitle?: string;
  displayedComponent: React.ReactNode;
}

export default function ContentDarkWrapper({ title = "", subtitle = "", displayedComponent }: Props) {
  // --- returned card component
  return (
    // wrapper
    <div className="mt-6 bg-slate-900 py-6">
      {/* title text */}
      <h2 className="text-center text-4xl font-extrabold leading-none tracking-tight text-slate-200 md:text-4xl lg:text-5xl ">
        {title}
      </h2>
      <h3 className="text-center text-4xl font-extrabold leading-none tracking-tight text-slate-200 md:text-3xl lg:text-4xl ">
        {subtitle}
      </h3>
      {displayedComponent}
    </div>
  );
}
