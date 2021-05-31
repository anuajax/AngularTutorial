import { Injectable } from '@angular/core';
import {Robo} from './robot.interface';
import {ROBOS} from './robotslist.data';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RoboService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  // getRobos(): Robo[]  {
  //   return ROBOS;
  // }

  //GET
  getRobos(): Observable<Robo[]> {
    //const robos = of(ROBOS);
    //this.messageService.addmessage('RoboService: Robots fetched ')
    //return robos;
    return this.http.get<Robo[]>(this.url).pipe(tap(_ => this.log('fetched heroes')),
            catchError(this.handleError<Robo[]>('getRobos', [])))
  }
  getRoboWithId(id: number): Observable<Robo> {
    // const robo = ROBOS.find(r => r.id === id) as Robo;
    // this.messageService.addmessage(`HeroService: fetched hero id=${id}`);
    // return of(robo);
    const urlwithid = `${this.url}/${id}`;
    return this.http.get<Robo>(urlwithid).pipe(tap(_ => this.log('Robo fetched')),
            catchError(this.handleError<Robo>(`getRoboWithId id=${id}`)))
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  this.messageService.addmessage(`HeroService: ${message}`);
  }

  private url = 'api/robos';

  private handleError<T>(operation: string, result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
        }
    }

  updateAndSaveRoboDetails(robo: Robo): Observable<any> {
    return this.http.put(this.url, robo, this.httpOptions)
             .pipe(tap(_ => this.log('Update Failed')),
              catchError(this.handleError<any>('updateAndSaveRoboDetails')));
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  addRobo(robo: Robo): Observable<Robo> {
    return this.http.post<Robo>(this.url, robo, this.httpOptions)
               .pipe(tap((newRobo: Robo) => this.log(`New Robo added ${newRobo.id}`)),
                catchError(this.handleError<Robo>('addRobo')))
  }
deleteRobo(id: number): Observable<Robo> {
  const deleteurl = `${this.url}/${id}`;
  return this.http.delete<Robo>(deleteurl,this.httpOptions)
           .pipe(tap(_ => this.log(`DEleted Robo id = ${id}`)),
            catchError(this.handleError<Robo>('deleteRobo')))
}

searchRobos(input: string): Observable<Robo[]> {
  if(!input.trim())
  return of([])
  return this.http.get<Robo[]>(`${this.url}/?name=${input}`)
             .pipe(tap(x => x.length ? this.log(`found robos matching ${input}`) : this.log(`No robos matching ${input}`)),
             catchError(this.handleError<Robo[]>('searchRobos',[])));
}

}
