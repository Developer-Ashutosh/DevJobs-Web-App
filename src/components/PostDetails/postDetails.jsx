import React from "react";

const PostDetails = ({ posted, contract }) => {
  return (
    <ul className="flex items-center justify-start gap-7 *:text-lightGrey *:text-[1.1rem]">
      {[posted, contract].map((e, i) => (
        <li
          key={i}
          className={`relative ${
            i === 0 && "before:hidden"
          } before:absolute before:top-1/2 before:h-1 before:w-1 before:bg-lightGrey before:rounded-full before:-left-4 before:flex-shrink-0`}
        >
          {e}
        </li>
      ))}
    </ul>
  );
};

export default PostDetails;
