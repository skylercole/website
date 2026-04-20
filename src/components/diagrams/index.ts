import type { ComponentType } from "react";
import RelexMigration from "./RelexMigration";
import RollsRoyceSensors from "./RollsRoyceSensors";
import RoclaIoT from "./RoclaIoT";
import StoraEnsoLifecycle from "./StoraEnsoLifecycle";

export const DIAGRAM_MAP: Record<string, ComponentType> = {
  "relex-migration": RelexMigration,
  "rolls-royce-sensors": RollsRoyceSensors,
  "rocla-iot": RoclaIoT,
  "stora-enso-lifecycle": StoraEnsoLifecycle,
};
