import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { ResponsiveLine } from "@nivo/line";
import { mockInvoiceOverviewData as data} from "../data/mockData";

export default function InvoiceOverviewLine() {const theme = useTheme();
const colors = tokens(theme.palette.mode);
return (
  <ResponsiveLine
    data={data}
    theme={{
      tooltip: {
        container: {
          /* background: "#333", */
          color: colors.primary[500],
        },
      },
      axis: {
        domain: {
          line: {
            stroke: colors.grey[100],
          },
        },
        legend: {
          text: {
            fill: colors.grey[100],
          },
        },
        ticks: {
          line: {
            stroke: colors.grey[100],
            strokeWidth: 1,
          },
          text: {
            fill: colors.grey[100],
          },
        },
      },
      legends: {
        text: {
          fill: colors.grey[100],
        },
      },
    }}
    enableGridX={false}
    /* enableGridY={false} */
    enableArea={true}
    lineWidth={2}
    colors={{ datum: "color" }}
    //   colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="catmullRom"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Month of the year",
      legendOffset: 40,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickValues: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -45,
      legendPosition: "middle",
    }}
    pointSize={5}
    pointColor={{ theme: "background" }}
    pointBorderWidth={3}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);
}
