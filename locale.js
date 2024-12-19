import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export class Translator { //classe tradutora, criada para encapsular e modular toda a tradução.
    constructor(currentLang) {
        this.currentLang = currentLang;
        this.currentDic = {}; //precisa iniciar o dicionário vazio
    }
    async applyLanguage(newLang) {
        try {
            this.currentLang = newLang; //atualiza o idioma atual
            const __dirname = path.dirname(fileURLToPath(import.meta.url));
            const filePath = path.join(__dirname, `./public/locale/${newLang}.json`);
            const rawData = await fs.readFile(filePath, 'utf-8');
            this.currentDic = JSON.parse(rawData);
            return JSON.parse(rawData); //retorna o conteúdo do JSON
        } catch (err) {
            console.error(`Erro ao carregar o idioma '${newLang}':`, err.message);
            const __dirname = path.dirname(fileURLToPath(import.meta.url));
            const fallbackPath = path.join(__dirname, './public/locale/en.json');
            const fallbackData = await fs.readFile(fallbackPath, 'utf-8');
            return JSON.parse(fallbackData); //fallback para inglês
        }
    }
}