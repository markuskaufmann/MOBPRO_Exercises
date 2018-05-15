import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Movie} from "../../interfaces/Movie";
import {HttpClient} from "@angular/common/http";
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  private static readonly basePath  = "./assets/movies/";
  private static readonly suffix    = ".json";

  movies = [];

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {
    for(let i = 1; i < 8; i++) {
      let movieJson = this.httpClient.get(ListPage.basePath + i.toString() + ListPage.suffix);
      movieJson.subscribe(data => {
        let movie: Movie = <Movie> data;
        this.movies.push(movie);
      });
    }
  }

  movieSelected(movie) {
    this.navCtrl.push(DetailPage, {
      'data': movie
    });
  }
}
