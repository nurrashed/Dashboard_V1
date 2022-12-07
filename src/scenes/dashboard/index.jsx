import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import ClientLineChart from "../../components/ClientLineChart";
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import InvoiceOverviewLine from "../../components/InvoiceOverviewLine";
import StatBox from "../../components/StatBox";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  let navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const onDistributionLineClick = () => {
    navigate("/line");
  };

  const onInvoicePieClick = () => {
    navigate("/pie");
  };

  const onInvoiceBarClick = () => {
    navigate("/bar");
  };

  const onClientLineClick = () => {
    navigate("/clientline");
  };

  const onInvoiceOverviewClick = () => {
    navigate("/invoiceOverviewline");
  };

  ;

  return (
    <Box m="10px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to Nordfin dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="10px"
      >
        {/* Row 1 */}

        {/* Column 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="10,472"
            subtitle="Invoice sentout of the previous month"
            progress="0.5"
            increase="+15%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Column 2 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="38"
            subtitle="Number of Clients"
            progress="0.75"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Column 3 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="2.8%"
            subtitle="Yield"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Column 4 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="40 Sek"
            subtitle="Revenue per invoice"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* Row 2 */}
        <Box
          gridColumn="span 6"
          /* gridRow={{ lg: "span 2", xl: "span 3" }} */
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="0px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Distribution
              </Typography>
              {/* <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography> */}
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="85%" onClick={onDistributionLineClick}>
            <LineChart />
          </Box>
        </Box>

        <Box
          gridColumn="span 6"
          /* gridRow={{ lg: "span 2", xl: "span 3" }} */
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="0px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Invoice Overview
              </Typography>
              {/* <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography> */}
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="85%" onClick={onInvoiceOverviewClick}>
            <InvoiceOverviewLine />
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 6"
          /*  gridRow={{ lg: "span 2", xl: "span 3" }} */
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="0px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Invoice State
              </Typography>
              {/*  <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography> */}
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="85%" onClick={onInvoiceBarClick}>
            <BarChart />
          </Box>
        </Box>

        <Box
          gridColumn="span 6"
          /* gridRow={{ lg: "span 2", xl: "span 3" }} */
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="0px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Clients Per-month
              </Typography>
              {/* <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography> */}
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="85%" onClick={onClientLineClick}>
            <ClientLineChart />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
