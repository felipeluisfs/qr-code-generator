# QR Code Generator

Este projeto é um gerador de QR Codes simples utilizando Node.js.

## Funcionalidades
- Gera QR Codes a partir de textos ou URLs informados pelo usuário.
- Interface de linha de comando.

## Como usar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Configure as variáveis de ambiente no arquivo .env

3. Execute o projeto:
   ```bash
   node --env-file=.env src/index.js
   ```
4. Siga as instruções no terminal para gerar seu QR Code.

## Estrutura do Projeto
```
qrcode-generator/
├── package.json
├── README.md
└── src/
    └── index.js
```

## Dependências
- [prompt](https://www.npmjs.com/package/prompt) (para entrada de dados)
- [qrcode](https://www.npmjs.com/package/qrcode) (para geração do QR Code)

## Autor
Luis Felipe

## Licença
Este projeto está sob a licença MIT.
