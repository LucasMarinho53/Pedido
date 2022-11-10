import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidoService } from 'src/app/services/pedido.service';
import { PedidoModel } from '../models/pedido.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  produtoForm!: FormGroup;
  msg!:string;

  constructor(private formBuilder: FormBuilder, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      quantidade: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      cliente: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
    })
  }

  cadastrar() {
    const produto = this.produtoForm.getRawValue() as PedidoModel;
    this.pedidoService.cadastrar(produto);

    this.msg = "Pedido realizado com sucesso."
  }

  get nome() { return this.produtoForm.get('nome')!; }
  get quantidade() { return this.produtoForm.get('quantidade')!; }
  get endereco() { return this.produtoForm.get('endereco')!; }
  get cliente() { return this.produtoForm.get('cliente')!; }
  get categoria() { return this.produtoForm.get('categoria')!; }

}
