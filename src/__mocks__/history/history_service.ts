import { TData, IHistory } from "types/data";
import StubHistoryClient from "./stub_history_client";

class HistoryService {
  historyClient: StubHistoryClient;
  constructor(historyClient: StubHistoryClient) {
    this.historyClient = historyClient;
  }

  async fetchAvailableItems(): Promise<TData<IHistory>> {
    return this.historyClient.fetchItems().then((historyData) => historyData);
  }
}

export default HistoryService;
