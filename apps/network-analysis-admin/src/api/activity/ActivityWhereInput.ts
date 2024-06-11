import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ActivityWhereInput = {
  content?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  typeField?: StringNullableFilter;
};
