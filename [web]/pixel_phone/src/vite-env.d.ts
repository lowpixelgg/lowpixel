/// <reference types="vite/client" />
declare module "@iconscout/*"

declare var mta: {
    triggerEvent(event: string, ...any): void;
};