import React, { useState } from "react";
import { Button, FormCard } from "../index";

const SearchBar = ({ filterFullTimeJobs, filterJobs }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const handleTitle = (title) => setTitle(title);
  const handleLocation = (location) => setLocation(location);

  return (
    <form
      className="h-20 w-max m-auto p-[9px] bg-white dark:bg-darkBg text-primary dark:text-white text-lg tracking-wider shadow-lg rounded-lg flex items-center justify-start gap-[5px] *:flex-shrink-0 relative max-[476px]:flex-col max-[476px]:h-max max-[476px]:items-start"
      onSubmit={(e) => {
        e.preventDefault();
        filterJobs(title, location);
      }}
    >
      <FormCard type={"title"} icon={"Search"} handleTitle={handleTitle} />
      <FormCard
        type={"location"}
        icon={"Location"}
        handleLocation={handleLocation}
      />

      <div className="_form-card max-[692px]:absolute max-[692px]:h-16 max-[692px]:left-[15%] max-[692px]:-translate-x-[15%] max-[692px]:-bottom-1/2 max-[692px]:translate-y-1/2 max-[476px]:relative max-[476px]:translate-y-0 max-[476px]:flex max-[476px]:justify-start max-[476px]:h-14">
        <input
          type="checkbox"
          name="Full time"
          id="full-time"
          className="h-[1.15rem] w-[1.15rem] outline-none"
          onInput={(e) => filterFullTimeJobs(e.target.checked)}
        />
        <label
          htmlFor="full-time"
          className="h-full flex items-center justify-center max-[476px]:w-full max-[476px]:justify-start"
        >
          Full time only
        </label>
      </div>
      <Button desc={"Search"} px={"px-5"} type="search" />
    </form>
  );
};

export default SearchBar;
