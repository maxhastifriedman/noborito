import { EMAIL_USER, EMAIL_PASS, RECIPIENT_EMAIL } from "../local";
import * as fs from "fs";
import * as path from "path";

// Ensure the file is written in the root directory
const envPath = path.resolve(__dirname, "../.env");

const envContent = `EMAIL_USER=${EMAIL_USER}
EMAIL_PASS=${EMAIL_PASS}
RECIPIENT_EMAIL=${RECIPIENT_EMAIL}
`;

fs.writeFileSync(envPath, envContent);
console.log(`✅ .env file generated at ${envPath}`);
