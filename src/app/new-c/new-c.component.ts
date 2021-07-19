import { Component} from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  exp: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Angular 2+', exp: 'less then year', symbol: 'A'},
  {position: 2, name: 'ES6+', exp: 'less then year', symbol: 'JS'},
  {position: 3, name: 'HTML5', exp: 'less then year', symbol: 'HTML'},
  {position: 4, name: 'Angular Material', exp: 'less then year', symbol: 'AM'},
  {position: 5, name: 'Typescript', exp: 'less then year', symbol: 'TS'},
  {position: 6, name: 'CSS/SCCS', exp: 'less then year', symbol: 'CSS'},
  {position: 7, name: 'Git/Gitlub', exp: 'less then year', symbol: 'Git'},
  {position: 8, name: 'Angular CLI', exp: 'less then year', symbol: 'CLI'},
  {position: 9, name: 'Node.js(express)', exp: 'less then year', symbol: 'Node'},
  {position: 10, name: 'Bootstrap', exp: 'less then year', symbol: 'B'},
];

@Component({
  selector: 'app-new-c',
  templateUrl: './new-c.component.html',
  styleUrls: ['./new-c.component.css']
})
export class NewCComponent{

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  formatLabel(value: number): string | number {
    if (value >= 1000) {
      return Math.round(value / 1000);
    }

    return value;
  }

  getRate(): void {
    alert('thanks for rate us!');
  }
}
