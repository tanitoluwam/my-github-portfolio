import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RepositoryDetails } from "../../components/repositoryDetails/RepositoryDetails";
import { repositoryService } from "../../service/Repo.service";

export const SingleRepository = () => {
  const [userRepositoryDetails, setUserRepositoryDetails] = useState("");
  const { name } = useParams()

  const getSingleRepository = async (param) => {
    try {
      const { data } = await repositoryService.getSingleRepository(param);
      setUserRepositoryDetails(data);
      console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    if(!name) return;
    getSingleRepository(name);
  }, [name]);

  return (
    <div>
      <RepositoryDetails userRepositoryDetails={userRepositoryDetails}/>
    </div>
  );
};
