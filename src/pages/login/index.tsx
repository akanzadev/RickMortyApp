import { Button, Container } from "@mui/material";

export const LoginPage: React.FC<{}> = () => {
  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Button variant="contained">Hola mundo desde LoginPage</Button>
    </Container>
  );
};
