import { EnvKey } from "@/types/key-type"

// returns true if the key is found in the environment variables
export function isUsingEnvironmentKey(type: EnvKey) {
  console.log("Checking key: ", type, "->", process.env[type])
  return Boolean(process.env[type])
}
