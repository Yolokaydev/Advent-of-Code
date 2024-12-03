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
export function splitLines(text) {
    return text.split('\n').map(line => line.trim());
}

export function splitAndTrim(text) {
    return text.trim().split(/\s+/);
}
