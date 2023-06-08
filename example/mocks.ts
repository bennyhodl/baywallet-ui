import { Event } from 'nostr-tools';
import { Metadata } from 'src/nostr';

export const mockEvents: Event[] = [
  {
    kind: 1,
    tags: [
      ['e', '34f45g45g4g24g425g4'],
      ['p', 'q3rfq5g4h4th42t'],
    ],
    content: 'hello bay wallet 🌴',
    created_at: 1686195588,
    pubkey: '34t3n5g24h509gn0945hjg095209h54',
    id: 'wqmo4hnr908q3hgq903h5gq90h5',
    sig: 'kf0934jf093hj40f9h34',
  },
  {
    kind: 1,
    tags: [
      ['e', '34f45g45g4g24g425g4'],
      ['p', 'q3rfq5g4h4th42t'],
    ],
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    created_at: 1686185588,
    pubkey: '34t3n5g24h509gn0945hjg095209h54',
    id: 'wqmo4hnr908q3hgq903h5gq90h5',
    sig: 'kf0934jf093hj40f9h34',
  },
];

export const mockMetadata: Metadata[] = [
  {
    name: 'Bay Wallet',
    username: 'baywallet',
    display_name: 'Bay Wallet',
    picture: 'https://void.cat/d/JmvLC9iEZfkN8hxTJFbXRu.webp',
    banner:
      'https://pbs.twimg.com/profile_banners/1304412280902352896/1677291992/1500x500',
    about: 'tampa is the best city in the us',
    website: 'https://twitter.com/bennyhodl',
    lud06: 'LNfn34ihf300934hng093qb4g093b4g093qg4g3q45g',
    lud16: 'LNfn34ihf300934hng093qb4g093b4g093qg4g3q45g',
    nip05: 'baywallet@bitcoinbay.club',
    pubkey: '43c32ed61a8259ddaef6eb43c1c3114524c09690cbb92c57196b395abf73c527',
  },
  {
    name: 'Gucci Bucket Hat',
    username: 'boobs',
    display_name: 'Gucci Bucket Hat',
    picture:
      'https://pbs.twimg.com/profile_images/1651957557592727553/dEDI-NW4_400x400.jpg',
    banner:
      'https://pbs.twimg.com/profile_banners/1304412280902352896/1677291992/1500x500',
    about: 'tampa is the best city in the us',
    website: 'https://twitter.com/bennyhodl',
    lud06: 'LNfn34ihf300934hng093qb4g093b4g093qg4g3q45g',
    lud16: 'LNfn34ihf300934hng093qb4g093b4g093qg4g3q45g',
    pubkey: '43c32ed61a8259ddaef6eb43c1c3114524c09690cbb92c57196b395abf73c527',
  },
];
