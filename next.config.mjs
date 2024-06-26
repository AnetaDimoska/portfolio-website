import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();
/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        RESEND_API_KEY: process.env.RESEND_API_KEY,
      },
    
};

export default withNextIntl(nextConfig);
