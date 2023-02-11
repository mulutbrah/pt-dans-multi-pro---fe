import { useEffect, useState } from "react";

import Container from "../components/shared/Container";
import FormInput from "../components/shared/Form/Input";

import CardList from "../components/shared/CardList";

import JobApi from "../services/job";

const Home = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const handlePagination = () => {
    setPage((prevState) => prevState + 1);
  };

  const handleChangeInputTitle = (value) => {
    setInputTitle(value);
  };

  const handleChangeInputLocation = (value) => {
    setInputLocation(value);
  };

  const handleIsFullTime = (value) => {
    setIsFullTime(value);
  };

  const getJobs = async (params, isConcatJobList = false) => {
    try {
      setLoading(true);

      if (!isConcatJobList) {
        params.page = 1;
      }

      const { data } = await JobApi.get({
        ...params,
      });
      const results = data.content;

      const resultNoNull = results.filter((x) => x);

      if (isConcatJobList) {
        setList((prevState) => prevState.concat(resultNoNull));

        return;
      }

      setList(resultNoNull);
    } catch (err) {
      console.log("rerr ", err);
      //
    } finally {
      setLoading(false);
    }
  };

  const handleJobsRequest = (concat = false) => {
    const body = {
      description: inputTitle,
      location: inputLocation,
      full_time: isFullTime,
      page,
    };

    if (!body.page) delete body.page;

    getJobs(body, concat);
  };

  useEffect(() => {
    if (page > 1) {
      handleJobsRequest(true);
    }
  }, [page]);

  useEffect(() => {
    const DEFAULT_DATA = {
      page: 1,
    };

    getJobs(DEFAULT_DATA);
  }, []);

  return (
    <Container className="my-10">
      <div className="flex">
        <FormInput
          className="w-full"
          label="Job Description"
          placeholder="Filter by title"
          inputValue={inputTitle}
          handleChange={handleChangeInputTitle}
        />

        <FormInput
          className="w-full"
          label="Location"
          placeholder="Filter by location"
          inputValue={inputLocation}
          handleChange={handleChangeInputLocation}
        />

        <label className="label mx-10">
          <input
            type="checkbox"
            name="checkbox"
            value={isFullTime}
            onChange={(e) => handleIsFullTime(e.target.checked)}
          />{" "}
          Full Time Only
        </label>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            handleJobsRequest();
          }}
        >
          Search
        </button>
      </div>

      <CardList title="Job List" list={list} loading={loading} />

      <button
        className="w-full mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          handlePagination();
        }}
      >
        View More
      </button>
    </Container>
  );
};

export default Home;
