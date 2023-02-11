import { useEffect, useState, useMemo } from "react";
import { debounce } from "lodash";

import Container from "../components/shared/Container";
import FormInput from "../components/shared/Form/Input";

import CardList from "../components/shared/CardList";

import JobApi from "../services/job";

const Home = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputLocation, setInputLocation] = useState("");

  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const handleChangeInputTitle = (value) => {
    setInputTitle(value);
  };

  const handleChangeInputLocation = (value) => {
    setInputLocation(value);
  };

  const getJobs = async (params) => {
    try {
      setLoading(true);

      const { data } = await JobApi.get({
        ...params,
      });
      const results = data.content;

      setLoading(true);

      setList(results);
    } catch (err) {
      console.log("rerr ", err);
      //
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    const body = {
      description: inputTitle,
      location: inputLocation,
    };

    getJobs(body);
  };

  useEffect(() => {
    const DEFAULT_DATA = {
      page: 1,
    };

    getJobs(DEFAULT_DATA);
  }, []);

  return (
    <Container>
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

        <label class="label mx-10">
          <input type="checkbox" name="checkbox" value="full_time" /> Full Time
          Only
        </label>

        <button
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
      </div>

      <CardList title="Job List" list={list} loading={loading} />
    </Container>
  );
};

export default Home;
