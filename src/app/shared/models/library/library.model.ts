interface Library {
  id?: string;
  name: string;
  project_name?: string;
  stars: number;
  description: string;
  downloads: number;
  version?: string;
  last_updated?: string;
  link?: string;
  by?: string;
}

export default Library;