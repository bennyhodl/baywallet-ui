import { mockMetadata } from "example/mocks"
import React from "react"
import { NostrProfile } from "@baywallet/components"
import { Metadata } from "src/types"

export const Profile = () => {
  return (
    <NostrProfile profile={mockMetadata[1] as Metadata} />
  )
}