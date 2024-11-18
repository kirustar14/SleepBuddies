declare module "*.mp3" {
    const value: string; // This tells TypeScript that `.mp3` files are treated as strings (URLs)
    export default value;
  }