import { Routes } from '@angular/router'
import { CadastrarComponent } from './cadastrar/cadastrar.component'
import { LoginComponent } from './login/login.component'
import { ProdutosComponent } from './produtos/produtos.component'
import { HomeComponent } from './home/home.component'
import { CelularesComponent } from './celulares/celulares.component'
import { JogosComponent } from './jogos/jogos.component'
import { ComputadoresComponent } from './computadores/computadores.component'
import { TabletsComponent } from './tablets/tablets.component'
import { SugestaoComponent } from './sugestao/sugestao.component'

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'produtos', component: ProdutosComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastrar', component: CadastrarComponent},
    {path: 'celulares', component: CelularesComponent},
    {path: 'jogos', component: JogosComponent},
    {path: 'computadores', component: ComputadoresComponent},
    {path: 'tablets', component: TabletsComponent},
    {path: 'sugestao', component: SugestaoComponent}

] 