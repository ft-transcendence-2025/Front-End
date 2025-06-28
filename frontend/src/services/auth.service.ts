import { request, getHeaders } from "../utils/htmlLoader.ts";

export class authService {
  private static base_url = "https://localhost:5000/api/auth";

  static login = async (body: any) => {
    return await request(`${this.base_url}/login`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(body),
    });
  };

  static register = async (body: any) => {
    return await request(`${this.base_url}/register`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(body),
    });
  };

  static generate2FA = async (username: string, body: any) => {
    return await request(`${this.base_url}/${username}/2fa/generate`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(body),
    });
  };

  static enable2FA = async (username: string, body: any) => {
    return await request(`${this.base_url}/${username}/2fa/enable`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(body),
    });
  };

  static disable2FA = async (username: string, body: any) => {
    return await request(`${this.base_url}/${username}/2fa/disable`, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(body),
    });
  };
}
