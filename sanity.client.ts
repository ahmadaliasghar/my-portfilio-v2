import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "7ddq7noe",
  dataset: "production",
  apiVersion: "2023-09-22",
  useCdn: false,
  
  token: "skQZskk1OY6eDKlACjxORUyda81un3ZQL9R5Fl5xn7AI0I36pNlYk6CIurMr5DlxG20DMEQWYBqS5HbGqvtf9NwIOkYBRzcptxsmwSHUsqBWO8A0DZqIvbqAmiab9jfCUTzPTCtiuqIaQXCQIXLGt0nj8G5tYOktzsQnFebg6gPFlV05zS98"
};

const client = createClient(config);
export default client;