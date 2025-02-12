# 🚀 Projeto de Testes Automatizados

## 📌 Descrição

Este projeto foi desenvolvido para realizar testes automatizados em uma API e em uma aplicação web. Utilizando **Cypress** para testes de API e UI, e **K6** para testes de performance, garantindo que os sistemas estão funcionando corretamente e possuem boa estabilidade sob carga.

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework para gerenciamento de rotas e middlewares na API
- **Cypress** - Testes automatizados para API e UI
- **K6** - Testes de carga e performance
- **Faker.js** - Biblioteca para gerar dados aleatórios (nomes, emails, senhas) usados nos testes
- **Prometheus** - Coleta e monitoramento de métricas da API
- **Grafana** - Visualização de métricas e geração de relatórios

---

## 🔧 Análise da Estrutura do Projeto

### 📂 **Principais Diretórios**

- **bin/**: Contém o script para inicializar o servidor Node.js usando o módulo http.
- **cypress/**: Diretório principal para os testes automatizados usando Cypress.
- **e2e/**: Contém os testes E2E para API e interface web.
- **support/**: Reúne comandos customizados e factories utilizadas nos testes.
- **routes/**: Define as rotas da API para gerenciamento de usuários.

### 📄 **Principais Arquivos**

- **app.js**: Configuração principal do servidor Express, conectando middlewares, rotas e tratamento de erros.
- **cypress.config.js**: Configuração do Cypress para testes automatizados.
- **test.js**: Script para realizar testes de performance usando o K6.
- **prometheus.yml**: Configuração do Prometheus para coleta de métricas da API.

## Configuração do Ambiente

### Requisitos

- **Node.js:**  
  [Baixar Node.js](https://nodejs.org/dist/v23.7.0/node-v23.7.0-x64.msi) - **Versão do Node utilizada:** `23.7.0`

- **Git:**  
  [Baixar Git](https://git-scm.com/downloads)

- **Visual Studio Code:**  
  [Baixar Visual Studio Code](https://code.visualstudio.com/download)

  Vídeo para instalação: https://www.youtube.com/watch?v=FWnZBah0WLc

---

## 🔧 Configuração do Projeto

### **Download do projeto**

1. Crie uma pasta no local de sua preferência.
2. Clique com o botão direito do mouse dentro da pasta e selecione a opção Open Git Bash here.
3. Adicione o comando a seguir no Git Bash:
   ```bash
   git clone (https://github.com/LucasPaifar/AutomacaoCypressAPIWEB.git)
   ```
4. Abra o VS Code (Visual Studio Code).
5. No VS Code, clique em **File > Open Folder** e selecione a pasta clonada.
6. Utilizar o Git Bash como terminal dentro do VS Code:  
   [Veja o passo a passo aqui](https://micilini.com/blog/como-integrar-o-git-bash-no-terminal-do-visual-studio-code)

### **Instalação das Dependências**

Certifique-se de ter o **Node.js** instalado. Depois, execute:

```bash
npm install
```

### **Inicialize o Servidor**

Inicie o servidor Express (que roda as rotas da API):

```bash
npm start
```

A API estará acessível em `http://localhost:3030`

### **Executar os Testes**

#### 🔹 Testes de API

Para rodar os testes automatizados na API:

```bash
npx cypress run --spec cypress/e2e/api/api.cy.js
```

#### 🔹 Testes de UI

Para rodar os testes automatizados na interface web:

```bash
npx cypress run --spec cypress/e2e/web/web.cy.js
```

#### 🔹 Testes de Performance

Para rodar os testes de performance com K6:

```bash
k6 run test.js
```

---

## ✅ **Testes Automatizados**

### 📌 **Testes de API**

Os testes garantem o funcionamento correto dos endpoints da API.

- **Cadastro de usuário com sucesso** ✅
- **Cadastro sem campos obrigatórios (retorna erro 400)** ✅
- **Listagem de usuários cadastrados** ✅
- **Simulação de erro 500** ✅

📂 **Arquivo:** `cypress/e2e/api/api.cy.js`

---

### 📌 **Testes de Interface Web (UI)**

Os testes verificam a funcionalidade do formulário de cadastro de usuário.

- **Acessar a página de cadastro** ✅
- **Preencher e enviar o formulário corretamente** ✅
- **Cadastro seguido de login** ✅
- **Erro ao tentar cadastrar sem preencher campos obrigatórios** ✅

📂 **Arquivo:** `cypress/e2e/web/web.cy.js`

---

### 📌 **Testes de Performance**

Os testes simulam um grande número de usuários acessando a API.

- **Carga progressiva com 100 usuários simultâneos** ✅
- **Medição do tempo de resposta sob carga** ✅
- **Simulação de erros** ✅
- **Relatório gerado no Grafana com métricas do Prometheus** ✅

📂 **Arquivo:** `test.js`

---

## 📜 **Conclusão**

O projeto implementa testes completos para API, interface web e performance, garantindo a qualidade da aplicação. Além disso, foram configurados **Prometheus** e **Grafana** para coleta e visualização das métricas de desempenho.

Resultado dos Testes:

Cypress: 
![image](https://github.com/user-attachments/assets/bb161ce3-bd2e-41c1-962f-f63bb588a913)


K6:
![k6](https://github.com/user-attachments/assets/044832d7-fd6e-4eb8-ab35-c8e0d6dd37ed)


Grafana:
![grafana](https://github.com/user-attachments/assets/5e322047-bb55-46d8-b42f-e7b2c51b3172)

