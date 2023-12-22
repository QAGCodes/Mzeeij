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
import { AdminRow } from "@/lib/definitions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AdminPage = () => {
  const [currUser, setCurrUser] = useState<AdminRow>({
    accessLevel: "",
    userId: "",
    id: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Perform user creation logic here

    // Reset form fields
    setCurrUser({ accessLevel: "", userId: "", id: "" });
  };

  return (
    <Card
      className="box-border max-w-[99%] max-h-[90vh] m-auto p-4 flex-col flex text-black"
      decoration="top"
      decorationColor="indigo"
    >
      <Title>User Operations</Title>
      <TabGroup>
        <TabList className="mt-8">
          <Tab icon={UserAddIcon}>Create Users</Tab>
          <Tab icon={UserCircleIcon}>Edit Users</Tab>
          <Tab icon={UserRemoveIcon}>Delete Users</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <form
              onSubmit={handleSubmit}
              className="text-black flex flex-col items-start"
            >
              <label>
                Username:
                <Input
                  className=""
                  type="text"
                  value={currUser?.userId}
                  onChange={(e) =>
                    setCurrUser({ ...currUser, userId: e.target.value })
                  }
                />
              </label>
              <label>
                Access Level:
                <Input
                  type="text"
                  value={currUser?.accessLevel}
                  onChange={(e) =>
                    setCurrUser({ ...currUser, accessLevel: e.target.value })
                  }
                />
              </label>
              <Button type="submit">Create User</Button>
            </form>
          </TabPanel>
          <TabPanel>
            <h1>hi</h1>
          </TabPanel>
          <TabPanel>
            <h1>hello</h1>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};

export default AdminPage;
