# How to use

- Click "[Use this template](https://github.com/umstek/parcel-typescript-react-antd/generate)" and enter details to create a new repository from this template.
- Navigate to https://github.com/umstek/parcel-typescript-react-antd and download the zip.
- Clone the repository from the above location.
  ```sh
  # Clone the repo
  git clone --depth=1 https://github.com/umstek/parcel-typescript-react-antd.git you_project_name
  # Remove the .git directory
  rm -rf !$/.git
  ```

# Why should you use this template?

You know the de-facto UI library for the web is [React](https://reactjs.org/), and you want to use a beautiful component library such as [Ant Design](https://ant.design) to jump start development rather than building everything from scratch. Also you know that if you were to use [TypeScript](https://www.typescriptlang.org/) instead of JavaScript, your application will be easy to maintain and there will be less pain caused by `undefined` things here and there. You also want to load modules dynamically, minimize the bundle size, and maybe install many other libraries in the future.  
Although Ant-Design is mainly a React library and it works fine with TypeScript, there is a slight problem with the ant-design suggested `babel-plugin-import`, which is used to load only the necessary CSS without bloating your app, because, obviously, this is a babel plugin and you are using typescript. Yes, you can configure babel to work with typescript and ant design, configure webpack to do bundling etc. But configuring everything manually is a pain, so you use [CRA](https://facebook.github.io/create-react-app/), and lose the flexibility. If you eject, you are on your own; and if you use other hacks, things get complicated.

Or you can just use [Parcel](https://parceljs.org/), that's why.

# Steps to re-create this template

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
