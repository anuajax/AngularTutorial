import { Component, OnInit, Input } from '@angular/core';
import {Robo} from '../robot.interface';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {RoboService} from '../robo.service';
@Component({
  selector: 'app-robo-details',
  templateUrl: './robo-details.component.html',
  styleUrls: ['./robo-details.component.scss']
})
export class RoboDetailsComponent implements OnInit {

  // @Input() robo?: Robo;
  robo!: Robo;
  constructor(private route: ActivatedRoute, private location: Location, private roboService: RoboService) { }

  getRoboDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.roboService.getRoboWithId(id).subscribe(robo => this.robo = robo);
  }
  goBack(): void {
    this.location.back();
  }
  ngOnInit(): void {
    this.getRoboDetails()
  }
  saveDetails(): void {
    this.roboService.updateAndSaveRoboDetails(this.robo).subscribe(() => this.goBack());
  }

}
