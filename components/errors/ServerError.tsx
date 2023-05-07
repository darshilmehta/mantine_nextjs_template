import { createStyles, Title, Text, Button, Container, Group } from '@mantine/core';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
    height: '100vh',
    width: '100vw',
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: '5rem',
    lineHeight: 1,
    // marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colors[theme.primaryColor][3],
    [theme.fn.smallerThan('sm')]: {
      fontSize: '3rem',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: '5rem',
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      fontSize: '3rem',
    },
  },

  description: {
    // maxWidth: '3rem',
    fontSize: '2rem',
    margin: 'auto',
    marginTop: '0.5rem',
    marginBottom: '1rem',
    color: theme.white,
    fontWeight: 400
  },
}));

export default function ServerError() {
  const { classes } = useStyles();
  const router = useRouter();

  const handleClick = async () => {
    await router.push('/');
    router.reload();
  };

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Something bad just happened...</Title>
        <Text size="lg" align="center" className={classes.description}>
          Our servers could not handle your request. Don&apos;t worry, our development team was
          already notified. Try refreshing the page.
        </Text>
        <Group position="center">
          <Button variant="white" size="md" onClick={handleClick}>
            Refresh the page
          </Button>
        </Group>
      </Container>
    </div>
  );
}
