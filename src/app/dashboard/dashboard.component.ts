import { Component, OnInit } from '@angular/core';
import {Robo} from '../robot.interface';
import {RoboService} from '../robo.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  fiverobos: Robo[] = [];
  constructor(private roboService: RoboService) { }
  getTopfiveRobos(): void {
    this.roboService.getRobos().subscribe(robots => this.fiverobos = robots.slice(1,6));
  }
  ngOnInit(): void {
    this.getTopfiveRobos()
  }

}
