import { useEffect } from "react";


export const RegisterMTAEvent = (event: string, data: any, callback?: Function) => window.mta.triggerEvent(event, JSON.stringify(data));