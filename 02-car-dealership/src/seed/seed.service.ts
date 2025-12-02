import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  populatedb() {
    return 'seed executed';
  }
}
