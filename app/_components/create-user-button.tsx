"use client";

import React from "react";
import { createUser } from "@/app/_actions/create-user.action";

const CreateButton = () => {
  const handleClick = async () => {
    const user = await createUser("theo@gmail.com", "admin");

    alert(JSON.stringify(user));
  };

  return <button onClick={handleClick}>Create user</button>;
};

export { CreateButton };
