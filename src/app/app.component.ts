import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {
  switchMap,
  filter,
  debounceTime,
  distinctUntilChanged
} from "rxjs/operators";
declare var Hilitor: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'search-with-capi';
  globalSearchForm: FormGroup;
  searchTerm: string = "";
  searchData = [];
  ResultSearchData = [];
  constructor(public commonService: CommonService,
    public fb: FormBuilder) {
  }

  ngOnInit() {
    this.globalSearchForm = this.fb.group({
      search_value: new FormControl("")
    });
    this.globalSearchForm.controls["search_value"].valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        filter(
          searchValue =>
            searchValue != "" && searchValue != null && searchValue != undefined
        ),
        switchMap(searchValue => {
          this.searchTerm = searchValue;
          console.log(searchValue);
          return this.commonService.getSearchResults(searchValue);
        })
      )
      .subscribe(value => {
        this.searchData = [];
        this.ResultSearchData = []
        this.searchData = value.items;
        console.log(this.searchData);
        for (let i = 0; i < this.searchData.length; i++) {
          this.ResultSearchData.push(this.searchData[i].login);
        }
        console.log(this.ResultSearchData);
      });
  }
}
