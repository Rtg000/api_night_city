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
import * as seedFixers from './data/fixer.json';
import * as seedCyberwares from './data/cyberware.json';
import * as seedDistritos from './data/distrito.json';
import { CreateCorpoDto } from '../corpo/dto/create-corpo.dto';
import { CreateGangDto } from '../gang/dto/create-gang.dto';
import { CreateFixerDto } from '../fixer/dto/create-fixer.dto';
import { FixerService } from '../fixer/fixer.service';
import { CreateCyberwareDto } from '../cyberware/dto/create-cyberware.dto';
import { CyberwareService } from '../cyberware/cyberware.service';
import { CreateDistritoDto } from '../distrito/dto/create-distrito.dto';
import { DistritoService } from '../distrito/distrito.service';

@Injectable()
export class SeedService {
  constructor (
    private readonly choombaService: ChoombaService,
    private readonly corpoService: CorpoService,
    private readonly gangService: GangService,
    private readonly fixerService: FixerService,
    private readonly cyberwareService: CyberwareService,
    private readonly distritoService: DistritoService
  ){}
  // constructor (private readonly libroService: LibroService){}

  public async loadData(){
    await this.insertNewGang(),
    await this.insertNewChoomba(),
    await this.insertNewDistrito(),
    await this.insertNewCorpo(),
    await this.insertNewFixer(),
    await this.insertNewCyberware()
  }

  private async insertNewGang(){
    await this.gangService.deleteAllGang();
    const insertPromiseGang = [];
    seedGangs.forEach( (gang: CreateGangDto) => {
      console.log(gang);
      insertPromiseGang.push(this.gangService.create(gang));
    })
    const results = await Promise.all(insertPromiseGang);
    return true;
  }

  private async insertNewChoomba(){
    await this.choombaService.deleteAllChoomba();
    const insertPromiseChoomba = [];
    seedChoombas.forEach( (choomba: CreateChoombaDto) => {
      console.log(choomba);
      insertPromiseChoomba.push(this.choombaService.create(choomba));
    })
    const results = await Promise.all(insertPromiseChoomba);
    return true;
  }

  private async insertNewCorpo(){
    await this.corpoService.deleteAllCorpo();
    const insertPromiseCorpo = [];
    seedCorpos.forEach( (corpo: CreateCorpoDto) => {
      console.log(corpo);
      insertPromiseCorpo.push(this.corpoService.create(corpo));
    })
    const results = await Promise.all(insertPromiseCorpo);
    return true;
  }

  private async insertNewFixer(){
    await this.fixerService.deleteAllFixer();
    const insertPromiseFixer = [];
    seedFixers.forEach( (fixer: CreateFixerDto) => {
      console.log(fixer);
      insertPromiseFixer.push(this.fixerService.create(fixer));
    })
    const results = await Promise.all(insertPromiseFixer);
    return true;
  }
  
  private async insertNewCyberware(){
    await this.cyberwareService.deleteAllCyberware();
    const insertPromiseCyberware = [];
    seedCyberwares.forEach( (cyberware: CreateCyberwareDto) => {
      console.log(cyberware);
      insertPromiseCyberware.push(this.cyberwareService.create(cyberware));
    })
    const results = await Promise.all(insertPromiseCyberware);
    return true;
  }

  private async insertNewDistrito(){
    await this.distritoService.deleteAllDistrito();
    const insertPromiseDistrito = [];
    seedDistritos.forEach( (distrito: CreateDistritoDto) => {
      console.log(distrito);
      insertPromiseDistrito.push(this.distritoService.create(distrito));
    })
    const results = await Promise.all(insertPromiseDistrito);
    return true;
  }

}
