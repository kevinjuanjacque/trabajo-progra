import { AppBar, Toolbar, Typography } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AddIncidentView } from "./views/addIncident/add_incident_view";
import { AllIncident } from "./views/all_incident/all_incident";
import { AllUsersView } from "./views/all_users/all_user_view";
import { HomeView } from "./views/home/home_view";
import IncidentView from "./views/incident/incident_view";
import { TruckView } from "./views/truck/truck_view";

function App() {
  let navigator = useNavigate();
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigator("/");
            }}
          >
            Maquinaria
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/maquinaria" element={<TruckView />} />
        <Route path="/maquinaria/incidentes/:id" element={<IncidentView />} />
        <Route
          path="/maquinaria/add/incidente/:id"
          element={<AddIncidentView />}
        />

        <Route path="/maquinaria/all/incidentes" element={<AllIncident />} />
        <Route path="/maquinaria/all/users" element={<AllUsersView />} />
      </Routes>
    </>
  );
}

export default App;
