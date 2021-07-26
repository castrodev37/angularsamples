import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title: string = 'Hello World!';
  articles: Article[];

  constructor(){
    this.articles = [
      new Article('Angular JS', 'https://angular.io', 8),
      new Article('JavaScript', 'https://developer.mozilla.org ', 20),
      new Article('Visual Basic', 'https://docs.microsoft.com/pt-br/dotnet/visual-basic/', 5),
    ]
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Add title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;  
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article)=> b.votes - a.votes);
  }
}
