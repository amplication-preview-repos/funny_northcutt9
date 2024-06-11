import { InputJsonValue } from "../../types";

export type PersonCreateInput = {
  activities?: InputJsonValue;
  name?: string | null;
  profileUrl?: string | null;
  snapshot?: InputJsonValue;
};
