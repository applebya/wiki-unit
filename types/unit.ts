type BaseUnit = "cm" | "s";

type Unit = {
  id: number;
  name: string;
  displayName: string;
  baseUnit: BaseUnit;
  baseMultiplier: number;
};
