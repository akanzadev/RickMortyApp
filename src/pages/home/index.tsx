import { Button, Container } from "@mui/material";
import { useNotification } from "../../context/notification.context";

export const HomePage: React.FC<{}> = () => {
  const { getError } = useNotification();

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <Button onClick={() => getError("Error")} variant="contained">
        Hola mundo desde HomePage
      </Button>
    </Container>
  );
};
