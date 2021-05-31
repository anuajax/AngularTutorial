import { Component, OnInit } from '@angular/core';
import { Observable, Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Robo } from '../robot.interface';
import { RoboService } from '../robo.service';
@Component({
  selector: 'app-robo-search',
  templateUrl: './robo-search.component.html',
  styleUrls: ['./robo-search.component.scss']
})
export class RoboSearchComponent implements OnInit {

robos$!: Observable<Robo[]>;
private searchInput = new Subject<string>();

  constructor(private roboService: RoboService) { }
  searchRobos(term: string): void {
    this.searchInput.next(term);
  }
  ngOnInit(): void {
    this.robos$ = this.searchInput.pipe(debounceTime(300), distinctUntilChanged(), switchMap((term: string)=>
    this.roboService.searchRobos(term)));
  }

}
