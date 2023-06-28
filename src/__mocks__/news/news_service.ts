import { TData, INews } from "types/data";
import StubNewsClient from "./stub_news_client";

class NewsService {
  newsClient: StubNewsClient;
  constructor(newsClient: StubNewsClient) {
    this.newsClient = newsClient;
  }

  async fetchAvailableItems(): Promise<TData<INews>> {
    return this.newsClient.fetchItems().then((newsData) => newsData);
  }
}

export default NewsService;
