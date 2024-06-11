import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const PersonCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="Name" source="name" />
        <TextInput label="ProfileURL" source="profileUrl" />
        <div />
      </SimpleForm>
    </Create>
  );
};
