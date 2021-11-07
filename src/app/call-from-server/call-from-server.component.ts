import { Component, OnInit } from '@angular/core';
import { GetBaconService } from '../../services/get-bacon-service';

@Component({
  selector: 'app-call-from-server',
  templateUrl: './call-from-server.component.html',
  styleUrls: ['./call-from-server.component.scss']
})
export class CallFromServerComponent implements OnInit {

  public model!: string[];

  constructor(private _getBaconService:GetBaconService) { }

  public ngOnInit(): void {
    this._getBaconService.getBacon()
      .subscribe(result => {
        this.model = <string[]>result;
      });
  }

}
