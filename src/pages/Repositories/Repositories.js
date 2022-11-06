import { useEffect } from "react";
import { useState } from "react";
import { Pagination } from "../../components/pagination/Pagination";
import { RepositoryCard } from "../../components/repositoryCard/RepositoryCard";
import { repositoryService } from "../../service";

export const Repositories = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 13;
  const totalItems = 52;

  const getUserRepositories = async () => {
    try {
      setLoading("true");
      const { data } = await repositoryService.getUserRepositories(totalItems);
      setRepos(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserRepositories();
  }, []);

  if (loading) {
    return <p className="text-secondary mt-20 text-2xl text-center">Loading...</p>;
  }

  return (
    <div className="py-2 max-w-[70%] mx-auto">
      <ul>
        {repos
          .slice((currentPage - 1) * perPage, currentPage * perPage)
          .map((repo) => (
            <li key={repo.id}>
              <RepositoryCard repo={repo} />
            </li>
          ))}
      </ul>
      <div className="text-center">
        <Pagination
          totalPages={Math.ceil(totalItems / perPage)}
          onPageChange={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};
