import fs from 'node:fs';

export function readInputFile(path) {
    try {
        const str = fs.readFileSync(path, 'utf8');
        return str;
    } catch (err) {
        console.error(err);
        return null;
    }
}
