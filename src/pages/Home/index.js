import React, { useContext, useEffect, useState } from "react";
import { MainLayout } from "../../layouts/main_layout";
import { MainContext } from "../../providers/main_provider";
import { JobService } from "../../services/job_service";

export const HomePage = () => {
  //const [jobs, setJobs] = useState([]);
  const { jobs, setJobs, setJobsRight } = useContext(MainContext);

  const jobService = new JobService();

  useEffect(() => {
    jobService
      .getAllJobs()
      .then((result) => {
        setJobs(result.data.data.docs);
        //setJobsRight(result.data.data.docs);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  return (
    <MainLayout>
      <SearchArea />
      <section className="flex p-16">
        <div className="w-1/5 py-4">
          {jobs &&
            jobs.map((job) => {
              return (
                <JobItem
                  id={job._id}
                  key={job._id}
                  title={job.title}
                  expirationDate={job.expirationDate}
                />
              );
            })}
        </div>
        <div className="w-4/5 p-8">
          <JobDescription />
        </div>
      </section>
    </MainLayout>
  );
};

const JobItem = ({ id, title, contract, expirationDate }) => {
  const { jobs, setJobsRight } = useContext(MainContext);

  const getDetails = (_id) => {
    let filteredJobs = jobs.filter((job) => {
      return job._id === _id;
    });

    setJobsRight(filteredJobs);
  };

  return (
    <>
      <div className="shadow-md mb-8 cursor-pointer">
        <h2>{title}</h2>
        <div className="flex gap-2">
          <span>{contract}</span>
          <span>{expirationDate}</span>
        </div>
        <button type="button" onClick={() => getDetails(id)}>
          Read more
        </button>
      </div>
    </>
  );
};

const JobDescription = () => {
  const { jobsRight, setJobsRight } = useContext(MainContext);

  return (
    <>
      {jobsRight.map((job) => {
        return <p>{job.description}</p>;
      })}
    </>
  );
};

const SearchArea = () => {
  return (
    <section className="flex justify-center">
      <div>
        <form>
          <div className="flex items-baseline mt-4 gap-4">
            <input
              placeholder="ex: développeur javascript"
              type="text"
              id="title"
              name="title"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
            <label htmlFor="contractType">Contrat</label>
            <select id="contractType" name="contractType">
              <option value=""></option>
              <option value="CDI">CDI</option>
              <option value="CDD">CDD</option>
              <option value="Stage">Stage</option>
              <option value="Freelance">Freelance</option>
            </select>
            <label htmlFor="category">Catégories</label>
            <select id="category" name="contractType">
              <option value=""></option>
              <option value="CDI">Informatique</option>
              <option value="CDD">Administration / Management</option>
              <option value="Stage">Tourisme</option>
              <option value="Freelance">Transport</option>
            </select>
          </div>
        </form>
      </div>
    </section>
  );
};
