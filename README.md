# Curadoria de filmes

## Projeto de teste para vaga de desenvolvedor front-end no Viva Decora

> :warning: **Processo aberto no momento**: o processo seletivo para *front-end developer* do Viva Decora está aberto. 

Esse é um repositório com as regras para criação do projeto para vaga de desenvolvedor(a) front-end no Viva Decora. 

A vaga está aberta e é **para trabalho presencial no Viva Decora, localizado em São Paulo no bairro do Jardim Paulista.**

<p align="center">

<img src="https://raw.githubusercontent.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork/master/screenshots-readme/screenshot-desktop-inicial.png?raw=true">
</p>

## Tabela de conteúdos

* [Instruções para entrega do projeto](https://github.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork/#warning-instruções-para-entrega-do-projeto)
* [Sobre o Viva Decora](https://github.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork/#sobre-o-viva-decora)
* [Sobre o projeto: Curadoria de filmes.](https://github.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork/#sobre-o-projeto-curadoria-de-filmes)
* [Curadoria de filmes. Requisitos do MVP.](https://github.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork/#curadoria-de-filmes-requisitos-do-mvp)
* [Design do projeto](https://github.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork/#design-do-projeto)
* [Implementação inicial opcional](https://github.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork/#implementação-inicial-opcional)
* [Critérios de avaliação](https://github.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork/#critérios-de-avaliação)
* [Pontos extras](https://github.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork/#pontos-extras)

## :warning: Instruções para entrega do projeto 

* Desenvolva e versione esse projeto usando git.
* Utilize o serviço de hospedagem de código de sua preferência: github, bitbucket, gitlab ou outro.
* **Não faça um fork desse projeto.** Projetos forkeados sofrerão penalização na classificação.
* Crie um README com instruções claras sobre como executar seu projeto.
* Envie um email com o link para seu código para "jose.maciel [arroba] vivadecora.com.br "
* Dúvidas sobre esse projeto podem ser perguntadas nas [issues](https://github.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork//issues)

## Sobre o Viva Decora:

O Viva Decora é uma empresa fundada em 2014, partiu  da necessidade de completar o ciclo do consumidor de móveis online.  

O Viva Decora iniciou as atividades com o apoio da estrutura de back-office do VivaReal e depois ganhou equipes independentes de marketing B2B e B2C, operações, produto e engenharia, atualmente com 30 profissionais.  

Nossa plataforma de arquitetura e decoração online é voltada para ajudar os usuários a criar e comprar móveis e objetos para ambientes, baseado em recomendações e inspirações de diferentes arquitetos e designers. Temos mais de 5 milhões de visitas por mês  em nosso site e aplicativos e mais de 3 mil profissionais cadastrados. 

O Viva Decora quer ajudar o consumidor em três fases distintas: inspiração, informação e compra. 

**Em Dezembro de 2017 recebemos investimento do Grupo Duratex, para expandir nossas operações e nos consolidarmos como o maior marketplace de Decoração do Brasil**.

**Em Maio de 2019 a Viva Decora lançou seu marketplace de decoração e reforma com mais de 2 mil categorias diferentes de produtos.**

## Sobre o projeto: Curadoria de filmes.

Depois do trabalho alguns amigos quiseram assistir um filme juntos. O problema apareceu logo: *"Que filme vamos assistir?"*. Cada um parecia ter seu próprio gosto para filmes e estava difícil decidir.

Para resolver isso, Vanessa deu a ideia: 

> *Vamos fazer um app online com uma lista de filmes onde todos poderão dizer quais filmes acham bons ou ruins. O que acham?*

O Bruno respondeu:

> *Acho que vale a pena. Deveríamos fazer um MVP desse app só com funcionalidades básicas e ver se nos ajuda.*

Todos acharam uma boa ideia. Os requisitos do MVP do projeto "Curadoria de filmes" foram definidos como no próximo tópico. 

## Curadoria de filmes. Requisitos do MVP.

 <img align="left" height="450" src="https://raw.githubusercontent.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork/master/screenshots-readme/screenshot-mobile.png?raw=true">

* Apenas código front-end será escrito para esse projeto: html5, css e javascript.
* Será usada a [API versão 4 de filmes do The Movies Database](https://developers.themoviedb.org/4)
* Pré-processadores css podem ser usados à vontade.
* O projeto deve ser uma *single page application (SPA)* escrita utilizando Angular 1.x, VueJS 2.x ou React.
* O projeto consiste apenas em 3 telas: **Tela inicial**, **Filmes curtidos**, **Filmes não curtidos**.
* Cada tela precisa ter uma url própria;
* As telas devem ser responsivas;
* Não é preciso se preocupar com persistência dos dados. É esperado que os dados sobre "Filmes curtidos / filmes não curtidos" seja perdido com o recarregamento da página, **mas não na troca de abas do projeto**. 
* Repetindo: ao trocar entre abas do projeto os dados sobre "filmes curtidos/filmes não curtidos" devem permanecer. Não é necessário que eles persistam depois de um recarregamento.
* Não precisa se preocupar com contas de usuário. **O MVP não possui dados de usuário**.


### Tela "Filmes não curados"

* É a tela inicial;
* Exibe um card de filme de uma lista de filmes;
* Um botão "Não curti!" que adiciona o filme na lista de "Filmes não curtidos";
* Um botão "Pular" que remove o filme da lista de filmes não curados;
* Um botão "Curti" que adiciona o filme na lista de "Filmes curtidos.";
* Essa lista vem da API do [The Movie Database](https://developers.themoviedb.org);
* A lista de filmes contém apenas filmes que ainda não foram curados.

### Informações do card de filme

* Título do filme; 
* Foto de destaque;
* Ano do filme;
* Categoria do filme;
* Classificação/*rating* do filme;
* Trecho da sinopse clicável com até 100 caracteres seguidos de  "...";
* Ao clicar no trecho da sinopse a sinopse completa deverá aparecer em um modal bloqueante;

### Tela "Filmes curtidos"

* Apresenta todos os filmes que foram marcados como "Filmes curtidos".
* A lista desses filmes é ordenada de acordo com a data em que o filme foi curado, os curados a menos tempo aparecem no topo.
* No MVP não é possível descurtir um filme depois que ele estiver nessa lista.

### Tela "Filmes não curtidos"

* Apresentam todos os filmes que foram marcados como "Filmes não curtidos".
* A lista desses filmes é ordenada de acordo com a data em que o filme foi curado, os curados a menos tempo aparecem no topo.
* No MVP não é possível curtir um filme depois que ele estiver nessa lista.

## Design do projeto
<p align="center">
<img src="https://github.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork//blob/master/screenshots-readme/screenshot-desktop-modal.png?raw=true"></p>

As telas do filmes estão no Marvel. Você pode verifica-las nos seguintes links:


### Mobile
* [Filmes não curados](https://marvelapp.com/aghih54/screen/52494084)
* [Modal de sinopse](https://marvelapp.com/aghih54/screen/52494086)
* [Menu aberto](https://marvelapp.com/aghih54/screen/52494085)
* [Filmes curtidos](https://marvelapp.com/aghih54/screen/52494082)
* [Filmes não curtidos](https://marvelapp.com/aghih54/screen/52494083)

### Desktop 

* [Filmes não curados](https://marvelapp.com/aghih54/screen/52493819)
* [Filmes curtidos. Estado vazio](https://marvelapp.com/aghih54/screen/52493820)
* [Filmes não curtidos. Estado vazio](https://marvelapp.com/aghih54/screen/52493822)
* [Filmes curtidos](https://marvelapp.com/aghih54/screen/52493823)
* [Filmes não curtidos](https://marvelapp.com/aghih54/screen/52493824)
* [Modal de sinopse](https://marvelapp.com/aghih54/screen/52493818)

### Especificações de design

* Cores/opacidade do degradê vermelho do fundo: De ![#ff1c1c](https://placehold.it/15/ff1c1c/000000?text=+) `#ff1c1c`  ao  ![#ff5656](https://placehold.it/15/ff5656/000000?text=+) `#ff5656` 60% alfa;
* Tamanho da foto principal no mobile: 294 x 350;
* Tamanho da foto principal no desktop: 700 x 460;
* Tamanho da foto do card de lista no mobile: 145 x 174;
* Breakpoint phone - até 320px de largura;
* Breakpoint desktop - a partir de 321px de largura;
* Tamanho da foto do card de lista no desktop: 294 x 350.

### Assets

[Confira aqui no repositório os assets desse projeto](https://github.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork//tree/master/assets)

## Implementação inicial opcional

* O desenvolvedor [@teles](https://github.com/teles) [começou parte do projeto nesse repositório e se quiser você pode continuar seu projeto a partir desse código](https://github.com/vivadecora/projeto-front-end-vivadecora-nao-fazer-fork//tree/master/curadoria). 

**IMPORTANTE**: Usar a implementação desses recursos não é imprescindível e não vale pontos extras.

## Critérios de avaliação

* Fidelidade ao layout solicitado;
* Fidelidade às funcionalidades solicitadas;
* Componentização e extensibilidade dos componentes Javascript;
* Clareza de nomenclatura do CSS;
* HTML estruturado de forma semântica;
* Adesão ao mobile first.

## Pontos extras

* Desenvolvimento de testes unitários no Javascript;
* Uso de mock de chamadas Ajax nos testes unitários;
* Padronização do código: seguir algum styleguide de Javascript e/ou CSS;
* Aplicação de alguma forma de dados estruturados ao HTML;
* Aplicação das animações de transição.
