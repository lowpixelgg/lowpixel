import { ThemeProvider } from "styled-components"
import { ReactNode } from "react"

interface ProviderThemeProps {
  children: ReactNode
}

export function ProviderTheme({ children }: ProviderThemeProps) {
  const theme = {
    colors: {
      text_primary: '#FFFFFF',
      text_secondary: 'rgba(255, 255, 255, 0.35)',
      text_tertiary: 'rgba(255, 255, 255, 0.10)',
      main: '#FB004E',
      orange: '#E5864E',
      blue: '#4F82CE',
      black_primary: '#141519',
      black_secondary: '#1B1C21',
      black_tertiary: '#17181C',
      gray_primary: '#27282E',
      gray_secondary: '#3F404B',
      gray_tertiary: '#403D4D'
    },

    vars: {
      transition: 'all 0.1s cubic-bezier(0, 0, 1, 1)'
    }
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}