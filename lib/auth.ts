// Mock credentials
export const VALID_EMAIL = "user@example.com";
export const VALID_PASSWORD = "password123";

export interface User {
  email: string;
  name: string;
}

export function validateCredentials(email: string, password: string): boolean {
  return email === VALID_EMAIL && password === VALID_PASSWORD;
}

export function getUserFromEmail(email: string): User | null {
  if (email === VALID_EMAIL) {
    return {
      email,
      name: "Demo User"
    };
  }
  return null;
}
