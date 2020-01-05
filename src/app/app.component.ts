import {Component, OnInit} from '@angular/core';
import {QueryService} from './guery.service';
import {Book} from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public books: Book[];

  constructor(private queryService: QueryService) {
  }

  ngOnInit(): void {
    this.queryService.get().subscribe(res => {
      console.log(res);
      this.books = res;
    });
  }


}
