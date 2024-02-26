import React, { forwardRef } from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = forwardRef(({}, ref) => {
  return (
    <aside
      ref={ref}
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
    </aside>
  );
});

export default Loader;
