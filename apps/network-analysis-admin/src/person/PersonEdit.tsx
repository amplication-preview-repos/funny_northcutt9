import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PersonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Name" source="name" />
        <TextInput label="ProfileURL" source="profileUrl" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
