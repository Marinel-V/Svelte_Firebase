import * as universal from '../entries/pages/about/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/3.6-9PuHJZ.js","_app/immutable/chunks/index.30ImaL5r.js","_app/immutable/chunks/scheduler.O8VUTp4Y.js","_app/immutable/chunks/index.j2K9MSZv.js"];
export const stylesheets = [];
export const fonts = [];
