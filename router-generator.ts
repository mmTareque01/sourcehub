#!/usr/bin/env node
import fs from 'fs/promises';
import path from 'path';
// import { fileURLToPath } from 'url';

// For ES module compatibility
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface RouterOptions {
  root: string;
  name: string;
  type?: 'page' | 'layout';
}

async function createRouter(options: RouterOptions) {
  const { root, name, type = 'page' } = options;
  
  // Validate root path
  const validRoots = ['/', '/app', '/pages'];
  if (!validRoots.includes(root)) {
    throw new Error(`Invalid root path. Must be one of ${validRoots.join(', ')}`);
  }

  // Determine paths based on Next.js version
  const isAppRouter = root === '/' || root === '/app';
  const baseDir = isAppRouter ? 'app' : 'pages';
  const fullPath = path.join(process.cwd(), baseDir, root === '/' ? '' : root, name);

  // Create directory
  try {
    await fs.mkdir(fullPath, { recursive: true });
    console.log(`Created directory: ${fullPath}`);
  } catch (err) {
    throw new Error(`Error creating directory: ${err instanceof Error ? err.message : String(err)}`);
  }

  // Create appropriate file
  const fileName = isAppRouter ? 
    (type === 'page' ? 'page.tsx' : 'layout.tsx') : 
    (type === 'page' ? 'index.tsx' : '_layout.tsx');

  const filePath = path.join(fullPath, fileName);

  const componentName = name
    .split(/[\/-]/)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

  const fileContent = `export default function ${componentName}${type === 'page' ? 'Page' : 'Layout'}() {
  return (
    <div>
      <h1>${componentName} ${type === 'page' ? 'Page' : 'Layout'}</h1>
    </div>
  );
}
`;

  try {
    await fs.writeFile(filePath, fileContent);
    console.log(`Created ${type} file: ${filePath}`);
  } catch (err) {
    throw new Error(`Error creating ${type} file: ${err instanceof Error ? err.message : String(err)}`);
  }

  console.log(`Successfully created ${type}: ${root}/${name}`);
}

// Parse command line arguments
function parseArgs(args: string[]): RouterOptions {
  const rootArgIndex = args.findIndex(arg => arg === '-r');
  const nameArgIndex = args.findIndex(arg => arg === '-n');
  const typeArgIndex = args.findIndex(arg => arg === '-t');

  if (rootArgIndex === -1 || nameArgIndex === -1) {
    throw new Error('Missing required arguments. Usage: create-router -r <root> -n <name> [-t <type>]');
  }

  return {
    root: args[rootArgIndex + 1],
    name: args[nameArgIndex + 1],
    type: typeArgIndex !== -1 ? args[typeArgIndex + 1] as 'page' | 'layout' : undefined
  };
}

// Main execution
async function main() {
  try {
    const options = parseArgs(process.argv.slice(2));
    await createRouter(options);
    process.exit(0);
  } catch (error) {
    console.error(error instanceof Error ? error.message : 'An unknown error occurred');
    process.exit(1);
  }
}

main();