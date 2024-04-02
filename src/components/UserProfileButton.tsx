"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { CircleDollarSign } from "lucide-react";

const UserProfileButton = async () => {
  return (
    <UserButton>
      <UserButton.UserProfileLink
        label="Subscription"
        url="/dashboard/billing"
        labelIcon={<CircleDollarSign />}
      />
    </UserButton>
  );
};

export default UserProfileButton;
