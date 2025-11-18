
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react-swc';
  import path from 'path';

  export default defineConfig({
    plugins: [react()],
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        'vaul@1.1.2': 'vaul',
        'sonner@2.0.3': 'sonner',
        'recharts@2.15.2': 'recharts',
        'react-resizable-panels@2.1.7': 'react-resizable-panels',
        'react-hook-form@7.55.0': 'react-hook-form',
        'react-day-picker@8.10.1': 'react-day-picker',
        'next-themes@0.4.6': 'next-themes',
        'lucide-react@0.487.0': 'lucide-react',
        'input-otp@1.4.2': 'input-otp',
        'figma:asset/efa542f8bf19e544277b0f328fe38440fc851c08.png': path.resolve(__dirname, './src/assets/efa542f8bf19e544277b0f328fe38440fc851c08.png'),
        'figma:asset/ea708e963f94370a51861237163c2b9c4513b203.png': path.resolve(__dirname, './src/assets/ea708e963f94370a51861237163c2b9c4513b203.png'),
        'figma:asset/e71f081db5878cf573bae9360a8d48ce745208e6.png': path.resolve(__dirname, './src/assets/e71f081db5878cf573bae9360a8d48ce745208e6.png'),
        'figma:asset/e2fe93898bac6de46a3b4706a72fe118b8567992.png': path.resolve(__dirname, './src/assets/e2fe93898bac6de46a3b4706a72fe118b8567992.png'),
        'figma:asset/daffb598fce3c1f9cb1a059179aab144a9225b7e.png': path.resolve(__dirname, './src/assets/daffb598fce3c1f9cb1a059179aab144a9225b7e.png'),
        'figma:asset/da7f0f5149f8aa3c651249f9bf8dfd5fed07c09d.png': path.resolve(__dirname, './src/assets/da7f0f5149f8aa3c651249f9bf8dfd5fed07c09d.png'),
        'figma:asset/d924ebae870c03161f3a5c3a77c7daf49e0e8997.png': path.resolve(__dirname, './src/assets/d924ebae870c03161f3a5c3a77c7daf49e0e8997.png'),
        'figma:asset/d9030ce846e3e6cf5706af1efcb607472000153f.png': path.resolve(__dirname, './src/assets/d9030ce846e3e6cf5706af1efcb607472000153f.png'),
        'figma:asset/d5c27589f80053c88af2f431599ae7ebccf252ec.png': path.resolve(__dirname, './src/assets/d5c27589f80053c88af2f431599ae7ebccf252ec.png'),
        'figma:asset/d31cace2ba7dd83a7b39edb11313a9857f350f8d.png': path.resolve(__dirname, './src/assets/d31cace2ba7dd83a7b39edb11313a9857f350f8d.png'),
        'figma:asset/bf77feacddc0c82d766fec970c5a3a77a3f85013.png': path.resolve(__dirname, './src/assets/bf77feacddc0c82d766fec970c5a3a77a3f85013.png'),
        'figma:asset/b2aefaa067ecf0fdff5adfcdba32ef2324c82967.png': path.resolve(__dirname, './src/assets/b2aefaa067ecf0fdff5adfcdba32ef2324c82967.png'),
        'figma:asset/ae9118f7976e92060294c4a4c95dd7768cb6a1ce.png': path.resolve(__dirname, './src/assets/ae9118f7976e92060294c4a4c95dd7768cb6a1ce.png'),
        'figma:asset/ae21bf84137b6cc67374f006a7543ccbfdb958cc.png': path.resolve(__dirname, './src/assets/ae21bf84137b6cc67374f006a7543ccbfdb958cc.png'),
        'figma:asset/aabbed6c43c808b9aa43dc37ce39d895b4695206.png': path.resolve(__dirname, './src/assets/aabbed6c43c808b9aa43dc37ce39d895b4695206.png'),
        'figma:asset/a68df9a799f5fcdbe6fc587c886fcb6fa9624971.png': path.resolve(__dirname, './src/assets/a68df9a799f5fcdbe6fc587c886fcb6fa9624971.png'),
        'figma:asset/93f728ce0e7ecfa76d4e22158b8cded08e17a62d.png': path.resolve(__dirname, './src/assets/93f728ce0e7ecfa76d4e22158b8cded08e17a62d.png'),
        'figma:asset/91bb0a6b705259bd647053df6cd92e64c3e141d3.png': path.resolve(__dirname, './src/assets/91bb0a6b705259bd647053df6cd92e64c3e141d3.png'),
        'figma:asset/8e469a9244e61470ddb5a8bb6b97cd1876447c0a.png': path.resolve(__dirname, './src/assets/8e469a9244e61470ddb5a8bb6b97cd1876447c0a.png'),
        'figma:asset/83f8ec79b08a23c4a29a5c8db0e53b70377f0895.png': path.resolve(__dirname, './src/assets/83f8ec79b08a23c4a29a5c8db0e53b70377f0895.png'),
        'figma:asset/73a85b37ab855696414b8b198b01cf0f6502ab2c.png': path.resolve(__dirname, './src/assets/73a85b37ab855696414b8b198b01cf0f6502ab2c.png'),
        'figma:asset/6b6f915445f26cbdc52a813f54fd7de0d5f27e99.png': path.resolve(__dirname, './src/assets/6b6f915445f26cbdc52a813f54fd7de0d5f27e99.png'),
        'figma:asset/6a27a73ffcecabffa85c6fc53e560bc12c8cd841.png': path.resolve(__dirname, './src/assets/6a27a73ffcecabffa85c6fc53e560bc12c8cd841.png'),
        'figma:asset/690e70c223592a19029828502709dfdd1f508901.png': path.resolve(__dirname, './src/assets/690e70c223592a19029828502709dfdd1f508901.png'),
        'figma:asset/5f3ed505e90b92544a56eed55deb7ffbb1d2e2db.png': path.resolve(__dirname, './src/assets/5f3ed505e90b92544a56eed55deb7ffbb1d2e2db.png'),
        'figma:asset/4cb9d1befb6ac84e63b1b26de9d2d3d6a1e96b8e.png': path.resolve(__dirname, './src/assets/4cb9d1befb6ac84e63b1b26de9d2d3d6a1e96b8e.png'),
        'figma:asset/43ee125457123fc51a3bcde727ae0172dde32509.png': path.resolve(__dirname, './src/assets/43ee125457123fc51a3bcde727ae0172dde32509.png'),
        'figma:asset/3e2effc6eb41296a7830f255819fe46ebc96a2f6.png': path.resolve(__dirname, './src/assets/3e2effc6eb41296a7830f255819fe46ebc96a2f6.png'),
        'figma:asset/252337db6a9f8c7b9b32eaa55cbbd6b2271e858b.png': path.resolve(__dirname, './src/assets/252337db6a9f8c7b9b32eaa55cbbd6b2271e858b.png'),
        'figma:asset/1c97b3750e449f4ea10a4fb95c04f98dd6d3b897.png': path.resolve(__dirname, './src/assets/1c97b3750e449f4ea10a4fb95c04f98dd6d3b897.png'),
        'figma:asset/1850920d64e4323c91b27bd8a671b7a74a9299ea.png': path.resolve(__dirname, './src/assets/1850920d64e4323c91b27bd8a671b7a74a9299ea.png'),
        'figma:asset/1657b7ef8b882067fcf6ffb1cfa6c9f993fb5b52.png': path.resolve(__dirname, './src/assets/1657b7ef8b882067fcf6ffb1cfa6c9f993fb5b52.png'),
        'embla-carousel-react@8.6.0': 'embla-carousel-react',
        'cmdk@1.1.1': 'cmdk',
        'class-variance-authority@0.7.1': 'class-variance-authority',
        '@radix-ui/react-tooltip@1.1.8': '@radix-ui/react-tooltip',
        '@radix-ui/react-toggle@1.1.2': '@radix-ui/react-toggle',
        '@radix-ui/react-toggle-group@1.1.2': '@radix-ui/react-toggle-group',
        '@radix-ui/react-tabs@1.1.3': '@radix-ui/react-tabs',
        '@radix-ui/react-switch@1.1.3': '@radix-ui/react-switch',
        '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
        '@radix-ui/react-slider@1.2.3': '@radix-ui/react-slider',
        '@radix-ui/react-separator@1.1.2': '@radix-ui/react-separator',
        '@radix-ui/react-select@2.1.6': '@radix-ui/react-select',
        '@radix-ui/react-scroll-area@1.2.3': '@radix-ui/react-scroll-area',
        '@radix-ui/react-radio-group@1.2.3': '@radix-ui/react-radio-group',
        '@radix-ui/react-progress@1.1.2': '@radix-ui/react-progress',
        '@radix-ui/react-popover@1.1.6': '@radix-ui/react-popover',
        '@radix-ui/react-navigation-menu@1.2.5': '@radix-ui/react-navigation-menu',
        '@radix-ui/react-menubar@1.1.6': '@radix-ui/react-menubar',
        '@radix-ui/react-label@2.1.2': '@radix-ui/react-label',
        '@radix-ui/react-hover-card@1.1.6': '@radix-ui/react-hover-card',
        '@radix-ui/react-dropdown-menu@2.1.6': '@radix-ui/react-dropdown-menu',
        '@radix-ui/react-dialog@1.1.6': '@radix-ui/react-dialog',
        '@radix-ui/react-context-menu@2.2.6': '@radix-ui/react-context-menu',
        '@radix-ui/react-collapsible@1.1.3': '@radix-ui/react-collapsible',
        '@radix-ui/react-checkbox@1.1.4': '@radix-ui/react-checkbox',
        '@radix-ui/react-avatar@1.1.3': '@radix-ui/react-avatar',
        '@radix-ui/react-aspect-ratio@1.1.2': '@radix-ui/react-aspect-ratio',
        '@radix-ui/react-alert-dialog@1.1.6': '@radix-ui/react-alert-dialog',
        '@radix-ui/react-accordion@1.2.3': '@radix-ui/react-accordion',
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      target: 'esnext',
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
      proxy: {
        // Proxy /dashboard routes to Django, but bypass /dashboard/login for React
        // Note: In production, set VITE_API_BASE_URL environment variable to:
        // https://janeandaimunjawadbackend-production.up.railway.app/api
        '/dashboard': {
          target: 'http://localhost:8000',
          changeOrigin: true,
          secure: false,
          bypass(req) {
            // Don't proxy /dashboard/login - let React Router handle it
            const url = req.url || '';
            if (url.startsWith('/dashboard/login')) {
              return '/index.html'; // Serve index.html so React Router can handle it
            }
            return null; // Continue proxying for other routes
          },
        },
      },
    },
  });