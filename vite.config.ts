import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { processContactEmailRequest } from './api/send-email'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
// https://vite.dev/config/
const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)))

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, projectRoot, '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'contact-email-api-dev',
        configureServer(server) {
          server.middlewares.use('/api/send-email', async (req, res, next) => {
            if (req.method !== 'POST') {
              next();
              return;
            }

            const chunks: Buffer[] = [];
            for await (const chunk of req) {
              chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
            }

            let body: Record<string, unknown> = {};
            const rawBody = Buffer.concat(chunks).toString('utf8');
            if (rawBody) {
              try {
                body = JSON.parse(rawBody) as Record<string, unknown>;
              } catch {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Invalid JSON body.' }));
                return;
              }
            }

            const previousEnv = {
              RESEND_API_KEY: process.env.RESEND_API_KEY,
              RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
              RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL,
            };

            process.env.RESEND_API_KEY = env.RESEND_API_KEY || previousEnv.RESEND_API_KEY;
            process.env.RESEND_FROM_EMAIL = env.RESEND_FROM_EMAIL || previousEnv.RESEND_FROM_EMAIL;
            process.env.RESEND_TO_EMAIL = env.RESEND_TO_EMAIL || previousEnv.RESEND_TO_EMAIL;

            const result = await processContactEmailRequest(body);

            process.env.RESEND_API_KEY = previousEnv.RESEND_API_KEY;
            process.env.RESEND_FROM_EMAIL = previousEnv.RESEND_FROM_EMAIL;
            process.env.RESEND_TO_EMAIL = previousEnv.RESEND_TO_EMAIL;

            res.statusCode = result.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result.body));
          });
        },
      },
    ],
  }
})
