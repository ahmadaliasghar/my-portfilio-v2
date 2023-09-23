import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "7ddq7noe",
  dataset: "production",
  apiVersion: "2023-09-22",
  useCdn: false,
};

const client = createClient(config);

export default client;