const { createServer } = require('http');
const next = require('next');
const { PrismaClient } = require('@prisma/client');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Initialize Prisma Client (optimized for Data Proxy)
const prisma = new PrismaClient();

app.prepare().then(() => {
    createServer((req, res) => {
        handle(req, res);
    }).listen(process.env.PORT || 3000, (err) => {
        if (err) {
            console.error('Error starting server:', err);
            process.exit(1);
        }
        console.log('> Server running on port', process.env.PORT || 3000);
    });
});

// Export Prisma for use in other files
module.exports = { prisma };
