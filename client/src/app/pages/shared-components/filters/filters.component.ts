import { Component, Input } from '@angular/core';
import {SearchService} from "../../../_services/utils/search.service";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})

export class FiltersComponent {
  @Input() items: any[] = [];
  searchTerm: string = '';
  filters: string[] = [];
  selectedFilters: string[] = [];

  constructor(private searchService: SearchService) {
    if (this.items.length > 0) {
      this.filters = Object.keys(this.items[0]);
    }
  }

  onSearch(): void {
    this.filteredItems = this.searchService.search(this.items, this.searchTerm, this.selectedFilters);
  }

  get filteredItems(): any[] {
    return this._filteredItems;
  }

  set filteredItems(value: any[]) {
    this._filteredItems = value;
  }

  private _filteredItems: any[] = [];
}
