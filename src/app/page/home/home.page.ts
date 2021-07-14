import { Component, OnInit } from '@angular/core';

// 1) Importa dependências
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // 3) Atributos do script
  public items: Observable<any>;
  public pipe = new DatePipe('en_US'); // Formatar as datas

  constructor(
    // 2) Injeta dependências
    private afs: AngularFirestore,
    public auth: AngularFireAuth
  ) {
    // Obtém data de agora
    var now = this.pipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss').trim();

    // 4) Acessa e obtém dados da coleção
    this.items = this.afs
      .collection(
        'articles', // Coleção a ser consultada
        (ref) =>
          ref // Aplica filtros
            .where('status', '==', 'ativo') // Somente com 'status'='ativo'
            .where('date', '<=', now) // Somente com a data no passado
            .orderBy('date', 'desc') // Ordena por 'date' na ordem decrescente

        /*
        ATENÇÃO!
          Será necessário gerar um índice no Firestore para que esta query funcione.
          O link para gerar o índice aparece no console.
          Logue-se no Firebase.com e clique no link do console.
      */
      )
      .valueChanges({ idField: 'id' });
  }

  ngOnInit() {}
}
