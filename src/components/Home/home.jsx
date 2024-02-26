import React, { useEffect, useState, useRef } from "react";
import { SearchBar, Card, Title, Loader } from "../index";

const Home = () => {
  const [jobsData, setJobsData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    title: "",
    location: "",
  });
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        loaderRef.current.style.display = "block";
        const response = await fetch("./data.json");
        const data = await response.json();
        setJobsData(data);
        setFilteredJobs(data);
        loaderRef.current.style.display = "none";
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filterJobs = (title, location) => {
    setFilteredJobs(
      jobsData.filter(
        (job) =>
          job.position.toLowerCase().includes(title.toLowerCase().trim()) &&
          job.location.toLowerCase().includes(location.toLowerCase().trim())
      )
    );

    setSearchCriteria({ title, location });
  };

  const filterFullTimeJobs = (checked) =>
    setFilteredJobs(
      checked
        ? jobsData.filter((e) => e.contract.toLowerCase() === "full time")
        : jobsData
    );

  return (
    <>
      <SearchBar
        filterFullTimeJobs={filterFullTimeJobs}
        filterJobs={filterJobs}
      />
      <section className="mt-[5.5rem] max-[812px]:mt-28">
        <Title
          title={`No opportunities available ${
            searchCriteria.title !== "" ? `for "${searchCriteria.title}"` : ""
          }${
            searchCriteria.location !== ""
              ? `at "${searchCriteria.location}"`
              : ""
          }.`}
          styles={`text-3xl text-primary text-center font-bold tracking-wider w-full max-[500px]:text-2xl ${
            filteredJobs.length === 0 ? "inline-block" : "hidden"
          }`}
        />
        <ul className="flex items-center justify-center flex-wrap gap-x-6 gap-y-12">
          {filteredJobs.map((e) => (
            <Card
              key={e.id}
              id={e.id}
              logo={e.logo}
              background={e.background}
              posted={e.posted}
              contract={e.contract}
              position={e.position}
              company={e.company}
              location={e.location}
            />
          ))}
        </ul>
      </section>
      <Loader ref={loaderRef} />
    </>
  );
};

export default Home;
