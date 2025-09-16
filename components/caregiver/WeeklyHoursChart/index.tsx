import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function WeeklyHoursChart() {
  const datasets = [
    {
      data: [8, 6, 9, 7, 8, 5, 8],
      color: () => `rgba(59,130,246,1)`,
      strokeWidth: 4,
    },
    {
      data: [9, 7, 4, 8, 9, 4, 6],
      color: () => `rgba(46,139,87,1)`,
      strokeWidth: 4,
    },
  ];

  return (
    <LineChart
      data={{
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets,
      }}
      width={screenWidth - 16}
      height={220}
      chartConfig={{
        backgroundColor: "#ffffff",
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        decimalPlaces: 0,
        color: () => `rgba(0,0,0,1)`,
        labelColor: (opacity = 1) => `rgba(100,116,139,${opacity})`,
        propsForDots: {
          r: "4",
          strokeWidth: 2,
          stroke: "#ffffff",
        },
        fillShadowGradient: "transparent",
        fillShadowGradientOpacity: 0,
        propsForBackgroundLines: {
          strokeWidth: 0.4,
          strokeOpacity: 1,
        },
        propsForVerticalLabels: {
          fontSize: 12,
        },
        propsForHorizontalLabels: {
          fontSize: 12,
        },
        useShadowColorFromDataset: false,
      }}
      withHorizontalLines={true}
      withVerticalLines={false}
      withInnerLines={true}
      withOuterLines={false}
      withShadow={false}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 12,
      }}
    />
  );
}
