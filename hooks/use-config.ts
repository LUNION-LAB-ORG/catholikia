import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export type Config = {
  theme: string;
  locale: string;
  isRtl: boolean;
}

export const defaultConfig: Config = {
  theme: "light",
  locale: "fr",
  isRtl: false,
}


const configAtom = atomWithStorage<Config>("config", defaultConfig)

export function useConfig() {
  return useAtom(configAtom)
}
