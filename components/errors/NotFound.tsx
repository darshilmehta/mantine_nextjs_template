import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
} from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: '80rem',
    paddingBottom: '120rem',
    backgroundColor: theme.fn.variant({
      variant: 'filled',
      color: theme.primaryColor,
    }).background,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: '220rem',
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      fontSize: '120rem',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: '38rem',
    color: theme.white,

    [theme.fn.smallerThan('sm')]: {
      fontSize: '32rem',
    },
  },

  description: {
    maxWidth: '540rem',
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colors[theme.primaryColor][1],
  },
}));

export default function NotFound() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>Something is not right....</Title>
        <Text size="lg" align="center" className={classes.description}>
          Page you are trying to open does not exist. You may have mistyped the
          address, or the page has been moved to another URL. If you think this
          is an error contact support.
        </Text>
        <Group position="center">
          <Link href="/">
            <Button variant="white" size="md">
              Get Back To Home Page
            </Button>
          </Link>
        </Group>
      </Container>
    </div>
  );
}
