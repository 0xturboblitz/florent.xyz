import createMDX from '@next/mdx'
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'
import { visit } from 'unist-util-visit';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: '/0xturboblitz.github.io',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

function addTargetToLinks() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.target = '_blank';
    });
  };
}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkMath, addTargetToLinks],
    rehypePlugins: [rehypeMathjax],
  },
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)