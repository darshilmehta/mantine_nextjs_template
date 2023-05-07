import { Text, Container, Image, rem, createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },
}));

const Index = () => {
  const { classes, theme } = useStyles();

  function greetByTime(): string {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
      return 'Good morning!';
    }
    if (hour >= 12 && hour < 18) {
      return 'Good Afternoon!';
    }
    return 'Good Evening!';
  }

  return (
    <Container fluid>
      <Image
        src="/static/logo.png"
        alt="Logo"
        width={100}
        height={100}
        radius={20}
        mx="auto"
      />
      <Text fw={700} fz={32} mb="lg" align="center">
        {greetByTime()}
      </Text>
    </Container>
  );
};

export default Index;
