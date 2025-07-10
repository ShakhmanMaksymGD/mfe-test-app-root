import { updateEnvRemoteVersions } from 'mfe-test-scripts/index.js';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envDevFile = path.resolve(__dirname, './.env');
const envProdFile = path.resolve(__dirname, './.env.production');
updateEnvRemoteVersions(envProdFile, __dirname)
updateEnvRemoteVersions(envDevFile, __dirname)