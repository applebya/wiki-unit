import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import pluralize from "pluralize";
import { Picker } from "@react-native-community/picker";
import units from "../lib/constants/units";
import MainTemplate from "../lib/templates/MainTemplate";
import { Unit } from "../lib/types/unit";

export default function App(props) {
  const [startAmount, setStartAmount] = useState<string>("1");
  const [startUnit, setStartUnit] = useState<Unit | null>(units[0]);

  const startAmountNumber = Number(startAmount);
  const startAmountIsPlural = startAmountNumber !== 1;
  const startMultipler = findMultiplier(startUnit);

  const unitResults = startUnit
    ? units.filter((unit) => unit.id !== startUnit.id)
    : [];

  return (
    <MainTemplate>
      <TextInput
        value={startAmount}
        placeholder="Enter a value"
        onChangeText={(value) => {
          if (!value.match(/^[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)$/)) {
            return;
          }

          setStartAmount(value);
        }}
      />

      <Picker
        style={styles.picker}
        mode="dropdown"
        selectedValue={startUnit.id}
        onValueChange={(unitId) => {
          const newUnit = units.find((unit) => unit.id == unitId);
          if (newUnit) setStartUnit(newUnit);
        }}
      >
        {units.map((unit) => (
          <Picker.Item
            key={unit.id}
            label={`${startAmountIsPlural ? pluralize(unit.name) : unit.name}${
              unit.displayName ? ` (${unit.displayName})` : ""
            }`}
            value={unit.id}
          />
        ))}
      </Picker>

      {unitResults.map((unit) => {
        const multiplier = findMultiplier(unit);
        const total = startAmountNumber / (multiplier / startMultipler);
        const isPlural = total !== 1;

        if (total < 0.01) return null;

        return (
          <View style={styles.textContainer} key={unit.id}>
            <Text accessibilityRole="header" aria-level="2" style={styles.text}>
              {parseFloat(total.toFixed(2))}
              {unit.displayName ||
                ` ${isPlural ? pluralize(unit.name) : unit.name}`}
            </Text>
          </View>
        );
      })}
    </MainTemplate>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
  picker: {
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
});

const findMultiplier = (unit: Unit) => {
  let multipler = 1;
  let unitLayer = unit;

  while (unitLayer.baseUnit) {
    multipler *= unitLayer.baseMultiplier;
    unitLayer = unitLayer.baseUnit;
  }

  return multipler;
};
