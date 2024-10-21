let cachedRandomEmail: string | null = null;
let cachedRandomPassword: string | null = null;

function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
}

export function getRandomEmail(): string {
  if (!cachedRandomEmail) {
    const domain = "example.com";
    cachedRandomEmail = `${generateRandomString(8)}@${domain}`;
  }
  return cachedRandomEmail;
}

export function getRandomPassword(): string {
  if (!cachedRandomPassword) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
    let result = "";
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    cachedRandomPassword = result;
  }
  return cachedRandomPassword;
}
