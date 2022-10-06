import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-emp-data',
  templateUrl: './emp-data.component.html',
  styleUrls: ['./emp-data.component.css'],
})
export class EmpDataComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  displayedColumns = ['id', 'name', 'address', 'age'];
  dataSource = new MatTableDataSource(EMPLOYEE_DATA);
  filterValue = '';

  applyFilter(e) {
    this.filterValue = e.target.value;
    this.filterValue = this.filterValue.trim();
    this.filterValue = this.filterValue.toLowerCase();
    this.dataSource.filter = this.filterValue;
  }
}

export interface EMPLOYEE {
  id: number;
  name: string;
  address: string;
  age: number;
}

const EMPLOYEE_DATA: EMPLOYEE[] = [
  { id: 1, name: 'San Die', address: 'San Diego', age: 79 },
  { id: 2, name: 'Happy Man', address: 'America', age: 26 },
  { id: 3, name: 'Max Syd', address: 'Mexico', age: 41 },
  { id: 4, name: 'Hely Sales', address: 'Africa', age: 22 },
  { id: 5, name: 'George Boron', address: 'India', age: 11 },
  { id: 6, name: 'Nike Carbon', address: 'Russia', age: 107 },
  { id: 7, name: 'Nitre Milan', address: 'England', age: 67 },
  { id: 8, name: 'Genny Wales', address: 'America', age: 94 },
  { id: 9, name: 'Fluory Thames', address: 'India', age: 4 },
  { id: 10, name: 'Hailey Job', address: 'Myanmar', age: 97 },
  { id: 11, name: 'Rock John', address: 'UAE', age: 97 },
  { id: 12, name: 'Maggy Wakes', address: 'Qatar', age: 25 },
  { id: 13, name: 'Mazzy Tales', address: 'UAE', age: 25 },
  { id: 14, name: 'Happy Solo', address: 'America', age: 25 },
  { id: 15, name: 'Phospy Dramez', address: 'America', age: 38 },
  { id: 16, name: 'Genny Job', address: 'Mexico', age: 65 },
  { id: 17, name: 'Boron Litty', address: 'France', age: 53 },
  { id: 18, name: 'Daisy John', address: 'Germany', age: 48 },
  { id: 19, name: 'Johny Sales', address: 'India', age: 83 },
  { id: 20, name: 'Nike Job', address: 'Armania', age: 78 },
];
