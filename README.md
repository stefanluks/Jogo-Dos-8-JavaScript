# Jogo Dos 8
### construido com JavaScript

> O Jogo dos Oito é um jogo de tabuleiro é estruturado em um tabuleiro 3×3 com 8 peças, cada peça tem um número de 1 a 8, e um espaço vazio. O objetivo é colocar os números nas peças para combinar com a configuração final usando o espaço vazio. Podemos deslizar quatro peças adjacentes (esquerda, direita, acima e abaixo) no espaço vazio.

### Estrutura do Projeto

Componentes do projeto como aplicação em javaScript que controla o sistema e os modelos onde estão os objetos do jogo.

<img src="./src/Imagens/estrutura.png" align="left">

## __Elementos do Projeto__
## __1__ - Arquivo do que controla o sistema e manipula o DOM.
## __2__ - Arquivos modelos, os objetos do sistema.

<br>
<br>
<br>
<br>

# Objetos

__PEÇA:__ modelo do item que se move no tabuleiro e armazena um número.

>atributos: número (valor inteiro), vazio (bolean) e lados (um objeto do javascript que aponta para outras peças).

## Código

<img src="./src/Imagens/peca.png" align="left">

### Exemplo da Peça na Interface:
<img src="./src/Imagens/peca_interface.png" align="left">