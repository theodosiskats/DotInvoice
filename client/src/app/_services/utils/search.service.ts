import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search<T>(items: T[], term: string, keys: (keyof T)[]): T[] {
    if (!items) return [];
    if (!term || term.length === 0) return items;

    term = term.toLowerCase();
    return items.filter(item => {
      for (let key of keys) {
        const value = item[key];
        if (value && value.toString().toLowerCase().indexOf(term) !== -1) {
          return true;
        }
      }
      return false;
    });
  }
}
