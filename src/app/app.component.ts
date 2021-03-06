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
    bookName = 'Raise the Titanic!';
    authorName = 'Clive Cussler';
    count = 10;
    date = 1;

    constructor(private queryService: QueryService) {
    }

    ngOnInit(): void {

    }


    get() {
      console.log(this.date);
        this.queryService.get(this.bookName, this.authorName, this.count, this.date).subscribe(res => {
            console.log(res);
            this.books = res;
        });
    }
}
