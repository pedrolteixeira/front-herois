import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroisService {

  private apiUrl: string = 'https://localhost:5001/heroi/api';
  public HeroiSelecionado: any;

  constructor(public http: HttpClient) { }

  getHerois(){
    return this.http.get(this.apiUrl);
  }

  newHeroi(heroiObj: any){
    return this.http.post(this.apiUrl, heroiObj);
  }

  editHeroi(novoHeroiObj: any){
    return this.http.put(this.apiUrl, novoHeroiObj);
  }

  deleteHeroi(id: any){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  findHeroi(id: any){
    return this.http.get(`${this.apiUrl}/${id}`);
  }

}
