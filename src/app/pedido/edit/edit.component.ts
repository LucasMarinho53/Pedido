import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';
import { PedidoModel } from '../models/pedido.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {


  produtoForm!: FormGroup;
  pedido!:PedidoModel;
  msg!:string;

  constructor(
    private service: PedidoService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.pedido = this.service.localizarPorId(id);

    this.produtoForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      quantidade: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      cliente: ['', [Validators.required]],
      categoria: ['', [Validators.required]],
    })
  }

  editar(){
    this.pedido.nome = this.produtoForm.get('nome')!.value;
    this.pedido.quantidade = this.produtoForm.get('quantidade')!.value;
    this.pedido.endereco = this.produtoForm.get('endereco')!.value;
    this.pedido.cliente = this.produtoForm.get('cliente')!.value;
    this.pedido.categoria = this.produtoForm.get('categoria')!.value;

    this.service.atualizar(this.pedido);
    this.msg = "Atualizado com sucesso."
  }

  loadForm(pedido:PedidoModel): void {
    this.produtoForm.patchValue({
      nome: pedido.nome,
      quantidade: pedido.quantidade,
      endereco: pedido.endereco,
      cliente: pedido.cliente,
      categoria: pedido.categoria
    });
  }

  get nome() { return this.produtoForm.get('nome')!; }
  get quantidade() { return this.produtoForm.get('quantidade')!; }
  get endereco() { return this.produtoForm.get('endereco')!; }
  get cliente() { return this.produtoForm.get('cliente')!; }
  get categoria() { return this.produtoForm.get('categoria')!; }

}
