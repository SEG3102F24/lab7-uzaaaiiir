import { Component } from '@angular/core';
import { Author } from '../books/model/book';
import { BooksService } from '../books/service/books.service';
import { FormsModule } from '@angular/forms';
import { NgbHighlight } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {
  authorId: number = 0;
  author: Author | null = null;
  message: string = "";

  constructor(private booksService: BooksService) {}

  fetchAuthor() {
    this.booksService.getAuthorById(this.authorId).subscribe({
        next: (data: Author) => {
            this.author = data;
            this.message = '';
        },
        error: (err) => {
            this.author = null;
            this.message = 'Author not found';
        }
    });
}

}
