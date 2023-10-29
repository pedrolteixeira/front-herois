import { Component } from '@angular/core';
import { HeroisService } from '../herois.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-herois',
  templateUrl: './listar-herois.component.html',
  styleUrls: ['./listar-herois.component.css']
})
export class ListarHeroisComponent {
  public herois: any = [];
  public idHeroiFiltro: any;
  constructor(
    public heroisService: HeroisService,
    public toastr : ToastrService
  ){}

  ngOnInit(){
    this.listarHerois();
  }

  listarHerois(){
    this.heroisService.getHerois().subscribe((result: any) => {
      this.herois = result.data;
    }, (error: any) => {
      this.toastr.error(error.error.menssagem)
    });
  }

  filtrarHerois(){
    if (this.idHeroiFiltro) {
      this.heroisService.findHeroi(this.idHeroiFiltro).subscribe((result: any) => {
        this.toastr.success(result.menssagem);
        this.herois = [result.data];
      }, (error) => {
        this.toastr.error(error.error.menssagem)
        if (!this.idHeroiFiltro) {
          this.listarHerois();
        }
      })
    } else {
      this.toastr.error('É necessário digitar o id do herói')
    }

  }

  excluirHeroi(idHeroi: any){
    this.heroisService.deleteHeroi(idHeroi).subscribe((result: any) => {
      this.toastr.success(result.menssagem);
      this.listarHerois();
    }, (error: any) => {
      this.toastr.error(error.error.menssagem)
    });
  }
}
