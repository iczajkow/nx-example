import { fetchProjects } from '@fullapp-example/client-feature-projects';
import { ProjectResponse } from '@fullapp-example/common-feature-projects';
import { useEffect, useState } from 'react';
import {Title} from "@fullapp-example/client-ui";

export function App() {
  const [state, setState] = useState<{
    projects: ProjectResponse[];
    loading: boolean;
  }>({ projects: [], loading: true });

  useEffect(() => {
    fetchProjects().then((projects) => {
      setState({ projects, loading: false });
    });
  }, []);

  return state.loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <Title title="Blackstar" />
      <h2>Projects:</h2>
      <ul>
        {state.projects.map((project) => {
          return <li key={project.id}>{project.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
