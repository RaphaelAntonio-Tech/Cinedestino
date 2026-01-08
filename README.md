## Cinedestino 🎬

Cinedestino é um site de filmes católicos fictício criados pelo chat GPT (conteúdo) e Gemni IA (imagens) projeto em dupla que desenvolvi com meu amigo e colega de curso Lucas Batista desenvolvido com **HTML**,**CSS**,**JavaScript**,**PHP** e **MySQL**. Com toda certeza esse projeto é um marco enorme na minha jornada como desenvolvedor, simplesmente é meu primeiro projeto que possui uma versão responsiva para Desktops, Tablets e Celulares.

## 📌 Sobre o Projeto

Cinedestino é um site de filmes, aonde todos os filmes são católicos e fictícios. O site é composto por:

### 🛠️ Sistema de cadastro e Login com autenticação por token 

![Image](https://github.com/user-attachments/assets/5941f80a-caaf-413c-b5c7-2827669a5d50)

  Este projeto implementa um sistema completo de cadastro e login de usuários utilizando autenticação baseada em token, sem dependência de sessões tradicionais. O objetivo é garantir segurança, escalabilidade e organização no controle de acesso.

 ### 📑 Cadastro de Usuário

  O O sistema permite que novos usuários se cadastrem informando um endereço de e-mail e uma senha. Para garantir a segurança das credenciais, as senhas não são armazenadas em texto puro. Durante o cadastro, o sistema utiliza a função **password_hash**, aplicando o algoritmo de criptografia **bcrypt**, e salva apenas o **hash** da senha no banco de dados.

 ![Image](https://github.com/user-attachments/assets/0b63db2f-5023-4008-b155-8f2bd9180eb0)

- Após o cadastro, o sistema gera um token de cadastro temporário, que é armazenado no banco de dados e utilizado para validar o acesso à etapa de definição da foto de perfil. Esse token impede acessos indevidos e garante que apenas usuários recém-cadastrados concluam o processo.
![Image](https://github.com/user-attachments/assets/e4183694-2ef1-4517-8860-b6041dda3dd8)

### 🤳🏽 Foto de Perfil e Armazenamento 

A foto de perfil enviada no cadastro é armazenada no **Supabase Storage**, e apenas a URL pública da imagem é salva no banco de dados. Isso permite que a imagem seja facilmente recuperada e exibida sempre que o usuário estiver autenticado no sistema.

### 🎲 Banco de Dados

O banco de dados do projeto é hospedado no Supabase, que fornece uma infraestrutura baseada em PostgreSQL. Nele são armazenadas todas as informações essenciais do usuário, incluindo:

- **ID do usuário** 
- **Nome**
- **E-mail** 
- **Hash da senha** 
- **URL da foto de perfil**
- **Token de cadastro** 
- **Token de login**

### 🔐 Login e autenticação por token

No processo de login, o usuário informa seu e-mail e senha. O sistema recupera o **hash** da senha correspondente no banco de dados e utiliza **password_verify** para validar a senha digitada.

![Image](https://github.com/user-attachments/assets/8d1faebd-106f-41f4-8543-2c345f1e8940)

- Quando a autenticação é bem-sucedida, o sistema gera um token de login único e criptograficamente seguro, criado com **random_bytes**. Esse token é:
 - Salvo no banco de dados (**Supabase**)
 - Enviado ao navegador por meio de um cookie seguro
 - O cookie é configurado com as flags:
 - **HttpOnly** (impede acesso via **JavaScript**)
 - **Secure** (transmitido apenas em conexões HTTPS)
 - **SameSite** (proteção contra CSRF)

E se o e-mail ou a senha forem preenchidos de maneira incorreta, o sistema redireciona o usuário de volta para a página de login. A foto de perfil enviada no cadastro é salva diretamente em uma pasta dentro do próprio projeto. Apenas o caminho do arquivo é armazenado no banco de dados, o que permite que o sistema recupere e exiba a imagem sempre que o usuário estiver logado. 

![Image](https://github.com/user-attachments/assets/efa7a773-1018-4dc6-a00e-49013e5e1d17)

Caso o usuário não definir uma foto de perfil, o sistema automaticamente definirá uma imagem padrão para a conta.

![Image](https://github.com/user-attachments/assets/2c3ba09a-17a7-4389-8cff-49ec362a48a3)

Dessa forma, o sistema oferece um processo de autenticação seguro, organizado e funcional, combinando criptografia de senha, gerenciamento de imagens e controle de acesso.

### 🔓 Controle de Acesso

Todas as páginas protegidas do sistema verificam a existência do cookie de autenticação e validam o token junto ao banco de dados. Caso o token seja inválido, inexistente ou expirado, o acesso é bloqueado e o usuário é redirecionado para a página de login.

Esse mecanismo garante que apenas usuários autenticados possam acessar áreas restritas do sistema.

### LOGOUT

No processo de logout, o sistema remove o token de login do banco de dados e invalida o cookie armazenado no navegador. Dessa forma, o acesso do usuário é encerrado de forma completa e segura.

Dessa forma, o sistema oferece um processo de autenticação seguro, organizado e escalável, utilizando criptografia de senhas, autenticação baseada em token, armazenamento em nuvem com **Supabase** e controle eficiente de acesso às páginas protegidas.

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **Figma** (para prototipagem do design)
- **PHP**
- **MySQL**
- **Chat GPT** (criação dos filmes e auxílio na correção de erros)
- **Gemni IA** (criação das Imagens)

## 📖 Aprendizados

Durante o desenvolvimento, pratiquei e aprimorei:

- Trabalhar em equipe para desenvolver o projeto
- Melhorei bastante na organização e administração do projeto
- Integração entre **lógica de programação** e **design de interface**
- Organização e clareza no fluxo do código
- Utilização de formulários HTML para coletar dados e envia-los ao servidor
- Trabalhar com IA de forma inteligente

Além da parte técnica, também desenvolvi algumas **soft skills**:

- Organização e atenção aos detalhes
- Pensamento lógico aliado à criatividade
- Persistência na resolução de erros
- Clareza na apresentação do projeto

## 🎨 Design

O layout foi projetado no **Figma**, priorizando:

- Interface limpa, objetiva e simples
- Facilidade de uso
- Praticando boa experiência do usuário (UX)

<img width="1375" height="992" alt="Image" src="https://github.com/user-attachments/assets/e9203196-23cc-47f2-85f9-a75f46efcd20" />

## 📄 Licença

Este projeto foi desenvolvido apenas para fins de estudo.

## 🌐 Acesso

Link para abrir na web: https://cinedestino.vercel.app/
