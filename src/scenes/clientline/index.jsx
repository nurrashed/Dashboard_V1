import { Box } from "@mui/material";
import Header from "../../components/Header";
import ClientLineChart from "../../components/ClientLineChart";

const ClientLine = () => {
  return (
    <Box m="20px">
      <Header title="Client Per-month" subtitle="Nordfin Client per-month" />
      <Box height="75vh">
        <ClientLineChart />
      </Box>
    </Box>
  );
};

export default ClientLine;
