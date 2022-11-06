import React from "react";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";

export const RepositoryDetails = (props) => {
  const { userRepositoryDetails } = props;
  return (
    <div className="mx-auto border border-primary rounded-lg border-solid max-w-[30%] mt-8 py-10">
      <div className="md:flex mx-auto justify-center mb-4">
        <h1 className="text-2xl text-tertiary">{userRepositoryDetails.name}</h1>
        <button className="text-secondary border border-primary text-xs rounded-2xl p-1 ml-2">
          {userRepositoryDetails.visibility}
        </button>
      </div>
      <div className="md:flex md:w-full md:space-x-3 md:px-4 md:mb-4 ">
        <Button extraClass="bg-green-600 md:basis-1/3">
          {userRepositoryDetails.forks} Forks
        </Button>
        <Button extraClass="bg-secondary md:basis-1/3">
          {userRepositoryDetails.watchers} Watching
        </Button>
        <Button extraClass="bg-black md:basis-1/3">
          {userRepositoryDetails.default_branch}
        </Button>
      </div>

      <p className="px-8 py-4 text-secondary text-center">
        {"Created at"}: {userRepositoryDetails.created_at}
      </p>
      <p className="px-8 py-4 text-secondary text-center">
        {"Updated at"}: {userRepositoryDetails.created_at}
      </p>
      <p className="px-8 py-4 text-secondary mb-4 text-center">
        {"Pushed at"}: {userRepositoryDetails.pushed_at}
      </p>
    </div>
  );
};
