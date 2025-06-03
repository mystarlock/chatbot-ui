import { EnvKey } from "@/types/key-type"
export const OPEN_API_KEY = process.env.OPEN_API_KEY
// returns true if the key is found in the environment variables
export function isUsingEnvironmentKey(type: EnvKey) {
  console.log("Checking key: ", type, "->", process.env[type])
  return Boolean(process.env[type])
}
