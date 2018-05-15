import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../../interfaces/Movie";
import {DetailPage} from "../detail/detail";

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  static readonly omdbUrl = "http://www.omdbapi.com/?apikey=5530f3f9&plot=short&r=json&t=";

  searchQuery: string;

  constructor(public navCtrl: NavController, public httpClient: HttpClient, public alertCtrl: AlertController) {
  }

  doSearch() : void {
    if(this.searchQuery && this.searchQuery !== "") {
      let movieJson = this.httpClient.get(SearchPage.omdbUrl + this.searchQuery);
      movieJson.subscribe(data => {
        let movie: Movie = <Movie> data;
        if (movie.Response == 'True') {
          this.pushDetailPage(movie);
        } else {
          this.presentAlert(movie.Error);
        }
      });
    }
  }

  private pushDetailPage(movie: Movie) : void {
    this.navCtrl.push(DetailPage, { 'data': movie });
  }

  private presentAlert(message) : void {
    let alert = this.alertCtrl.create({
      title: 'Error',
      message: 'Ups, something went wrong. Server message was: \'' + message + '\'',
      buttons: ['Try again...']
    });
    alert.present();
  }
}
