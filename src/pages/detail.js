import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

import { Link } from "react-router-dom";

import Container from "../components/shared/Container";

import Card from "../components/shared/Card";

import JobApi from "../services/job";

const Home = () => {
  let { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [jobDetail, setJobDetail] = useState([]);

  useEffect(() => {
    const getJobDetail = async (id) => {
      try {
        setLoading(true);

        const { data } = await JobApi.getOne(id);
        const results = data.content;

        setLoading(true);

        setJobDetail(results);
      } catch {
        //
      } finally {
        setLoading(false);
      }
    };

    getJobDetail(id);
  }, [id]);

  return (
    <Container className="my-10">
      <Link to={`/`}>
        <p className="mb-5">Back</p>
      </Link>
      <Card data={jobDetail} />
    </Container>
  );
};

export default Home;
