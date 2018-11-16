import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'jquery';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  displayedColumns = ['check','coverCode', 'section', 'bulletNo', 'sumInsured', 'sort', 'addSI' ,'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  $(document).ready(function(){
    $('#checkAll').click(function(){
    var checkAllButton = $('input[id=checkAll]')[0] as HTMLInputElement;
    $('input[id=checkItem]').not(this).prop('checked', checkAllButton.checked);
    //var checkItems = $('input[id=checkItem]')[0] as HTMLInputElement;
    //checkItems.checked = checkAllButton.checked;
    });
  });  
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
  check: boolean;
  coverCode: string;
  section: string;
  bulletNo: string;
  sumInsured: string;
  sort:string;
  addSI: string;
  actions: number;
}

const ELEMENT_DATA: Element[] = [
  {check: false, coverCode: 'Contract Works', section: 'I', bulletNo: '1.1', sumInsured: '50,000,000.00', sort: '10', addSI: '', actions: 1},
  {check: false, coverCode: 'Materials Supplied', section: 'I', bulletNo: '1.2', sumInsured: '10,000,000.00', sort: '20', addSI: '', actions: 1},
];