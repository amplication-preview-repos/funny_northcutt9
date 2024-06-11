import { JsonValue } from "type-fest";

export type Person = {
  activities: JsonValue;
  createdAt: Date;
  id: string;
  name: string | null;
  profileUrl: string | null;
  snapshot: JsonValue;
  updatedAt: Date;
};
