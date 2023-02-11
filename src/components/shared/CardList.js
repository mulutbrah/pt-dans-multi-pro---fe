import PropTypes from "prop-types";

import CardLong from "./Card/Long";
import SkeletonCard from "./Skeleton/Card";

const CardList = ({ title = "", list = [], loading = false }) => {
  console.log("11 ", list);
  return (
    <div className="mt-5">
      {title !== "" && (
        <h1 className="text-xl font-semibold filter drop-shadow-sm mb-5">
          <span className="text-xl font-semibold filter drop-shadow-sm tracking-wide">
            {title}
          </span>
        </h1>
      )}

      {loading ? (
        <div className="grid grid-cols-5 gap-4">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      ) : (
        <div>
          {list.map((t, i) => (
            <CardLong data={t} key={i} />
          ))}
        </div>
      )}
    </div>
  );
};

CardList.propTypes = {
  list: PropTypes.array,
  title: PropTypes.string,
  loading: PropTypes.bool,
};

export default CardList;
