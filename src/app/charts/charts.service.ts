import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { MessageService } from '../message/message.service';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  // private respondersUrl = 'api/responderMock';
  private respondersUrl = 'responder-service/stats';

  getStatus() {
    return this.http.get<any>(this.respondersUrl).pipe(
      catchError(res => this.handleError('getStatus()', res))
    );
  }

  private handleError(method: string, res: HttpErrorResponse): Observable<any> {
    this.messageService.error(`${method} ${res.message}`);
    console.error(res.error);
    return of(null);
  }

  constructor(private messageService: MessageService, private http: HttpClient) {}
}
