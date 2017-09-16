import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FinderData } from './finder/finderdata';
import { StorageService } from './storage.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CaipiHomeElemsService {

    postStatus: EventEmitter<any> = new EventEmitter();
    devlist: FinderData[];
    private pageUrl: string;
    private initCGI: string;
    private queryCGI: string;
    private protocol = 'http://';
    private pageParam = '/cgi-bin/init.cgi?page=';
    private queryParam = '/cgi-bin/query.cgi';
    private withoutMGW: boolean = true;

    constructor(  private http: Http,
                  private storage: StorageService) {

                if ( this.withoutMGW === false ) {
                  this.initCGI = this.protocol + this.storage.retrieve('ApiHost') + this.pageParam;
                  this.queryCGI = this.protocol + this.storage.retrieve('ApiHost') + this.queryParam;
                } else {
                  this.initCGI = this.pageParam;
                  this.queryCGI = this.queryParam;
                }
    }

      public getElemsThisPage (page: string): Observable<any[]> {
        this.pageUrl = `${this.initCGI}{"name":"${page}"}`;

        console.log(`Get elems for the page ${page}`);
        console.log(this.pageUrl);

        return this.http.get(this.pageUrl)
                        .map(this.extractElems)
                        .catch(this.handleError);
      }

      private extractElems(res: Response) {
        const body = res.json();
        console.log(body);

        return body || {};
      }

      private handleError(error: Response | any) {
        let errMsg: string;

        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);

          errMsg = `${error.status} - ${error.statusText} || '' ${err}`;
          } else {
            errMsg = error.message ? error.message : error.toString();
          }

          console.error(errMsg);

          return Observable.throw(errMsg);
      }

		  // The function for sending data to the server
      postJSON (singleJSON: string, typ: string) {
        const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
        const options = new RequestOptions({ headers: headers });
        const body = new URLSearchParams();

        switch (typ) {
          case 'btn': body.set(typ, singleJSON); break;
          case 'slider': body.set(typ, singleJSON); break;
          case 'text': body.set(typ, singleJSON); break;
          case 'add': body.set(typ, singleJSON); break;
          case 'addSite': body.set(typ, singleJSON); break;
          case 'newname': body.set(typ, singleJSON); break;
          default: console.log('Default element'); break;
        }

        console.log(body);
        // here we send our request
        return this.http.post(this.queryCGI, body, options)
          .map(
            (res: Response) => {
              res = res.json();
              console.log(res[0]);
            })
          .subscribe(
            ( singleJSON ) => {
              this.postStatus.emit('success');
              return 'success';
            },
            ( error ) => {
              this.postStatus.emit('err');
              console.log(error.json());
            },
            () => {
              console.log('completed');
              return 'completed';
            }
         );
      }

      getResponseAfterPost(){
        return this.postStatus;
      }
}

// private initCGI = 'http://192.168.7.113/cgi-bin/init.cgi?page=';
// private queryCGI = 'http://192.168.7.113/cgi-bin/query.cgi';
// private initCGI = 'http://192.168.7.153/cgi-bin/init.cgi?page=';
// private queryCGI = 'http://192.168.7.153/cgi-bin/query.cgi';
