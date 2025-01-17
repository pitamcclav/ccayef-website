// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createServer } = require('http');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const next = require('next');
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require('@prisma/client')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { execSync } = require('child_process')


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

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

async function runMigrations() {
    try {
        // Run migrations
        console.log('Running database migrations...')
        execSync('npx prisma migrate deploy', {
            stdio: 'inherit',
        })
        console.log('Migrations completed successfully')

        // Generate Prisma Client
        console.log('Generating Prisma Client...')
        execSync('npx prisma generate', {
            stdio: 'inherit',
        })
        console.log('Prisma Client generated successfully')

    } catch (error) {
        console.error('Migration error:', error)
        process.exit(1)
    }
}

// Run migrations when the app starts
runMigrations()

// Initialize Prisma Client
const prisma = new PrismaClient()

// Export for use in other files
module.exports = {
    prisma
}
