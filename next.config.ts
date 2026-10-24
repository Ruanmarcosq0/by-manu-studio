import type {NextConfig} from 'next';
const config: NextConfig = {distDir: process.env.LOCAL_BUILD_DIR || '.next'};
export default config;
