# Documentação do Projeto - Tela de Cadastro

## 📄 Sobre o Projeto

Este projeto consiste na implementação de uma **tela de cadastro de usuário** baseada em um protótipo no Figma, com foco em responsividade, validação de dados, boas práticas de acessibilidade e UI/UX.

Foi desenvolvido para um **teste técnico** utilizando:

* **React** com **Next.js** (App Router + TypeScript)
* **Tailwind CSS**
* **Shadcn UI** (componentes acessíveis e prontos para produção)
* **React Hook Form** para gerenciamento do formulário
* **Zod** para validação dos dados

---

## 🖌 Protótipo Figma

* Link para o design: [https://www.figma.com/proto/sysNNpo5K6ogmVRcaejfWy/Tela-de-Cadastro?node-id=1-2\&t=pZP8dpW3lT48OlAF-1](https://www.figma.com/proto/sysNNpo5K6ogmVRcaejfWy/Tela-de-Cadastro?node-id=1-2&t=pZP8dpW3lT48OlAF-1)

---

## 🪄 Tecnologias Utilizadas

* [x] React + Next.js 14 com App Router
* [x] TypeScript
* [x] Tailwind CSS
* [x] Shadcn UI
* [x] React Hook Form
* [x] Zod
* [x] StackBlitz (ambiente de desenvolvimento online)

---

## ⚙️ Como rodar o sistema

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Instale as dependências:

```bash
npm install
```

3. Rode o projeto:

```bash
npm run dev
```

4. Acesse em seu navegador:

```
http://localhost:3000
```

---

## 🧰 Campos do Formulário

| Campo              | Tipo     | Obrigatório | Validação                    |
| ------------------ | -------- | ----------- | ---------------------------- |
| Nome completo      | Texto    | Sim         | Campo obrigatório            |
| E-mail             | Texto    | Sim         | Formato válido de e-mail     |
| Senha              | Password | Sim         | Mínimo 8 caracteres          |
| Confirmar senha    | Password | Sim         | Igual à senha                |
| Telefone           | Telefone | Não         | Formato opcional             |
| Data de nascimento | Data     | Não         | -                            |
| Gênero             | Select   | Não         | Feminino / Masculino / Outro |
| Aceito os termos   | Checkbox | Sim         | Obrigatório aceitar          |

---

## 🔢 Validações com Zod

* Uso do schema `z.object()` para definir os campos e regras
* Confirmação de senha verificada com `.refine`
* Checkbox de termos com `z.boolean().refine(...)`

---

## 🔧 Funcionalidades

* Impressão dos dados no console ao submeter o formulário
* Validações em tempo real e exibição de mensagens
* Feedback de sucesso após envio
* Estilo baseado nas cores e fontes do site da [Santa Casa PG](https://santacasapg.com/)
* Responsividade garantida com Tailwind
* Fundo com imagem hospitalar conforme o protótipo

---

## 🔍 Testes Realizados

| Tipo de Teste                           | Resultado Esperado                         |
| --------------------------------------- | ------------------------------------------ |
| Enviar com todos os campos válidos      | Envio bem-sucedido + log no console        |
| Senha e confirmação diferentes          | Mensagem de erro "Senhas não coincidem"    |
| E-mail inválido                         | Mensagem "E-mail inválido"                 |
| Não aceitar os termos                   | Erro: "Você deve aceitar os termos de uso" |
| Envio sem preencher campos obrigatórios | Mensagens de erro por campo                |

---

## 🌐 Testes de Responsividade

Testado manualmente nos seguintes breakpoints:

* [x] **Mobile**: 375px / 425px
* [x] **Tablet**: 768px
* [x] **Desktop**: 1024px / 1280px / 1440px


## 🧾 Capturas de Testes

Abaixo algumas imagens dos testes realizados manualmente:

<img width="543" height="177" alt="Captura de tela 2025-07-19 181830" src="https://github.com/user-attachments/assets/bc354d51-e2d7-4dd1-b261-6ade58f3c396" />
<img width="617" height="188" alt="Captura de tela 2025-07-19 181809" src="https://github.com/user-attachments/assets/3c89f543-8986-4172-aecb-d06c28753faf" />
<img width="557" height="113" alt="Captura de tela 2025-07-19 181843" src="https://github.com/user-attachments/assets/93b16186-2154-4f81-882f-c1094a2a0f66" />
<img width="542" height="743" alt="Captura de tela 2025-07-19 181729" src="https://github.com/user-attachments/assets/415e88f4-dc3c-4255-b838-2d4f6aa28d0a" />
<img width="785" height="230" alt="Captura de tela 2025-07-19 181912" src="https://github.com/user-attachments/assets/c66e4fdc-d7ff-4d61-9c18-91e19a262d26" />


---

## 🙏 Autor

Este projeto foi desenvolvido por **Neucielle Quadros** com dedicação total ao aprendizado, foco nos detalhes e superação de limitações técnicas (travamentos no WSL, VSCode e instalações locais).

A alternativa escolhida foi usar a plataforma **[StackBlitz](https://stackblitz.com/)**, permitindo desenvolver 100% via navegador e cumprir todos os requisitos do desafio.

---


> "A tecnologia transforma. A coragem impulsiona."
