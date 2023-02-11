import PropTypes from "prop-types";
import HTMLRender from "../HTMLRender";

import "./style.scss";

const Card = ({ data }) => {
  return (
    <div className="card flex">
      <div>
        <p className="text-gray-400">
          <span>{data.company}</span>
          <span>/</span>
          <span>{data.type}</span>
        </p>
        <p className="text-gray-600 mt-1 text-lg font-semibold">{data.title}</p>

        <HTMLRender content={data.description} />
      </div>

      <div className="ml-20">
        <div className="card">
          <p>{data.company}</p>
          <img
            className="w-full object-cover"
            src={data.company_logo}
            alt="file not found"
          />

          <a className="text-blue-400" href={data.company_url} target="__blank">
            {data.company_url}
          </a>
        </div>

        <div className="card mt-10">
          <p>How to apply</p>

          <HTMLRender content={data.how_to_apply} />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
