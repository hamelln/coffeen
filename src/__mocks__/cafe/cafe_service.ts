import { ICafe } from "types/data";
import StubCafeClient from "./stub_cafe_client";

class CafeService {
  cafeClient: StubCafeClient;
  constructor(cafeClient: StubCafeClient) {
    this.cafeClient = cafeClient;
  }

  async fetchAvailableItems(): Promise<ICafe[]> {
    return this.cafeClient.fetchItems().then((cafeData) => cafeData);
  }
}
export default CafeService;
