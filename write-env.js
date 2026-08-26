const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, './src/environments/environments.ts');

const envFile = `export const environment = {
  production: true,
  supabaseUrl: '${process.env.SUPABASE_URL || ''}',
  supabaseKey: '${process.env.SUPABASE_KEY || ''}',
  youtubeApiKey: '${process.env.YOUTUBE_API_KEY || ''}',
  vapidPublicKey: '${process.env.VAPID_PUBLICKEY || ''}'
};`;

fs.writeFileSync(targetPath, envFile);
console.log('Arquivo environments.ts gerado com chaves da Vercel!');
