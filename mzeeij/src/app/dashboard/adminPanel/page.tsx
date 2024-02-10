"use client";
import {
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Title,
} from "@tremor/react";

import React, { useState } from "react";
import {
  UserCircleIcon,
  UserAddIcon,
  UserRemoveIcon,
} from "@heroicons/react/solid";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AdminPage = () => {
  const [addUser, setAddUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    mobile: "",
    email: "",
    password: "",
    role: "",
  });
  const [editUser, setEditUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    mobile: "",
    email: "",
    password: "",
    role: "",
  });
  const [deleteUser, setDeleteUser] = useState({
    id: "",
    username: "",
  });

  const handleSubmit = async (event: React.FormEvent, type: string) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    const dummyUser = {
      user: "1",
      companyName: "mzeeijco",
    };
    switch (type) {
      case "create":
        //TODO: Uncomment these lines and make sure to import the functions above
        // await clientAddUser(dummyUser, addUser);
        break;
      case "edit":
        //TODO: Uncomment these lines and make sure to import the functions above
        // await clientEditUser(dummyUser, editUser);
        break;
      case "delete":
        //TODO: Uncomment these lines and make sure to import the functions above
        // await clientDeleteUser(dummyUser, deleteUser);
        break;
      default:
        console.log("Invalid operation");
        break;
    }
  };

  const handleChange = (
    event: React.FormEvent,
    type: string,
    field: string
  ) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    switch (type) {
      case "create":
        setAddUser({ ...addUser, [field]: target.value });
        break;
      case "edit":
        setEditUser({ ...editUser, [field]: target.value });
        break;
      case "delete":
        setDeleteUser({ ...deleteUser, [field]: target.value });
        break;
      default:
        console.log("Invalid operation");
        break;
    }
  };

  return (
    <Card className="m-4" decoration="top" decorationColor="indigo">
      <Title>User Operations</Title>
      <TabGroup>
        <TabList className="mt-3">
          <Tab icon={UserAddIcon}>Create Users</Tab>
          <Tab icon={UserCircleIcon}>Edit Users</Tab>
          <Tab icon={UserRemoveIcon}>Delete Users</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <form
              onSubmit={(event) => handleSubmit(event, "create")}
              className="text-black flex flex-col items-start"
            >
              <label>
                First Name:
                <Input
                  type="text"
                  onInput={(event) =>
                    handleChange(event, "create", "firstname")
                  }
                />
              </label>
              <label>
                Last Name:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "create", "lastname")}
                />
              </label>
              <label>
                Username:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "create", "username")}
                />
              </label>
              <label>
                Mobile:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "create", "mobile")}
                />
              </label>
              <label>
                Email:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "create", "email")}
                />
              </label>
              <label>
                Password:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "create", "password")}
                />
              </label>
              <label>
                Role:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "create", "role")}
                />
              </label>
              <Button className="mt-3" type="submit">
                Create User
              </Button>
            </form>
          </TabPanel>
          <TabPanel>
            <form
              onSubmit={(event) => handleSubmit(event, "edit")}
              className="text-black flex flex-col items-start"
            >
              <label>
                First Name:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "edit", "firstname")}
                />
              </label>
              <label>
                Last Name:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "edit", "lastname")}
                />
              </label>
              <label>
                Username:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "edit", "username")}
                />
              </label>
              <label>
                Mobile:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "edit", "mobile")}
                />
              </label>
              <label>
                Email:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "edit", "email")}
                />
              </label>
              <label>
                Password:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "edit", "password")}
                />
              </label>
              <label>
                Role:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "edit", "role")}
                />
              </label>
              <Button className="mt-3" type="submit">
                Edit User
              </Button>
            </form>
          </TabPanel>
          <TabPanel>
            <form
              onSubmit={(event) => handleSubmit(event, "delete")}
              className="text-black flex flex-col items-start"
            >
              <label>
                ID:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "delete", "id")}
                />
              </label>
              <label>
                Username:
                <Input
                  type="text"
                  onInput={(event) => handleChange(event, "delete", "username")}
                />
              </label>
              <Button className="mt-3" type="submit">
                Delete User
              </Button>
            </form>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

export default AdminPage;
