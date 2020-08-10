import { Contato } from './../shared/contato'
import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../shared/contato.service';
import { Observable } from 'rxjs';
import { ContatoDataService } from '../shared/contato-data.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contatos: Observable<any>;
  constructor(private contatoService: ContatoService, private ContatoDataService: ContatoDataService ) { }

  ngOnInit(): void {
    this.contatos = this.contatoService.getAll();
  }
  
}
