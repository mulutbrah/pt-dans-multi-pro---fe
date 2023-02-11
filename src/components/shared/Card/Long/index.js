import moment from "moment";

import { Link } from "react-router-dom";

import PropTypes from "prop-types";

import { capitalize } from "lodash";

import "./style.scss";

const CardLong = ({ data }) => {
  return (
    <div className="card-long">
      <Link to={`/jobs/${data.id}`}>
        <div className="flex items-center justify-between px-2 py-2">
          <div className="card-long__left flex items-center">
            <div className="ml-3">
              <p className="text-blue-600 font-bold">{data.title}</p>

              <div className="mt-2">
                <span className="text-gray-600">{data.company}</span>
                <span className="text-gray-600 mx-1">-</span>
                <span className="text-green-600">{data.type}</span>
              </div>
            </div>
          </div>

          <div className="card-long__right">
            <div className="left">
              <p>{data.location}</p>
            </div>

            <div className="mid">
              <p className="text-gray-600 font-medium capitalize">
                {moment(data.created_at).fromNow()}
              </p>
            </div>

            <div className="right ml-4 capitalize">
              <p className="text-gray-400 font-medium">
                {capitalize(data.season)} {capitalize(data.seasonYear)}
              </p>
              <p>{capitalize(data.status)}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

CardLong.propTypes = {
  data: PropTypes.object,
};

export default CardLong;
