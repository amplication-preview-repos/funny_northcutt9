import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PersonWhereInput = {
  activities?: JsonFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  profileUrl?: StringNullableFilter;
  snapshot?: JsonFilter;
};
