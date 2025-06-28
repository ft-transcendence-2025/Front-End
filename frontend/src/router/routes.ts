import { renderHome } from "../views/home.ts";
import { openLoginModal } from "../components/loginModal.ts";
import { renderRegister } from "../views/register.ts";
import { renderUserList } from "../views/userList.ts";
import { renderDashboard } from "../views/dashboard.ts";
import { renderPong } from "../views/pong.ts";

interface Route {
  path: string;
  action: (container: HTMLElement | null) => Promise<void>;
}

export const routes: Route[] = [
  { path: "/", action: renderHome },
  { path: "/users", action: renderUserList },
  { path: "/register", action: renderRegister },
  {
    path: "/login",
    action: async () => {
      openLoginModal();
    },
  },
  { path: "/dashboard", action: renderDashboard },
  { path: "/pong", action: renderPong },
];
