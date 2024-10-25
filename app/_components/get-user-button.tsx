"use client";

import React from "react";
import { getUser } from "@/app/_actions/get-user.action";

const GetButton = () => {
  const handleClick = async () => {
    const user = await getUser("2");

    alert(JSON.stringify(user));
  };

  return <button onClick={handleClick}>Get user with id 2</button>;
};

export { GetButton };
