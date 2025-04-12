import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    mdxRs: true,
  },
  turbopack: {
    // configure later
  },
}

const withMDX = createMDX({});

export default withMDX(nextConfig)
