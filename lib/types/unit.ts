export type BaseUnit = "cm" | "s";

export type Unit = {
  id: number;
  name: string;
  displayName?: string;
  baseUnit?: Unit;
  baseMultiplier?: number;
};
