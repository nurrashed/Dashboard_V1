import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Nordfin Line Chart" />
      <Box height="75vh" border='1px solid red'>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
