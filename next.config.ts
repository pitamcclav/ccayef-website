import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        SMTP_SERVICE: 'gmail',
        SMTP_HOST: 'smtp.gmail.com',
        SMTP_PORT: '465',
        SMTP_USER: 'pitamcclav@gmail.com',
        SMTP_PASS: 'xyikrpldrvbpprwz',
    },
};

export default nextConfig;
