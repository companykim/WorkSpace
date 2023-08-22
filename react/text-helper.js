export const print = (msg) => log(msg, new Data());
export const log = (msg, ts) => console.log(`${ts.toString()} : ${msg}`);

//export function proot(msg) { log(msg, new Data()); }