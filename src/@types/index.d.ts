declare module "csstype" {
  interface Properties {
    [key: `--${string}`]: string;
  }
}
