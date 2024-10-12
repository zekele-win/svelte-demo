import type { SvelteComponentTyped } from 'svelte';

declare module '*.svelte' {
  const component: SvelteComponentTyped;
  export default component;
}