import { useState } from 'react'
import { RepositoryCard } from '../../components/repositoryCard/RepositoryCard'

export const Repositories = () => {
  const [repos, setRepos] = useState([])
  return (
    <div class>
        <RepositoryCard />

    </div>
  )
}
