import {MyDataService} from '../../services/my-data-service';

export class Grid {
  static inject = [MyDataService];

  constructor(myDataService) {
    this.myDataService = myDataService;
  }    
}
