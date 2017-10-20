import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { CelularesComponent } from './celulares/celulares.component';
import { CelularComponent } from './celulares/celular/celular.component';
import { JogosComponent } from './jogos/jogos.component';
import { JogoComponent } from './jogos/jogo/jogo.component';
import { ComputadoresComponent } from './computadores/computadores.component';
import { ComputadorComponent } from './computadores/computador/computador.component';
import { TabletsComponent } from './tablets/tablets.component';
import { TabletComponent } from './tablets/tablet/tablet.component';
import { SugestaoComponent } from './sugestao/sugestao.component';
import { ProdutosService } from './produtos/produtos.service';
import { CelularesService } from './celulares/celulares.service';
import { ComputadoresService } from './computadores/computadores.service';
import { JogosService} from './jogos/jogos.service';
import { TabletService } from './tablets/tablets.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CadastrarComponent,
    ProdutosComponent,
    HomeComponent,
    ProdutoComponent,
    CelularesComponent,
    CelularComponent,
    JogosComponent,
    JogoComponent,
    ComputadoresComponent,
    ComputadorComponent,
    TabletsComponent,
    TabletComponent,
    SugestaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProdutosService, CelularesService, ComputadoresService, JogosService, TabletService],
  bootstrap: [AppComponent]
})
export class AppModule { }
