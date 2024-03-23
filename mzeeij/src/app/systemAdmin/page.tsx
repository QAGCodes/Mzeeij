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
import { AdminRow, User } from "@/lib/definitions";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AdminPage = () => {
  const [addUser, setAddUser] = useState({
    id: -1,
    roleid: -1,
    firstname: "",
    lastname: "",
    username: "",
    mobile: "",
    email: "",
    passwordhash: "",
    registeredat: "",
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/users/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: addUser,
        }),
      });

      if (response.ok) {
        // Handle success
        const result = await response.json();
        console.log("Data posted successfully:", result);
      } else {
        // Handle errors
        console.error("Failed to post data:", response.statusText);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }

    setAddUser({
      id: -1,
      roleid: -1,
      firstname: "",
      lastname: "",
      username: "",
      mobile: "",
      email: "",
      passwordhash: "",
      registeredat: "",
    });
  };

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <Card
        className="flex flex-col  text-black w-[75%] h-[75%]"
        decoration="top"
        decorationColor="indigo"
      >
        <Title>User Operations</Title>
        <TabGroup>
          <TabList className="mt-2">
            <Tab icon={UserAddIcon}>Create Users</Tab>
            <Tab icon={UserCircleIcon}>Edit Users</Tab>
            <Tab icon={UserRemoveIcon}>Delete Users</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <form
                onSubmit={handleSubmit}
                className="h-72 text-black flex flex-col flex-wrap items-start"
              >
                <label>
                  ID:
                  <Input
                    type="number"
                    onChange={(e) =>
                      setAddUser({
                        ...addUser,
                        id: e.target.value ? parseInt(e.target.value) : -1,
                      })
                    }
                  />
                </label>
                <label>
                  Role ID:
                  <Input
                    type="number"
                    onChange={(e) =>
                      setAddUser({
                        ...addUser,
                        roleid: e.target.value ? parseInt(e.target.value) : -1,
                      })
                    }
                  />
                </label>
                <label>
                  First Name:
                  <Input
                    type="text"
                    value={addUser?.firstname || ""}
                    onChange={(e) =>
                      setAddUser({ ...addUser, firstname: e.target.value })
                    }
                  />
                </label>
                <label>
                  Last Name:
                  <Input
                    type="text"
                    value={addUser?.lastname || ""}
                    onChange={(e) =>
                      setAddUser({ ...addUser, lastname: e.target.value })
                    }
                  />
                </label>
                <label>
                  Username:
                  <Input
                    type="text"
                    value={addUser?.username || ""}
                    onChange={(e) =>
                      setAddUser({ ...addUser, username: e.target.value })
                    }
                  />
                </label>
                <label>
                  Mobile:
                  <Input
                    type="text"
                    value={addUser?.mobile || ""}
                    onChange={(e) =>
                      setAddUser({ ...addUser, mobile: e.target.value })
                    }
                  />
                </label>
                <label>
                  Email:
                  <Input
                    type="text"
                    value={addUser?.email || ""}
                    onChange={(e) =>
                      setAddUser({ ...addUser, email: e.target.value })
                    }
                  />
                </label>
                <label>
                  Password Hash:
                  <Input
                    type="text"
                    value={addUser?.passwordhash || ""}
                    onChange={(e) =>
                      setAddUser({ ...addUser, passwordhash: e.target.value })
                    }
                  />
                </label>
                <label>
                  Registered At:
                  <Input
                    type="text"
                    value={addUser?.registeredat || ""}
                    onChange={(e) =>
                      setAddUser({ ...addUser, registeredat: e.target.value })
                    }
                  />
                </label>
                <Button type="submit" className="mt-6">
                  Create User
                </Button>
              </form>
            </TabPanel>
            <TabPanel>
              <form
                onSubmit={handleSubmit}
                className="h-72 text-black flex flex-col flex-wrap items-start"
              >
                <label>
                  ID:
                  <Input
                    type="number"
                    onChange={(e) =>
                      setAddUser({
                        ...addUser,
                        id: e.target.value ? parseInt(e.target.value) : -1,
                      })
                    }
                  />
                </label>
                <label>
                  Role ID:
                  <Input
                    type="number"
                    onChange={(e) =>
                      setAddUser({
                        ...addUser,
                        roleid: e.target.value ? parseInt(e.target.value) : -1,
                      })
                    }
                  />
                </label>
                <label>
                  First Name:
                  <Input
                    type="text"
                    value={addUser?.firstname || ""}
                    onChange={(e) =>
                      setAddUser({ ...addUser, firstname: e.target.value })
                    }
                  />
                </label>
                <label>
                  Last Name:
                  <Input
                    type="text"
                    value={addUser?.lastname || ""}
                    onChange={(e) =>
                      setAddUser({ ...addUser, lastname: e.target.value })
                    }
                  />
                </label>
                <label>
                  Username:
                  <Input
                    type="text"
                    value={addUser?.username || ""}
                    onChange={(e) =>
                      setAddUser({ ...addUser, username: e.target.value })
                    }
                  />
                </label>
                <label>
                  Mobile:
                  <Input
                    type="text"
                    value={addUser?.mobile || ""}
                    onChange={(e) =>
                      setAddUser({ ...addUser, mobile: e.target.value })
                    }
                  />
                </label>
                <label>
                  Email:
                  <Input
                    type="text"
                    value={addUser?.email || ""}
                    onChange={(e) =>
                      setAddUser({ ...addUser, email: e.target.value })
                    }
                  />
                </label>
                <label>
                  Password Hash:
                  <Input
                    type="text"
                    value={addUser?.passwordhash || ""}
                    onChange={(e) =>
                      setAddUser({ ...addUser, passwordhash: e.target.value })
                    }
                  />
                </label>
                <label>
                  Registered At:
                  <Input
                    type="text"
                    value={addUser?.registeredat || ""}
                    onChange={(e) =>
                      setAddUser({ ...addUser, registeredat: e.target.value })
                    }
                  />
                </label>
                <Button type="submit" className="mt-6">
                  Edit User
                </Button>
              </form>
            </TabPanel>
            <TabPanel>
              <form
                onSubmit={handleSubmit}
                className="text-black flex flex-col items-start"
              >
                <label>
                  ID:
                  <Input
                    type="number"
                    onChange={(e) =>
                      setAddUser({
                        ...addUser,
                        id: e.target.value ? parseInt(e.target.value) : -1,
                      })
                    }
                  />
                </label>
                <Button type="submit" className="mt-6">
                  Delete User
                </Button>
              </form>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </Card>
    </div>
  );
};

export default AdminPage;
