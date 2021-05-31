import { Component, OnInit } from '@angular/core';
import {Robo} from '../robot.interface';
// import {ROBOS} from '../robotslist.data'
import {RoboService} from '../robo.service';
import {MessageService} from '../message.service';
@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.scss']
})
export class RobotsComponent implements OnInit {

  // robo = {
  //   name: "Clement",
  //   id: "15"
  // }
  //  robo: Robo = {
  //    name : 'Clement',
  //    id: 15
  //  };

  // robos = ROBOS;
  robos!: Robo[];
  // selectedRobo?: Robo;

  constructor(private roboService:RoboService, private messageService: MessageService) { }
  getRobosData(): void {
    // this.robos = this.roboService.getRobos()
    this.roboService.getRobos().subscribe(robos => this.robos = robos)
  }
  // onSelect(robo: Robo): void {
  //   this.selectedRobo = robo;
  //   this.messageService.addmessage(`Robo Compponent : Selected hero is ${robo.id}`);
  // }
  ngOnInit(): void {
    this.getRobosData()
  }

  addNewRobo(name: string): void {
    name = name.trim();
    if(!name) return;
    this.roboService.addRobo({name} as Robo).subscribe(robo => this.robos.push(robo));
  }
  deleteRobo(robo: Robo): void {
    this.robos = this.robos.filter(r => r !== robo);
    this.roboService.deleteRobo(robo.id).subscribe();
  }
}
