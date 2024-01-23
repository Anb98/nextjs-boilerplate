declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined
      EXAMPLE: string
      // add more environment variables and their types here
    }
  }
}

export {}
