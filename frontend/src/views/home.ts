import { loadHtml } from "../utils/htmlLoader.ts";

export async function renderHome(container: HTMLElement | null) {
  console.log('home page called!');
  if (!container) return;

  // Fetch the component's HTML template
  container.innerHTML = await loadHtml("/html/home.html");
}
