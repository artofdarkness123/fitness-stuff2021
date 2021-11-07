import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class GetBaconService {

  private readonly url: string = 'https://baconipsum.com/api/?type=meat-and-filler';

  constructor(private _http: HttpClient) {

  }

  public getBacon(): Observable<Object> {
    return this._http.get(this.url);
  }

}
