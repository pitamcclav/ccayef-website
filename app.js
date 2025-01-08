const { execSync } = require('child_process');
const { createServer } = require('http');
const next = require('next');

// Run build command if not already built
try {
    console.log('🛠️ Running npm run build...');
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully.');
} catch (err) {
    console.error('❌ Build failed:', err);
    process.exit(1); // Exit the process if build fails
}

// Start the Next.js server
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        handle(req, res);
    }).listen(process.env.PORT || 3000, (err) => {
        if (err) {
            console.error('❌ Server startup failed:', err);
            process.exit(1);
        }
        console.log('🚀 Server running on port', process.env.PORT || 3000);
    });
});
