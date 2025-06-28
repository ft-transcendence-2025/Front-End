import { navigateTo } from "../router/router.ts";
import { loadHtml } from "../utils/htmlLoader.ts";

export async function renderDashboard(container: HTMLElement | null) {
  if (!container) return;

  // Fetch the component's HTML template
  container.innerHTML = await loadHtml("/html/dashboard.html");
}
