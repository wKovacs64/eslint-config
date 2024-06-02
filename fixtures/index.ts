import path from 'node:path';
import url from 'node:url';

console.log(path.dirname(url.fileURLToPath(import.meta.url)));
