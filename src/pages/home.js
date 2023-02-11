import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";

import Container from "../components/shared/Container";
import FormInput from "../components/shared/Form/Input";

import CardList from "../components/shared/CardList";

import JobApi from "../services/job";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  console.log("list ", list);

  const handleSearch = (value) => {
    navigate(`/search?q=${value}`);
  };

  const debouncedSearch = useMemo(() => {
    return debounce(handleSearch, 500);
  }, []);

  useEffect(() => {
    const DEFAULT_DATA = {
      page: 1,
    };

    const getJobs = async (params) => {
      try {
        setLoading(true);

        const { data } = await JobApi.get({
          params,
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

    getJobs(DEFAULT_DATA);

    return () => debouncedSearch.cancel();
  }, []);

  return (
    <Container>
      <FormInput label="Job Description" handleChange={debouncedSearch} />

      <FormInput label="Location" handleChange={debouncedSearch} />

      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />

      <button onClick={() => {}}>Search</button>

      <CardList title="Job List" list={list} loading={loading} />
    </Container>
  );
};

export default Home;
