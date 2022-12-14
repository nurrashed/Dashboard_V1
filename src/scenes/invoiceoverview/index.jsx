import { Box } from "@mui/material";
import Header from "../../components/Header";
import InvoiceOverviewLine from "../../components/InvoiceOverviewLine";

const InvoiceOverview = () => {
  return (
    <Box m="20px">
      <Header title="Invoice Overview" subtitle="Nordfin Invoice Overview" />
      <Box height="75vh">
        <InvoiceOverviewLine />
      </Box>
    </Box>
  );
};

export default InvoiceOverview;
