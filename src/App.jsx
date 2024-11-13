import { Container, Typography } from "@mui/material";
import HomePage from "./features/HomePage/HomePage";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Typography textAlign="center"> Main App </Typography>
      <HomePage />
    </Container>
  )
}