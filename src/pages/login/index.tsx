import {
  Button,
  Container,
  Grid,
  Paper,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";

import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";

type LoginType = {
  username: string;
  password: string;
};

export const LoginPage: React.FC<{}> = () => {
  const { getSuccess } = useNotification();

  const formik = useFormik<LoginType>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginValidate,
    onSubmit: (values) => {
      getSuccess(JSON.stringify(values));
    },
  });

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
            <Box component="form" onSubmit={formik.handleSubmit}>
              <TextField
                margin="normal"
                label="email"
                type="text"
                name="username"
                fullWidth
                sx={{ mt: 2, mb: 1.5 }}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                margin="normal"
                label="password"
                type="password"
                name="password"
                fullWidth
                sx={{ mt: 1.5, mb: 1.5 }}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
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
