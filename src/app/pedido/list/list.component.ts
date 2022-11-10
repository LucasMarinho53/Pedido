import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';
import { PedidoModel } from '../models/pedido.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  produtos!:PedidoModel[];
  displayedColumns: string[] = ["nome", "quantidade", "endereco", "cliente", "categoria", "editar", "excluir"];
  dataSource!:MatTableDataSource<PedidoModel>;
  clickedRows!:PedidoModel;

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    ) { this.getproduto() }

  ngOnInit(): void {
    this.produtos = this.pedidoService.listaProdutos();
    this.dataSource = new MatTableDataSource(this.produtos);
  }

  listarProdutos(): PedidoModel[]{
    return this.produtos;
  }

  excluir(id:string): void{
    this.pedidoService.excluir(id);
  }
  editar(id:string): void{
    this.router.navigate(["/pedido/edit", id]);
  }

  getproduto(): void{
    this.pedidoService.getAll().subscribe((produtos) => (this.produtos = produtos));
  }

}

