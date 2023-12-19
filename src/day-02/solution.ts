export type CookieSurveyInput<T> = T extends { [key: string]: number } ? keyof T : never
