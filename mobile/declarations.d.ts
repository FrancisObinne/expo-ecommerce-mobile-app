declare module "*.png" {
  const value: any;
  export default value;
}
declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "@react-native-picker/picker" {
  import * as React from "react";
  import { ViewProps } from "react-native";

  export interface PickerProps extends ViewProps {
    selectedValue?: any;
    onValueChange?: (itemValue: any, itemIndex: number) => void;
    enabled?: boolean;
    mode?: "dialog" | "dropdown";
    prompt?: string;
    testID?: string;
  }

  export class Picker extends React.Component<PickerProps> {
    static Item: React.ComponentType<{
      label: string;
      value: any;
      color?: string;
    }>;
  }
}
