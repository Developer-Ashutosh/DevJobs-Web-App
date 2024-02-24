import React, { useEffect, useState } from "react";
import { SearchBar, Card, Title, ApplyPage } from "./components";

const Main = () => {
  const [jobsData, setJobsData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    title: "",
    location: "",
  });
  const [appliedId, setAppliedId] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./data.json");
        const data = await response.json();
        setJobsData(data);
        setFilteredJobs(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    window.addEventListener("scroll", () => setScrollPosition(window.scrollY));
  }, []);

  const handleAppliedId = (id) => setAppliedId(id);

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
    checked
      ? setFilteredJobs(
          jobsData.filter((e) => e.contract.toLowerCase() === "full time")
        )
      : setFilteredJobs(jobsData);

  return (
    <main className="p-6 max-[512px]:px-4 mt-20">
      {appliedId === null ? (
        <>
          <SearchBar
            filterFullTimeJobs={filterFullTimeJobs}
            filterJobs={filterJobs}
          />
          <section className="mt-[5.5rem] max-[812px]:mt-28">
            <Title
              title={`No opportunities available ${
                searchCriteria.title !== ""
                  ? `for "${searchCriteria.title}"`
                  : ""
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
                  handleAppliedId={handleAppliedId}
                />
              ))}
            </ul>
          </section>
        </>
      ) : (
        <ApplyPage id={appliedId} />
      )}

      <button
        className={`h-12 w-12 p-1 fixed right-6 bottom-6  _focus-hover !rounded-full ${
          scrollPosition > 0
            ? "pointer-events-auto scale-100  opacity-100"
            : "pointer-events-none scale-0  opacity-0"
        }`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <span className="h-full w-full p-0.5 bg-main text-white text-xl font-extrabold rounded-full flex items-center justify-center">
          &uarr;
        </span>
      </button>
    </main>
  );
};

export default Main;
