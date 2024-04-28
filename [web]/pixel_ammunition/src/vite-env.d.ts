/// <reference types="vite/client" />
declare var mta: {
  triggerEvent(event: string): void;
  triggerEvent(event: string, ...any): void;
};


declare module 'three-addons';
