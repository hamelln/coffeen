import {
  Database,
  DatabaseReference,
  DataSnapshot,
  get,
  ref,
} from "firebase/database";
import { ICarousel, ICafe } from "types/data";

class Presenter {
  database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  async fetchHome() {
    const homeRef: DatabaseReference = ref(this.database, "home");
    const homeSnapshot: DataSnapshot = await get(homeRef);
    const home = homeSnapshot.val();
    return home;
  }

  async fetchCarousel() {
    const carouselRef: DatabaseReference = ref(this.database, "carousel");
    const carouselSnapshot: DataSnapshot = await get(carouselRef);
    const carousel: ICarousel[] = carouselSnapshot.val();
    return carousel;
  }

  async fetchPress() {
    const pressRef: DatabaseReference = ref(this.database, "press");
    const pressSnapshot: DataSnapshot = await get(pressRef);
    const press = pressSnapshot.val();
    return press;
  }

  async fetchCafe() {
    const cafeRef: DatabaseReference = ref(this.database, "cafe");
    const cafeSnapshot: DataSnapshot = await get(cafeRef);
    const cafe: ICafe[] = cafeSnapshot.val();
    return cafe;
  }
}

export default Presenter;
