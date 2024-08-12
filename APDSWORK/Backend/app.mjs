import { readFile } from 'fs/promises';

async function readConfig() {
    const data = await readFile('./config.json', 'utf-8');
    console.log(data);
}

readConfig();
