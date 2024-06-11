import { SortOrder } from "../../util/SortOrder";

export type ActivityOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
