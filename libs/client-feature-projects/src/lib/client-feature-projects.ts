import { log } from "@fullapp-example/common";
import { ProjectResponse } from "@fullapp-example/common-feature-projects";

export function fetchProjects(): Promise<ProjectResponse[]> {
  log('fetching projects')
  return fetch('/api/projects').then(res => res.json())
}
