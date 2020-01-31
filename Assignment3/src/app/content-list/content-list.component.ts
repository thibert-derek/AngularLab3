import { Component, OnInit } from '@angular/core';
import { Content } from '../content-card/content-card-helper';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  content: Content[];
  twoWayBinding: any;

  constructor() { this.content = [{
    id: 1,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51EqnTkohBL._SX307_BO1,204,203,200_.jpg',
    author: 'J.D. Salinger',
    title: 'Catcher in the Rye',
    body: '"Phonies!"',
    tags: [],
    type: 'Novel',
  }, {
    id: 2,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Shiningnovel.jpg/220px-Shiningnovel.jpg',
    author: 'Stephen King',
    title: 'The Shining',
    body: '"All work and no play makes Jack a dull boy."',
    tags: [],
    type: 'Novel',
  }, {
    id: 3,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg',
    author: 'George Orwell',
    title: '1984',
    body: '"It already happened."',
    tags: [],
    type: 'Novel',
  }, {
    id: 4,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51rCQAn0SGL.jpg',
    author: 'Hermann Melville',
    title: 'Moby Dick',
    body: '"Call me Ishmael!"',
    tags: [],
    type: 'Novel',
  }, {
    id: 5,
    imageUrl: 'https://images1.penguinrandomhouse.com/cover/9781101637760',
    author: 'Mary Shelley',
    title: 'Frankenstein',
    body: '"It`s alive!"',
    tags: [],
    type: 'Novel',
  }, {
    id: 6,
    imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356486866l/14898345.jpg',
    author: 'Brothers Grimm',
    title: 'Hansel and Gretel',
    body: '"House made of candy."',
    tags: [],
    type: 'Fairytale',
  }];
                  this.twoWayBinding = 'Search for a book';
  }

  ngOnInit() {
  }

  findBook(name: string): void {
  console.log ('Book exists: ', this.content.filter(i => i.title === name).length > 0 ? 'Yes' : 'No');
  }
}
