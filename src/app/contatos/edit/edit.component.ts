import { Component, OnInit, Input } from '@angular/core';
import { Contato } from '../shared/contato';
import { ContatoService } from '../shared/contato.service';
import { ContatoDataService } from '../shared/contato-data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  contato: Contato
  key: string = '';

  constructor(private contatoService: ContatoService, private contatoDataService: ContatoDataService) { }

  ngOnInit() {
    this.contato = new Contato();
    this.contatoDataService.currentContato.subscribe(data => {
      if (data.contato && data.key) {
        this.contato = new Contato();
        this.contato.nome = data.contato.nome;
        this.contato.mensagem = data.contato.mensagem;
        this.key = data.key;
      }
    })
  }

  onSubmit() {
    if(this.key){

    } else {
      this.contatoService.insert(this.contato)
    }
    this.contato = new Contato()
  }
}