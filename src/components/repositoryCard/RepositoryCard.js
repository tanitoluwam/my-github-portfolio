import React from "react";

export const RepositoryCard = () => {
  return (
    <div className="bg-white border-y-primary border-y-2 rounded-sm border-solid h-auto w-10/12 mx-auto py-6  px-6 flex flex-col items-start my-8">
      <div>
        <a href="" className="text-xl font-semibold text-tertiary">
          linktree-page
        </a>
        <button className="text-secondary border border-primary text-xs rounded-2xl p-1 ml-2">
          public
        </button>
      </div>
      <p className="text-secondary text-base mt-2">hng9's first task submission using react and tailwind css</p>
      <div className="flex mt-2">
      <p className="text-secondary text-sm">language used</p>
      <p className="text-secondary text-sm ml-6">updated 21 hours ago</p>
      </div>
    </div>
  );
};
