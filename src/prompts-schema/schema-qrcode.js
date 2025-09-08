import chalk from "chalk";
import pkg from "prompt";
const { message } = pkg;

const promptQRCode = [
    {
        name: "link",
        description: chalk.yellow.bold(`Digite o link para gerar o QRCODE:`),
        required: true,
    },
    {
        name: "type",
        description: chalk.yellow.bold(`Escolha entre o tipo de QRCode (1 - NORMAL ou 2 - TERMINAL):`),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic(`Escolha entre 1 ou 2`),
        required: true,
    },
];

export default promptQRCode;
