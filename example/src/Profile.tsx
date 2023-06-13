import { mockMetadata } from "example/mocks"
import React from "react"
import { NostrProfile } from "@baywallet/components"
import { Metadata } from "src/types"

export const Profile = () => {
  return (
    <NostrProfile profile={mockMetadata[0] as Metadata} follow={() => console.log("follow")} followers={632} following={324} relays={9} />
  )
}