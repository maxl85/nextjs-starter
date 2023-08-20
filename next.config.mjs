import path from 'path';
import { headers } from './config/headers.mjs';
import { withSentryConfig } from '@sentry/nextjs';
import { fileURLToPath } from 'url';
import withBundleAnalyzer from '@next/bundle-analyzer';
import './env.mjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    webpack(config) {
        // Grab the existing rule that handles SVG imports
        const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))
    
        config.module.rules.push(
          // Reapply the existing rule, but only for svg imports ending in ?url
          {
            ...fileLoaderRule,
            test: /\.svg$/i,
            resourceQuery: /url/, // *.svg?url
          },
          // Convert all other *.svg imports to React components
          {
            test: /\.svg$/i,
            // issuer: /\.[jt]sx?$/,
            issuer: fileLoaderRule.issuer,
            // resourceQuery: { not: /url/ }, // exclude if *.svg?url
            resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
            use: ['@svgr/webpack'],
          },
        )
    
        // Modify the file loader rule to ignore *.svg, since we have it handled now.
        fileLoaderRule.exclude = /\.svg$/i
    
        return config
      },
    
    sassOptions: {
        indentType: 'tab',
        style: 'compressed',
        additionalData: '@import "../config";',
        includePaths: [path.join(__dirname, 'src/styles/modules/')],
        charset: false,
    },

    reactStrictMode: true,

    poweredByHeader: false,

    modularizeImports: {
        lodash: {
            transform: 'lodash/{{member}}',
        },
    },

    experimental: {
        webpackBuildWorker: true,
        instrumentationHook: true,
    },

    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '158.160.14.162',
            port: '7777',
            pathname: '/api/**',
          },
        ],
      },

    rewrites: async () => [
        {
            source: `${process.env.NEXT_PUBLIC_FRONT_PROXY}/:path*`,
            destination: process.env.BACK_INTERNAL_URL ?? `${process.env.NEXT_PUBLIC_FRONT_PROXY}/:path*`,
        },
    ],

    headers,
};

const isProduction =
    process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_APP_ENV === 'PROD';

const bundleAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

const withSentry = () => {
    if (process.env.NEXT_PUBLIC_SENTRY_DSN?.length > 0) {
        return withSentryConfig(nextConfig, { silent: true });
    }
    return nextConfig;
};

export default isProduction ? withSentry() : bundleAnalyzer(nextConfig);
