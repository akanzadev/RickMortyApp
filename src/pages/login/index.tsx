import {
  Button,
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { useState } from "react";

type LoginType = {
  username: string;
  password: string;
};

export const LoginPage: React.FC<{}> = () => {
  const [loginData, setLoginData] = useState<LoginType>({
    username: "",
    password: "",
  });

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography sx={{ mt: 1, mb: 1 }} variant="h4">
              Iniciar Sesión
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                label="email"
                type="text"
                name="username"
                fullWidth
                sx={{ mt: 2, mb: 1.5 }}
                required
                onChange={dataLogin}
              />
              <TextField
                margin="normal"
                label="password"
                type="password"
                name="password"
                fullWidth
                sx={{ mt: 1.5, mb: 1.5 }}
                required
                onChange={dataLogin}
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 1.5, mb: 3 }}
              >
                Iniciar Sesión
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
