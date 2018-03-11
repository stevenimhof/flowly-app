import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {TheoryPage} from "../theory/theory";

@IonicPage()
@Component({
  selector: 'page-theories',
  templateUrl: 'theories.html',
})
export class TheoriesPage {
  groups: any[];
  shownGroup: null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  theorySelected() {
    this.navCtrl.push(TheoryPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TheoriesPage');
  }

}
