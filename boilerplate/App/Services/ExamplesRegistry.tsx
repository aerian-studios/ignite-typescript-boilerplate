import R from "ramda";
import * as React from "react";
import { Text, View } from "react-native";
import DebugConfig from "../Config/DebugConfig";
import { ApplicationStyles } from "../Themes";
const globalComponentExamplesRegistry = [];
const globalPluginExamplesRegistry = [];

export const addComponentExample = (title, usage = () => {}) => { if (DebugConfig.includeExamples) globalComponentExamplesRegistry.push({title, usage}); }; // eslint-disable-line

export const addPluginExample = (title, usage = () => {}) => { if (DebugConfig.includeExamples) globalPluginExamplesRegistry.push({title, usage}); }; // eslint-disable-line

const renderComponentExample = (example) => {
  return (
    <View key={example.title}>
      <View style={ApplicationStyles.darkLabelContainer}>
        <Text style={ApplicationStyles.darkLabel}>{example.title}</Text>
      </View>
      {example.usage.call()}
    </View>
  );
};

const renderPluginExample = (example) => {
  return (
    <View key={example.title}>
      <View style={ApplicationStyles.darkLabelContainer}>
        <Text style={ApplicationStyles.darkLabel}>{example.title}</Text>
      </View>
      {example.usage.call()}
    </View>
  );
};

export const renderComponentExamples = () => R.map(renderComponentExample, globalComponentExamplesRegistry);

export const renderPluginExamples = () => R.map(renderPluginExample, globalPluginExamplesRegistry);

// Default for readability
export default {
  renderComponentExamples,
  addComponentExample,
  renderPluginExamples,
  addPluginExample,
};
