import { Box } from "@mui/material";
import Header from "../../components/Header";
import ClientsBarChart from "../../components/ClientsBarChart";

const ClientsBar = () => {
  return (
    <Box m="20px">
      <Header
        title="Clients per-month"
        subtitle="Nordfin Clients per-month"
      />
      <Box height="75vh">
        <ClientsBarChart />
      </Box>
    </Box>
  );
};

export default ClientsBar;
