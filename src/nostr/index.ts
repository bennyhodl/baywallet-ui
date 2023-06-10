export * from '../archive/nostr-post';
export * from './nostr-profile';
export * from './post';
/**
 * Expanded Metadata fields
 * damus_donation?: number;
 * badges?: any;
 * reactions?: any;
 * followersCount?: number;
 * webOfTrustScore?: any;
 */
export type Metadata = {
  name?: string;
  username?: string;
  display_name?: string;
  picture?: string;
  banner?: string;
  about?: string;
  website?: string;
  lud06?: string;
  lud16?: string;
  nip05?: string;
  pubkey?: string;
  [key: string]: any;
};
