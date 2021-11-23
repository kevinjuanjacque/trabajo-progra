import { Card, Grid, CardContent, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import api from "../../service/api_axios";
import { CardTruck } from "./components/card_truck";
import { ITruck } from "./interfaces/ITruck";

export const TruckView = () => {
  const [Trucks, setTrucks] = useState([]);
  useEffect(() => {
    let mounted = true;
    const getTrucksApi = async () => {
      try {
        const resp = await api("/api/truks");
        setTrucks(resp.data.data);
        console.log(resp);
      } catch (error) {
        console.error(error);
      }
    };
    if (mounted) {
      getTrucksApi();
    }
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="stretch"
        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
        {Trucks.map((truck: ITruck) => (
          <CardTruck key={truck.id_maquina} truck={truck} />
        ))}
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          style={{ margin: "1rem 0rem 0rem 0rem" }}
        >
          <Card style={{ height: "100%", cursor: "pointer" }}>
            <Grid container direction="column" justifyContent="center">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                color="text.secondary"
              >
                +
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                color="text.secondary"
              >
                Agregar nueva maquina
              </Typography>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
