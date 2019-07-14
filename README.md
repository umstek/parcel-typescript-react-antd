# How I created this

1. Create a new folder with your project name.
2. Open the folder, run `yarn init` and answer the questions.
3. Run `yarn add --dev parcel-bundler` to install parcel bundler.
4. Add the following section to the `package.json`.
   ```json
   "scripts": {
     "start": "parcel index.html --open",
     "build": "parcel build index.html",
     "clean": "rm -rf .cache dist"
   }
   ```
5. Create the `index.html` file and add basic html5 template using vscode `html:5` snippet.
6. Add `<div id="app-root"></div>` in the body.
7. Below that, add `<script src="src/index.tsx"></script>`.
8. Create `tsconfig.json` and add the following.

   ```json
   {
     "compilerOptions": {
       "module": "esnext",
       "target": "es5",
       "lib": ["es6", "dom"],
       "moduleResolution": "node",
       "rootDir": "src",
       "jsx": "react",
       "allowSyntheticDefaultImports": true
     },
     "exclude": ["node_modules", "dist"]
   }
   ```

9. Create `.babelrc` and add the below.
   ```json
   {
     "presets": ["@babel/preset-env"],
     "plugins": [
       [
         "import",
         {
           "libraryName": "antd",
           "libraryDirectory": "es",
           "style": "css"
         }
       ]
     ]
   }
   ```
10. Create the `src` folder and add `index.tsx` file.

    ```tsx
    import * as React from "react";
    import { render } from "react-dom";
    import { Typography } from "antd";

    const App = () => (
      <div>
        <Typography.Title level={1}>Hello, world!</Typography.Title>
      </div>
    );

    render(<App />, document.getElementById("app-root"));
    ```

11. Run `yarn start`. If that fails, cancel and run `yarn start` again.
12. Install other typescript definitions if needed.
