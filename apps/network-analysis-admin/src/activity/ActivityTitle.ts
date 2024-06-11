import { Activity as TActivity } from "../api/activity/Activity";

export const ACTIVITY_TITLE_FIELD = "typeField";

export const ActivityTitle = (record: TActivity): string => {
  return record.typeField?.toString() || String(record.id);
};
