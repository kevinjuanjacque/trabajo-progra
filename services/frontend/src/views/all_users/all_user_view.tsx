import {
  Container,
  Typography,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../service/api_axios";

interface user {
  cargo: { cargo: string; id_cargo: number };
  id: number;
  nombre: string;
}
export const AllUsersView = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    let mounted = true;
    const getUsers = async () => {
      const users = await api("/api/users");
      setUsers(users.data.data);
    };
    if (mounted) {
      getUsers();
    }
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <>
      <Container style={{ padding: "1rem 1rem 0rem 1rem" }}>
        <Typography variant="h2">Todos los usuarios</Typography>
      </Container>
      <Container style={{ padding: "1rem 1rem 0rem 1rem" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nombre</TableCell>
                <TableCell align="center">Cargo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Users.map((row: user) => (
                <TableRow key={row.id}>
                  <TableCell align="center">{row.nombre}</TableCell>
                  <TableCell align="center">{row.cargo.cargo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};
