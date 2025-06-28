const BASE_URL = "https://localhost:5000/api/users";
import { request, getHeaders } from "../utils/htmlLoader.ts";

export interface User {
  id: string;
  username: string;
  email: string;
  active: boolean;
  createdAt: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    username: string;
    email: string;
  };
}

export class userService {
  private static base_url: string = "https://localhost:5000/api/users";

  static getUsers = async () =>
    request<User[]>(`${this.base_url}`, {
      method: "GET",
      headers: getHeaders(),
    });

  static getUserByUsername = async (username: string) =>
    request<User>(`${this.base_url}/${username}`);

  static updateUser = async (username: string, body: any) =>
    request<User>(`${this.base_url}/${username}`, {
      method: "PUT",
      headers: getHeaders(),
      body: JSON.stringify(body),
    });

  static disableUser = async (username: string) =>
    request<User>(`${this.base_url}/${username}`, {
      method: "PATCH",
      headers: getHeaders(),
    });

  static deleteUser = async (username: string) =>
    request<void>(`${this.base_url}/${username}`, {
      method: "DELETE",
      headers: getHeaders(),
    });
}
