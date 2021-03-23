import { Injectable } from '@angular/core';
import {Robo} from './robot.interface';
import {ROBOS} from './robotslist.data';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
@Injectable({
  providedIn: 'root'
})
export class RoboService {

  constructor(private messageService: MessageService) { }

  // getRobos(): Robo[]  {
  //   return ROBOS;
  // }
  getRobos(): Observable<Robo[]> {
    const robos = of(ROBOS);
    this.messageService.addmessage('RoboService: Robots fetched ')
    return robos;
  }
  getRoboWithId(id: number): Observable<Robo> {
    const robo = ROBOS.find(r => r.id === id) as Robo;
    this.messageService.addmessage(`HeroService: fetched hero id=${id}`);
    return of(robo);
  }
}
