import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { ChoombaService } from '../choomba/choomba.service';
import { CorpoService } from '../corpo/corpo.service';
import { GangService } from '../gang/gang.service';
import { CreateChoombaDto } from '../choomba/dto/create-choomba.dto';
import * as seedChoombas from './data/choomba.json';
import * as seedCorpos from './data/corpo.json';
import * as seedGangs from './data/gang.json';
import { CreateCorpoDto } from '../corpo/dto/create-corpo.dto';
import { CreateGangDto } from '../gang/dto/create-gang.dto';

@Injectable()
export class SeedService {
  constructor (
    private readonly choombaService: ChoombaService,
    private readonly corpoService: CorpoService,
    private readonly gangService: GangService
  ){}
  // constructor (private readonly libroService: LibroService){}

  public async loadData(){
    await this.insertNewChoomba(),
    await this.insertNewCorpo(),
    await this.insertNewGang()
  }

  private async insertNewChoomba(){
    await this.choombaService.deleteAllChoomba();
    const insertPromiseChoomba = [];
    seedChoombas.forEach( (choomba: CreateChoombaDto) => {
      console.log(choomba.id);
      insertPromiseChoomba.push(this.choombaService.create(choomba));
    })
    const results = await Promise.all(insertPromiseChoomba);
    return true;
  }

  private async insertNewCorpo(){
    await this.corpoService.deleteAllCorpo();
    const insertPromiseCorpo = [];
    seedCorpos.forEach( (corpo: CreateCorpoDto) => {
      console.log(corpo.id);
      insertPromiseCorpo.push(this.corpoService.create(corpo));
    })
    const results = await Promise.all(insertPromiseCorpo);
    return true;
  }

  private async insertNewGang(){
    await this.gangService.deleteAllGang();
    const insertPromiseGang = [];
    seedGangs.forEach( (gang: CreateGangDto) => {
      console.log(gang.id);
      insertPromiseGang.push(this.gangService.create(gang));
    })
    const results = await Promise.all(insertPromiseGang);
    return true;
  }

  // create(createSeedDto: CreateSeedDto) {
  //   return 'This action adds a new seed';
  // }

  // findAll() {
  //   return `This action returns all seed`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} seed`;
  // }

  // update(id: number, updateSeedDto: UpdateSeedDto) {
  //   return `This action updates a #${id} seed`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} seed`;
  // }
}
