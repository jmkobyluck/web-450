import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  sessionUser: string;

  constructor(private cookieService: CookieService, private http: HttpClient) {
    this.sessionUser = this.cookieService.get('session_user'); // get the logged empId
  }

  /**
   * findAllTasks
   */
  findAllTasks() {
    return this.http.get('/api/employees/' + this.sessionUser + '/tasks');
  }

  /**
   * createTask
   */

  /**
   * updateTask
   */

  /**
   * deleteTask
   */
}
