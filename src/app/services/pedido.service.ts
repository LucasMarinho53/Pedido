import { Injectable } from '@angular/core';
import { PedidoModel } from '../pedido/models/pedido.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = "http://localhost:3000/produtos"

  constructor( private http: HttpClient ) { }

  listaProdutos(): PedidoModel[] {
    return JSON.parse(localStorage.getItem('produtos')!) as PedidoModel[] ?? [];
  }

  cadastrar(produto: PedidoModel): void {
    let produtos:PedidoModel[] = this.listaProdutos();
    produto.id = uuid.v4();
    produtos.push(produto);
    console.log(produtos);
    localStorage.setItem('produtos', JSON.stringify(produtos));
  }

  atualizar(todo: PedidoModel): void {
    let produtos:PedidoModel[] = this.listaProdutos();

    // normal
    for(let i = 0; i < produtos.length; i++) {
      if(todo.id === produtos[i].id) {
        produtos[i] = todo;
      }
    }

    localStorage.setItem('produtos', JSON.stringify(produtos));
  }

  localizarPorId(id:string): PedidoModel {
    const todos:PedidoModel[] = this.listaProdutos();
    let produtos!:PedidoModel;
    for(let i = 0; i < todos.length; i++) {
      if(todos[i].id === id) {
        produtos = todos[i];
        break;
      }
    }
    return produtos;
  }

  getAll(): Observable<PedidoModel[]> {
    return this.http.get<PedidoModel[]>(this.apiUrl)
  }

  editar(produto: PedidoModel): void {
    let produtos = this.listaProdutos();

    for(let i = 0; i < produtos.length; i++) {
      if(produto.id === produtos[i].id) {
        produtos[i] = produto;
      }
    }

    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
  }

  excluir(id:string): void{
    let produtos:PedidoModel[] = this.listaProdutos();

    let novosProdutos:PedidoModel[] = [];
    for(let i = 0; i < produtos.length; i++){
      if(produtos[i].id !== id) {
        novosProdutos.push(produtos[i]);
      }
    }

    produtos = novosProdutos;

    localStorage.setItem('produtos', JSON.stringify(produtos));
  }

}
