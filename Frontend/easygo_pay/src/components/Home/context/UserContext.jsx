"use client";

import { createContext, useContext } from "react";

const UserContext = createContext(undefined);

export function UserProvider({ children }) {
  const value = {
    user: {
      id: "12345",
      name: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    contacts: [
      {
        id: "25012487",
        name: "Jack",
        avatar: "/placeholder.svg?height=64&width=64",
      },
      {
        id: "20124857",
        name: "Rose",
        avatar: "/placeholder.svg?height=64&width=64",
      },
      {
        id: "20124587",
        name: "Peter",
        avatar: "/placeholder.svg?height=64&width=64",
      },
      {
        id: "20124857",
        name: "Mahtew",
        avatar: "/placeholder.svg?height=64&width=64",
      },
    ],
    transactions: [
      {
        id: "25014287",
        name: "William Mardoch",
        image: "/placeholder.svg?height=40&width=40",
        date: "Mar 10, 2020",
        status: "Receive",
        amount: "50.00",
      },
      {
        id: "22154879",
        name: "Jack Dawson",
        image: "/placeholder.svg?height=40&width=40",
        date: "Mar 10, 2020",
        status: "Receive",
        amount: "250.00",
      },
      {
        id: "22154879",
        name: "Mailchimp",
        image: "/placeholder.svg?height=40&width=40",
        date: "Mar 09, 2020",
        status: "Payment",
        amount: "20.00",
        description: "Subscription service",
      },
      {
        id: "22154879",
        name: "Fiverr.inc",
        image: "/placeholder.svg?height=40&width=40",
        date: "Mar 02, 2020",
        status: "Receive",
        amount: "100.00",
        description: "Marketplace payment",
      },
    ],
    upcomingPayments: [
      {
        id: "22154879",
        name: "Facebook Ads",
        image: "/placeholder.svg?height=40&width=40",
        date: "Mar 11, 2020",
        status: "Pending",
        amount: "500.00",
        description: "Ads service",
      },
      {
        id: "22154879",
        name: "Fiverr.inc",
        image: "/placeholder.svg?height=40&width=40",
        date: "Mar 10, 2020",
        status: "Pending",
        amount: "100.00",
        description: "Marketplace payment",
      },
    ],
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
