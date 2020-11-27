## Setup

1. Setup a Node.js project package.json. Quick one : npm init -y
2. Add TypeScript (npm install typescript --save-dev)
3. Add node.d.ts (npm install @types/node --save-dev)
4. Init a tsconfig.json for TypeScript options with a few key options in your tsconfig.json
   `npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs`
   That's it! Fire up your IDE (e.g. code .) and play around. Now you can use all the built in node modules (e.g. import \* as fs from 'fs';) with all the safety and developer ergonomics of TypeScript!
   All your TypeScript code goes in src and the generated JavaScript goes in lib.# typescript-playground
