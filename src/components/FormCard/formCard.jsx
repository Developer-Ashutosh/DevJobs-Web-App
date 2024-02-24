import React, { useState } from "react";

const FormCard = ({ type, icon, handleTitle, handleLocation }) => {
  const [value, setValue] = useState("");

  return (
    <div className="_form-card flex-row-reverse">
      <div className="relative h-full flex items-center justify-center peer max-[476px]:min-h-14">
        <input
          type="text"
          name={type}
          id={type}
          value={value}
          className={`h-3/4 w-40 outline-none caret-main bg-transparent focus:self-end ${
            value.trim().length > 0 && "self-end"
          } peer max-[476px]:h-[80%] max-[476px]:mb-1.5`}
          onInput={(e) => {
            setValue(e.target.value);
            type === "title"
              ? handleTitle(e.target.value)
              : handleLocation(e.target.value);
          }}
        />
        <label
          htmlFor={type}
          className={`absolute -translate-y-1/2 pointer-events-none peer-focus:text-xs peer-focus:top-3 ${
            value.trim().length > 0 ? "text-xs top-3" : "top-1/2"
          } ${
            type === "title"
              ? `peer-focus:-left-10 ${
                  value.trim().length > 0 ? "-left-10" : "left-0"
                }`
              : `peer-focus:-left-8 ${
                  value.trim().length > 0 ? "-left-8" : "left-0"
                }`
          } transition-all duration-200`}
        >
          Filter by {type}
        </label>
      </div>
      <img
        src={`./icon-${icon.toLowerCase()}.svg`}
        alt={`${icon} Icon`}
        className={`peer-focus-within:mt-4 ${
          value.trim().length > 0 && "mt-4"
        } transition-all duration-200 ${
          type === "title" && "h-[1.65rem] w-[1.65rem] bg-main p-1 rounded"
        }`}
      />
    </div>
  );
};

export default FormCard;
