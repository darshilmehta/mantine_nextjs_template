import { MantineThemeOverride } from '@mantine/core';

const theme: MantineThemeOverride = {
  colorScheme: 'light',
  colors: {
    brandPrimary: [
      '#A4AA88',
      '#87ABB6',
      '#6BAD84',
      '#4EAE81',
      '#31AF7F',
      '#2A966D',
      '#227D5B', // <<<<<<------ primary
      '#1B6349',
      '#134A37',
      '#0C3125',
    ],
    brandSecondary: [
      '#F2F5E4',
      '#EFEFDF',
      '#EDE8DB',
      '#EAE2D6',
      '#FF7E27',
      '#F47825',
      '#E36F21',
      '#C8601B',
      '#AC5014',
      '#91410E',
    ],
  },
  primaryColor: 'brandPrimary',
  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
  headings: {
    fontFamily: 'Inter, sans-serif',
  },
  focusRingStyles: {
    resetStyles: () => ({ outline: 'none' }),
    styles: (_theme) => ({ outline: `2px solid ${_theme.primaryColor}` }),
    inputStyles: (_theme) => ({
      outline: `2px solid ${_theme.primaryColor}`,
    }),
  },
};

export default theme;
