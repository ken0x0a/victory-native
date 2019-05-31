/*global setInterval*/
import React from "react";
import { ScrollView } from "react-native";
import {
  VictoryChart,
  VictoryBar,
  VictoryGroup,
  VictoryCandlestick,
  VictoryLine,
  VictoryScatter,
  VictoryArea,
  VictoryPolarAxis,
  VictoryStack,
  VictoryTooltip
} from "victory-native";
import viewStyles from "../styles/view-styles";
import { getTransitionData } from "../data";

export class PolarChartView extends React.Component {
  static navigationOptions = {
    headerTitle: "PolarChart"
  };

  constructor(props) {
    super(props);
    this.state = {
      transitionData: getTransitionData()
    };
  }

  componentDidMount() {
    setInterval(this.updateDemoData.bind(this), 3000);
  }

  updateDemoData() {
    this.setState({
      transitionData: getTransitionData()
    });
  }

  render() {
    return (
      <ScrollView style={viewStyles.container}>
        <VictoryChart polar animate={{ duration: 2000 }}>
          <VictoryArea data={this.state.transitionData} />
          <VictoryPolarAxis />
        </VictoryChart>
      </ScrollView>
    );
  }
}
