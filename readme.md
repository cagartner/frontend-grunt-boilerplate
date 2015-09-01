## Frontend Grunt Boilerplate

Desenvolvido boilerplate para ajudar a começar um projeto simples de front com o básico.

### Requesitos

* 1 - NodeJs `sudo apt-get install nodejs`
* 2 - Bower `npm install -g bower`
* 3 - Grunt `npm install -g grunt-cli`
* 4 - Less `npm install -g less`

### Instalação

Após instalar todos os pacotes acima executar o comando `bower install` para instalar as dependecias locais de frontend, por fim executar `npm install` para instalar as dependencias do Grunt. Por fim execute o comando `grunt` para criar os arquivos da pasta dist.

### Editando um arquivo

Quando for atualizar um arquivo JS ou CSS, abra o terminal e navegue até a pasta public, agora execute o comando `grunt w` para o automatizador "ouvir" as atualizações.

Para alterar um estilo procure o mesmo ou adicione nos arquivos .less dentro da pasta public/_less.

### Atualizar imagem

Quando uma imagem foi adicionada à pasta `src/images` é necessário executar o comando `grunt` para ele copiar para a pasta `dist/images`.