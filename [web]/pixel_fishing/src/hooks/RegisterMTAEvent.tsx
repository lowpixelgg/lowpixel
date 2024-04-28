export const RegisterMTAEvent = (event: string, data: any) =>
  window.mta.triggerEvent(event, JSON.stringify(data));
