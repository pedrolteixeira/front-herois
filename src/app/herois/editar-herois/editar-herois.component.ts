import { Component } from '@angular/core';
import { HeroisService } from '../herois.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-herois',
  templateUrl: './editar-herois.component.html',
  styleUrls: ['./editar-herois.component.css']
})
export class EditarHeroisComponent {
  public formData: any = {};
  constructor(
    public heroiService: HeroisService,
    public router : Router,
    public toastr : ToastrService
  ){}

  ngOnInit() {
    this.montarFormHeroi();
    this.formData.dataNascimento = new Date(this.formData.dataNascimento).toISOString().split('T')[0];
  }

  montarFormHeroi(){
    this.formData = this.heroiService.HeroiSelecionado;
  }

  editarHeroi(){
    this.heroiService.editHeroi(this.formData).subscribe((result: any) => {
      this.toastr.success(result.menssagem)
      this.router.navigate(['listar-herois']);
    }, (error: any) => {
      this.toastr.error(error.error.menssagem)
    })
  }
}
