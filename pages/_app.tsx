import { AppProps } from 'next/app';
import Head from 'next/head';
import theme from '../theme/theme';
import { MantineProvider, AppShell } from '@mantine/core';
import ErrorBoundary from '../components/error-boundary';
import { HeaderMegaMenu } from '../components/header';
import { FooterLinks } from '../components/footer';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  const mockdata = [
    {
      title: 'About',
      links: [
        {
          label: 'Features',
          link: '#',
        },
        {
          label: 'Pricing',
          link: '#',
        },
        {
          label: 'Support',
          link: '#',
        },
        {
          label: 'Forums',
          link: '#',
        },
      ],
    },
    {
      title: 'Project',
      links: [
        {
          label: 'Contribute',
          link: '#',
        },
        {
          label: 'Media assets',
          link: '#',
        },
        {
          label: 'Changelog',
          link: '#',
        },
        {
          label: 'Releases',
          link: '#',
        },
      ],
    },
    {
      title: 'Community',
      links: [
        {
          label: 'Join Discord',
          link: '#',
        },
        {
          label: 'Follow on Twitter',
          link: '#',
        },
        {
          label: 'Email newsletter',
          link: '#',
        },
        {
          label: 'GitHub discussions',
          link: '#',
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/static/logo.png" />
      </Head>

      <MantineProvider theme={theme}>
        <ErrorBoundary>
          <AppShell
            header={<HeaderMegaMenu />}
            footer={<FooterLinks data={mockdata} />}
            sx={{
              margin: '-8px',
            }}
          >
            <Component {...pageProps} />
          </AppShell>
        </ErrorBoundary>
      </MantineProvider>
    </>
  );
}
