import { mapApiService } from '../services/MapApiService';

export default class MapStore {
  constructor() {
    this.listeners = new Set();

    this.places = [];
    this.filteredPlaces = [];

    this.selectedPlace = {};

    this.sido = '전체';
    this.sigungu = '';
    this.category = '전체';

    this.imageNumber = 1;
  }

  subscribe(listener) {
    this.listeners.add(listener);
  }

  unsubscribe(listener) {
    this.listeners.delete(listener);
  }

  publish() {
    this.listeners.forEach((listener) => listener());
  }

  async fetchFilteredPlaces(sido, sigungu, category) {
    const places = await mapApiService.fetchFilteredPlaces(sido, sigungu, category);
    this.places = places;
    this.publish();
  }

  selectedPlaceShortInformation(id) {
    this.selectedPlace = this.places.find((value) => value.placeId === id);
    console.log(this.selectedPlace, 'selectedPlaceShort');
    this.publish();
  }

  async fetchSelectedPlaceDetail(id) {
    const place = await mapApiService.fetchSelectedPlace(id);
    this.selectedPlace = place;
    this.publish();
  }

  changeSido(sido) {
    this.sido = sido;
    this.publish();
  }

  changeSigungu(sigungu) {
    this.sigungu = sigungu;
    this.publish();
  }

  changePlaceCategory(category) {
    this.category = category;
    this.publish();
  }

  clearFilterState() {
    this.sido = '';
    this.sigungu = '';
    this.category = '';
  }

  increaseImageNumber() {
    if (this.imageNumber === 3) {
      this.imageNumber = 1;
      this.publish();
      return;
    }

    if (this.imageNumber !== 3) {
      this.imageNumber += 1;
      this.publish();
    }
  }

  decreaseImageNumber() {
    if (this.imageNumber === 1) {
      this.imageNumber = 3;
      this.publish();
      return;
    }

    if (this.imageNumber !== 1) {
      this.imageNumber -= 1;
      this.publish();
    }
  }
}

export const mapStore = new MapStore();
