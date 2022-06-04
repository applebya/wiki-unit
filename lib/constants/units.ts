import { Unit } from "../types/unit";

const Centimeter: Unit = {
  id: 1,
  name: "centimeter",
  displayName: "cm",
};

const Meter: Unit = {
  id: 2,
  name: "meter",
  displayName: "m",
  baseUnit: Centimeter,
  baseMultiplier: 100,
};

const Kilometer: Unit = {
  id: 3,
  name: "kilometer",
  displayName: "km",
  baseUnit: Meter,
  baseMultiplier: 1000,
};

const Inch: Unit = {
  id: 4,
  name: "inch",
  displayName: "in",
  baseUnit: Centimeter,
  baseMultiplier: 2.54,
};

const Foot: Unit = {
  id: 5,
  name: "Foot",
  displayName: "ft",
  baseUnit: Inch,
  baseMultiplier: 12,
};

const DannyDevito: Unit = {
  id: 100,
  name: "Danny Devito",
  baseUnit: Meter,
  baseMultiplier: 1.4,
};

const EiffelTower: Unit = {
  id: 101,
  name: "Eiffel Tower",
  baseUnit: Foot,
  baseMultiplier: 1083,
};

const units: Unit[] = [
  Centimeter,
  Meter,
  Kilometer,
  Inch,
  Foot,
  EiffelTower,
  DannyDevito,
];

export default units;
