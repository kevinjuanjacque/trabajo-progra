import { Grid3x3 } from "@mui/icons-material";
import { Card, Typography, CardContent, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { ITruck } from "../interfaces/ITruck";

interface Props {
  truck: ITruck;
}

export const CardTruck = ({ truck }: Props) => {
  return (
    <Grid item xs={12} md={6} lg={3} style={{ margin: "1rem 0rem 0rem 0rem" }}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {truck.nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {truck.descripcion}
          </Typography>
          <Box height={30} />
          <Typography align="right" variant="body2" color="text.secondary">
            Estado de la maquinaria: {truck.estado.estado}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
