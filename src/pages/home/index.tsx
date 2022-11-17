import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Pagination,
} from "@mui/material";
import { useEffect, useState } from "react";

import { characters } from "../../api/characters";
import { CardComponent, HeaderComponent } from "../../components";
import { TypeCharacter } from "./interfaces/character.interface";

export const HomePage: React.FC<{}> = () => {
  const [allCharacters, setAllCharacters] = useState<TypeCharacter[] | null>(
    null
  );
  const [count, setCount] = useState<number>(1);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    characters
      .getAll({ page })
      .then((res) => {
        setCount(res.data.info.pages);
        setAllCharacters(res.data.results);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div>
            {allCharacters!.length !== 0 ? (
              <Grid container spacing={2} direction="row">
                {allCharacters!.map((character) => (
                  <Grid item xs={3} key={character.id}>
                    <CardComponent
                      image={character.image}
                      name={character.name}
                      species={character.species}
                      status={character.status}
                    />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <h1>No hay personajes</h1>
            )}
          </div>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Pagination
              variant="outlined"
              color="primary"
              count={count}
              page={page}
              onChange={handleChange}
              sx={{ my: 3 }}
              size="large"
            />
          </Box>
        </>
      )}
    </Container>
  );
};
