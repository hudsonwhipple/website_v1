// global.d.ts or something similar
declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
  