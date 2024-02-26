import React, { useState, useEffect, useRef } from "react";
import { PostDetails, Title, Button, P, DetailsCard, Loader } from "../index";
import { useParams } from "react-router-dom";

const ApplyPage = () => {
  const [data, setData] = useState({});
  const params = useParams();
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        loaderRef.current.style.display = "block";
        const response = await fetch("./data.json");
        const fetchedData = await response.json();
        setData(fetchedData[JSON.parse(params.id) - 1]);
        loaderRef.current.style.display = "none";
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="h-32 max-w-2xl bg-white dark:bg-darkBg m-auto mt-5 pr-6 rounded-lg shadow-lg flex items-center justify-between overflow-hidden relative max-sm:h-36 max-sm:p-6 max-sm:pb-0.5 max-sm:overflow-visible max-[425px]:flex-col max-[475px]:h-fit max-[475px]:pt-12">
        <div
          className="h-full w-32 flex items-center justify-center object-cover object-center max-sm:absolute max-sm:h-20 max-sm:w-20 max-sm:rounded-lg max-sm:-top-10 max-sm:left-1/2 max-sm:-translate-x-1/2"
          style={{ backgroundColor: data.background }}
        >
          <img
            src={data.logo}
            alt={`${data.company} Logo`}
            className="max-w-full scale-[2] max-sm:scale-150"
          />
        </div>
        <div className="flex flex-col items-center justify-center max-sm:items-start">
          <Title
            title={data.company}
            styles={"text-[1.35rem] font-bold text-primary dark:text-white"}
          />
          <Title
            title={data.company + ".com"}
            styles={"text-lightGrey text-lg font-medium lowercase"}
          />
        </div>
        <Button
          desc={"Company Site"}
          px={"px-2.5"}
          bg={"bg-lightGrey"}
          href={data.website}
        />
      </section>
      <section className="max-w-2xl bg-white dark:bg-darkBg m-auto mt-6 px-8 py-10 rounded-lg shadow-lg flex flex-col justify-center gap-6">
        <div className="flex items-center justify-between gap-3 max-sm:flex-col max-sm:text-center">
          <div className="flex flex-col max-sm:items-center">
            <PostDetails posted={data.posted} contract={data.contract} />
            <Title
              title={data.position}
              styles={
                "text-[1.75rem] leading-[1.4] font-bold text-primary dark:text-white"
              }
            />
            <Title
              title={data.location}
              styles={"text-main text-xl font-bold"}
            />
          </div>
          <Button desc={"Apply Now"} px={"px-6"} href={data.apply} />
        </div>
        <P desc={data.description} />
        <DetailsCard
          title={"Requirements:"}
          desc={data.requirements ? data.requirements.content : ""}
          list={data.requirements ? data.requirements.items : []}
          listStyle={"list-disc"}
        />
        <DetailsCard
          title={"What you will do:"}
          desc={data.role ? data.role.content : ""}
          list={data.role ? data.role.items : []}
          listStyle={"list-decimal"}
        />
      </section>
      <Loader ref={loaderRef} />
    </>
  );
};

export default ApplyPage;
