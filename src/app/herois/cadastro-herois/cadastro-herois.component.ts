import { Component } from '@angular/core';
import { HeroisService } from '../herois.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cadastro-herois',
  templateUrl: './cadastro-herois.component.html',
  styleUrls: ['./cadastro-herois.component.css']
})
export class CadastroHeroisComponent {
  public formData: any = {};
  constructor(
    public heroisService: HeroisService,
    public router : Router,
    public toastr : ToastrService
  ){}

  cadastrarHeroi() {
    this.heroisService.newHeroi(this.formData).subscribe(
      (result: any) => {
        this.toastr.success(result.menssagem)
        this.router.navigate(['listar-herois']);
      },
      (error: any) => {
        this.toastr.error(error.error.menssagem)
      }
    );
  }
}
