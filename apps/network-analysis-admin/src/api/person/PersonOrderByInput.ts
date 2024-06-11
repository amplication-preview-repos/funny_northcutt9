import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  activities?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  profileUrl?: SortOrder;
  snapshot?: SortOrder;
  updatedAt?: SortOrder;
};
