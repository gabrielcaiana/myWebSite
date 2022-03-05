---
title: Introdução aos micro frontends
description: A ideia por trás do Micro Frontends é pensar em um site ou aplicativo web como uma composição de recursos que são de propriedade de equipes independentes .
img: /images/articles/introduction-micro-frontend/preview.png
alt: Introdução ao micro frontends
author:
  name: Gabriel Caiana
  bio: I`m front-end developer.
  image: https://avatars.githubusercontent.com/u/26663338?s=400&u=e321e0c5469481f868a741ef2eec2b0b5a65b398&v=4
---

Os micro frontends divide a aplicaçāo em partes verticais, e cada parte é gerenciada por equipes diferentes de frontend que no final se integram no navegador para formar uma página final para o usuário.
Essa abordagem é relacionada à arquitetura de micro serviços, porém a principal diferença é que um serviço também incluí sua interface de usuário. Essa expansāo do serviço elimina a necessidade de uma equipe de front-end central.

### Vou citar as três principais razões pela qual as empresas vem adotando a arquitetura de micro frontends na minha opiniāo:

- **Otimizaçāo de desenvolvimento de recursos**:

Em uma equipe se encontra todas as habilidades necessárias para se desenvolver um novo recurso, sendo assim nenhuma coordenaçāo entre equipes de front-end e back-end é necessária.

**A facilidade de realizar atualizações no frontend**

Cada equipe possuí seus próprios recursos, desde frontend até o banco de dados, as equipes podem decidir quando atualizar ou trocar de tecnologia de front-end de forma indepêndente.

**O aumento de foco no cliente**

cada equipe envia seus recursos diretamente para o cliente. Não existem equipes de API puras ou equipes de operação.

## O frontend

O micro frontend pode ser uma página completa ou um fragmento que outras equipes incluem, uma equipe gera o HTML, CSS e JavaScript necessários para um determinado recurso. Para tornar a vida mais fácil, eles podem usar uma biblioteca ou estrutura JavaScript para fazer isso. As equipes não compartilham código de biblioteca e estrutura. Cada equipe é livre para escolher a ferramenta que melhor se adapta ao seu caso de uso.

### Integração de front-end

*A integração de front-end* descreve o conjunto de ferramentas e técnicas que você usa para combinar as interfaces de usuário da equipe em um aplicativo coerente para o usuário final.

## Mas que problemas os micro front-ends resolvem?

Agora você tem uma ideia do que são micro front-ends. Vamos examinar mais de perto os benefícios organizacionais e técnicos dessa arquitetura. Também abordaremos os desafios mais comuns que você precisa resolver para ser produtivo com essa abordagem.
