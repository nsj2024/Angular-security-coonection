import { Component } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  constructor(private newsService:NewsService){}
  t:any =[]
  getNews(){
    this.newsService.getNews().subscribe(d => {
      this.t = d["articles"]
    })
  }

  
}
