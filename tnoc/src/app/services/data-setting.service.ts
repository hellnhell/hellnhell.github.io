import { Injectable } from "@angular/core";
import { Menu, menus } from "../models";

@Injectable	({
  providedIn: 'root',
})
export class DataService {

  constructor() {}

	getImageUrls(): string[] {
    return menus
      .filter(menu => menu.title === 'PHOTOGRAPHY')
      .flatMap(menu => menu.items)
      .map(item => item?.image as string)
  }
}
