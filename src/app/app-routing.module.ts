import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // rota da pagina inicial
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  //Pagina inicial
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home/home.module').then( m => m.HomePageModule)
  },
  // pagina de contatos
  {
    path: 'contacts',
    loadChildren: () => import('./page/contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  // pagina sobre
  {
    path: 'about',
    loadChildren: () => import('./page/about/about.module').then( m => m.AboutPageModule)
  },
  // rota coringa (rota inexistente)
  //tem que ser sempre a ultima rota
  {
    path: '**',
    loadChildren: () => import('./page/e404/e404.module').then( m => m.E404PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
