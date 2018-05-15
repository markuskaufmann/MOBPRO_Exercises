import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Movie} from "../../interfaces/Movie";

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  movie: Movie;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movie = <Movie> navParams.get('data');
  }
}
