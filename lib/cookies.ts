"use client";

import { User } from "./auth";

const AUTH_COOKIE_NAME = "auth-token";

export function setAuthCookie(user: User): void {
  document.cookie = `${AUTH_COOKIE_NAME}=${encodeURIComponent(JSON.stringify(user))}; path=/; max-age=${7 * 24 * 60 * 60}`;
}

export function getAuthCookie(): User | null {
  const name = `${AUTH_COOKIE_NAME}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");

  for (let cookie of cookieArray) {
    cookie = cookie.trim();
    if (cookie.indexOf(name) === 0) {
      try {
        return JSON.parse(cookie.substring(name.length));
      } catch (e) {
        return null;
      }
    }
  }
  return null;
}

export function clearAuthCookie(): void {
  document.cookie = `${AUTH_COOKIE_NAME}=; path=/; max-age=0`;
}

export function isAuthenticated(): boolean {
  return getAuthCookie() !== null;
}
