import {
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useEffect, useState } from "react";
import api from "../../service/api_axios";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface IIncidentResponse {
  descripcion: string;
  fecha: string;
  id_incidente: number;
  id_maquina: number;
  id_usuario: number;
  truck: {
    id_maquina: number;
    nombre: string;
    descripción: string;
    id_estado: number;
  };
  user: { id_usuario: number; nombre: string; cargo: number };
}

export const AllIncident = () => {
  const [Incident, setIncident] = useState<IIncidentResponse[]>([]);

  useEffect(() => {
    let mounted = true;
    const getIncidents = async () => {
      try {
        const resp = await api("/api/truks/incidents");
        setIncident(resp.data.data);
        console.log(resp.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (mounted) {
      getIncidents();
    }

    return () => {
      mounted = false;
    };
  }, []);

  const getDateToIncident = (incidentes: IIncidentResponse) => {
    const today = new Date(incidentes.fecha);
    return today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
  };

  return (
    <>
      <Container style={{ padding: "1rem 1rem 0rem 1rem" }}>
        <Typography variant="h2">HISTORIAL DE INCIDENTES</Typography>
      </Container>

      <Container style={{ padding: "1rem 1rem 0rem 1rem" }}>
        {Incident.map((incidentes) => (
          <Accordion style={{ marginBottom: "1rem" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5">
                Incidente {incidentes.truck.nombre} (
                {getDateToIncident(incidentes)})
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{incidentes.descripcion}</Typography>
              <Typography style={{ width: "100%" }} align="right">
                Gestionado por: {incidentes.user.nombre}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </>
  );
};
