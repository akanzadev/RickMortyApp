import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import { HeaderComponent } from "../../components/Header/index";
import { characters } from "../../api/characters";

export const HomePage: React.FC<{}> = () => {
  useEffect(() => {
    characters
      .getById({ id: 1 })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container sx={{ mt: 9 }} maxWidth="xl">
      <HeaderComponent
        title="Hola mundo"
        description="Hola mundo bienvenido a Codrr"
        element={
          <Button fullWidth variant="contained">
            Hola mundo
          </Button>
        }
      />
    </Container>
  );
};
