import React from "react";
import { Link } from "react-router-dom";

export const RepositoryCard = (props) => {
  const { repo } = props;
  return (
    <Link to={`repo/${repo.name}`}>
      <div className="bg-white border border-primary  rounded-lg border-solid p-6 my-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110">
        <div className="flex items-center">
          <h2 className="text-xl font-semibold text-tertiary hover:underline hover:decoration-tertiary hover:decoration-solid">
            {repo.name}
          </h2>
          <button className="text-secondary border border-primary text-xs rounded-2xl p-1 ml-2">
            {repo.visibility}
          </button>
        </div>
        <p className="text-secondary text-base mt-2">
          {"Description"}: {repo.description}
        </p>
        <p className="text-secondary text-sm mt-2">
          {"Language Used"}: {repo.language}
        </p>
        <p className="text-secondary text-sm mt-2">
          {"Updated on"}: {repo.updated_at}
        </p>
      </div>
    </Link>
  );
};
