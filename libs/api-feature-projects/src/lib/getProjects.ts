import { ProjectResponse } from '@fullapp-example/common-feature-projects';
import { randomUUID } from 'crypto';
import { Express } from 'express';


function getProjects(): ProjectResponse[] {

  return [
    {
      id: randomUUID(),
      name: 'test_1',
    },
    {
      id: randomUUID(),
      name: 'test_2',
    },
  ];
}

export function addGetProjectsRoute(app: Express) {
  app.get('/api/projects', (req, res) => {
    res.send(getProjects())
  })
}