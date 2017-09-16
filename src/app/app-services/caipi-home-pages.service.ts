import { Injectable } from '@angular/core';
import { Http, Response }	from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { StorageService } from './storage.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/** @type - Service for asking the CaipiHome-Main-Device for the Pages
            HTTP-Modul from Angular will be imported
*/
@Injectable()
export class CaipiHomePagesService {

  private allPagesUrl: string;
  private thisPage: string;
  private withoutMGW: boolean = true;

constructor(  private http: Http,
              private storage: StorageService) {}

  getCaipiHomePages(name): Observable<string[]> {
      if ( name !== undefined )  { this.thisPage = name; };
      if ( this.storage.retrieve('ApiHost') !== undefined) {
        if ( this.withoutMGW === false ) {
          this.allPagesUrl = 'http://' + this.storage.retrieve('ApiHost') + '/cgi-bin/init.cgi?pages=';
        } else {
          this.allPagesUrl = '/cgi-bin/init.cgi?pages=';
        }
      }
      return this.http.get(this.allPagesUrl)
              .map(this.extractPages)
              .catch(this.handleError);
  }

  private extractPages(res: Response) {
    const body = res.json();
    console.warn("Success " + body);
    if ( body !== undefined ) {
        body.forEach(
          (x, i) => {
            console.log(body);
            (i === 0) ? x['visible'] = true : x['visible'] = false;
          }
        );
    }
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;

    if ( error instanceof Response ) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText} || '' ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    //console.warn('ERROR Get CaipiHome Pages ' + errMsg);
    return Observable.throw(errMsg);
  }
}

//private allPagesUrl = 'http://192.168.7.153/cgi-bin/init.cgi?pages=';
//private allPagesUrl = 'http://192.168.7.113/cgi-bin/init.cgi?pages=';
//private allPagesUrl = '/cgi-bin/init.cgi?pages=';
