import { ThemedView } from "@/components/ui/ThemedView";
import React from "react";
import { Text, View } from "react-native";
import Svg, { Circle, G } from "react-native-svg";

interface ChartData {
  name: string;
  population: number;
  color: string;
  legendFontColor?: string;
  legendFontSize?: number;
}

interface TaskDistributionDonutChartProps {
  size?: number;
  strokeWidth?: number;
  gapSize?: number;
}

const TaskDistributionDonutChart: React.FC<TaskDistributionDonutChartProps> = ({
  size = 200,
  strokeWidth = 30,
  gapSize = 2,
}) => {
  const data: ChartData[] = [
    {
      name: "Medical Care",
      population: 35,
      color: "#4CAF50",
      legendFontColor: "#666",
      legendFontSize: 14,
    },
    {
      name: "Personal Care",
      population: 25,
      color: "#2196F3",
      legendFontColor: "#666",
      legendFontSize: 14,
    },
    {
      name: "Companionship",
      population: 20,
      color: "#8BC34A",
      legendFontColor: "#666",
      legendFontSize: 14,
    },
    {
      name: "Household",
      population: 20,
      color: "#81D4FA",
      legendFontColor: "#666",
      legendFontSize: 14,
    },
  ];

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;
  const total = data.reduce((sum, item) => sum + item.population, 0);

  const totalGapPercentage = (data.length * gapSize) / 100;
  const availablePercentage = 1 - totalGapPercentage;

  let cumulativePercentage = 0;

  const renderSegments = () => {
    return data.map((item, index) => {
      const adjustedPercentage =
        (item.population / total) * availablePercentage;
      const strokeDasharray = `${adjustedPercentage * circumference} ${circumference}`;
      const strokeDashoffset = -cumulativePercentage * circumference;

      cumulativePercentage += adjustedPercentage + gapSize / 100;

      return (
        <Circle
          key={index}
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke={item.color}
          strokeWidth={strokeWidth}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      );
    });
  };

  const renderLegend = () => {
    return data.map((item, index) => (
      <View key={index} className="flex-row items-center m-1 min-w-[45%]">
        <View
          className="w-3 h-3 rounded-full mr-2"
          style={{ backgroundColor: item.color }}
        />
        <Text
          className="text-base"
          style={{
            color: item.legendFontColor || "#666",
            fontSize: item.legendFontSize || 14,
          }}
        >
          {item.name} ({Math.round((item.population / total) * 100)}%)
        </Text>
      </View>
    ));
  };

  return (
    <ThemedView>
      <View>
        <View className="mb-5 items-center">
          <Svg width={size} height={size}>
            <G transform={`rotate(-90 ${center} ${center})`}>
              {renderSegments()}
            </G>
          </Svg>
        </View>
        <View className="flex-row flex-wrap">{renderLegend()}</View>
      </View>
    </ThemedView>
  );
};

export default TaskDistributionDonutChart;
