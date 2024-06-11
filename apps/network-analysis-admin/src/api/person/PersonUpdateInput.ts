import { InputJsonValue } from "../../types";

export type PersonUpdateInput = {
  activities?: InputJsonValue;
  name?: string | null;
  profileUrl?: string | null;
  snapshot?: InputJsonValue;
};
