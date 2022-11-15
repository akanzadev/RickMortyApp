import { Button, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";

import { characters } from "../../api/characters";
import { CardComponent, HeaderComponent } from "../../components";
import { TypeCharacter } from "./interface/character.interface";

export const HomePage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[]>([]);

  useEffect(() => {
    characters
      .getAll({ page: 1 })
      .then((res) => {
        setAllCharacters(res.data.results);
      })
      .catch((err) => {
        console.error(err);
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
      <div>
        {allCharacters!.length !== 0 ? (
          <Grid container spacing={2} direction="row">
            {allCharacters.map((character) => (
              <Grid item xs={3}>
                <CardComponent
                  key={character.id}
                  image={character.image}
                  name={character.name}
                  species={character.species}
                  status={character.status}
                />
              </Grid>
            ))}
          </Grid>
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
    </Container>
  );
};
