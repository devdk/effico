import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  line1?: Maybe<Scalars['String']['output']>;
  line2?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  line1?: InputMaybe<Scalars['String']['input']>;
  line2?: InputMaybe<Scalars['String']['input']>;
  postal_code?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
};

export type Agent = {
  __typename?: 'Agent';
  BroadcastAddress?: Maybe<Scalars['String']['output']>;
  EventID?: Maybe<Scalars['String']['output']>;
  Health?: Maybe<Scalars['String']['output']>;
  Hostname?: Maybe<Scalars['String']['output']>;
  IPAddress?: Maybe<Scalars['String']['output']>;
  IsStreaming?: Maybe<Scalars['Boolean']['output']>;
  LastActive?: Maybe<Scalars['String']['output']>;
  LastError?: Maybe<Scalars['String']['output']>;
  MACAddress?: Maybe<Scalars['String']['output']>;
  OBSStatus?: Maybe<Scalars['String']['output']>;
  OBSVersion?: Maybe<Scalars['String']['output']>;
  OS?: Maybe<Scalars['String']['output']>;
  Region?: Maybe<Scalars['String']['output']>;
  StartTime?: Maybe<Scalars['String']['output']>;
  Tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  UptimeSeconds?: Maybe<Scalars['Int']['output']>;
  VenueID?: Maybe<Scalars['String']['output']>;
  Version?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  raspBroadcastAddress?: Maybe<Scalars['String']['output']>;
  raspEventID?: Maybe<Scalars['String']['output']>;
  raspHealth?: Maybe<Scalars['String']['output']>;
  raspIPAddress?: Maybe<Scalars['String']['output']>;
  raspLastHeartbeat?: Maybe<Scalars['String']['output']>;
  raspServerTime?: Maybe<Scalars['String']['output']>;
  raspStartTime?: Maybe<Scalars['String']['output']>;
  raspTimezone?: Maybe<Scalars['String']['output']>;
  raspUpcomingEvents?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  raspUpcomingStartTimes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  raspUptime?: Maybe<Scalars['Int']['output']>;
  raspVenueID?: Maybe<Scalars['String']['output']>;
  raspVersion?: Maybe<Scalars['String']['output']>;
  serverTime?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  upcomingEvents?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  upcomingStartTimes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type AgentConnection = {
  __typename?: 'AgentConnection';
  items?: Maybe<Array<Maybe<Agent>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type Amount = {
  __typename?: 'Amount';
  cartTotal?: Maybe<Scalars['Int']['output']>;
  discount?: Maybe<Scalars['Int']['output']>;
  shipping?: Maybe<Scalars['Int']['output']>;
  subTotal?: Maybe<Scalars['Int']['output']>;
  tax?: Maybe<Scalars['Int']['output']>;
};

export type AmountInput = {
  cartTotal: Scalars['Int']['input'];
  discount: Scalars['Int']['input'];
  shipping: Scalars['Int']['input'];
  subTotal: Scalars['Int']['input'];
  tax: Scalars['Int']['input'];
};

export type Asset = {
  __typename?: 'Asset';
  assetId: Scalars['String']['output'];
  assetType: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type AssetConnection = {
  __typename?: 'AssetConnection';
  items?: Maybe<Array<Maybe<Asset>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type CartItem = {
  __typename?: 'CartItem';
  productId: Scalars['String']['output'];
  quantity?: Maybe<Scalars['Int']['output']>;
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type ChatRooms = {
  __typename?: 'ChatRooms';
  avatar?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  createdBy: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type ChatRoomsConnection = {
  __typename?: 'ChatRoomsConnection';
  items?: Maybe<Array<Maybe<ChatRooms>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type Comment = {
  __typename?: 'Comment';
  author: Scalars['String']['output'];
  authorDetails?: Maybe<User>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isReply?: Maybe<Scalars['Boolean']['output']>;
  parentId?: Maybe<Scalars['String']['output']>;
  postId: Scalars['String']['output'];
  replies?: Maybe<CommentConnection>;
};

export type CommentRepliesArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  items?: Maybe<Array<Maybe<Comment>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type Contact = {
  __typename?: 'Contact';
  address?: Maybe<Address>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
};

export type ContactInput = {
  address?: InputMaybe<AddressInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CreateAgentInput = {
  BroadcastAddress?: InputMaybe<Scalars['String']['input']>;
  EventID?: InputMaybe<Scalars['String']['input']>;
  Health?: InputMaybe<Scalars['String']['input']>;
  Hostname?: InputMaybe<Scalars['String']['input']>;
  IPAddress?: InputMaybe<Scalars['String']['input']>;
  IsStreaming?: InputMaybe<Scalars['Boolean']['input']>;
  LastActive?: InputMaybe<Scalars['String']['input']>;
  LastError?: InputMaybe<Scalars['String']['input']>;
  MACAddress?: InputMaybe<Scalars['String']['input']>;
  OBSStatus?: InputMaybe<Scalars['String']['input']>;
  OBSVersion?: InputMaybe<Scalars['String']['input']>;
  OS?: InputMaybe<Scalars['String']['input']>;
  Region?: InputMaybe<Scalars['String']['input']>;
  StartTime?: InputMaybe<Scalars['String']['input']>;
  Tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  UptimeSeconds?: InputMaybe<Scalars['Int']['input']>;
  VenueID?: InputMaybe<Scalars['String']['input']>;
  Version?: InputMaybe<Scalars['String']['input']>;
  raspBroadcastAddress?: InputMaybe<Scalars['String']['input']>;
  raspEventID?: InputMaybe<Scalars['String']['input']>;
  raspHealth?: InputMaybe<Scalars['String']['input']>;
  raspIPAddress?: InputMaybe<Scalars['String']['input']>;
  raspLastHeartbeat?: InputMaybe<Scalars['String']['input']>;
  raspServerTime?: InputMaybe<Scalars['String']['input']>;
  raspStartTime?: InputMaybe<Scalars['String']['input']>;
  raspTimezone?: InputMaybe<Scalars['String']['input']>;
  raspUpcomingEvents?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  raspUpcomingStartTimes?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  raspUptime?: InputMaybe<Scalars['Int']['input']>;
  raspVenueID?: InputMaybe<Scalars['String']['input']>;
  raspVersion?: InputMaybe<Scalars['String']['input']>;
  serverTime?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  upcomingEvents?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  upcomingStartTimes?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type CreateAssetInput = {
  assetId: Scalars['String']['input'];
  assetType: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
  ticketId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateChatRoomsInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  createdBy: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type CreateCommentInput = {
  author: Scalars['String']['input'];
  content: Scalars['String']['input'];
  postAuthor: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type CreateDirectMessageInput = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  audio?: InputMaybe<Scalars['String']['input']>;
  content: Scalars['String']['input'];
  dmId: Scalars['String']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  receiverId: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
  status?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateFriendRequestInput = {
  createdAt: Scalars['String']['input'];
  data?: InputMaybe<Scalars['String']['input']>;
  receiver: Scalars['String']['input'];
  sender: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

export type CreateFriendsTableInput = {
  friendId: Scalars['String']['input'];
  notificationId: Scalars['String']['input'];
  requestId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateNotificationInput = {
  content: Scalars['String']['input'];
  createdAt: Scalars['String']['input'];
  read: Scalars['Boolean']['input'];
  receiverId: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateOrderInput = {
  amount: AmountInput;
  buyerID: Scalars['String']['input'];
  cart: Array<InputMaybe<CartItemInput>>;
  paymentID: Scalars['String']['input'];
  status?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateOwnershipInput = {
  sub: Scalars['ID']['input'];
};

export type CreatePaymentInput = {
  amount: Scalars['String']['input'];
  amount_capturable?: InputMaybe<Scalars['String']['input']>;
  amount_details?: InputMaybe<Scalars['String']['input']>;
  amount_received?: InputMaybe<Scalars['String']['input']>;
  application?: InputMaybe<Scalars['String']['input']>;
  application_fee_amount?: InputMaybe<Scalars['String']['input']>;
  automatic_payment_methods?: InputMaybe<Scalars['String']['input']>;
  canceled_at?: InputMaybe<Scalars['String']['input']>;
  cancellation_reason?: InputMaybe<Scalars['String']['input']>;
  capture_method?: InputMaybe<Scalars['String']['input']>;
  client_secret?: InputMaybe<Scalars['String']['input']>;
  confirmation_method?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  customer?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  invoice?: InputMaybe<Scalars['String']['input']>;
  last_payment_error?: InputMaybe<Scalars['String']['input']>;
  latest_charge?: InputMaybe<Scalars['String']['input']>;
  livemode?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<PaymentMetadataInput>;
  next_action?: InputMaybe<Scalars['String']['input']>;
  object?: InputMaybe<Scalars['String']['input']>;
  on_behalf_of?: InputMaybe<Scalars['String']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
  payment_method_options?: InputMaybe<Scalars['String']['input']>;
  payment_method_types?: InputMaybe<Scalars['String']['input']>;
  processing?: InputMaybe<Scalars['String']['input']>;
  receipt_email?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  setup_future_usage?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  statement_descriptor?: InputMaybe<Scalars['String']['input']>;
  statement_descriptor_suffix?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  transfer_data?: InputMaybe<Scalars['String']['input']>;
  transfer_group?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePostInput = {
  author: Scalars['String']['input'];
  comments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content: Scalars['String']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  likes?: InputMaybe<Scalars['Int']['input']>;
  pageId: Scalars['ID']['input'];
};

export type CreatePostLikesInput = {
  author: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type CreatePromocodeInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  amount_off?: InputMaybe<Scalars['Int']['input']>;
  appliesTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['String']['input']>;
  max_redemptions?: InputMaybe<Scalars['Int']['input']>;
  percent_off?: InputMaybe<Scalars['Int']['input']>;
  times_redeemed?: InputMaybe<Scalars['Int']['input']>;
  uniquePerUser?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateRecordingInput = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  livestreamId?: InputMaybe<Scalars['String']['input']>;
  max_resolution_tier?: InputMaybe<Scalars['String']['input']>;
  playback_id?: InputMaybe<Scalars['String']['input']>;
  stageId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  test?: InputMaybe<Scalars['Boolean']['input']>;
  venueId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateStreamConfigurationsInput = {
  creatorID?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<Scalars['String']['input']>;
  playbackURL?: InputMaybe<Scalars['String']['input']>;
  streamID: Scalars['String']['input'];
  streamKey?: InputMaybe<Scalars['String']['input']>;
  streamName?: InputMaybe<Scalars['String']['input']>;
  streamType?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
};

export type CreateStreamRecordingInput = {
  duration?: InputMaybe<Scalars['Float']['input']>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  livestreamId?: InputMaybe<Scalars['String']['input']>;
  max_resolution_tier?: InputMaybe<Scalars['String']['input']>;
  playback_id?: InputMaybe<Scalars['String']['input']>;
  stageId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  test?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  venueId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateSupportTicketInput = {
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  createdAt: Scalars['String']['input'];
  description: Scalars['String']['input'];
  priority?: InputMaybe<Scalars['String']['input']>;
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateUserAssetInput = {
  Android_PAKURL?: InputMaybe<Scalars['String']['input']>;
  AssetOwnerID?: InputMaybe<Scalars['String']['input']>;
  AssetUMAP_Name?: InputMaybe<Scalars['String']['input']>;
  Linux_Dedicated_Server_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Linux_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Mac_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Windows_PAKURL?: InputMaybe<Scalars['String']['input']>;
  accessibility?: InputMaybe<Scalars['String']['input']>;
  assetType: Scalars['String']['input'];
  creatorId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iOS_PAKURL?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  image?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isNFT?: InputMaybe<Scalars['Boolean']['input']>;
  materialsID?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nftURL?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['String']['input'];
  productName: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['String']['input']>;
  umapConfig?: InputMaybe<UmapConfigInput>;
  vendorPageId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateUserInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  gender?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sub: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type CreateVirtuosoAccountRelationshipsInput = {
  DateCreated?: InputMaybe<Scalars['String']['input']>;
  FromCreatorID?: InputMaybe<Scalars['String']['input']>;
  OwnedAssetID?: InputMaybe<Scalars['String']['input']>;
  RelationshipType?: InputMaybe<Scalars['String']['input']>;
  ToCreatorID?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type CreateVirtuosoAccountStatusInput = {
  AccountVisibility?: InputMaybe<Scalars['String']['input']>;
  ActiveDLCID?: InputMaybe<Scalars['String']['input']>;
  ActivePerformer?: InputMaybe<Scalars['String']['input']>;
  ActivePlatform?: InputMaybe<Scalars['String']['input']>;
  ActiveStage?: InputMaybe<Scalars['String']['input']>;
  ChatMode?: InputMaybe<Scalars['String']['input']>;
  CreatorID: Scalars['String']['input'];
  InGameVisibility?: InputMaybe<Scalars['String']['input']>;
  IsOnline?: InputMaybe<Scalars['String']['input']>;
  UserStatus?: InputMaybe<Scalars['String']['input']>;
  VoiceChatChannelD?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVirtuosoActiveServersInput = {
  active_viewers?: InputMaybe<Scalars['String']['input']>;
  awsgamesession?: InputMaybe<Scalars['String']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  port?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  server_id: Scalars['String']['input'];
  server_number?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVirtuosoCreatorsInput = {
  CreatorBio?: InputMaybe<Scalars['String']['input']>;
  CreatorCategory?: InputMaybe<Scalars['String']['input']>;
  CreatorCover?: InputMaybe<Scalars['String']['input']>;
  CreatorGuestlistID?: InputMaybe<Scalars['String']['input']>;
  CreatorImage?: InputMaybe<Scalars['String']['input']>;
  CreatorLocationID?: InputMaybe<Scalars['String']['input']>;
  CreatorName?: InputMaybe<Scalars['String']['input']>;
  CreatorOwnerID?: InputMaybe<Scalars['String']['input']>;
  CreatorStartDate?: InputMaybe<Scalars['String']['input']>;
  CreatorVisibility?: InputMaybe<Scalars['String']['input']>;
  isDeactivated?: InputMaybe<Scalars['Boolean']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateVirtuosoEventsInput = {
  EndTime?: InputMaybe<Scalars['String']['input']>;
  EventCategory?: InputMaybe<Scalars['String']['input']>;
  EventCreatorID?: InputMaybe<Scalars['String']['input']>;
  EventCreatorPageId?: InputMaybe<Scalars['String']['input']>;
  EventDate?: InputMaybe<Scalars['String']['input']>;
  EventDescription?: InputMaybe<Scalars['String']['input']>;
  EventID: Scalars['String']['input'];
  EventImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  EventLineupID?: InputMaybe<Scalars['String']['input']>;
  EventName?: InputMaybe<Scalars['String']['input']>;
  EventOwnerID?: InputMaybe<Scalars['String']['input']>;
  EventTimeCreated?: InputMaybe<Scalars['String']['input']>;
  GuestlistID?: InputMaybe<Scalars['String']['input']>;
  OrganizerID?: InputMaybe<Scalars['String']['input']>;
  PaymentFlowID?: InputMaybe<Scalars['String']['input']>;
  Price?: InputMaybe<Scalars['String']['input']>;
  RealTicketLink?: InputMaybe<Scalars['String']['input']>;
  Replayable?: InputMaybe<Scalars['String']['input']>;
  ServerInstancingEnabled?: InputMaybe<Scalars['String']['input']>;
  ShowAccessVisibility?: InputMaybe<Scalars['String']['input']>;
  SitemapID?: InputMaybe<Scalars['String']['input']>;
  StageStreamMaps?: InputMaybe<Array<InputMaybe<StageStreamMapInput>>>;
  StartTime?: InputMaybe<Scalars['String']['input']>;
  StreamingConfigurationID?: InputMaybe<Scalars['String']['input']>;
  TicketItemID?: InputMaybe<Scalars['String']['input']>;
  VenueID?: InputMaybe<Scalars['String']['input']>;
  VenueLocation?: InputMaybe<Scalars['String']['input']>;
  isEventLive?: InputMaybe<Scalars['Boolean']['input']>;
  isRealEvent?: InputMaybe<Scalars['Boolean']['input']>;
  isRecording?: InputMaybe<Scalars['Boolean']['input']>;
  isVipEntryAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  showCreator?: InputMaybe<Scalars['Boolean']['input']>;
  showOrganizer?: InputMaybe<Scalars['Boolean']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  vipPrice?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVirtuosoInvitationsInput = {
  ActiveServerID?: InputMaybe<Scalars['String']['input']>;
  DateCreated?: InputMaybe<Scalars['String']['input']>;
  EventID?: InputMaybe<Scalars['String']['input']>;
  ExpirationLimit?: InputMaybe<Scalars['String']['input']>;
  FromCreatorID?: InputMaybe<Scalars['String']['input']>;
  InvitationType?: InputMaybe<Scalars['String']['input']>;
  ToCreatorID?: InputMaybe<Scalars['String']['input']>;
  VoiceChatChannelD?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVirtuosoPageFollowInput = {
  pageId: Scalars['String']['input'];
  pageType: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CreateVirtuosoSiteMapsInput = {
  Android_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Linux_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Mac_PAKURL?: InputMaybe<Scalars['String']['input']>;
  SiteMapCreatorID?: InputMaybe<Scalars['String']['input']>;
  SiteMapDateCreated?: InputMaybe<Scalars['String']['input']>;
  SiteMapDescription?: InputMaybe<Scalars['String']['input']>;
  SiteMapGuestlistID?: InputMaybe<Scalars['String']['input']>;
  SiteMapID: Scalars['String']['input'];
  SiteMapImage?: InputMaybe<Scalars['String']['input']>;
  SiteMapName?: InputMaybe<Scalars['String']['input']>;
  SiteMapOwnerID?: InputMaybe<Scalars['String']['input']>;
  SiteMapUMAP_Name?: InputMaybe<Scalars['String']['input']>;
  SiteMapVenueID?: InputMaybe<Scalars['String']['input']>;
  Windows_PAKURL?: InputMaybe<Scalars['String']['input']>;
  iOS_PAKURL?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  umapConfig?: InputMaybe<UmapConfigInput>;
};

export type CreateVirtuosoStagesInput = {
  StageAuthor?: InputMaybe<Scalars['String']['input']>;
  StageCreatorID?: InputMaybe<Scalars['String']['input']>;
  StageDescription?: InputMaybe<Scalars['String']['input']>;
  StageGuestlistID?: InputMaybe<Scalars['String']['input']>;
  StageID: Scalars['String']['input'];
  StageImage?: InputMaybe<Scalars['String']['input']>;
  StageIndex?: InputMaybe<Scalars['String']['input']>;
  StageName?: InputMaybe<Scalars['String']['input']>;
  StageOwnerID?: InputMaybe<Scalars['String']['input']>;
  StageUMAP_Name?: InputMaybe<Scalars['String']['input']>;
  VenueID?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVirtuosoTicketsInput = {
  EventID?: InputMaybe<Scalars['String']['input']>;
  ItemID?: InputMaybe<Scalars['String']['input']>;
  NumberOfTicket?: InputMaybe<Scalars['Int']['input']>;
  PaymentIntentID?: InputMaybe<Scalars['String']['input']>;
  Type?: InputMaybe<Scalars['String']['input']>;
  UserID?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVirtuosoUserAttributesInput = {
  AccountCreationMethod?: InputMaybe<Scalars['String']['input']>;
  AccountVisibility?: InputMaybe<Scalars['String']['input']>;
  ActualName?: InputMaybe<Scalars['String']['input']>;
  AvatarConfiguration?: InputMaybe<Scalars['String']['input']>;
  Bio?: InputMaybe<Scalars['String']['input']>;
  CreatorID: Scalars['String']['input'];
  DateCreated?: InputMaybe<Scalars['String']['input']>;
  DisplayName?: InputMaybe<Scalars['String']['input']>;
  HeaderImage?: InputMaybe<Scalars['String']['input']>;
  LinkedINEnabled?: InputMaybe<Scalars['String']['input']>;
  LinkedINID?: InputMaybe<Scalars['String']['input']>;
  LinkedINVisibility?: InputMaybe<Scalars['String']['input']>;
  MetaMaskEnabled?: InputMaybe<Scalars['String']['input']>;
  MetaMaskID?: InputMaybe<Scalars['String']['input']>;
  MetaMaskVisibility?: InputMaybe<Scalars['String']['input']>;
  ProfilePicture?: InputMaybe<Scalars['String']['input']>;
  TimeCreated?: InputMaybe<Scalars['String']['input']>;
  TwitterEnabled?: InputMaybe<Scalars['String']['input']>;
  TwitterID?: InputMaybe<Scalars['String']['input']>;
  TwitterVisibility?: InputMaybe<Scalars['String']['input']>;
};

export type CreateVirtuosoVendorsInput = {
  GuestlistID?: InputMaybe<Scalars['String']['input']>;
  IsRealWorldVendor?: InputMaybe<Scalars['String']['input']>;
  VendorBio?: InputMaybe<Scalars['String']['input']>;
  VendorCover?: InputMaybe<Scalars['String']['input']>;
  VendorCreatorID?: InputMaybe<Scalars['String']['input']>;
  VendorImage?: InputMaybe<Scalars['String']['input']>;
  VendorName?: InputMaybe<Scalars['String']['input']>;
  VendorOwnerID?: InputMaybe<Scalars['String']['input']>;
  VendorVisibility?: InputMaybe<Scalars['String']['input']>;
  isDeactivated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CreateVirtuosoVenuesInput = {
  Address?: InputMaybe<Scalars['String']['input']>;
  Android_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Bio?: InputMaybe<Scalars['String']['input']>;
  IsRealWorldVenue?: InputMaybe<Scalars['String']['input']>;
  Linux_Dedicated_Server_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Linux_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Mac_PAKURL?: InputMaybe<Scalars['String']['input']>;
  NumberOfStages?: InputMaybe<Scalars['Int']['input']>;
  StageNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  VenueAuthor?: InputMaybe<Scalars['String']['input']>;
  VenueCreatorID?: InputMaybe<Scalars['String']['input']>;
  VenueImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  VenueName?: InputMaybe<Scalars['String']['input']>;
  VenueOwnerID?: InputMaybe<Scalars['String']['input']>;
  VenueProfileCover?: InputMaybe<Scalars['String']['input']>;
  VenueProfileImage?: InputMaybe<Scalars['String']['input']>;
  VenueProfileImages?: InputMaybe<Scalars['String']['input']>;
  VenueTimeCreated?: InputMaybe<Scalars['String']['input']>;
  VenueUMAP_Name?: InputMaybe<Scalars['String']['input']>;
  Windows_PAKURL?: InputMaybe<Scalars['String']['input']>;
  iOS_PAKURL?: InputMaybe<Scalars['String']['input']>;
  isDeactivated?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  umapConfig?: InputMaybe<UmapConfigInput>;
};

export type DeleteAgentInput = {
  id: Scalars['String']['input'];
};

export type DeleteAssetInput = {
  assetType: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type DeleteChatRoomsInput = {
  id: Scalars['ID']['input'];
};

export type DeleteCommentInput = {
  id: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type DeleteDirectMessageInput = {
  id: Scalars['ID']['input'];
};

export type DeleteFriendRequestInput = {
  id: Scalars['ID']['input'];
  notificationId: Scalars['String']['input'];
};

export type DeleteFriendsTableInput = {
  friendId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type DeleteNotificationInput = {
  id: Scalars['ID']['input'];
};

export type DeleteOrderInput = {
  id: Scalars['ID']['input'];
};

export type DeleteOwnershipInput = {
  sub: Scalars['ID']['input'];
};

export type DeletePaymentInput = {
  id: Scalars['ID']['input'];
};

export type DeletePostInput = {
  id: Scalars['ID']['input'];
  pageId: Scalars['String']['input'];
};

export type DeletePostLikesInput = {
  author: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type DeletePromocodeInput = {
  id: Scalars['ID']['input'];
};

export type DeleteRecordingInput = {
  id: Scalars['ID']['input'];
};

export type DeleteStreamConfigurationsInput = {
  streamID: Scalars['String']['input'];
};

export type DeleteStreamRecordingInput = {
  id: Scalars['ID']['input'];
};

export type DeleteSupportTicketInput = {
  id: Scalars['ID']['input'];
};

export type DeleteUserAssetInput = {
  id: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type DeleteUserInput = {
  createdAt: Scalars['String']['input'];
  sub: Scalars['String']['input'];
};

export type DeleteVirtuosoAccountRelationshipsInput = {
  id: Scalars['String']['input'];
};

export type DeleteVirtuosoAccountStatusInput = {
  CreatorID: Scalars['String']['input'];
};

export type DeleteVirtuosoActiveServersInput = {
  server_id: Scalars['String']['input'];
};

export type DeleteVirtuosoCitiesInput = {
  city_id: Scalars['String']['input'];
};

export type DeleteVirtuosoCreatorsInput = {
  CreatorID: Scalars['String']['input'];
};

export type DeleteVirtuosoEventsInput = {
  EventID: Scalars['String']['input'];
};

export type DeleteVirtuosoInvitationsInput = {
  id: Scalars['String']['input'];
};

export type DeleteVirtuosoItemsInput = {
  ItemID: Scalars['Int']['input'];
};

export type DeleteVirtuosoPageFollowInput = {
  pageId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type DeleteVirtuosoSiteMapsInput = {
  SiteMapID: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type DeleteVirtuosoStagesInput = {
  StageID: Scalars['String']['input'];
};

export type DeleteVirtuosoTicketsInput = {
  TicketID: Scalars['ID']['input'];
};

export type DeleteVirtuosoUserAttributesInput = {
  CreatorID: Scalars['String']['input'];
};

export type DeleteVirtuosoVendorsInput = {
  VendorID: Scalars['String']['input'];
};

export type DeleteVirtuosoVenuesInput = {
  VenueID: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type DirectMessage = {
  __typename?: 'DirectMessage';
  attachments?: Maybe<Array<Scalars['String']['output']>>;
  audio?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  dmId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  reactions?: Maybe<Array<Scalars['String']['output']>>;
  receiverId: Scalars['String']['output'];
  reported?: Maybe<Scalars['Boolean']['output']>;
  sender: User;
  senderId: Scalars['String']['output'];
  status?: Maybe<Scalars['Int']['output']>;
};

export type DirectMessageConnection = {
  __typename?: 'DirectMessageConnection';
  items?: Maybe<Array<Maybe<DirectMessage>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type FriendRequest = {
  __typename?: 'FriendRequest';
  createdAt: Scalars['String']['output'];
  data?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  receiverId: Scalars['String']['output'];
  senderId: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type FriendRequestConnection = {
  __typename?: 'FriendRequestConnection';
  items?: Maybe<Array<Maybe<FriendRequest>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type FriendsTable = {
  __typename?: 'FriendsTable';
  createdAt: Scalars['String']['output'];
  friendDetails?: Maybe<User>;
  friendId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type FriendsTableConnection = {
  __typename?: 'FriendsTableConnection';
  items?: Maybe<Array<Maybe<FriendsTable>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAgent?: Maybe<Agent>;
  createAsset?: Maybe<Asset>;
  createChatRooms?: Maybe<ChatRooms>;
  createComment?: Maybe<Comment>;
  createDirectMessage?: Maybe<DirectMessage>;
  createFriendRequest?: Maybe<FriendRequest>;
  createFriendsTable?: Maybe<FriendsTable>;
  createNotification?: Maybe<Notification>;
  createOrder?: Maybe<Order>;
  createOwnership?: Maybe<Ownership>;
  createPayment?: Maybe<Payment>;
  createPost?: Maybe<Post>;
  createPostLikes?: Maybe<PostLikes>;
  createPromocode?: Maybe<Promocode>;
  createRecording?: Maybe<Recording>;
  createStreamConfigurations?: Maybe<StreamConfigurations>;
  createStreamRecording?: Maybe<StreamRecording>;
  createSupportTicket?: Maybe<SupportTicket>;
  createUser?: Maybe<User>;
  createUserAsset?: Maybe<UserAsset>;
  createVirtuosoAccountRelationships?: Maybe<VirtuosoAccountRelationships>;
  createVirtuosoAccountStatus?: Maybe<VirtuosoAccountStatus>;
  createVirtuosoActiveServers?: Maybe<VirtuosoActiveServers>;
  createVirtuosoCreators?: Maybe<VirtuosoCreators>;
  createVirtuosoEvents?: Maybe<VirtuosoEvents>;
  createVirtuosoInvitations?: Maybe<VirtuosoInvitations>;
  createVirtuosoPageFollow?: Maybe<VirtuosoPageFollow>;
  createVirtuosoSiteMaps?: Maybe<VirtuosoSiteMaps>;
  createVirtuosoStages?: Maybe<VirtuosoStages>;
  createVirtuosoTickets?: Maybe<VirtuosoTickets>;
  createVirtuosoUserAttributes?: Maybe<VirtuosoUserAttributes>;
  createVirtuosoVendors?: Maybe<VirtuosoVendors>;
  createVirtuosoVenues?: Maybe<VirtuosoVenues>;
  deleteAgent?: Maybe<Agent>;
  deleteAsset?: Maybe<Asset>;
  deleteChatRooms?: Maybe<ChatRooms>;
  deleteComment?: Maybe<Comment>;
  deleteDirectMessage?: Maybe<DirectMessage>;
  deleteFriendRequest?: Maybe<FriendRequest>;
  deleteFriendsTable?: Maybe<FriendsTable>;
  deleteNotification?: Maybe<Notification>;
  deleteOrder?: Maybe<Order>;
  deleteOwnership?: Maybe<Ownership>;
  deletePayment?: Maybe<Payment>;
  deletePost?: Maybe<Post>;
  deletePostLikes?: Maybe<PostLikes>;
  deletePromocode?: Maybe<Promocode>;
  deleteRecording?: Maybe<Recording>;
  deleteStreamConfigurations?: Maybe<StreamConfigurations>;
  deleteStreamRecording?: Maybe<StreamRecording>;
  deleteSupportTicket?: Maybe<SupportTicket>;
  deleteUser?: Maybe<User>;
  deleteUserAsset?: Maybe<UserAsset>;
  deleteVirtuosoAccountRelationships?: Maybe<VirtuosoAccountRelationships>;
  deleteVirtuosoAccountStatus?: Maybe<VirtuosoAccountStatus>;
  deleteVirtuosoActiveServers?: Maybe<VirtuosoActiveServers>;
  deleteVirtuosoCreators?: Maybe<VirtuosoCreators>;
  deleteVirtuosoEvents?: Maybe<VirtuosoEvents>;
  deleteVirtuosoInvitations?: Maybe<VirtuosoInvitations>;
  deleteVirtuosoPageFollow?: Maybe<VirtuosoPageFollow>;
  deleteVirtuosoSiteMaps?: Maybe<VirtuosoSiteMaps>;
  deleteVirtuosoStages?: Maybe<VirtuosoStages>;
  deleteVirtuosoTickets?: Maybe<VirtuosoTickets>;
  deleteVirtuosoUserAttributes?: Maybe<VirtuosoUserAttributes>;
  deleteVirtuosoVendors?: Maybe<VirtuosoVendors>;
  deleteVirtuosoVenues?: Maybe<VirtuosoVenues>;
  replyOnAComment?: Maybe<Comment>;
  sendFriendRequest?: Maybe<Notification>;
  updateAgent?: Maybe<Agent>;
  updateAsset?: Maybe<Asset>;
  updateChatRooms?: Maybe<ChatRooms>;
  updateComment?: Maybe<Comment>;
  updateDirectMessage?: Maybe<DirectMessage>;
  updateFriendRequest?: Maybe<FriendRequest>;
  updateFriendsTable?: Maybe<FriendsTable>;
  updateNotification?: Maybe<Notification>;
  updateOrder?: Maybe<Order>;
  updateOwnership?: Maybe<Ownership>;
  updatePayment?: Maybe<Payment>;
  updatePost?: Maybe<Post>;
  updatePostLikes?: Maybe<PostLikes>;
  updatePromocode?: Maybe<Promocode>;
  updateRecording?: Maybe<Recording>;
  updateStreamConfigurations?: Maybe<StreamConfigurations>;
  updateStreamRecording?: Maybe<StreamRecording>;
  updateSupportTicket?: Maybe<SupportTicket>;
  updateUser?: Maybe<User>;
  updateUserAsset?: Maybe<UserAsset>;
  updateVirtuosoAccountRelationships?: Maybe<VirtuosoAccountRelationships>;
  updateVirtuosoAccountStatus?: Maybe<VirtuosoAccountStatus>;
  updateVirtuosoActiveServers?: Maybe<VirtuosoActiveServers>;
  updateVirtuosoCreators?: Maybe<VirtuosoCreators>;
  updateVirtuosoEvents?: Maybe<VirtuosoEvents>;
  updateVirtuosoInvitations?: Maybe<VirtuosoInvitations>;
  updateVirtuosoSiteMaps?: Maybe<VirtuosoSiteMaps>;
  updateVirtuosoStages?: Maybe<VirtuosoStages>;
  updateVirtuosoTickets?: Maybe<VirtuosoTickets>;
  updateVirtuosoUserAttributes?: Maybe<VirtuosoUserAttributes>;
  updateVirtuosoVendors?: Maybe<VirtuosoVendors>;
  updateVirtuosoVenues?: Maybe<VirtuosoVenues>;
};

export type MutationCreateAgentArgs = {
  input: CreateAgentInput;
};

export type MutationCreateAssetArgs = {
  input: CreateAssetInput;
};

export type MutationCreateChatRoomsArgs = {
  input: CreateChatRoomsInput;
};

export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};

export type MutationCreateDirectMessageArgs = {
  input: CreateDirectMessageInput;
};

export type MutationCreateFriendRequestArgs = {
  input: CreateFriendRequestInput;
};

export type MutationCreateFriendsTableArgs = {
  input: CreateFriendsTableInput;
};

export type MutationCreateNotificationArgs = {
  input: CreateNotificationInput;
};

export type MutationCreateOrderArgs = {
  input: CreateOrderInput;
};

export type MutationCreateOwnershipArgs = {
  input: CreateOwnershipInput;
};

export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput;
};

export type MutationCreatePostArgs = {
  input: CreatePostInput;
};

export type MutationCreatePostLikesArgs = {
  input: CreatePostLikesInput;
};

export type MutationCreatePromocodeArgs = {
  input: CreatePromocodeInput;
};

export type MutationCreateRecordingArgs = {
  input: CreateRecordingInput;
};

export type MutationCreateStreamConfigurationsArgs = {
  input: CreateStreamConfigurationsInput;
};

export type MutationCreateStreamRecordingArgs = {
  input: CreateStreamRecordingInput;
};

export type MutationCreateSupportTicketArgs = {
  input: CreateSupportTicketInput;
};

export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type MutationCreateUserAssetArgs = {
  input: CreateUserAssetInput;
};

export type MutationCreateVirtuosoAccountRelationshipsArgs = {
  input: CreateVirtuosoAccountRelationshipsInput;
};

export type MutationCreateVirtuosoAccountStatusArgs = {
  input: CreateVirtuosoAccountStatusInput;
};

export type MutationCreateVirtuosoActiveServersArgs = {
  input: CreateVirtuosoActiveServersInput;
};

export type MutationCreateVirtuosoCreatorsArgs = {
  input: CreateVirtuosoCreatorsInput;
};

export type MutationCreateVirtuosoEventsArgs = {
  input: CreateVirtuosoEventsInput;
};

export type MutationCreateVirtuosoInvitationsArgs = {
  input: CreateVirtuosoInvitationsInput;
};

export type MutationCreateVirtuosoPageFollowArgs = {
  input: CreateVirtuosoPageFollowInput;
};

export type MutationCreateVirtuosoSiteMapsArgs = {
  input: CreateVirtuosoSiteMapsInput;
};

export type MutationCreateVirtuosoStagesArgs = {
  input: CreateVirtuosoStagesInput;
};

export type MutationCreateVirtuosoTicketsArgs = {
  input: CreateVirtuosoTicketsInput;
};

export type MutationCreateVirtuosoUserAttributesArgs = {
  input: CreateVirtuosoUserAttributesInput;
};

export type MutationCreateVirtuosoVendorsArgs = {
  input: CreateVirtuosoVendorsInput;
};

export type MutationCreateVirtuosoVenuesArgs = {
  input: CreateVirtuosoVenuesInput;
};

export type MutationDeleteAgentArgs = {
  input: DeleteAgentInput;
};

export type MutationDeleteAssetArgs = {
  input: DeleteAssetInput;
};

export type MutationDeleteChatRoomsArgs = {
  input: DeleteChatRoomsInput;
};

export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};

export type MutationDeleteDirectMessageArgs = {
  input: DeleteDirectMessageInput;
};

export type MutationDeleteFriendRequestArgs = {
  input: DeleteFriendRequestInput;
};

export type MutationDeleteFriendsTableArgs = {
  input: DeleteFriendsTableInput;
};

export type MutationDeleteNotificationArgs = {
  input: DeleteNotificationInput;
};

export type MutationDeleteOrderArgs = {
  input: DeleteOrderInput;
};

export type MutationDeleteOwnershipArgs = {
  input: DeleteOwnershipInput;
};

export type MutationDeletePaymentArgs = {
  input: DeletePaymentInput;
};

export type MutationDeletePostArgs = {
  input: DeletePostInput;
};

export type MutationDeletePostLikesArgs = {
  input: DeletePostLikesInput;
};

export type MutationDeletePromocodeArgs = {
  input: DeletePromocodeInput;
};

export type MutationDeleteRecordingArgs = {
  input: DeleteRecordingInput;
};

export type MutationDeleteStreamConfigurationsArgs = {
  input: DeleteStreamConfigurationsInput;
};

export type MutationDeleteStreamRecordingArgs = {
  input: DeleteStreamRecordingInput;
};

export type MutationDeleteSupportTicketArgs = {
  input: DeleteSupportTicketInput;
};

export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};

export type MutationDeleteUserAssetArgs = {
  input: DeleteUserAssetInput;
};

export type MutationDeleteVirtuosoAccountRelationshipsArgs = {
  input: DeleteVirtuosoAccountRelationshipsInput;
};

export type MutationDeleteVirtuosoAccountStatusArgs = {
  input: DeleteVirtuosoAccountStatusInput;
};

export type MutationDeleteVirtuosoActiveServersArgs = {
  input: DeleteVirtuosoActiveServersInput;
};

export type MutationDeleteVirtuosoCreatorsArgs = {
  input: DeleteVirtuosoCreatorsInput;
};

export type MutationDeleteVirtuosoEventsArgs = {
  input: DeleteVirtuosoEventsInput;
};

export type MutationDeleteVirtuosoInvitationsArgs = {
  input: DeleteVirtuosoInvitationsInput;
};

export type MutationDeleteVirtuosoPageFollowArgs = {
  input: DeleteVirtuosoPageFollowInput;
};

export type MutationDeleteVirtuosoSiteMapsArgs = {
  input: DeleteVirtuosoSiteMapsInput;
};

export type MutationDeleteVirtuosoStagesArgs = {
  input: DeleteVirtuosoStagesInput;
};

export type MutationDeleteVirtuosoTicketsArgs = {
  input: DeleteVirtuosoTicketsInput;
};

export type MutationDeleteVirtuosoUserAttributesArgs = {
  input: DeleteVirtuosoUserAttributesInput;
};

export type MutationDeleteVirtuosoVendorsArgs = {
  input: DeleteVirtuosoVendorsInput;
};

export type MutationDeleteVirtuosoVenuesArgs = {
  input: DeleteVirtuosoVenuesInput;
};

export type MutationReplyOnACommentArgs = {
  input: ReplyOnCommentInput;
};

export type MutationSendFriendRequestArgs = {
  input: SendFriendRequestInput;
};

export type MutationUpdateAgentArgs = {
  input: UpdateAgentInput;
};

export type MutationUpdateAssetArgs = {
  input: UpdateAssetInput;
};

export type MutationUpdateChatRoomsArgs = {
  input: UpdateChatRoomsInput;
};

export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};

export type MutationUpdateDirectMessageArgs = {
  input: UpdateDirectMessageInput;
};

export type MutationUpdateFriendRequestArgs = {
  input: UpdateFriendRequestInput;
};

export type MutationUpdateFriendsTableArgs = {
  input: UpdateFriendsTableInput;
};

export type MutationUpdateNotificationArgs = {
  input: UpdateNotificationInput;
};

export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput;
};

export type MutationUpdateOwnershipArgs = {
  input: UpdateOwnershipInput;
};

export type MutationUpdatePaymentArgs = {
  input: UpdatePaymentInput;
};

export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};

export type MutationUpdatePostLikesArgs = {
  input: UpdatePostLikesInput;
};

export type MutationUpdatePromocodeArgs = {
  input: UpdatePromocodeInput;
};

export type MutationUpdateRecordingArgs = {
  input: UpdateRecordingInput;
};

export type MutationUpdateStreamConfigurationsArgs = {
  input: UpdateStreamConfigurationsInput;
};

export type MutationUpdateStreamRecordingArgs = {
  input: UpdateStreamRecordingInput;
};

export type MutationUpdateSupportTicketArgs = {
  input: UpdateSupportTicketInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type MutationUpdateUserAssetArgs = {
  input: UpdateUserAssetInput;
};

export type MutationUpdateVirtuosoAccountRelationshipsArgs = {
  input: UpdateVirtuosoAccountRelationshipsInput;
};

export type MutationUpdateVirtuosoAccountStatusArgs = {
  input: UpdateVirtuosoAccountStatusInput;
};

export type MutationUpdateVirtuosoActiveServersArgs = {
  input: UpdateVirtuosoActiveServersInput;
};

export type MutationUpdateVirtuosoCreatorsArgs = {
  input: UpdateVirtuosoCreatorsInput;
};

export type MutationUpdateVirtuosoEventsArgs = {
  input: UpdateVirtuosoEventsInput;
};

export type MutationUpdateVirtuosoInvitationsArgs = {
  input: UpdateVirtuosoInvitationsInput;
};

export type MutationUpdateVirtuosoSiteMapsArgs = {
  input: UpdateVirtuosoSiteMapsInput;
};

export type MutationUpdateVirtuosoStagesArgs = {
  input: UpdateVirtuosoStagesInput;
};

export type MutationUpdateVirtuosoTicketsArgs = {
  input: UpdateVirtuosoTicketsInput;
};

export type MutationUpdateVirtuosoUserAttributesArgs = {
  input: UpdateVirtuosoUserAttributesInput;
};

export type MutationUpdateVirtuosoVendorsArgs = {
  input: UpdateVirtuosoVendorsInput;
};

export type MutationUpdateVirtuosoVenuesArgs = {
  input: UpdateVirtuosoVenuesInput;
};

export type Notification = {
  __typename?: 'Notification';
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  postId?: Maybe<Scalars['String']['output']>;
  read: Scalars['Boolean']['output'];
  receiverId: Scalars['String']['output'];
  requestId?: Maybe<Scalars['String']['output']>;
  sender?: Maybe<User>;
  senderId: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  items?: Maybe<Array<Maybe<Notification>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type Order = {
  __typename?: 'Order';
  amount: Amount;
  buyer?: Maybe<User>;
  buyerID: Scalars['String']['output'];
  cart: Array<Maybe<CartItem>>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  payment?: Maybe<Payment>;
  paymentID: Scalars['String']['output'];
  promocode?: Maybe<Promocode>;
  promocodeID?: Maybe<Scalars['String']['output']>;
  purchases?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  items?: Maybe<Array<Maybe<Order>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type Ownership = {
  __typename?: 'Ownership';
  avatarClothing?: Maybe<UserAssetConnection>;
  inGameItems?: Maybe<UserAssetConnection>;
  sitemaps?: Maybe<VirtuosoSiteMapsConnection>;
  stages?: Maybe<UserAssetConnection>;
  sub: Scalars['ID']['output'];
  tickets?: Maybe<VirtuosoTicketsConnection>;
  venues?: Maybe<VirtuosoVenuesConnection>;
};

export type OwnershipConnection = {
  __typename?: 'OwnershipConnection';
  items?: Maybe<Array<Maybe<Ownership>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['String']['output'];
  amount_capturable?: Maybe<Scalars['String']['output']>;
  amount_details?: Maybe<Scalars['String']['output']>;
  amount_received?: Maybe<Scalars['String']['output']>;
  application?: Maybe<Scalars['String']['output']>;
  application_fee_amount?: Maybe<Scalars['String']['output']>;
  automatic_payment_methods?: Maybe<Scalars['String']['output']>;
  canceled_at?: Maybe<Scalars['String']['output']>;
  cancellation_reason?: Maybe<Scalars['String']['output']>;
  capture_method?: Maybe<Scalars['String']['output']>;
  client_secret?: Maybe<Scalars['String']['output']>;
  confirmation_method?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['String']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  customer?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invoice?: Maybe<Scalars['String']['output']>;
  last_payment_error?: Maybe<Scalars['String']['output']>;
  latest_charge?: Maybe<Scalars['String']['output']>;
  livemode?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<PaymentMetadata>;
  next_action?: Maybe<Scalars['String']['output']>;
  object?: Maybe<Scalars['String']['output']>;
  on_behalf_of?: Maybe<Scalars['String']['output']>;
  payment_method?: Maybe<Scalars['String']['output']>;
  payment_method_options?: Maybe<Scalars['String']['output']>;
  payment_method_types?: Maybe<Scalars['String']['output']>;
  processing?: Maybe<Scalars['String']['output']>;
  receipt_email?: Maybe<Scalars['String']['output']>;
  review?: Maybe<Scalars['String']['output']>;
  setup_future_usage?: Maybe<Scalars['String']['output']>;
  shipping?: Maybe<Scalars['String']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  statement_descriptor?: Maybe<Scalars['String']['output']>;
  statement_descriptor_suffix?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  transfer_data?: Maybe<Scalars['String']['output']>;
  transfer_group?: Maybe<Scalars['String']['output']>;
};

export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  items?: Maybe<Array<Maybe<Payment>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type PaymentMetadata = {
  __typename?: 'PaymentMetadata';
  assetID?: Maybe<Scalars['String']['output']>;
  assetType?: Maybe<Scalars['String']['output']>;
  cartTotal: Scalars['Int']['output'];
  discount?: Maybe<Scalars['Int']['output']>;
  order: Scalars['ID']['output'];
  promocode?: Maybe<Promocode>;
  promocodeId?: Maybe<Scalars['String']['output']>;
  shippingCharge?: Maybe<Scalars['Int']['output']>;
  subTotal: Scalars['Int']['output'];
  taxId: Scalars['String']['output'];
  tax_amount?: Maybe<Scalars['Int']['output']>;
  times_redeemed?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['ID']['output'];
};

export type PaymentMetadataInput = {
  assetID?: InputMaybe<Scalars['String']['input']>;
  assetType?: InputMaybe<Scalars['String']['input']>;
  cartTotal: Scalars['Int']['input'];
  discount?: InputMaybe<Scalars['Int']['input']>;
  order: Scalars['ID']['input'];
  promocodeId?: InputMaybe<Scalars['String']['input']>;
  shippingCharge?: InputMaybe<Scalars['Int']['input']>;
  subTotal: Scalars['Int']['input'];
  taxId: Scalars['String']['input'];
  tax_amount: Scalars['Int']['input'];
  times_redeemed?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type Post = {
  __typename?: 'Post';
  author: Scalars['String']['output'];
  authorDetails?: Maybe<User>;
  comments?: Maybe<CommentConnection>;
  commentsCount?: Maybe<Scalars['Int']['output']>;
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['String']['output']>;
  creatorPage?: Maybe<VirtuosoCreators>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  isLikedByUser?: Maybe<Scalars['Boolean']['output']>;
  likes?: Maybe<Array<Maybe<PostLikes>>>;
  likesCount?: Maybe<Scalars['Int']['output']>;
  pageId: Scalars['ID']['output'];
  shares?: Maybe<Scalars['Int']['output']>;
  topComments?: Maybe<CommentConnection>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  venuePage?: Maybe<VirtuosoVenues>;
};

export type PostCommentsArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostIsLikedByUserArgs = {
  userId: Scalars['String']['input'];
};

export type PostConnection = {
  __typename?: 'PostConnection';
  items?: Maybe<Array<Maybe<Post>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type PostLikes = {
  __typename?: 'PostLikes';
  author: Scalars['String']['output'];
  authorDetails?: Maybe<User>;
  createdAt?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  postId: Scalars['String']['output'];
};

export type PostLikesConnection = {
  __typename?: 'PostLikesConnection';
  items?: Maybe<Array<Maybe<PostLikes>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type Promocode = {
  __typename?: 'Promocode';
  active?: Maybe<Scalars['Boolean']['output']>;
  amount_off?: Maybe<Scalars['Int']['output']>;
  appliesTo?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  code?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  max_redemptions?: Maybe<Scalars['Int']['output']>;
  percent_off?: Maybe<Scalars['Int']['output']>;
  times_redeemed?: Maybe<Scalars['Int']['output']>;
  uniquePerUser?: Maybe<Scalars['Boolean']['output']>;
};

export type PromocodeConnection = {
  __typename?: 'PromocodeConnection';
  items?: Maybe<Array<Maybe<Promocode>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  batchGetUserAssets?: Maybe<Array<Maybe<UserAsset>>>;
  getAgent?: Maybe<Agent>;
  getAsset?: Maybe<Asset>;
  getChatRooms?: Maybe<ChatRooms>;
  getComment?: Maybe<Comment>;
  getDirectMessage?: Maybe<DirectMessage>;
  getFriendRequest?: Maybe<FriendRequest>;
  getFriendsTable?: Maybe<FriendsTable>;
  getNotification?: Maybe<Notification>;
  getOrder?: Maybe<Order>;
  getOwnership?: Maybe<Ownership>;
  getPayment?: Maybe<Payment>;
  getPost?: Maybe<Post>;
  getPostById?: Maybe<PostConnection>;
  getPostLikes?: Maybe<PostLikes>;
  getPromocode?: Maybe<Promocode>;
  getRecording?: Maybe<Recording>;
  getStreamConfigurations?: Maybe<StreamConfigurations>;
  getStreamRecording?: Maybe<StreamRecording>;
  getStreamRecordingsByStage?: Maybe<StreamRecordingConnection>;
  getStreamsByStage?: Maybe<StreamConfigurationsConnection>;
  getSupportTicket?: Maybe<SupportTicket>;
  getUser?: Maybe<User>;
  getUserAsset?: Maybe<UserAsset>;
  getUserByEmail?: Maybe<Array<Maybe<User>>>;
  getVirtuosoAccountRelationships?: Maybe<VirtuosoAccountRelationships>;
  getVirtuosoAccountStatus?: Maybe<VirtuosoAccountStatus>;
  getVirtuosoActiveServers?: Maybe<VirtuosoActiveServers>;
  getVirtuosoCreators?: Maybe<VirtuosoCreators>;
  getVirtuosoEvents?: Maybe<VirtuosoEvents>;
  getVirtuosoInvitations?: Maybe<VirtuosoInvitations>;
  getVirtuosoPageFollow?: Maybe<VirtuosoPageFollow>;
  getVirtuosoSiteMaps?: Maybe<VirtuosoSiteMaps>;
  getVirtuosoStages?: Maybe<VirtuosoStages>;
  getVirtuosoTickets?: Maybe<VirtuosoTickets>;
  getVirtuosoUserAttributes?: Maybe<VirtuosoUserAttributes>;
  getVirtuosoVendors?: Maybe<VirtuosoVendors>;
  getVirtuosoVenues?: Maybe<VirtuosoVenues>;
  listAgents?: Maybe<AgentConnection>;
  listAssets?: Maybe<AssetConnection>;
  listChatRooms?: Maybe<ChatRoomsConnection>;
  listComments?: Maybe<CommentConnection>;
  listCommentsOnAPost?: Maybe<CommentConnection>;
  listDirectMessages?: Maybe<DirectMessageConnection>;
  listFriendRequests?: Maybe<FriendRequestConnection>;
  listFriendsTables?: Maybe<FriendsTableConnection>;
  listNotifications?: Maybe<NotificationConnection>;
  listOrders?: Maybe<OrderConnection>;
  listOwnerships?: Maybe<OwnershipConnection>;
  listPayments?: Maybe<PaymentConnection>;
  listPostLikes?: Maybe<PostLikesConnection>;
  listPosts?: Maybe<PostConnection>;
  listPostsByAuthor?: Maybe<PostConnection>;
  listPromocodes?: Maybe<PromocodeConnection>;
  listRecordings?: Maybe<RecordingConnection>;
  listStreamConfigurations?: Maybe<StreamConfigurationsConnection>;
  listStreamRecordings?: Maybe<StreamRecordingConnection>;
  listSupportTickets?: Maybe<SupportTicketConnection>;
  listUserAssets?: Maybe<UserAssetConnection>;
  listUserNotifications?: Maybe<NotificationConnection>;
  listUsers?: Maybe<UserConnection>;
  listVirtuosoAccountRelationships?: Maybe<VirtuosoAccountRelationshipsConnection>;
  listVirtuosoAccountStatuses?: Maybe<VirtuosoAccountStatusConnection>;
  listVirtuosoActiveServers?: Maybe<VirtuosoActiveServersConnection>;
  listVirtuosoCreators?: Maybe<VirtuosoCreatorsConnection>;
  listVirtuosoEvents?: Maybe<VirtuosoEventsConnection>;
  listVirtuosoInvitations?: Maybe<VirtuosoInvitationsConnection>;
  listVirtuosoPageFollows?: Maybe<VirtuosoPageFollowConnection>;
  listVirtuosoSiteMaps?: Maybe<VirtuosoSiteMapsConnection>;
  listVirtuosoSiteMapsByVenueID?: Maybe<VirtuosoSiteMapsConnection>;
  listVirtuosoStages?: Maybe<VirtuosoStagesConnection>;
  listVirtuosoTickets?: Maybe<VirtuosoTicketsConnection>;
  listVirtuosoUserAttributes?: Maybe<VirtuosoUserAttributesConnection>;
  listVirtuosoVendors?: Maybe<VirtuosoVendorsConnection>;
  listVirtuosoVenues?: Maybe<VirtuosoVenuesConnection>;
};

export type QueryBatchGetUserAssetsArgs = {
  ids: Array<Scalars['String']['input']>;
};

export type QueryGetAgentArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetAssetArgs = {
  assetType: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type QueryGetChatRoomsArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetCommentArgs = {
  id: Scalars['ID']['input'];
  postId: Scalars['String']['input'];
};

export type QueryGetDirectMessageArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetFriendRequestArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetFriendsTableArgs = {
  friendId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type QueryGetNotificationArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetOrderArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetOwnershipArgs = {
  sub: Scalars['ID']['input'];
};

export type QueryGetPaymentArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetPostArgs = {
  id: Scalars['ID']['input'];
  pageId: Scalars['String']['input'];
};

export type QueryGetPostByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetPostLikesArgs = {
  id: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type QueryGetPromocodeArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetRecordingArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetStreamConfigurationsArgs = {
  streamID: Scalars['String']['input'];
};

export type QueryGetStreamRecordingArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetStreamRecordingsByStageArgs = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  stageId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetStreamsByStageArgs = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  stageId?: InputMaybe<Scalars['String']['input']>;
};

export type QueryGetSupportTicketArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetUserArgs = {
  sub: Scalars['String']['input'];
};

export type QueryGetUserAssetArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetUserByEmailArgs = {
  email: Scalars['String']['input'];
};

export type QueryGetVirtuosoAccountRelationshipsArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetVirtuosoAccountStatusArgs = {
  CreatorID: Scalars['String']['input'];
};

export type QueryGetVirtuosoActiveServersArgs = {
  server_id: Scalars['String']['input'];
};

export type QueryGetVirtuosoCreatorsArgs = {
  CreatorID: Scalars['String']['input'];
};

export type QueryGetVirtuosoEventsArgs = {
  EventID: Scalars['String']['input'];
};

export type QueryGetVirtuosoInvitationsArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetVirtuosoPageFollowArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetVirtuosoSiteMapsArgs = {
  SiteMapID: Scalars['String']['input'];
};

export type QueryGetVirtuosoStagesArgs = {
  StageID: Scalars['String']['input'];
};

export type QueryGetVirtuosoTicketsArgs = {
  TicketID: Scalars['ID']['input'];
};

export type QueryGetVirtuosoUserAttributesArgs = {
  CreatorID: Scalars['String']['input'];
};

export type QueryGetVirtuosoVendorsArgs = {
  VendorID: Scalars['String']['input'];
};

export type QueryGetVirtuosoVenuesArgs = {
  VenueID: Scalars['String']['input'];
};

export type QueryListAgentsArgs = {
  filter?: InputMaybe<TableAgentFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListAssetsArgs = {
  filter?: InputMaybe<TableAssetFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListChatRoomsArgs = {
  filter?: InputMaybe<TableChatRoomsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListCommentsArgs = {
  filter?: InputMaybe<TableCommentFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListCommentsOnAPostArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['ID']['input'];
};

export type QueryListDirectMessagesArgs = {
  dmId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListFriendRequestsArgs = {
  filter?: InputMaybe<TableFriendRequestFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListFriendsTablesArgs = {
  filter?: InputMaybe<TableFriendsTableFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListNotificationsArgs = {
  filter?: InputMaybe<TableNotificationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListOrdersArgs = {
  filter?: InputMaybe<TableOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListOwnershipsArgs = {
  filter?: InputMaybe<TableOwnershipFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListPaymentsArgs = {
  filter?: InputMaybe<TablePaymentFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListPostLikesArgs = {
  filter?: InputMaybe<TablePostLikesFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListPostsArgs = {
  filter?: InputMaybe<TablePostFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListPostsByAuthorArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
  author: Scalars['ID']['input'];
};

export type QueryListPromocodesArgs = {
  filter?: InputMaybe<TablePromocodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListRecordingsArgs = {
  filter?: InputMaybe<TableRecordingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListStreamConfigurationsArgs = {
  filter?: InputMaybe<TableStreamConfigurationsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListStreamRecordingsArgs = {
  filter?: InputMaybe<TableStreamRecordingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListSupportTicketsArgs = {
  filter?: InputMaybe<TableSupportTicketFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListUserAssetsArgs = {
  filter?: InputMaybe<TableUserAssetFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListUserNotificationsArgs = {
  sub: Scalars['String']['input'];
};

export type QueryListUsersArgs = {
  filter?: InputMaybe<TableUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListVirtuosoAccountRelationshipsArgs = {
  filter?: InputMaybe<TableVirtuosoAccountRelationshipsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListVirtuosoAccountStatusesArgs = {
  filter?: InputMaybe<TableVirtuosoAccountStatusFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListVirtuosoActiveServersArgs = {
  filter?: InputMaybe<TableVirtuosoActiveServersFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListVirtuosoCreatorsArgs = {
  filter?: InputMaybe<TableVirtuosoCreatorsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListVirtuosoEventsArgs = {
  filter?: InputMaybe<TableVirtuosoEventsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListVirtuosoInvitationsArgs = {
  filter?: InputMaybe<TableVirtuosoInvitationsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListVirtuosoPageFollowsArgs = {
  filter?: InputMaybe<TableVirtuosoPageFollowFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListVirtuosoSiteMapsArgs = {
  filter?: InputMaybe<TableVirtuosoSiteMapsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListVirtuosoSiteMapsByVenueIdArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  venueId: Scalars['String']['input'];
};

export type QueryListVirtuosoStagesArgs = {
  filter?: InputMaybe<TableVirtuosoStagesFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListVirtuosoTicketsArgs = {
  filter?: InputMaybe<TableVirtuosoTicketsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListVirtuosoUserAttributesArgs = {
  filter?: InputMaybe<TableVirtuosoUserAttributesFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListVirtuosoVendorsArgs = {
  filter?: InputMaybe<TableVirtuosoVendorsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type QueryListVirtuosoVenuesArgs = {
  filter?: InputMaybe<TableVirtuosoVenuesFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type Recording = {
  __typename?: 'Recording';
  eventId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Scalars['Boolean']['output']>;
  livestreamId?: Maybe<Scalars['String']['output']>;
  max_resolution_tier?: Maybe<Scalars['String']['output']>;
  playback_id?: Maybe<Scalars['String']['output']>;
  stageId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  test?: Maybe<Scalars['Boolean']['output']>;
  venueId?: Maybe<Scalars['String']['output']>;
};

export type RecordingConnection = {
  __typename?: 'RecordingConnection';
  items?: Maybe<Array<Maybe<Recording>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ReplyOnCommentInput = {
  author: Scalars['String']['input'];
  content: Scalars['String']['input'];
  parentId: Scalars['String']['input'];
  postAuthor: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type SendFriendRequestInput = {
  data?: InputMaybe<Scalars['String']['input']>;
  receiverId: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
};

export type StageStreamMap = {
  __typename?: 'StageStreamMap';
  stage?: Maybe<UserAsset>;
  stageID?: Maybe<Scalars['String']['output']>;
  stageName?: Maybe<Scalars['String']['output']>;
  stream?: Maybe<StreamConfigurations>;
  streamID?: Maybe<Scalars['String']['output']>;
};

export type StageStreamMapInput = {
  stageID?: InputMaybe<Scalars['String']['input']>;
  stageName?: InputMaybe<Scalars['String']['input']>;
  streamID?: InputMaybe<Scalars['String']['input']>;
};

export type StreamConfigurations = {
  __typename?: 'StreamConfigurations';
  creatorID?: Maybe<Scalars['String']['output']>;
  event?: Maybe<VirtuosoEvents>;
  eventId?: Maybe<Scalars['String']['output']>;
  isLive?: Maybe<Scalars['String']['output']>;
  playbackURL?: Maybe<Scalars['String']['output']>;
  stageId?: Maybe<Scalars['String']['output']>;
  streamID: Scalars['String']['output'];
  streamKey?: Maybe<Scalars['String']['output']>;
  streamName?: Maybe<Scalars['String']['output']>;
  streamType?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['String']['output']>;
  venueId?: Maybe<Scalars['String']['output']>;
};

export type StreamConfigurationsConnection = {
  __typename?: 'StreamConfigurationsConnection';
  items?: Maybe<Array<Maybe<StreamConfigurations>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type StreamRecording = {
  __typename?: 'StreamRecording';
  duration?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isLive?: Maybe<Scalars['Boolean']['output']>;
  livestreamId?: Maybe<Scalars['String']['output']>;
  max_resolution_tier?: Maybe<Scalars['String']['output']>;
  playback_id?: Maybe<Scalars['String']['output']>;
  stageId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  test?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  venueId?: Maybe<Scalars['String']['output']>;
};

export type StreamRecordingConnection = {
  __typename?: 'StreamRecordingConnection';
  items?: Maybe<Array<Maybe<StreamRecording>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateAgent?: Maybe<Agent>;
  onCreateAsset?: Maybe<Asset>;
  onCreateChatRooms?: Maybe<ChatRooms>;
  onCreateComment?: Maybe<Comment>;
  onCreateDirectMessage?: Maybe<DirectMessage>;
  onCreateFriendRequest?: Maybe<FriendRequest>;
  onCreateFriendsTable?: Maybe<FriendsTable>;
  onCreateNotification?: Maybe<Notification>;
  onCreateOrder?: Maybe<Order>;
  onCreateOwnership?: Maybe<Ownership>;
  onCreatePayment?: Maybe<Payment>;
  onCreatePost?: Maybe<Post>;
  onCreatePostLikes?: Maybe<PostLikes>;
  onCreatePromocode?: Maybe<Promocode>;
  onCreateRecording?: Maybe<Recording>;
  onCreateStreamConfigurations?: Maybe<StreamConfigurations>;
  onCreateStreamRecording?: Maybe<StreamRecording>;
  onCreateSupportTicket?: Maybe<SupportTicket>;
  onCreateUser?: Maybe<User>;
  onCreateUserAsset?: Maybe<UserAsset>;
  onCreateVirtuosoAccountRelationships?: Maybe<VirtuosoAccountRelationships>;
  onCreateVirtuosoAccountStatus?: Maybe<VirtuosoAccountStatus>;
  onCreateVirtuosoActiveServers?: Maybe<VirtuosoActiveServers>;
  onCreateVirtuosoCreators?: Maybe<VirtuosoCreators>;
  onCreateVirtuosoEvents?: Maybe<VirtuosoEvents>;
  onCreateVirtuosoInvitations?: Maybe<VirtuosoInvitations>;
  onCreateVirtuosoPageFollow?: Maybe<VirtuosoPageFollow>;
  onCreateVirtuosoSiteMaps?: Maybe<VirtuosoSiteMaps>;
  onCreateVirtuosoStages?: Maybe<VirtuosoStages>;
  onCreateVirtuosoTickets?: Maybe<VirtuosoTickets>;
  onCreateVirtuosoUserAttributes?: Maybe<VirtuosoUserAttributes>;
  onCreateVirtuosoVendors?: Maybe<VirtuosoVendors>;
  onCreateVirtuosoVenues?: Maybe<VirtuosoVenues>;
  onDeleteAgent?: Maybe<Agent>;
  onDeleteAsset?: Maybe<Asset>;
  onDeleteChatRooms?: Maybe<ChatRooms>;
  onDeleteComment?: Maybe<Comment>;
  onDeleteDirectMessage?: Maybe<DirectMessage>;
  onDeleteFriendRequest?: Maybe<FriendRequest>;
  onDeleteFriendsTable?: Maybe<FriendsTable>;
  onDeleteNotification?: Maybe<Notification>;
  onDeleteOrder?: Maybe<Order>;
  onDeleteOwnership?: Maybe<Ownership>;
  onDeletePayment?: Maybe<Payment>;
  onDeletePost?: Maybe<Post>;
  onDeletePostLikes?: Maybe<PostLikes>;
  onDeletePromocode?: Maybe<Promocode>;
  onDeleteRecording?: Maybe<Recording>;
  onDeleteStreamConfigurations?: Maybe<StreamConfigurations>;
  onDeleteStreamRecording?: Maybe<StreamRecording>;
  onDeleteSupportTicket?: Maybe<SupportTicket>;
  onDeleteUser?: Maybe<User>;
  onDeleteUserAsset?: Maybe<UserAsset>;
  onDeleteVirtuosoAccountRelationships?: Maybe<VirtuosoAccountRelationships>;
  onDeleteVirtuosoAccountStatus?: Maybe<VirtuosoAccountStatus>;
  onDeleteVirtuosoActiveServers?: Maybe<VirtuosoActiveServers>;
  onDeleteVirtuosoCreators?: Maybe<VirtuosoCreators>;
  onDeleteVirtuosoEvents?: Maybe<VirtuosoEvents>;
  onDeleteVirtuosoInvitations?: Maybe<VirtuosoInvitations>;
  onDeleteVirtuosoPageFollow?: Maybe<VirtuosoPageFollow>;
  onDeleteVirtuosoSiteMaps?: Maybe<VirtuosoSiteMaps>;
  onDeleteVirtuosoStages?: Maybe<VirtuosoStages>;
  onDeleteVirtuosoTickets?: Maybe<VirtuosoTickets>;
  onDeleteVirtuosoUserAttributes?: Maybe<VirtuosoUserAttributes>;
  onDeleteVirtuosoVendors?: Maybe<VirtuosoVendors>;
  onDeleteVirtuosoVenues?: Maybe<VirtuosoVenues>;
  onUpdateAgent?: Maybe<Agent>;
  onUpdateAsset?: Maybe<Asset>;
  onUpdateChatRooms?: Maybe<ChatRooms>;
  onUpdateComment?: Maybe<Comment>;
  onUpdateDirectMessage?: Maybe<DirectMessage>;
  onUpdateFriendRequest?: Maybe<FriendRequest>;
  onUpdateFriendsTable?: Maybe<FriendsTable>;
  onUpdateNotification?: Maybe<Notification>;
  onUpdateOrder?: Maybe<Order>;
  onUpdateOwnership?: Maybe<Ownership>;
  onUpdatePayment?: Maybe<Payment>;
  onUpdatePost?: Maybe<Post>;
  onUpdatePostLikes?: Maybe<PostLikes>;
  onUpdatePromocode?: Maybe<Promocode>;
  onUpdateRecording?: Maybe<Recording>;
  onUpdateStreamConfigurations?: Maybe<StreamConfigurations>;
  onUpdateStreamRecording?: Maybe<StreamRecording>;
  onUpdateSupportTicket?: Maybe<SupportTicket>;
  onUpdateUser?: Maybe<User>;
  onUpdateUserAsset?: Maybe<UserAsset>;
  onUpdateVirtuosoAccountRelationships?: Maybe<VirtuosoAccountRelationships>;
  onUpdateVirtuosoAccountStatus?: Maybe<VirtuosoAccountStatus>;
  onUpdateVirtuosoActiveServers?: Maybe<VirtuosoActiveServers>;
  onUpdateVirtuosoCreators?: Maybe<VirtuosoCreators>;
  onUpdateVirtuosoEvents?: Maybe<VirtuosoEvents>;
  onUpdateVirtuosoInvitations?: Maybe<VirtuosoInvitations>;
  onUpdateVirtuosoSiteMaps?: Maybe<VirtuosoSiteMaps>;
  onUpdateVirtuosoStages?: Maybe<VirtuosoStages>;
  onUpdateVirtuosoTickets?: Maybe<VirtuosoTickets>;
  onUpdateVirtuosoUserAttributes?: Maybe<VirtuosoUserAttributes>;
  onUpdateVirtuosoVendors?: Maybe<VirtuosoVendors>;
  onUpdateVirtuosoVenues?: Maybe<VirtuosoVenues>;
};

export type SubscriptionOnCreateAgentArgs = {
  BroadcastAddress?: InputMaybe<Scalars['String']['input']>;
  Hostname?: InputMaybe<Scalars['String']['input']>;
  IPAddress?: InputMaybe<Scalars['String']['input']>;
  MACAddress?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateAssetArgs = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetType?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type SubscriptionOnCreateChatRoomsArgs = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateCommentArgs = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['String']['input']>;
  replyIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SubscriptionOnCreateDirectMessageArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  receiverId?: InputMaybe<Scalars['String']['input']>;
  senderId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateFriendRequestArgs = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateFriendsTableArgs = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  friendId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateNotificationArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  receiverId?: InputMaybe<Scalars['String']['input']>;
  senderId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateOrderArgs = {
  buyerID?: InputMaybe<Scalars['String']['input']>;
  cart?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  paymentIntent?: InputMaybe<Scalars['String']['input']>;
  purchases?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SubscriptionOnCreateOwnershipArgs = {
  sub?: InputMaybe<Scalars['ID']['input']>;
};

export type SubscriptionOnCreatePaymentArgs = {
  amount?: InputMaybe<Scalars['String']['input']>;
  amount_capturable?: InputMaybe<Scalars['String']['input']>;
  amount_details?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  object?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreatePostArgs = {
  comments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageId?: InputMaybe<Scalars['ID']['input']>;
};

export type SubscriptionOnCreatePostLikesArgs = {
  author?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreatePromocodeArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  appliesTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SubscriptionOnCreateRecordingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  max_resolution_tier?: InputMaybe<Scalars['String']['input']>;
  playback_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  test?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubscriptionOnCreateStreamConfigurationsArgs = {
  creatorID?: InputMaybe<Scalars['String']['input']>;
  playbackURL?: InputMaybe<Scalars['String']['input']>;
  streamID?: InputMaybe<Scalars['String']['input']>;
  streamKey?: InputMaybe<Scalars['String']['input']>;
  streamName?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateStreamRecordingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  max_resolution_tier?: InputMaybe<Scalars['String']['input']>;
  playback_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  test?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubscriptionOnCreateSupportTicketArgs = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateUserArgs = {
  about?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sub?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateUserAssetArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  materialsID?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productName?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateVirtuosoAccountRelationshipsArgs = {
  DateCreated?: InputMaybe<Scalars['String']['input']>;
  FromCreatorID?: InputMaybe<Scalars['String']['input']>;
  OwnedAssetID?: InputMaybe<Scalars['String']['input']>;
  RelationshipType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateVirtuosoAccountStatusArgs = {
  AccountVisibility?: InputMaybe<Scalars['String']['input']>;
  ActiveDLCID?: InputMaybe<Scalars['String']['input']>;
  ActivePerformer?: InputMaybe<Scalars['String']['input']>;
  ActivePlatform?: InputMaybe<Scalars['String']['input']>;
  CreatorID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateVirtuosoActiveServersArgs = {
  active_viewers?: InputMaybe<Scalars['String']['input']>;
  awsgamesession?: InputMaybe<Scalars['String']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  server_id?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateVirtuosoCreatorsArgs = {
  CreatorBio?: InputMaybe<Scalars['String']['input']>;
  CreatorCategory?: InputMaybe<Scalars['String']['input']>;
  CreatorGuestlistID?: InputMaybe<Scalars['String']['input']>;
  CreatorID?: InputMaybe<Scalars['String']['input']>;
  CreatorLocationID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateVirtuosoEventsArgs = {
  EventCategory?: InputMaybe<Scalars['String']['input']>;
  EventCreatorID?: InputMaybe<Scalars['String']['input']>;
  EventDescription?: InputMaybe<Scalars['String']['input']>;
  EventID?: InputMaybe<Scalars['String']['input']>;
  EventImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SubscriptionOnCreateVirtuosoInvitationsArgs = {
  ActiveServerID?: InputMaybe<Scalars['String']['input']>;
  DateCreated?: InputMaybe<Scalars['String']['input']>;
  EventID?: InputMaybe<Scalars['String']['input']>;
  ToCreatorID?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateVirtuosoPageFollowArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  pageId?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateVirtuosoSiteMapsArgs = {
  SiteMapCreatorID?: InputMaybe<Scalars['String']['input']>;
  SiteMapDateCreated?: InputMaybe<Scalars['String']['input']>;
  SiteMapDescription?: InputMaybe<Scalars['String']['input']>;
  SiteMapGuestlistID?: InputMaybe<Scalars['String']['input']>;
  SiteMapID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateVirtuosoStagesArgs = {
  StageAuthor?: InputMaybe<Scalars['String']['input']>;
  StageCreatorID?: InputMaybe<Scalars['String']['input']>;
  StageDescription?: InputMaybe<Scalars['String']['input']>;
  StageGuestlistID?: InputMaybe<Scalars['String']['input']>;
  StageID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateVirtuosoTicketsArgs = {
  EventID?: InputMaybe<Scalars['String']['input']>;
  ItemID?: InputMaybe<Scalars['String']['input']>;
  NumberOfTicket?: InputMaybe<Scalars['Int']['input']>;
  TicketID?: InputMaybe<Scalars['ID']['input']>;
  UserID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateVirtuosoUserAttributesArgs = {
  AccountCreationMethod?: InputMaybe<Scalars['String']['input']>;
  AccountVisibility?: InputMaybe<Scalars['String']['input']>;
  ActualName?: InputMaybe<Scalars['String']['input']>;
  AvatarConfiguration?: InputMaybe<Scalars['String']['input']>;
  CreatorID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateVirtuosoVendorsArgs = {
  GuestlistID?: InputMaybe<Scalars['String']['input']>;
  IsRealWorldVendor?: InputMaybe<Scalars['String']['input']>;
  VendorBio?: InputMaybe<Scalars['String']['input']>;
  VendorCreatorID?: InputMaybe<Scalars['String']['input']>;
  VendorID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnCreateVirtuosoVenuesArgs = {
  Address?: InputMaybe<Scalars['String']['input']>;
  Android_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Bio?: InputMaybe<Scalars['String']['input']>;
  IsRealWorldVenue?: InputMaybe<Scalars['String']['input']>;
  VenueID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteAgentArgs = {
  BroadcastAddress?: InputMaybe<Scalars['String']['input']>;
  Hostname?: InputMaybe<Scalars['String']['input']>;
  IPAddress?: InputMaybe<Scalars['String']['input']>;
  MACAddress?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteAssetArgs = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetType?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type SubscriptionOnDeleteChatRoomsArgs = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteCommentArgs = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['String']['input']>;
  replyIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SubscriptionOnDeleteDirectMessageArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  receiverId?: InputMaybe<Scalars['String']['input']>;
  senderId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteFriendRequestArgs = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteFriendsTableArgs = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  friendId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteNotificationArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  receiverId?: InputMaybe<Scalars['String']['input']>;
  senderId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteOrderArgs = {
  buyerID?: InputMaybe<Scalars['String']['input']>;
  cart?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  paymentIntent?: InputMaybe<Scalars['String']['input']>;
  purchases?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SubscriptionOnDeleteOwnershipArgs = {
  sub?: InputMaybe<Scalars['ID']['input']>;
};

export type SubscriptionOnDeletePaymentArgs = {
  amount?: InputMaybe<Scalars['String']['input']>;
  amount_capturable?: InputMaybe<Scalars['String']['input']>;
  amount_details?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  object?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeletePostArgs = {
  comments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageId?: InputMaybe<Scalars['ID']['input']>;
};

export type SubscriptionOnDeletePostLikesArgs = {
  author?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeletePromocodeArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  appliesTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SubscriptionOnDeleteRecordingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  max_resolution_tier?: InputMaybe<Scalars['String']['input']>;
  playback_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  test?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubscriptionOnDeleteStreamConfigurationsArgs = {
  creatorID?: InputMaybe<Scalars['String']['input']>;
  playbackURL?: InputMaybe<Scalars['String']['input']>;
  streamID?: InputMaybe<Scalars['String']['input']>;
  streamKey?: InputMaybe<Scalars['String']['input']>;
  streamName?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteStreamRecordingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  max_resolution_tier?: InputMaybe<Scalars['String']['input']>;
  playback_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  test?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubscriptionOnDeleteSupportTicketArgs = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteUserArgs = {
  about?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sub?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteUserAssetArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  materialsID?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productName?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteVirtuosoAccountRelationshipsArgs = {
  DateCreated?: InputMaybe<Scalars['String']['input']>;
  FromCreatorID?: InputMaybe<Scalars['String']['input']>;
  OwnedAssetID?: InputMaybe<Scalars['String']['input']>;
  RelationshipType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteVirtuosoAccountStatusArgs = {
  AccountVisibility?: InputMaybe<Scalars['String']['input']>;
  ActiveDLCID?: InputMaybe<Scalars['String']['input']>;
  ActivePerformer?: InputMaybe<Scalars['String']['input']>;
  ActivePlatform?: InputMaybe<Scalars['String']['input']>;
  CreatorID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteVirtuosoActiveServersArgs = {
  active_viewers?: InputMaybe<Scalars['String']['input']>;
  awsgamesession?: InputMaybe<Scalars['String']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  server_id?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteVirtuosoCreatorsArgs = {
  CreatorBio?: InputMaybe<Scalars['String']['input']>;
  CreatorCategory?: InputMaybe<Scalars['String']['input']>;
  CreatorGuestlistID?: InputMaybe<Scalars['String']['input']>;
  CreatorID?: InputMaybe<Scalars['String']['input']>;
  CreatorLocationID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteVirtuosoEventsArgs = {
  EventCategory?: InputMaybe<Scalars['String']['input']>;
  EventCreatorID?: InputMaybe<Scalars['String']['input']>;
  EventDescription?: InputMaybe<Scalars['String']['input']>;
  EventID?: InputMaybe<Scalars['String']['input']>;
  EventImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SubscriptionOnDeleteVirtuosoInvitationsArgs = {
  ActiveServerID?: InputMaybe<Scalars['String']['input']>;
  DateCreated?: InputMaybe<Scalars['String']['input']>;
  EventID?: InputMaybe<Scalars['String']['input']>;
  ExpirationLimit?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteVirtuosoPageFollowArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  pageId?: InputMaybe<Scalars['String']['input']>;
  pageType?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteVirtuosoSiteMapsArgs = {
  SiteMapCreatorID?: InputMaybe<Scalars['String']['input']>;
  SiteMapDateCreated?: InputMaybe<Scalars['String']['input']>;
  SiteMapDescription?: InputMaybe<Scalars['String']['input']>;
  SiteMapGuestlistID?: InputMaybe<Scalars['String']['input']>;
  SiteMapID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteVirtuosoStagesArgs = {
  StageAuthor?: InputMaybe<Scalars['String']['input']>;
  StageCreatorID?: InputMaybe<Scalars['String']['input']>;
  StageDescription?: InputMaybe<Scalars['String']['input']>;
  StageGuestlistID?: InputMaybe<Scalars['String']['input']>;
  StageID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteVirtuosoTicketsArgs = {
  EventID?: InputMaybe<Scalars['String']['input']>;
  ItemID?: InputMaybe<Scalars['String']['input']>;
  NumberOfTicket?: InputMaybe<Scalars['Int']['input']>;
  TicketID?: InputMaybe<Scalars['ID']['input']>;
  UserID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteVirtuosoUserAttributesArgs = {
  AccountCreationMethod?: InputMaybe<Scalars['String']['input']>;
  AccountVisibility?: InputMaybe<Scalars['String']['input']>;
  ActualName?: InputMaybe<Scalars['String']['input']>;
  AvatarConfiguration?: InputMaybe<Scalars['String']['input']>;
  CreatorID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteVirtuosoVendorsArgs = {
  GuestlistID?: InputMaybe<Scalars['String']['input']>;
  IsRealWorldVendor?: InputMaybe<Scalars['String']['input']>;
  VendorBio?: InputMaybe<Scalars['String']['input']>;
  VendorCreatorID?: InputMaybe<Scalars['String']['input']>;
  VendorID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnDeleteVirtuosoVenuesArgs = {
  Address?: InputMaybe<Scalars['String']['input']>;
  Android_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Bio?: InputMaybe<Scalars['String']['input']>;
  IsRealWorldVenue?: InputMaybe<Scalars['String']['input']>;
  VenueID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateAgentArgs = {
  BroadcastAddress?: InputMaybe<Scalars['String']['input']>;
  Hostname?: InputMaybe<Scalars['String']['input']>;
  IPAddress?: InputMaybe<Scalars['String']['input']>;
  MACAddress?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateAssetArgs = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetType?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type SubscriptionOnUpdateChatRoomsArgs = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateCommentArgs = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['String']['input']>;
  replyIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SubscriptionOnUpdateDirectMessageArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  receiverId?: InputMaybe<Scalars['String']['input']>;
  senderId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateFriendRequestArgs = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  receiver?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateFriendsTableArgs = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  friendId?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateNotificationArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  receiverId?: InputMaybe<Scalars['String']['input']>;
  senderId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateOrderArgs = {
  buyerID?: InputMaybe<Scalars['String']['input']>;
  cart?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  paymentIntent?: InputMaybe<Scalars['String']['input']>;
  purchases?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SubscriptionOnUpdateOwnershipArgs = {
  sub?: InputMaybe<Scalars['ID']['input']>;
};

export type SubscriptionOnUpdatePaymentArgs = {
  amount?: InputMaybe<Scalars['String']['input']>;
  amount_capturable?: InputMaybe<Scalars['String']['input']>;
  amount_details?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  object?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdatePostArgs = {
  comments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageId?: InputMaybe<Scalars['ID']['input']>;
};

export type SubscriptionOnUpdatePostLikesArgs = {
  author?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  postId?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdatePromocodeArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  appliesTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type SubscriptionOnUpdateRecordingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  max_resolution_tier?: InputMaybe<Scalars['String']['input']>;
  playback_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  test?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubscriptionOnUpdateStreamConfigurationsArgs = {
  creatorID?: InputMaybe<Scalars['String']['input']>;
  playbackURL?: InputMaybe<Scalars['String']['input']>;
  streamID?: InputMaybe<Scalars['String']['input']>;
  streamKey?: InputMaybe<Scalars['String']['input']>;
  streamName?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateStreamRecordingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  max_resolution_tier?: InputMaybe<Scalars['String']['input']>;
  playback_id?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  test?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SubscriptionOnUpdateSupportTicketArgs = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateUserArgs = {
  about?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sub?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateUserAssetArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  materialsID?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productName?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateVirtuosoAccountRelationshipsArgs = {
  DateCreated?: InputMaybe<Scalars['String']['input']>;
  FromCreatorID?: InputMaybe<Scalars['String']['input']>;
  OwnedAssetID?: InputMaybe<Scalars['String']['input']>;
  RelationshipType?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateVirtuosoAccountStatusArgs = {
  AccountVisibility?: InputMaybe<Scalars['String']['input']>;
  ActiveDLCID?: InputMaybe<Scalars['String']['input']>;
  ActivePerformer?: InputMaybe<Scalars['String']['input']>;
  ActivePlatform?: InputMaybe<Scalars['String']['input']>;
  CreatorID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateVirtuosoActiveServersArgs = {
  active_viewers?: InputMaybe<Scalars['String']['input']>;
  awsgamesession?: InputMaybe<Scalars['String']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  server_id?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateVirtuosoCreatorsArgs = {
  CreatorBio?: InputMaybe<Scalars['String']['input']>;
  CreatorCategory?: InputMaybe<Scalars['String']['input']>;
  CreatorGuestlistID?: InputMaybe<Scalars['String']['input']>;
  CreatorID?: InputMaybe<Scalars['String']['input']>;
  CreatorLocationID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateVirtuosoEventsArgs = {
  EventCategory?: InputMaybe<Scalars['String']['input']>;
  EventCreatorID?: InputMaybe<Scalars['String']['input']>;
  EventDescription?: InputMaybe<Scalars['String']['input']>;
  EventID?: InputMaybe<Scalars['String']['input']>;
  EventImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SubscriptionOnUpdateVirtuosoInvitationsArgs = {
  ActiveServerID?: InputMaybe<Scalars['String']['input']>;
  DateCreated?: InputMaybe<Scalars['String']['input']>;
  EventID?: InputMaybe<Scalars['String']['input']>;
  ExpirationLimit?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateVirtuosoSiteMapsArgs = {
  SiteMapCreatorID?: InputMaybe<Scalars['String']['input']>;
  SiteMapDateCreated?: InputMaybe<Scalars['String']['input']>;
  SiteMapDescription?: InputMaybe<Scalars['String']['input']>;
  SiteMapGuestlistID?: InputMaybe<Scalars['String']['input']>;
  SiteMapID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateVirtuosoStagesArgs = {
  StageAuthor?: InputMaybe<Scalars['String']['input']>;
  StageCreatorID?: InputMaybe<Scalars['String']['input']>;
  StageDescription?: InputMaybe<Scalars['String']['input']>;
  StageGuestlistID?: InputMaybe<Scalars['String']['input']>;
  StageID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateVirtuosoTicketsArgs = {
  EventID?: InputMaybe<Scalars['String']['input']>;
  ItemID?: InputMaybe<Scalars['String']['input']>;
  NumberOfTicket?: InputMaybe<Scalars['Int']['input']>;
  TicketID?: InputMaybe<Scalars['ID']['input']>;
  UserID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateVirtuosoUserAttributesArgs = {
  AccountCreationMethod?: InputMaybe<Scalars['String']['input']>;
  AccountVisibility?: InputMaybe<Scalars['String']['input']>;
  ActualName?: InputMaybe<Scalars['String']['input']>;
  AvatarConfiguration?: InputMaybe<Scalars['String']['input']>;
  CreatorID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateVirtuosoVendorsArgs = {
  GuestlistID?: InputMaybe<Scalars['String']['input']>;
  IsRealWorldVendor?: InputMaybe<Scalars['String']['input']>;
  VendorBio?: InputMaybe<Scalars['String']['input']>;
  VendorCreatorID?: InputMaybe<Scalars['String']['input']>;
  VendorID?: InputMaybe<Scalars['String']['input']>;
};

export type SubscriptionOnUpdateVirtuosoVenuesArgs = {
  Address?: InputMaybe<Scalars['String']['input']>;
  Android_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Bio?: InputMaybe<Scalars['String']['input']>;
  IsRealWorldVenue?: InputMaybe<Scalars['String']['input']>;
  VenueID?: InputMaybe<Scalars['String']['input']>;
};

export type SupportTicket = {
  __typename?: 'SupportTicket';
  assignedTo?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  priority?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['String']['output']>;
  userId: Scalars['ID']['output'];
};

export type SupportTicketConnection = {
  __typename?: 'SupportTicketConnection';
  items?: Maybe<Array<Maybe<SupportTicket>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type TableAgentFilterInput = {
  BroadcastAddress?: InputMaybe<TableStringFilterInput>;
  EventID?: InputMaybe<TableStringFilterInput>;
  Health?: InputMaybe<TableStringFilterInput>;
  Hostname?: InputMaybe<TableStringFilterInput>;
  IPAddress?: InputMaybe<TableStringFilterInput>;
  IsStreaming?: InputMaybe<TableBooleanFilterInput>;
  LastActive?: InputMaybe<TableStringFilterInput>;
  LastError?: InputMaybe<TableStringFilterInput>;
  MACAddress?: InputMaybe<TableStringFilterInput>;
  OBSStatus?: InputMaybe<TableStringFilterInput>;
  OBSVersion?: InputMaybe<TableStringFilterInput>;
  OS?: InputMaybe<TableStringFilterInput>;
  Region?: InputMaybe<TableStringFilterInput>;
  StartTime?: InputMaybe<TableStringFilterInput>;
  Tags?: InputMaybe<TableStringFilterInput>;
  UptimeSeconds?: InputMaybe<TableIntFilterInput>;
  VenueID?: InputMaybe<TableStringFilterInput>;
  Version?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableStringFilterInput>;
  raspBroadcastAddress?: InputMaybe<TableStringFilterInput>;
  raspEventID?: InputMaybe<TableStringFilterInput>;
  raspHealth?: InputMaybe<TableStringFilterInput>;
  raspIPAddress?: InputMaybe<TableStringFilterInput>;
  raspLastHeartbeat?: InputMaybe<TableStringFilterInput>;
  raspServerTime?: InputMaybe<TableStringFilterInput>;
  raspStartTime?: InputMaybe<TableStringFilterInput>;
  raspTimezone?: InputMaybe<TableStringFilterInput>;
  raspUpcomingEvents?: InputMaybe<TableStringFilterInput>;
  raspUpcomingStartTimes?: InputMaybe<TableStringFilterInput>;
  raspUptime?: InputMaybe<TableIntFilterInput>;
  raspVenueID?: InputMaybe<TableStringFilterInput>;
  raspVersion?: InputMaybe<TableStringFilterInput>;
  serverTime?: InputMaybe<TableStringFilterInput>;
  timezone?: InputMaybe<TableStringFilterInput>;
  upcomingEvents?: InputMaybe<TableStringFilterInput>;
  upcomingStartTimes?: InputMaybe<TableStringFilterInput>;
};

export type TableAssetFilterInput = {
  assetId?: InputMaybe<TableStringFilterInput>;
  assetType?: InputMaybe<TableStringFilterInput>;
  userId?: InputMaybe<TableIdFilterInput>;
};

export type TableBooleanFilterInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TableChatRoomsFilterInput = {
  avatar?: InputMaybe<TableStringFilterInput>;
  cover?: InputMaybe<TableStringFilterInput>;
  createdAt?: InputMaybe<TableStringFilterInput>;
  createdBy?: InputMaybe<TableStringFilterInput>;
  description?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  title?: InputMaybe<TableStringFilterInput>;
};

export type TableCommentFilterInput = {
  author?: InputMaybe<TableStringFilterInput>;
  content?: InputMaybe<TableStringFilterInput>;
  createdAt?: InputMaybe<TableStringFilterInput>;
  postId?: InputMaybe<TableStringFilterInput>;
  replyIds?: InputMaybe<TableStringFilterInput>;
};

export type TableDirectMessageFilterInput = {
  attachments?: InputMaybe<TableStringFilterInput>;
  audio?: InputMaybe<TableStringFilterInput>;
  content?: InputMaybe<TableStringFilterInput>;
  createdAt?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  images?: InputMaybe<TableStringFilterInput>;
  receiverId?: InputMaybe<TableStringFilterInput>;
  reported?: InputMaybe<TableBooleanFilterInput>;
  senderId?: InputMaybe<TableStringFilterInput>;
  status?: InputMaybe<TableIntFilterInput>;
};

export type TableFloatFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
};

export type TableFriendRequestFilterInput = {
  createdAt?: InputMaybe<TableStringFilterInput>;
  data?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  receiver?: InputMaybe<TableStringFilterInput>;
  sender?: InputMaybe<TableStringFilterInput>;
  status?: InputMaybe<TableStringFilterInput>;
};

export type TableFriendsTableFilterInput = {
  createdAt?: InputMaybe<TableStringFilterInput>;
  friendId?: InputMaybe<TableStringFilterInput>;
  userId?: InputMaybe<TableStringFilterInput>;
};

export type TableIdFilterInput = {
  beginsWith?: InputMaybe<Scalars['ID']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
};

export type TableIntFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
};

export type TableNotificationFilterInput = {
  content?: InputMaybe<TableStringFilterInput>;
  createdAt?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  receiverId?: InputMaybe<TableStringFilterInput>;
  senderId?: InputMaybe<TableStringFilterInput>;
  type?: InputMaybe<TableStringFilterInput>;
};

export type TableOrderFilterInput = {
  amount_off?: InputMaybe<TableIntFilterInput>;
  buyerID?: InputMaybe<TableStringFilterInput>;
  cart?: InputMaybe<TableStringFilterInput>;
  createdAt?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  payment?: InputMaybe<TableStringFilterInput>;
  paymentIntent?: InputMaybe<TableStringFilterInput>;
  percent_Off?: InputMaybe<TableIntFilterInput>;
  price?: InputMaybe<TableFloatFilterInput>;
  purchases?: InputMaybe<TableStringFilterInput>;
  status?: InputMaybe<TableIntFilterInput>;
  updatedAt?: InputMaybe<TableStringFilterInput>;
};

export type TableOwnershipFilterInput = {
  sub?: InputMaybe<TableIdFilterInput>;
};

export type TablePaymentFilterInput = {
  amount?: InputMaybe<TableStringFilterInput>;
  amount_capturable?: InputMaybe<TableStringFilterInput>;
  amount_details?: InputMaybe<TableStringFilterInput>;
  amount_received?: InputMaybe<TableStringFilterInput>;
  application?: InputMaybe<TableStringFilterInput>;
  application_fee_amount?: InputMaybe<TableStringFilterInput>;
  automatic_payment_methods?: InputMaybe<TableStringFilterInput>;
  canceled_at?: InputMaybe<TableStringFilterInput>;
  cancellation_reason?: InputMaybe<TableStringFilterInput>;
  capture_method?: InputMaybe<TableStringFilterInput>;
  client_secret?: InputMaybe<TableStringFilterInput>;
  confirmation_method?: InputMaybe<TableStringFilterInput>;
  created?: InputMaybe<TableStringFilterInput>;
  currency?: InputMaybe<TableStringFilterInput>;
  customer?: InputMaybe<TableStringFilterInput>;
  description?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  invoice?: InputMaybe<TableStringFilterInput>;
  last_payment_error?: InputMaybe<TableStringFilterInput>;
  latest_charge?: InputMaybe<TableStringFilterInput>;
  livemode?: InputMaybe<TableStringFilterInput>;
  metadata?: InputMaybe<TableStringFilterInput>;
  next_action?: InputMaybe<TableStringFilterInput>;
  object?: InputMaybe<TableStringFilterInput>;
  on_behalf_of?: InputMaybe<TableStringFilterInput>;
  payment_method?: InputMaybe<TableStringFilterInput>;
  payment_method_options?: InputMaybe<TableStringFilterInput>;
  payment_method_types?: InputMaybe<TableStringFilterInput>;
  processing?: InputMaybe<TableStringFilterInput>;
  receipt_email?: InputMaybe<TableStringFilterInput>;
  review?: InputMaybe<TableStringFilterInput>;
  setup_future_usage?: InputMaybe<TableStringFilterInput>;
  shipping?: InputMaybe<TableStringFilterInput>;
  source?: InputMaybe<TableStringFilterInput>;
  statement_descriptor?: InputMaybe<TableStringFilterInput>;
  statement_descriptor_suffix?: InputMaybe<TableStringFilterInput>;
  status?: InputMaybe<TableStringFilterInput>;
  transfer_data?: InputMaybe<TableStringFilterInput>;
  transfer_group?: InputMaybe<TableStringFilterInput>;
};

export type TablePostFilterInput = {
  author?: InputMaybe<TableStringFilterInput>;
  comments?: InputMaybe<TableStringFilterInput>;
  content?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  images?: InputMaybe<TableStringFilterInput>;
  likes?: InputMaybe<TableIntFilterInput>;
  pageId?: InputMaybe<TableIdFilterInput>;
};

export type TablePostLikesFilterInput = {
  author?: InputMaybe<TableStringFilterInput>;
  createdAt?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableStringFilterInput>;
  postId?: InputMaybe<TableStringFilterInput>;
};

export type TablePromocodeFilterInput = {
  active?: InputMaybe<TableBooleanFilterInput>;
  amount_off?: InputMaybe<TableIntFilterInput>;
  appliesTo?: InputMaybe<TableStringFilterInput>;
  code?: InputMaybe<TableStringFilterInput>;
  created?: InputMaybe<TableStringFilterInput>;
  expires_at?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  max_redemptions?: InputMaybe<TableIntFilterInput>;
  percent_off?: InputMaybe<TableIntFilterInput>;
  times_redeemed?: InputMaybe<TableIntFilterInput>;
  uniquePerUser?: InputMaybe<TableBooleanFilterInput>;
};

export type TableRecordingFilterInput = {
  eventId?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  isLive?: InputMaybe<TableBooleanFilterInput>;
  livestreamId?: InputMaybe<TableStringFilterInput>;
  max_resolution_tier?: InputMaybe<TableStringFilterInput>;
  playback_id?: InputMaybe<TableStringFilterInput>;
  stageId?: InputMaybe<TableStringFilterInput>;
  status?: InputMaybe<TableStringFilterInput>;
  test?: InputMaybe<TableBooleanFilterInput>;
  venueId?: InputMaybe<TableStringFilterInput>;
};

export type TableStreamConfigurationsFilterInput = {
  creatorID?: InputMaybe<TableStringFilterInput>;
  playbackURL?: InputMaybe<TableStringFilterInput>;
  streamID?: InputMaybe<TableStringFilterInput>;
  streamKey?: InputMaybe<TableStringFilterInput>;
  streamName?: InputMaybe<TableStringFilterInput>;
  streamType?: InputMaybe<TableStringFilterInput>;
  timestamp?: InputMaybe<TableStringFilterInput>;
};

export type TableStreamRecordingFilterInput = {
  eventId?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  isLive?: InputMaybe<TableBooleanFilterInput>;
  livestreamId?: InputMaybe<TableStringFilterInput>;
  max_resolution_tier?: InputMaybe<TableStringFilterInput>;
  playback_id?: InputMaybe<TableStringFilterInput>;
  stageId?: InputMaybe<TableStringFilterInput>;
  status?: InputMaybe<TableStringFilterInput>;
  test?: InputMaybe<TableBooleanFilterInput>;
  userId?: InputMaybe<TableStringFilterInput>;
  venueId?: InputMaybe<TableStringFilterInput>;
};

export type TableStringFilterInput = {
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
};

export type TableSupportTicketFilterInput = {
  assignedTo?: InputMaybe<TableStringFilterInput>;
  createdAt?: InputMaybe<TableStringFilterInput>;
  description?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableIdFilterInput>;
  priority?: InputMaybe<TableStringFilterInput>;
  status?: InputMaybe<TableStringFilterInput>;
  title?: InputMaybe<TableStringFilterInput>;
  updatedAt?: InputMaybe<TableStringFilterInput>;
  userId?: InputMaybe<TableIdFilterInput>;
};

export type TableUserAssetFilterInput = {
  accessibility?: InputMaybe<TableStringFilterInput>;
  assetType?: InputMaybe<TableStringFilterInput>;
  creatorId?: InputMaybe<TableStringFilterInput>;
  description?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableStringFilterInput>;
  image?: InputMaybe<TableStringFilterInput>;
  isDeleted?: InputMaybe<TableBooleanFilterInput>;
  isNFT?: InputMaybe<TableBooleanFilterInput>;
  materialsID?: InputMaybe<TableStringFilterInput>;
  nftURL?: InputMaybe<TableStringFilterInput>;
  price?: InputMaybe<TableStringFilterInput>;
  productName?: InputMaybe<TableStringFilterInput>;
  quantity?: InputMaybe<TableStringFilterInput>;
  rating?: InputMaybe<TableStringFilterInput>;
  vendorPageId?: InputMaybe<TableStringFilterInput>;
};

export type TableUserFilterInput = {
  about?: InputMaybe<TableStringFilterInput>;
  cover?: InputMaybe<TableStringFilterInput>;
  createdAt?: InputMaybe<TableStringFilterInput>;
  email?: InputMaybe<TableStringFilterInput>;
  gender?: InputMaybe<TableStringFilterInput>;
  name?: InputMaybe<TableStringFilterInput>;
  picture?: InputMaybe<TableStringFilterInput>;
  sub?: InputMaybe<TableStringFilterInput>;
};

export type TableVirtuosoAccountRelationshipsFilterInput = {
  DateCreated?: InputMaybe<TableStringFilterInput>;
  FromCreatorID?: InputMaybe<TableStringFilterInput>;
  OwnedAssetID?: InputMaybe<TableStringFilterInput>;
  RelationshipType?: InputMaybe<TableStringFilterInput>;
  ToCreatorID?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableStringFilterInput>;
};

export type TableVirtuosoAccountStatusFilterInput = {
  AccountVisibility?: InputMaybe<TableStringFilterInput>;
  ActiveDLCID?: InputMaybe<TableStringFilterInput>;
  ActivePerformer?: InputMaybe<TableStringFilterInput>;
  ActivePlatform?: InputMaybe<TableStringFilterInput>;
  ActiveStage?: InputMaybe<TableStringFilterInput>;
  ChatMode?: InputMaybe<TableStringFilterInput>;
  CreatorID?: InputMaybe<TableStringFilterInput>;
  InGameVisibility?: InputMaybe<TableStringFilterInput>;
  IsOnline?: InputMaybe<TableStringFilterInput>;
  UserStatus?: InputMaybe<TableStringFilterInput>;
  VoiceChatChannelD?: InputMaybe<TableStringFilterInput>;
};

export type TableVirtuosoActiveServersFilterInput = {
  active_viewers?: InputMaybe<TableStringFilterInput>;
  awsgamesession?: InputMaybe<TableStringFilterInput>;
  event_id?: InputMaybe<TableStringFilterInput>;
  ip_address?: InputMaybe<TableStringFilterInput>;
  port?: InputMaybe<TableStringFilterInput>;
  region?: InputMaybe<TableStringFilterInput>;
  server_id?: InputMaybe<TableStringFilterInput>;
  server_number?: InputMaybe<TableStringFilterInput>;
};

export type TableVirtuosoCreatorsFilterInput = {
  CreatorBio?: InputMaybe<TableStringFilterInput>;
  CreatorCategory?: InputMaybe<TableStringFilterInput>;
  CreatorGuestlistID?: InputMaybe<TableStringFilterInput>;
  CreatorID?: InputMaybe<TableStringFilterInput>;
  CreatorLocationID?: InputMaybe<TableStringFilterInput>;
  CreatorName?: InputMaybe<TableStringFilterInput>;
  CreatorOwnerID?: InputMaybe<TableStringFilterInput>;
  CreatorStartDate?: InputMaybe<TableStringFilterInput>;
  CreatorVisibility?: InputMaybe<TableStringFilterInput>;
  isDeactivated?: InputMaybe<TableBooleanFilterInput>;
  isDisabled?: InputMaybe<TableBooleanFilterInput>;
};

export type TableVirtuosoEventsFilterInput = {
  EventCategory?: InputMaybe<TableStringFilterInput>;
  EventCreatorID?: InputMaybe<TableStringFilterInput>;
  EventDescription?: InputMaybe<TableStringFilterInput>;
  EventID?: InputMaybe<TableStringFilterInput>;
  EventImage?: InputMaybe<TableStringFilterInput>;
  EventLineupID?: InputMaybe<TableStringFilterInput>;
  EventName?: InputMaybe<TableStringFilterInput>;
  EventOwnerID?: InputMaybe<TableStringFilterInput>;
  EventTimeCreated?: InputMaybe<TableStringFilterInput>;
  GuestlistID?: InputMaybe<TableStringFilterInput>;
  OrganizerID?: InputMaybe<TableStringFilterInput>;
  PaymentFlowID?: InputMaybe<TableStringFilterInput>;
  Replayable?: InputMaybe<TableStringFilterInput>;
  ServerInstancingEnabled?: InputMaybe<TableStringFilterInput>;
  ShowAccessVisibility?: InputMaybe<TableStringFilterInput>;
  SitemapID?: InputMaybe<TableStringFilterInput>;
  StreamingConfigurationID?: InputMaybe<TableStringFilterInput>;
  TicketItemID?: InputMaybe<TableStringFilterInput>;
  VenueID?: InputMaybe<TableStringFilterInput>;
};

export type TableVirtuosoInvitationsFilterInput = {
  ActiveServerID?: InputMaybe<TableStringFilterInput>;
  DateCreated?: InputMaybe<TableStringFilterInput>;
  EventID?: InputMaybe<TableStringFilterInput>;
  ExpirationLimit?: InputMaybe<TableStringFilterInput>;
  FromCreatorID?: InputMaybe<TableStringFilterInput>;
  InvitationType?: InputMaybe<TableStringFilterInput>;
  ToCreatorID?: InputMaybe<TableStringFilterInput>;
  VoiceChatChannelD?: InputMaybe<TableStringFilterInput>;
  id?: InputMaybe<TableStringFilterInput>;
};

export type TableVirtuosoPageFollowFilterInput = {
  id?: InputMaybe<TableIdFilterInput>;
  pageId?: InputMaybe<TableStringFilterInput>;
  pageType?: InputMaybe<TableStringFilterInput>;
  userId?: InputMaybe<TableStringFilterInput>;
};

export type TableVirtuosoSiteMapsFilterInput = {
  SiteMapCreatorID?: InputMaybe<TableStringFilterInput>;
  SiteMapDateCreated?: InputMaybe<TableStringFilterInput>;
  SiteMapDescription?: InputMaybe<TableStringFilterInput>;
  SiteMapGuestlistID?: InputMaybe<TableStringFilterInput>;
  SiteMapID?: InputMaybe<TableStringFilterInput>;
  SiteMapImage?: InputMaybe<TableStringFilterInput>;
  SiteMapName?: InputMaybe<TableStringFilterInput>;
  SiteMapOwnerID?: InputMaybe<TableStringFilterInput>;
  SiteMapVenueID?: InputMaybe<TableStringFilterInput>;
};

export type TableVirtuosoStagesFilterInput = {
  StageAuthor?: InputMaybe<TableStringFilterInput>;
  StageCreatorID?: InputMaybe<TableStringFilterInput>;
  StageDescription?: InputMaybe<TableStringFilterInput>;
  StageGuestlistID?: InputMaybe<TableStringFilterInput>;
  StageID?: InputMaybe<TableStringFilterInput>;
  StageImage?: InputMaybe<TableStringFilterInput>;
  StageIndex?: InputMaybe<TableStringFilterInput>;
  StageName?: InputMaybe<TableStringFilterInput>;
  StageOwnerID?: InputMaybe<TableStringFilterInput>;
  StageUMAP_Name?: InputMaybe<TableStringFilterInput>;
  VenueID?: InputMaybe<TableStringFilterInput>;
};

export type TableVirtuosoTicketsFilterInput = {
  CreatedAt?: InputMaybe<TableStringFilterInput>;
  EventID?: InputMaybe<TableStringFilterInput>;
  ItemID?: InputMaybe<TableStringFilterInput>;
  NumberOfTicket?: InputMaybe<TableIntFilterInput>;
  PaymentIntentID?: InputMaybe<TableStringFilterInput>;
  TicketID?: InputMaybe<TableIdFilterInput>;
  Type?: InputMaybe<TableStringFilterInput>;
  UserID?: InputMaybe<TableStringFilterInput>;
};

export type TableVirtuosoUserAttributesFilterInput = {
  AccountCreationMethod?: InputMaybe<TableStringFilterInput>;
  AccountVisibility?: InputMaybe<TableStringFilterInput>;
  ActualName?: InputMaybe<TableStringFilterInput>;
  AvatarConfiguration?: InputMaybe<TableStringFilterInput>;
  Bio?: InputMaybe<TableStringFilterInput>;
  CreatorID?: InputMaybe<TableStringFilterInput>;
  DateCreated?: InputMaybe<TableStringFilterInput>;
  DisplayName?: InputMaybe<TableStringFilterInput>;
  HeaderImage?: InputMaybe<TableStringFilterInput>;
  LinkedINEnabled?: InputMaybe<TableStringFilterInput>;
  LinkedINID?: InputMaybe<TableStringFilterInput>;
  LinkedINVisibility?: InputMaybe<TableStringFilterInput>;
  MetaMaskEnabled?: InputMaybe<TableStringFilterInput>;
  MetaMaskID?: InputMaybe<TableStringFilterInput>;
  MetaMaskVisibility?: InputMaybe<TableStringFilterInput>;
  ProfilePicture?: InputMaybe<TableStringFilterInput>;
  TimeCreated?: InputMaybe<TableStringFilterInput>;
  TwitterEnabled?: InputMaybe<TableStringFilterInput>;
  TwitterID?: InputMaybe<TableStringFilterInput>;
  TwitterVisibility?: InputMaybe<TableStringFilterInput>;
};

export type TableVirtuosoVendorsFilterInput = {
  GuestlistID?: InputMaybe<TableStringFilterInput>;
  IsRealWorldVendor?: InputMaybe<TableStringFilterInput>;
  VendorBio?: InputMaybe<TableStringFilterInput>;
  VendorCreatorID?: InputMaybe<TableStringFilterInput>;
  VendorID?: InputMaybe<TableStringFilterInput>;
  VendorName?: InputMaybe<TableStringFilterInput>;
  VendorOwnerID?: InputMaybe<TableStringFilterInput>;
  VendorVisibility?: InputMaybe<TableStringFilterInput>;
  isDeactivated?: InputMaybe<TableBooleanFilterInput>;
};

export type TableVirtuosoVenuesFilterInput = {
  Address?: InputMaybe<TableStringFilterInput>;
  Android_PAKURL?: InputMaybe<TableStringFilterInput>;
  Bio?: InputMaybe<TableStringFilterInput>;
  IsRealWorldVenue?: InputMaybe<TableStringFilterInput>;
  Linux_PAKURL?: InputMaybe<TableStringFilterInput>;
  Mac_PAKURL?: InputMaybe<TableStringFilterInput>;
  NumberOfStages?: InputMaybe<TableIntFilterInput>;
  VenueAuthor?: InputMaybe<TableStringFilterInput>;
  VenueCreatorID?: InputMaybe<TableStringFilterInput>;
  VenueID?: InputMaybe<TableStringFilterInput>;
  VenueName?: InputMaybe<TableStringFilterInput>;
  VenueOwnerID?: InputMaybe<TableStringFilterInput>;
  VenueProfileCover?: InputMaybe<TableStringFilterInput>;
  VenueProfileImages?: InputMaybe<TableStringFilterInput>;
  VenueTimeCreated?: InputMaybe<TableStringFilterInput>;
  VenueUMAP_Name?: InputMaybe<TableStringFilterInput>;
  Windows_PAKURL?: InputMaybe<TableStringFilterInput>;
  iOS_PAKURL?: InputMaybe<TableStringFilterInput>;
  isDeactivated?: InputMaybe<TableBooleanFilterInput>;
};

export type UmapConfig = {
  __typename?: 'UmapConfig';
  android?: Maybe<Scalars['String']['output']>;
  ios?: Maybe<Scalars['String']['output']>;
  linux?: Maybe<Scalars['String']['output']>;
  linux_dedicated?: Maybe<Scalars['String']['output']>;
  mac?: Maybe<Scalars['String']['output']>;
  windows?: Maybe<Scalars['String']['output']>;
};

export type UmapConfigInput = {
  android?: InputMaybe<Scalars['String']['input']>;
  ios?: InputMaybe<Scalars['String']['input']>;
  linux?: InputMaybe<Scalars['String']['input']>;
  linux_dedicated?: InputMaybe<Scalars['String']['input']>;
  mac?: InputMaybe<Scalars['String']['input']>;
  windows?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAgentInput = {
  BroadcastAddress?: InputMaybe<Scalars['String']['input']>;
  EventID?: InputMaybe<Scalars['String']['input']>;
  Health?: InputMaybe<Scalars['String']['input']>;
  Hostname?: InputMaybe<Scalars['String']['input']>;
  IPAddress?: InputMaybe<Scalars['String']['input']>;
  IsStreaming?: InputMaybe<Scalars['Boolean']['input']>;
  LastActive?: InputMaybe<Scalars['String']['input']>;
  LastError?: InputMaybe<Scalars['String']['input']>;
  MACAddress?: InputMaybe<Scalars['String']['input']>;
  OBSStatus?: InputMaybe<Scalars['String']['input']>;
  OBSVersion?: InputMaybe<Scalars['String']['input']>;
  OS?: InputMaybe<Scalars['String']['input']>;
  Region?: InputMaybe<Scalars['String']['input']>;
  StartTime?: InputMaybe<Scalars['String']['input']>;
  Tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  UptimeSeconds?: InputMaybe<Scalars['Int']['input']>;
  VenueID?: InputMaybe<Scalars['String']['input']>;
  Version?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  raspBroadcastAddress?: InputMaybe<Scalars['String']['input']>;
  raspEventID?: InputMaybe<Scalars['String']['input']>;
  raspHealth?: InputMaybe<Scalars['String']['input']>;
  raspIPAddress?: InputMaybe<Scalars['String']['input']>;
  raspLastHeartbeat?: InputMaybe<Scalars['String']['input']>;
  raspServerTime?: InputMaybe<Scalars['String']['input']>;
  raspStartTime?: InputMaybe<Scalars['String']['input']>;
  raspTimezone?: InputMaybe<Scalars['String']['input']>;
  raspUpcomingEvents?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  raspUpcomingStartTimes?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
  raspUptime?: InputMaybe<Scalars['Int']['input']>;
  raspVenueID?: InputMaybe<Scalars['String']['input']>;
  raspVersion?: InputMaybe<Scalars['String']['input']>;
  serverTime?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  upcomingEvents?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  upcomingStartTimes?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >;
};

export type UpdateAssetInput = {
  assetId?: InputMaybe<Scalars['String']['input']>;
  assetType: Scalars['String']['input'];
  orderId: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type UpdateChatRoomsInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCommentInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  postId: Scalars['String']['input'];
  replyIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateDirectMessageInput = {
  attachments?: InputMaybe<Array<Scalars['String']['input']>>;
  audio?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  dmId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  reactions?: InputMaybe<Array<Scalars['String']['input']>>;
  receiverId?: InputMaybe<Scalars['String']['input']>;
  reported?: InputMaybe<Scalars['Boolean']['input']>;
  senderId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateFriendRequestInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  data?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  receiver?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFriendsTableInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  friendId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type UpdateNotificationInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  read?: InputMaybe<Scalars['Boolean']['input']>;
  receiverId?: InputMaybe<Scalars['String']['input']>;
  senderId?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateOrderInput = {
  amount?: InputMaybe<AmountInput>;
  buyerID?: InputMaybe<Scalars['String']['input']>;
  cart?: InputMaybe<Array<InputMaybe<CartItemInput>>>;
  id: Scalars['ID']['input'];
  paymentID?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateOwnershipInput = {
  sub: Scalars['ID']['input'];
};

export type UpdatePaymentInput = {
  amount?: InputMaybe<Scalars['String']['input']>;
  amount_capturable?: InputMaybe<Scalars['String']['input']>;
  amount_details?: InputMaybe<Scalars['String']['input']>;
  amount_received?: InputMaybe<Scalars['String']['input']>;
  application?: InputMaybe<Scalars['String']['input']>;
  application_fee_amount?: InputMaybe<Scalars['String']['input']>;
  automatic_payment_methods?: InputMaybe<Scalars['String']['input']>;
  canceled_at?: InputMaybe<Scalars['String']['input']>;
  cancellation_reason?: InputMaybe<Scalars['String']['input']>;
  capture_method?: InputMaybe<Scalars['String']['input']>;
  client_secret?: InputMaybe<Scalars['String']['input']>;
  confirmation_method?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  customer?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  invoice?: InputMaybe<Scalars['String']['input']>;
  last_payment_error?: InputMaybe<Scalars['String']['input']>;
  latest_charge?: InputMaybe<Scalars['String']['input']>;
  livemode?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<PaymentMetadataInput>;
  next_action?: InputMaybe<Scalars['String']['input']>;
  object?: InputMaybe<Scalars['String']['input']>;
  on_behalf_of?: InputMaybe<Scalars['String']['input']>;
  payment_method?: InputMaybe<Scalars['String']['input']>;
  payment_method_options?: InputMaybe<Scalars['String']['input']>;
  payment_method_types?: InputMaybe<Scalars['String']['input']>;
  processing?: InputMaybe<Scalars['String']['input']>;
  receipt_email?: InputMaybe<Scalars['String']['input']>;
  review?: InputMaybe<Scalars['String']['input']>;
  setup_future_usage?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Scalars['String']['input']>;
  statement_descriptor?: InputMaybe<Scalars['String']['input']>;
  statement_descriptor_suffix?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  transfer_data?: InputMaybe<Scalars['String']['input']>;
  transfer_group?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePostInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  likes?: InputMaybe<Scalars['Int']['input']>;
  pageId: Scalars['ID']['input'];
  shares?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdatePostLikesInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  postId: Scalars['String']['input'];
};

export type UpdatePromocodeInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  amount_off?: InputMaybe<Scalars['Int']['input']>;
  appliesTo?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  max_redemptions?: InputMaybe<Scalars['Int']['input']>;
  percent_off?: InputMaybe<Scalars['Int']['input']>;
  times_redeemed?: InputMaybe<Scalars['Int']['input']>;
  uniquePerUser?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateRecordingInput = {
  eventId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  livestreamId?: InputMaybe<Scalars['String']['input']>;
  max_resolution_tier?: InputMaybe<Scalars['String']['input']>;
  playback_id?: InputMaybe<Scalars['String']['input']>;
  stageId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  test?: InputMaybe<Scalars['Boolean']['input']>;
  venueId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStreamConfigurationsInput = {
  creatorID?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  playbackURL?: InputMaybe<Scalars['String']['input']>;
  stageId?: InputMaybe<Scalars['String']['input']>;
  streamID: Scalars['String']['input'];
  streamKey?: InputMaybe<Scalars['String']['input']>;
  streamName?: InputMaybe<Scalars['String']['input']>;
  streamType?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
  venueId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStreamRecordingInput = {
  duration?: InputMaybe<Scalars['Float']['input']>;
  eventId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  livestreamId?: InputMaybe<Scalars['String']['input']>;
  max_resolution_tier?: InputMaybe<Scalars['String']['input']>;
  playback_id?: InputMaybe<Scalars['String']['input']>;
  stageId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  test?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  venueId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSupportTicketInput = {
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  priority?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateUserAssetInput = {
  Android_PAKURL?: InputMaybe<Scalars['String']['input']>;
  AssetOwnerID?: InputMaybe<Scalars['String']['input']>;
  AssetUMAP_Name?: InputMaybe<Scalars['String']['input']>;
  Linux_Dedicated_Server_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Linux_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Mac_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Windows_PAKURL?: InputMaybe<Scalars['String']['input']>;
  accessibility?: InputMaybe<Scalars['String']['input']>;
  assetType?: InputMaybe<Scalars['String']['input']>;
  creatorId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  iOS_PAKURL?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  image?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  isNFT?: InputMaybe<Scalars['Boolean']['input']>;
  materialsID?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  nftURL?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['String']['input']>;
  rating?: InputMaybe<Scalars['String']['input']>;
  umapConfig?: InputMaybe<UmapConfigInput>;
  vendorPageId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInput = {
  about?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<InputMaybe<ContactInput>>>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  avatar_config?: InputMaybe<Scalars['String']['input']>;
  connectedStripeAccountId?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sub: Scalars['String']['input'];
  subscriptionEnd?: InputMaybe<Scalars['String']['input']>;
  subscriptionId?: InputMaybe<Scalars['String']['input']>;
  subscriptionStart?: InputMaybe<Scalars['String']['input']>;
  subscriptionStatus?: InputMaybe<Scalars['String']['input']>;
  trialEnd?: InputMaybe<Scalars['String']['input']>;
  trialStart?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVirtuosoAccountRelationshipsInput = {
  DateCreated?: InputMaybe<Scalars['String']['input']>;
  FromCreatorID?: InputMaybe<Scalars['String']['input']>;
  OwnedAssetID?: InputMaybe<Scalars['String']['input']>;
  RelationshipType?: InputMaybe<Scalars['String']['input']>;
  ToCreatorID?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type UpdateVirtuosoAccountStatusInput = {
  AccountVisibility?: InputMaybe<Scalars['String']['input']>;
  ActiveDLCID?: InputMaybe<Scalars['String']['input']>;
  ActivePerformer?: InputMaybe<Scalars['String']['input']>;
  ActivePlatform?: InputMaybe<Scalars['String']['input']>;
  ActiveStage?: InputMaybe<Scalars['String']['input']>;
  ChatMode?: InputMaybe<Scalars['String']['input']>;
  CreatorID: Scalars['String']['input'];
  InGameVisibility?: InputMaybe<Scalars['String']['input']>;
  IsOnline?: InputMaybe<Scalars['String']['input']>;
  UserStatus?: InputMaybe<Scalars['String']['input']>;
  VoiceChatChannelD?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVirtuosoActiveServersInput = {
  active_viewers?: InputMaybe<Scalars['String']['input']>;
  awsgamesession?: InputMaybe<Scalars['String']['input']>;
  event_id?: InputMaybe<Scalars['String']['input']>;
  ip_address?: InputMaybe<Scalars['String']['input']>;
  port?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['String']['input']>;
  server_id: Scalars['String']['input'];
  server_number?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVirtuosoCreatorsInput = {
  CreatorBio?: InputMaybe<Scalars['String']['input']>;
  CreatorCategory?: InputMaybe<Scalars['String']['input']>;
  CreatorCover?: InputMaybe<Scalars['String']['input']>;
  CreatorGuestlistID?: InputMaybe<Scalars['String']['input']>;
  CreatorID: Scalars['String']['input'];
  CreatorImage?: InputMaybe<Scalars['String']['input']>;
  CreatorLocationID?: InputMaybe<Scalars['String']['input']>;
  CreatorName?: InputMaybe<Scalars['String']['input']>;
  CreatorOwnerID?: InputMaybe<Scalars['String']['input']>;
  CreatorStartDate?: InputMaybe<Scalars['String']['input']>;
  CreatorVisibility?: InputMaybe<Scalars['String']['input']>;
  isDeactivated?: InputMaybe<Scalars['Boolean']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateVirtuosoEventsInput = {
  EndTime?: InputMaybe<Scalars['String']['input']>;
  EventCategory?: InputMaybe<Scalars['String']['input']>;
  EventCreatorID?: InputMaybe<Scalars['String']['input']>;
  EventDate?: InputMaybe<Scalars['String']['input']>;
  EventDescription?: InputMaybe<Scalars['String']['input']>;
  EventID: Scalars['String']['input'];
  EventImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  EventLineupID?: InputMaybe<Scalars['String']['input']>;
  EventName?: InputMaybe<Scalars['String']['input']>;
  EventOwnerID?: InputMaybe<Scalars['String']['input']>;
  EventTimeCreated?: InputMaybe<Scalars['String']['input']>;
  GuestlistID?: InputMaybe<Scalars['String']['input']>;
  OrganizerID?: InputMaybe<Scalars['String']['input']>;
  PaymentFlowID?: InputMaybe<Scalars['String']['input']>;
  Price?: InputMaybe<Scalars['String']['input']>;
  RealTicketLink?: InputMaybe<Scalars['String']['input']>;
  Replayable?: InputMaybe<Scalars['String']['input']>;
  ServerInstancingEnabled?: InputMaybe<Scalars['String']['input']>;
  ShowAccessVisibility?: InputMaybe<Scalars['String']['input']>;
  SitemapID?: InputMaybe<Scalars['String']['input']>;
  StageStreamMaps?: InputMaybe<Array<InputMaybe<StageStreamMapInput>>>;
  StartTime?: InputMaybe<Scalars['String']['input']>;
  StreamingConfigurationID?: InputMaybe<Scalars['String']['input']>;
  TicketItemID?: InputMaybe<Scalars['String']['input']>;
  VenueID?: InputMaybe<Scalars['String']['input']>;
  VenueLocation?: InputMaybe<Scalars['String']['input']>;
  defaultPlaybackId?: InputMaybe<Scalars['String']['input']>;
  isEventLive?: InputMaybe<Scalars['Boolean']['input']>;
  isLive?: InputMaybe<Scalars['Boolean']['input']>;
  isRealEvent?: InputMaybe<Scalars['Boolean']['input']>;
  isRecording?: InputMaybe<Scalars['Boolean']['input']>;
  isVipEntryAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  showCreator?: InputMaybe<Scalars['Boolean']['input']>;
  showOrganizer?: InputMaybe<Scalars['Boolean']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  vipPrice?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVirtuosoInvitationsInput = {
  ActiveServerID?: InputMaybe<Scalars['String']['input']>;
  DateCreated?: InputMaybe<Scalars['String']['input']>;
  EventID?: InputMaybe<Scalars['String']['input']>;
  ExpirationLimit?: InputMaybe<Scalars['String']['input']>;
  FromCreatorID?: InputMaybe<Scalars['String']['input']>;
  InvitationType?: InputMaybe<Scalars['String']['input']>;
  ToCreatorID?: InputMaybe<Scalars['String']['input']>;
  VoiceChatChannelD?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type UpdateVirtuosoSiteMapsInput = {
  Android_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Linux_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Mac_PAKURL?: InputMaybe<Scalars['String']['input']>;
  SiteMapCreatorID?: InputMaybe<Scalars['String']['input']>;
  SiteMapDateCreated?: InputMaybe<Scalars['String']['input']>;
  SiteMapDescription?: InputMaybe<Scalars['String']['input']>;
  SiteMapGuestlistID?: InputMaybe<Scalars['String']['input']>;
  SiteMapID: Scalars['String']['input'];
  SiteMapImage?: InputMaybe<Scalars['String']['input']>;
  SiteMapName?: InputMaybe<Scalars['String']['input']>;
  SiteMapOwnerID?: InputMaybe<Scalars['String']['input']>;
  SiteMapUMAP_Name?: InputMaybe<Scalars['String']['input']>;
  SiteMapVenueID?: InputMaybe<Scalars['String']['input']>;
  Windows_PAKURL?: InputMaybe<Scalars['String']['input']>;
  iOS_PAKURL?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  umapConfig?: InputMaybe<UmapConfigInput>;
};

export type UpdateVirtuosoStagesInput = {
  StageAuthor?: InputMaybe<Scalars['String']['input']>;
  StageCreatorID?: InputMaybe<Scalars['String']['input']>;
  StageDescription?: InputMaybe<Scalars['String']['input']>;
  StageGuestlistID?: InputMaybe<Scalars['String']['input']>;
  StageID: Scalars['String']['input'];
  StageImage?: InputMaybe<Scalars['String']['input']>;
  StageIndex?: InputMaybe<Scalars['String']['input']>;
  StageName?: InputMaybe<Scalars['String']['input']>;
  StageOwnerID?: InputMaybe<Scalars['String']['input']>;
  StageUMAP_Name?: InputMaybe<Scalars['String']['input']>;
  VenueID?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVirtuosoTicketsInput = {
  CreatedAt?: InputMaybe<Scalars['String']['input']>;
  EventID?: InputMaybe<Scalars['String']['input']>;
  ItemID?: InputMaybe<Scalars['String']['input']>;
  NumberOfTicket?: InputMaybe<Scalars['Int']['input']>;
  PaymentIntentID?: InputMaybe<Scalars['String']['input']>;
  TicketID: Scalars['ID']['input'];
  Type?: InputMaybe<Scalars['String']['input']>;
  UserID?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVirtuosoUserAttributesInput = {
  AccountCreationMethod?: InputMaybe<Scalars['String']['input']>;
  AccountVisibility?: InputMaybe<Scalars['String']['input']>;
  ActualName?: InputMaybe<Scalars['String']['input']>;
  AvatarConfiguration?: InputMaybe<Scalars['String']['input']>;
  Bio?: InputMaybe<Scalars['String']['input']>;
  CreatorID: Scalars['String']['input'];
  DateCreated?: InputMaybe<Scalars['String']['input']>;
  DisplayName?: InputMaybe<Scalars['String']['input']>;
  HeaderImage?: InputMaybe<Scalars['String']['input']>;
  LinkedINEnabled?: InputMaybe<Scalars['String']['input']>;
  LinkedINID?: InputMaybe<Scalars['String']['input']>;
  LinkedINVisibility?: InputMaybe<Scalars['String']['input']>;
  MetaMaskEnabled?: InputMaybe<Scalars['String']['input']>;
  MetaMaskID?: InputMaybe<Scalars['String']['input']>;
  MetaMaskVisibility?: InputMaybe<Scalars['String']['input']>;
  ProfilePicture?: InputMaybe<Scalars['String']['input']>;
  TimeCreated?: InputMaybe<Scalars['String']['input']>;
  TwitterEnabled?: InputMaybe<Scalars['String']['input']>;
  TwitterID?: InputMaybe<Scalars['String']['input']>;
  TwitterVisibility?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVirtuosoVendorsInput = {
  GuestlistID?: InputMaybe<Scalars['String']['input']>;
  IsRealWorldVendor?: InputMaybe<Scalars['String']['input']>;
  VendorBio?: InputMaybe<Scalars['String']['input']>;
  VendorCover?: InputMaybe<Scalars['String']['input']>;
  VendorCreatorID?: InputMaybe<Scalars['String']['input']>;
  VendorID: Scalars['String']['input'];
  VendorImage?: InputMaybe<Scalars['String']['input']>;
  VendorName?: InputMaybe<Scalars['String']['input']>;
  VendorOwnerID?: InputMaybe<Scalars['String']['input']>;
  VendorVisibility?: InputMaybe<Scalars['String']['input']>;
  isDeactivated?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UpdateVirtuosoVenuesInput = {
  Address?: InputMaybe<Scalars['String']['input']>;
  Android_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Bio?: InputMaybe<Scalars['String']['input']>;
  IsRealWorldVenue?: InputMaybe<Scalars['String']['input']>;
  Linux_Dedicated_Server_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Linux_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Mac_PAKURL?: InputMaybe<Scalars['String']['input']>;
  NumberOfStages?: InputMaybe<Scalars['Int']['input']>;
  StageNames?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  VenueAuthor?: InputMaybe<Scalars['String']['input']>;
  VenueCreatorID?: InputMaybe<Scalars['String']['input']>;
  VenueID: Scalars['String']['input'];
  VenueImages?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  VenueName?: InputMaybe<Scalars['String']['input']>;
  VenueOwnerID?: InputMaybe<Scalars['String']['input']>;
  VenueProfileCover?: InputMaybe<Scalars['String']['input']>;
  VenueProfileImage?: InputMaybe<Scalars['String']['input']>;
  VenueProfileImages?: InputMaybe<Scalars['String']['input']>;
  VenueTimeCreated?: InputMaybe<Scalars['String']['input']>;
  VenueUMAP_Name?: InputMaybe<Scalars['String']['input']>;
  Windows_PAKURL?: InputMaybe<Scalars['String']['input']>;
  iOS_PAKURL?: InputMaybe<Scalars['String']['input']>;
  isDeactivated?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
  umapConfig?: InputMaybe<UmapConfigInput>;
};

export type User = {
  __typename?: 'User';
  about?: Maybe<Scalars['String']['output']>;
  accountStatus?: Maybe<VirtuosoAccountStatus>;
  addresses?: Maybe<Array<Maybe<Contact>>>;
  avatar?: Maybe<Scalars['String']['output']>;
  avatar_config?: Maybe<Scalars['String']['output']>;
  connectedStripeAccountId?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  friends?: Maybe<FriendsTableConnection>;
  gender?: Maybe<Scalars['String']['output']>;
  hasSentRequestToUser?: Maybe<Scalars['Boolean']['output']>;
  isFriendOfUser?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  posts?: Maybe<PostConnection>;
  savedPosts?: Maybe<Array<Maybe<Post>>>;
  stripeCustomerId?: Maybe<Scalars['String']['output']>;
  sub: Scalars['String']['output'];
  subscriptionEnd?: Maybe<Scalars['String']['output']>;
  subscriptionId?: Maybe<Scalars['String']['output']>;
  subscriptionStart?: Maybe<Scalars['String']['output']>;
  subscriptionStatus?: Maybe<Scalars['String']['output']>;
  trialEnd?: Maybe<Scalars['String']['output']>;
  trialStart?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type UserHasSentRequestToUserArgs = {
  receiverId: Scalars['String']['input'];
};

export type UserIsFriendOfUserArgs = {
  friendId: Scalars['String']['input'];
};

export type UserAsset = {
  __typename?: 'UserAsset';
  Android_PAKURL?: Maybe<Scalars['String']['output']>;
  AssetOwnerID?: Maybe<Scalars['String']['output']>;
  AssetUMAP_Name?: Maybe<Scalars['String']['output']>;
  Linux_Dedicated_Server_PAKURL?: Maybe<Scalars['String']['output']>;
  Linux_PAKURL?: Maybe<Scalars['String']['output']>;
  Mac_PAKURL?: Maybe<Scalars['String']['output']>;
  Windows_PAKURL?: Maybe<Scalars['String']['output']>;
  accessibility?: Maybe<Scalars['String']['output']>;
  assetType: Scalars['String']['output'];
  creatorId?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  iOS_PAKURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  isNFT?: Maybe<Scalars['Boolean']['output']>;
  isOwnedByUser?: Maybe<Scalars['Boolean']['output']>;
  materialsID?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nftURL?: Maybe<Scalars['String']['output']>;
  price: Scalars['String']['output'];
  productName: Scalars['String']['output'];
  quantity?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['String']['output']>;
  umapConfig?: Maybe<UmapConfig>;
  vendor?: Maybe<VirtuosoVendors>;
  vendorPageId?: Maybe<Scalars['String']['output']>;
};

export type UserAssetIsOwnedByUserArgs = {
  sub?: InputMaybe<Scalars['String']['input']>;
};

export type UserAssetConnection = {
  __typename?: 'UserAssetConnection';
  items?: Maybe<Array<Maybe<UserAsset>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  items?: Maybe<Array<Maybe<User>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoAccountRelationships = {
  __typename?: 'VirtuosoAccountRelationships';
  DateCreated?: Maybe<Scalars['String']['output']>;
  FromCreatorID?: Maybe<Scalars['String']['output']>;
  OwnedAssetID?: Maybe<Scalars['String']['output']>;
  RelationshipType?: Maybe<Scalars['String']['output']>;
  ToCreatorID?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
};

export type VirtuosoAccountRelationshipsConnection = {
  __typename?: 'VirtuosoAccountRelationshipsConnection';
  items?: Maybe<Array<Maybe<VirtuosoAccountRelationships>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoAccountStatus = {
  __typename?: 'VirtuosoAccountStatus';
  AccountVisibility?: Maybe<Scalars['String']['output']>;
  ActiveDLCID?: Maybe<Scalars['String']['output']>;
  ActivePerformer?: Maybe<Scalars['String']['output']>;
  ActivePlatform?: Maybe<Scalars['String']['output']>;
  ActiveStage?: Maybe<Scalars['String']['output']>;
  ChatMode?: Maybe<Scalars['String']['output']>;
  CreatorID: Scalars['String']['output'];
  InGameVisibility?: Maybe<Scalars['String']['output']>;
  IsOnline?: Maybe<Scalars['String']['output']>;
  UserStatus?: Maybe<Scalars['String']['output']>;
  VoiceChatChannelD?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoAccountStatusConnection = {
  __typename?: 'VirtuosoAccountStatusConnection';
  items?: Maybe<Array<Maybe<VirtuosoAccountStatus>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoActiveServers = {
  __typename?: 'VirtuosoActiveServers';
  active_viewers?: Maybe<Scalars['String']['output']>;
  awsgamesession?: Maybe<Scalars['String']['output']>;
  event_id?: Maybe<Scalars['String']['output']>;
  ip_address?: Maybe<Scalars['String']['output']>;
  port?: Maybe<Scalars['String']['output']>;
  region?: Maybe<Scalars['String']['output']>;
  server_id: Scalars['String']['output'];
  server_number?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoActiveServersConnection = {
  __typename?: 'VirtuosoActiveServersConnection';
  items?: Maybe<Array<Maybe<VirtuosoActiveServers>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoCreators = {
  __typename?: 'VirtuosoCreators';
  CreatorBio?: Maybe<Scalars['String']['output']>;
  CreatorCategory?: Maybe<Scalars['String']['output']>;
  CreatorCover?: Maybe<Scalars['String']['output']>;
  CreatorGuestlistID?: Maybe<Scalars['String']['output']>;
  CreatorID: Scalars['String']['output'];
  CreatorImage?: Maybe<Scalars['String']['output']>;
  CreatorLocationID?: Maybe<Scalars['String']['output']>;
  CreatorName?: Maybe<Scalars['String']['output']>;
  CreatorOwnerID?: Maybe<Scalars['String']['output']>;
  CreatorStartDate?: Maybe<Scalars['String']['output']>;
  CreatorVisibility?: Maybe<Scalars['String']['output']>;
  followerCount?: Maybe<Scalars['Int']['output']>;
  followers?: Maybe<VirtuosoPageFollowConnection>;
  isDeactivated?: Maybe<Scalars['Boolean']['output']>;
  isDisabled?: Maybe<Scalars['Boolean']['output']>;
  isFollowedByUser?: Maybe<Scalars['Boolean']['output']>;
  posts?: Maybe<PostConnection>;
};

export type VirtuosoCreatorsFollowersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type VirtuosoCreatorsIsFollowedByUserArgs = {
  userId: Scalars['String']['input'];
};

export type VirtuosoCreatorsPostsArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VirtuosoCreatorsConnection = {
  __typename?: 'VirtuosoCreatorsConnection';
  items?: Maybe<Array<Maybe<VirtuosoCreators>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoEvents = {
  __typename?: 'VirtuosoEvents';
  EndTime?: Maybe<Scalars['String']['output']>;
  EventCategory?: Maybe<Scalars['String']['output']>;
  EventCreatorID?: Maybe<Scalars['String']['output']>;
  EventCreatorPageId?: Maybe<Scalars['String']['output']>;
  EventDate?: Maybe<Scalars['String']['output']>;
  EventDescription?: Maybe<Scalars['String']['output']>;
  EventID: Scalars['String']['output'];
  EventImages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  EventLineupID?: Maybe<Scalars['String']['output']>;
  EventName?: Maybe<Scalars['String']['output']>;
  EventOwnerID?: Maybe<Scalars['String']['output']>;
  EventTimeCreated?: Maybe<Scalars['String']['output']>;
  GuestlistID?: Maybe<Scalars['String']['output']>;
  OrganizerID?: Maybe<Scalars['String']['output']>;
  PaymentFlowID?: Maybe<Scalars['String']['output']>;
  Price?: Maybe<Scalars['String']['output']>;
  RealTicketLink?: Maybe<Scalars['String']['output']>;
  Replayable?: Maybe<Scalars['String']['output']>;
  ServerInstancingEnabled?: Maybe<Scalars['String']['output']>;
  ShowAccessVisibility?: Maybe<Scalars['String']['output']>;
  SitemapID?: Maybe<Scalars['String']['output']>;
  StageStreamMaps?: Maybe<Array<Maybe<StageStreamMap>>>;
  StartTime?: Maybe<Scalars['String']['output']>;
  StreamingConfigurationID?: Maybe<Scalars['String']['output']>;
  TicketItemID?: Maybe<Scalars['String']['output']>;
  VenueID?: Maybe<Scalars['String']['output']>;
  VenueLocation?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
  creatorPage?: Maybe<VirtuosoCreators>;
  defaultPlaybackId?: Maybe<Scalars['String']['output']>;
  eventCreator?: Maybe<User>;
  eventOwner?: Maybe<User>;
  isEventLive?: Maybe<Scalars['Boolean']['output']>;
  isLive?: Maybe<Scalars['Boolean']['output']>;
  isRealEvent?: Maybe<Scalars['Boolean']['output']>;
  isRecording?: Maybe<Scalars['Boolean']['output']>;
  isTicketOwnedByUser?: Maybe<Scalars['Boolean']['output']>;
  isVipEntryAllowed?: Maybe<Scalars['Boolean']['output']>;
  organizer?: Maybe<User>;
  showCreator?: Maybe<Scalars['Boolean']['output']>;
  showOrganizer?: Maybe<Scalars['Boolean']['output']>;
  sitemap?: Maybe<VirtuosoSiteMaps>;
  streamingConfiguration?: Maybe<StreamConfigurations>;
  timezone?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
  venue?: Maybe<VirtuosoVenues>;
  vipPrice?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoEventsIsTicketOwnedByUserArgs = {
  sub?: InputMaybe<Scalars['String']['input']>;
};

export type VirtuosoEventsConnection = {
  __typename?: 'VirtuosoEventsConnection';
  items?: Maybe<Array<Maybe<VirtuosoEvents>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoInvitations = {
  __typename?: 'VirtuosoInvitations';
  ActiveServerID?: Maybe<Scalars['String']['output']>;
  DateCreated?: Maybe<Scalars['String']['output']>;
  EventID?: Maybe<Scalars['String']['output']>;
  ExpirationLimit?: Maybe<Scalars['String']['output']>;
  FromCreatorID?: Maybe<Scalars['String']['output']>;
  InvitationType?: Maybe<Scalars['String']['output']>;
  ToCreatorID?: Maybe<Scalars['String']['output']>;
  VoiceChatChannelD?: Maybe<Scalars['String']['output']>;
  activeServer?: Maybe<VirtuosoActiveServers>;
  event?: Maybe<VirtuosoEvents>;
  fromCreator?: Maybe<User>;
  id: Scalars['String']['output'];
};

export type VirtuosoInvitationsConnection = {
  __typename?: 'VirtuosoInvitationsConnection';
  items?: Maybe<Array<Maybe<VirtuosoInvitations>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoPageFollow = {
  __typename?: 'VirtuosoPageFollow';
  pageId: Scalars['String']['output'];
  pageType: Scalars['String']['output'];
  user?: Maybe<User>;
  userId: Scalars['String']['output'];
};

export type VirtuosoPageFollowConnection = {
  __typename?: 'VirtuosoPageFollowConnection';
  items?: Maybe<Array<Maybe<VirtuosoPageFollow>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoSiteMaps = {
  __typename?: 'VirtuosoSiteMaps';
  Android_PAKURL?: Maybe<Scalars['String']['output']>;
  Linux_PAKURL?: Maybe<Scalars['String']['output']>;
  Mac_PAKURL?: Maybe<Scalars['String']['output']>;
  SiteMapCreatorID?: Maybe<Scalars['String']['output']>;
  SiteMapDateCreated?: Maybe<Scalars['String']['output']>;
  SiteMapDescription?: Maybe<Scalars['String']['output']>;
  SiteMapGuestlistID?: Maybe<Scalars['String']['output']>;
  SiteMapID: Scalars['String']['output'];
  SiteMapImage?: Maybe<Scalars['String']['output']>;
  SiteMapName?: Maybe<Scalars['String']['output']>;
  SiteMapOwnerID?: Maybe<Scalars['String']['output']>;
  SiteMapUMAP_Name?: Maybe<Scalars['String']['output']>;
  SiteMapVenueID?: Maybe<Scalars['String']['output']>;
  Windows_PAKURL?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  iOS_PAKURL?: Maybe<Scalars['String']['output']>;
  isOwnedByUser?: Maybe<Scalars['Boolean']['output']>;
  price?: Maybe<Scalars['Int']['output']>;
  umapConfig?: Maybe<UmapConfig>;
  updatedAt: Scalars['String']['output'];
  venue?: Maybe<VirtuosoVenues>;
};

export type VirtuosoSiteMapsIsOwnedByUserArgs = {
  sub?: InputMaybe<Scalars['String']['input']>;
};

export type VirtuosoSiteMapsConnection = {
  __typename?: 'VirtuosoSiteMapsConnection';
  items?: Maybe<Array<Maybe<VirtuosoSiteMaps>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoStages = {
  __typename?: 'VirtuosoStages';
  StageAuthor?: Maybe<Scalars['String']['output']>;
  StageCreatorID?: Maybe<Scalars['String']['output']>;
  StageDescription?: Maybe<Scalars['String']['output']>;
  StageGuestlistID?: Maybe<Scalars['String']['output']>;
  StageID: Scalars['String']['output'];
  StageImage?: Maybe<Scalars['String']['output']>;
  StageIndex?: Maybe<Scalars['String']['output']>;
  StageName?: Maybe<Scalars['String']['output']>;
  StageOwnerID?: Maybe<Scalars['String']['output']>;
  StageUMAP_Name?: Maybe<Scalars['String']['output']>;
  VenueID?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoStagesConnection = {
  __typename?: 'VirtuosoStagesConnection';
  items?: Maybe<Array<Maybe<VirtuosoStages>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoTickets = {
  __typename?: 'VirtuosoTickets';
  Event?: Maybe<VirtuosoEvents>;
  EventID?: Maybe<Scalars['String']['output']>;
  ItemID?: Maybe<Scalars['String']['output']>;
  NumberOfTicket?: Maybe<Scalars['Int']['output']>;
  PaymentIntentID?: Maybe<Scalars['String']['output']>;
  Price?: Maybe<Scalars['String']['output']>;
  TicketID: Scalars['ID']['output'];
  Type?: Maybe<Scalars['String']['output']>;
  UserID?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoTicketsConnection = {
  __typename?: 'VirtuosoTicketsConnection';
  items?: Maybe<Array<Maybe<VirtuosoTickets>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoUserAttributes = {
  __typename?: 'VirtuosoUserAttributes';
  AccountCreationMethod?: Maybe<Scalars['String']['output']>;
  AccountVisibility?: Maybe<Scalars['String']['output']>;
  ActualName?: Maybe<Scalars['String']['output']>;
  AvatarConfiguration?: Maybe<Scalars['String']['output']>;
  Bio?: Maybe<Scalars['String']['output']>;
  CreatorID: Scalars['String']['output'];
  DateCreated?: Maybe<Scalars['String']['output']>;
  DisplayName?: Maybe<Scalars['String']['output']>;
  HeaderImage?: Maybe<Scalars['String']['output']>;
  LinkedINEnabled?: Maybe<Scalars['String']['output']>;
  LinkedINID?: Maybe<Scalars['String']['output']>;
  LinkedINVisibility?: Maybe<Scalars['String']['output']>;
  MetaMaskEnabled?: Maybe<Scalars['String']['output']>;
  MetaMaskID?: Maybe<Scalars['String']['output']>;
  MetaMaskVisibility?: Maybe<Scalars['String']['output']>;
  ProfilePicture?: Maybe<Scalars['String']['output']>;
  TimeCreated?: Maybe<Scalars['String']['output']>;
  TwitterEnabled?: Maybe<Scalars['String']['output']>;
  TwitterID?: Maybe<Scalars['String']['output']>;
  TwitterVisibility?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoUserAttributesConnection = {
  __typename?: 'VirtuosoUserAttributesConnection';
  items?: Maybe<Array<Maybe<VirtuosoUserAttributes>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoVendors = {
  __typename?: 'VirtuosoVendors';
  GuestlistID?: Maybe<Scalars['String']['output']>;
  IsRealWorldVendor?: Maybe<Scalars['String']['output']>;
  VendorBio?: Maybe<Scalars['String']['output']>;
  VendorCover?: Maybe<Scalars['String']['output']>;
  VendorCreatorID?: Maybe<Scalars['String']['output']>;
  VendorID: Scalars['String']['output'];
  VendorImage?: Maybe<Scalars['String']['output']>;
  VendorName?: Maybe<Scalars['String']['output']>;
  VendorOwnerID?: Maybe<Scalars['String']['output']>;
  VendorVisibility?: Maybe<Scalars['String']['output']>;
  followerCount?: Maybe<Scalars['Int']['output']>;
  followers?: Maybe<VirtuosoPageFollowConnection>;
  isDeactivated?: Maybe<Scalars['Boolean']['output']>;
  isFollowedByUser?: Maybe<Scalars['Boolean']['output']>;
  products?: Maybe<UserAssetConnection>;
};

export type VirtuosoVendorsFollowersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type VirtuosoVendorsIsFollowedByUserArgs = {
  userId: Scalars['String']['input'];
};

export type VirtuosoVendorsConnection = {
  __typename?: 'VirtuosoVendorsConnection';
  items?: Maybe<Array<Maybe<VirtuosoVendors>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type VirtuosoVenues = {
  __typename?: 'VirtuosoVenues';
  Address?: Maybe<Scalars['String']['output']>;
  Android_PAKURL?: Maybe<Scalars['String']['output']>;
  Bio?: Maybe<Scalars['String']['output']>;
  IsRealWorldVenue?: Maybe<Scalars['String']['output']>;
  Linux_Dedicated_Server_PAKURL?: Maybe<Scalars['String']['output']>;
  Linux_PAKURL?: Maybe<Scalars['String']['output']>;
  Mac_PAKURL?: Maybe<Scalars['String']['output']>;
  NumberOfStages?: Maybe<Scalars['Int']['output']>;
  StageNames?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  VenueAuthor?: Maybe<Scalars['String']['output']>;
  VenueCreatorID?: Maybe<Scalars['String']['output']>;
  VenueID: Scalars['String']['output'];
  VenueImages?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  VenueName?: Maybe<Scalars['String']['output']>;
  VenueOwnerID?: Maybe<Scalars['String']['output']>;
  VenueProfileCover?: Maybe<Scalars['String']['output']>;
  VenueProfileImage?: Maybe<Scalars['String']['output']>;
  VenueProfileImages?: Maybe<Scalars['String']['output']>;
  VenueTimeCreated?: Maybe<Scalars['String']['output']>;
  VenueUMAP_Name?: Maybe<Scalars['String']['output']>;
  Windows_PAKURL?: Maybe<Scalars['String']['output']>;
  followerCount?: Maybe<Scalars['Int']['output']>;
  followers?: Maybe<VirtuosoPageFollowConnection>;
  iOS_PAKURL?: Maybe<Scalars['String']['output']>;
  isDeactivated?: Maybe<Scalars['Boolean']['output']>;
  isFollowedByUser?: Maybe<Scalars['Boolean']['output']>;
  isOwnedByUser?: Maybe<Scalars['Boolean']['output']>;
  posts?: Maybe<PostConnection>;
  price?: Maybe<Scalars['Int']['output']>;
};

export type VirtuosoVenuesFollowersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};

export type VirtuosoVenuesIsFollowedByUserArgs = {
  userId: Scalars['String']['input'];
};

export type VirtuosoVenuesIsOwnedByUserArgs = {
  sub?: InputMaybe<Scalars['String']['input']>;
};

export type VirtuosoVenuesPostsArgs = {
  asc?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VirtuosoVenuesConnection = {
  __typename?: 'VirtuosoVenuesConnection';
  items?: Maybe<Array<Maybe<VirtuosoVenues>>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type GetOrderedAndCreatedStagesQueryVariables = Exact<{
  BuyerID?: InputMaybe<Scalars['String']['input']>;
  AssetType?: InputMaybe<Scalars['String']['input']>;
  sub: Scalars['ID']['input'];
}>;

export type GetOrderedAndCreatedStagesQuery = {
  __typename?: 'Query';
  assets?: {
    __typename?: 'UserAssetConnection';
    items?: Array<{
      __typename?: 'UserAsset';
      id: string;
      productName: string;
      assetType: string;
    } | null> | null;
  } | null;
  order?: {
    __typename?: 'Ownership';
    stages?: {
      __typename?: 'UserAssetConnection';
      items?: Array<{
        __typename?: 'UserAsset';
        id: string;
        productName: string;
        assetType: string;
      } | null> | null;
    } | null;
  } | null;
};

export type ListCommentsOnAPostQueryVariables = Exact<{
  postId: Scalars['ID']['input'];
}>;

export type ListCommentsOnAPostQuery = {
  __typename?: 'Query';
  comments?: {
    __typename?: 'CommentConnection';
    items?: Array<{
      __typename?: 'Comment';
      id: string;
      content: string;
      createdAt?: string | null;
      replies?: {
        __typename?: 'CommentConnection';
        items?: Array<{
          __typename?: 'Comment';
          id: string;
          content: string;
          createdAt?: string | null;
          authorDetails?: {
            __typename?: 'User';
            name?: string | null;
            avatar?: string | null;
          } | null;
        } | null> | null;
      } | null;
      authorDetails?: {
        __typename?: 'User';
        name?: string | null;
        avatar?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type CommentOnAPostMutationVariables = Exact<{
  postId: Scalars['String']['input'];
  author: Scalars['String']['input'];
  content: Scalars['String']['input'];
  postAuthor: Scalars['String']['input'];
}>;

export type CommentOnAPostMutation = {
  __typename?: 'Mutation';
  newComment?: {
    __typename?: 'Comment';
    id: string;
    content: string;
    createdAt?: string | null;
    replies?: {
      __typename?: 'CommentConnection';
      items?: Array<{
        __typename?: 'Comment';
        id: string;
        content: string;
        createdAt?: string | null;
        authorDetails?: {
          __typename?: 'User';
          name?: string | null;
          avatar?: string | null;
        } | null;
      } | null> | null;
    } | null;
    authorDetails?: {
      __typename?: 'User';
      name?: string | null;
      avatar?: string | null;
    } | null;
  } | null;
};

export type ReplyOnACommentMutationVariables = Exact<{
  author: Scalars['String']['input'];
  postAuthor: Scalars['String']['input'];
  content: Scalars['String']['input'];
  parentId: Scalars['String']['input'];
  postId: Scalars['String']['input'];
}>;

export type ReplyOnACommentMutation = {
  __typename?: 'Mutation';
  reply?: {
    __typename?: 'Comment';
    id: string;
    content: string;
    createdAt?: string | null;
    authorDetails?: {
      __typename?: 'User';
      name?: string | null;
      avatar?: string | null;
    } | null;
  } | null;
};

export type DeleteACommentMutationVariables = Exact<{
  id: Scalars['String']['input'];
  postId: Scalars['String']['input'];
}>;

export type DeleteACommentMutation = {
  __typename?: 'Mutation';
  deletedComment?: { __typename?: 'Comment'; id: string } | null;
};

export type CommentDetailsFragment = {
  __typename?: 'Comment';
  id: string;
  content: string;
  createdAt?: string | null;
  replies?: {
    __typename?: 'CommentConnection';
    items?: Array<{
      __typename?: 'Comment';
      id: string;
      content: string;
      createdAt?: string | null;
      authorDetails?: {
        __typename?: 'User';
        name?: string | null;
        avatar?: string | null;
      } | null;
    } | null> | null;
  } | null;
  authorDetails?: {
    __typename?: 'User';
    name?: string | null;
    avatar?: string | null;
  } | null;
};

export type ReplyFragmentFragment = {
  __typename?: 'Comment';
  id: string;
  content: string;
  createdAt?: string | null;
  authorDetails?: {
    __typename?: 'User';
    name?: string | null;
    avatar?: string | null;
  } | null;
};

export type CommentAuthorDetailsFragment = {
  __typename?: 'User';
  name?: string | null;
  avatar?: string | null;
};

export type GetCreatorPageQueryVariables = Exact<{
  CreatorID: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;

export type GetCreatorPageQuery = {
  __typename?: 'Query';
  creator?: {
    __typename?: 'VirtuosoCreators';
    isFollowedByUser?: boolean | null;
    CreatorBio?: string | null;
    CreatorCategory?: string | null;
    CreatorGuestlistID?: string | null;
    CreatorID: string;
    CreatorLocationID?: string | null;
    CreatorName?: string | null;
    CreatorVisibility?: string | null;
    CreatorStartDate?: string | null;
    CreatorOwnerID?: string | null;
    CreatorImage?: string | null;
    CreatorCover?: string | null;
    followerCount?: number | null;
    isDisabled?: boolean | null;
    isDeactivated?: boolean | null;
    posts?: {
      __typename?: 'PostConnection';
      nextToken?: string | null;
      items?: Array<{
        __typename?: 'Post';
        author: string;
        content: string;
        id: string;
        images?: Array<string | null> | null;
        commentsCount?: number | null;
        likesCount?: number | null;
        isLikedByUser?: boolean | null;
        pageId: string;
        createdAt?: string | null;
        topComments?: {
          __typename?: 'CommentConnection';
          items?: Array<{
            __typename?: 'Comment';
            content: string;
            createdAt?: string | null;
            id: string;
            isReply?: boolean | null;
            parentId?: string | null;
            postId: string;
            authorDetails?: {
              __typename?: 'User';
              name?: string | null;
              avatar?: string | null;
              sub: string;
            } | null;
          } | null> | null;
        } | null;
        likes?: Array<{
          __typename?: 'PostLikes';
          authorDetails?: {
            __typename?: 'User';
            avatar?: string | null;
            sub: string;
            name?: string | null;
          } | null;
        } | null> | null;
        creatorPage?: {
          __typename?: 'VirtuosoCreators';
          CreatorID: string;
          CreatorName?: string | null;
          CreatorImage?: string | null;
        } | null;
        venuePage?: {
          __typename?: 'VirtuosoVenues';
          VenueID: string;
          VenueName?: string | null;
          VenueProfileImage?: string | null;
        } | null;
        authorDetails?: {
          __typename?: 'User';
          avatar?: string | null;
          name?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type ListVirtuosoCreatorsQueryVariables = Exact<{
  filter?: InputMaybe<TableVirtuosoCreatorsFilterInput>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListVirtuosoCreatorsQuery = {
  __typename?: 'Query';
  creators?: {
    __typename?: 'VirtuosoCreatorsConnection';
    nextToken?: string | null;
    items?: Array<{
      __typename?: 'VirtuosoCreators';
      CreatorBio?: string | null;
      CreatorCategory?: string | null;
      CreatorGuestlistID?: string | null;
      CreatorID: string;
      CreatorLocationID?: string | null;
      CreatorName?: string | null;
      CreatorOwnerID?: string | null;
      CreatorStartDate?: string | null;
      CreatorVisibility?: string | null;
      CreatorImage?: string | null;
      CreatorCover?: string | null;
      followerCount?: number | null;
      followers?: {
        __typename?: 'VirtuosoPageFollowConnection';
        items?: Array<{
          __typename?: 'VirtuosoPageFollow';
          pageId: string;
          pageType: string;
          userId: string;
          user?: {
            __typename?: 'User';
            avatar?: string | null;
            sub: string;
          } | null;
        } | null> | null;
      } | null;
    } | null> | null;
  } | null;
};

export type CreateCreatorPageMutationVariables = Exact<{
  CreatorBio?: InputMaybe<Scalars['String']['input']>;
  CreatorOwnerID?: InputMaybe<Scalars['String']['input']>;
  CreatorName?: InputMaybe<Scalars['String']['input']>;
  CreatorImage?: InputMaybe<Scalars['String']['input']>;
  CreatorCover?: InputMaybe<Scalars['String']['input']>;
}>;

export type CreateCreatorPageMutation = {
  __typename?: 'Mutation';
  newCreator?: {
    __typename?: 'VirtuosoCreators';
    CreatorBio?: string | null;
    CreatorCategory?: string | null;
    CreatorGuestlistID?: string | null;
    CreatorID: string;
    CreatorLocationID?: string | null;
    CreatorName?: string | null;
    CreatorVisibility?: string | null;
    CreatorStartDate?: string | null;
    CreatorOwnerID?: string | null;
    CreatorImage?: string | null;
    CreatorCover?: string | null;
    followerCount?: number | null;
    isDisabled?: boolean | null;
    isDeactivated?: boolean | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type UpdateCreatorBioMutationVariables = Exact<{
  CreatorID: Scalars['String']['input'];
  CreatorBio?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateCreatorBioMutation = {
  __typename?: 'Mutation';
  update?: {
    __typename?: 'VirtuosoCreators';
    CreatorBio?: string | null;
  } | null;
};

export type UpdateCreatorHeaderMutationVariables = Exact<{
  CreatorID: Scalars['String']['input'];
  CreatorImage?: InputMaybe<Scalars['String']['input']>;
  CreatorCover?: InputMaybe<Scalars['String']['input']>;
  CreatorName?: InputMaybe<Scalars['String']['input']>;
  CreatorBio?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateCreatorHeaderMutation = {
  __typename?: 'Mutation';
  update?: {
    __typename?: 'VirtuosoCreators';
    CreatorBio?: string | null;
    CreatorCategory?: string | null;
    CreatorGuestlistID?: string | null;
    CreatorID: string;
    CreatorLocationID?: string | null;
    CreatorName?: string | null;
    CreatorVisibility?: string | null;
    CreatorStartDate?: string | null;
    CreatorOwnerID?: string | null;
    CreatorImage?: string | null;
    CreatorCover?: string | null;
    followerCount?: number | null;
    isDisabled?: boolean | null;
    isDeactivated?: boolean | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type UpdateCreatorDisabilityMutationVariables = Exact<{
  CreatorID: Scalars['String']['input'];
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type UpdateCreatorDisabilityMutation = {
  __typename?: 'Mutation';
  VirtuosoCreator?: {
    __typename?: 'VirtuosoCreators';
    CreatorBio?: string | null;
    CreatorCategory?: string | null;
    CreatorGuestlistID?: string | null;
    CreatorID: string;
    CreatorLocationID?: string | null;
    CreatorName?: string | null;
    CreatorVisibility?: string | null;
    CreatorStartDate?: string | null;
    CreatorOwnerID?: string | null;
    CreatorImage?: string | null;
    CreatorCover?: string | null;
    followerCount?: number | null;
    isDisabled?: boolean | null;
    isDeactivated?: boolean | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type UpdateCreatorDeactivatedMutationVariables = Exact<{
  CreatorID: Scalars['String']['input'];
  isDeactivated?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type UpdateCreatorDeactivatedMutation = {
  __typename?: 'Mutation';
  VirtuosoCreator?: {
    __typename?: 'VirtuosoCreators';
    CreatorBio?: string | null;
    CreatorCategory?: string | null;
    CreatorGuestlistID?: string | null;
    CreatorID: string;
    CreatorLocationID?: string | null;
    CreatorName?: string | null;
    CreatorVisibility?: string | null;
    CreatorStartDate?: string | null;
    CreatorOwnerID?: string | null;
    CreatorImage?: string | null;
    CreatorCover?: string | null;
    followerCount?: number | null;
    isDisabled?: boolean | null;
    isDeactivated?: boolean | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type VirtuosoCreatorDetailsFragment = {
  __typename?: 'VirtuosoCreators';
  CreatorBio?: string | null;
  CreatorCategory?: string | null;
  CreatorGuestlistID?: string | null;
  CreatorID: string;
  CreatorLocationID?: string | null;
  CreatorName?: string | null;
  CreatorVisibility?: string | null;
  CreatorStartDate?: string | null;
  CreatorOwnerID?: string | null;
  CreatorImage?: string | null;
  CreatorCover?: string | null;
  followerCount?: number | null;
  isDisabled?: boolean | null;
  isDeactivated?: boolean | null;
  followers?: {
    __typename?: 'VirtuosoPageFollowConnection';
    items?: Array<{
      __typename?: 'VirtuosoPageFollow';
      pageId: string;
      pageType: string;
      userId: string;
      user?: {
        __typename?: 'User';
        avatar?: string | null;
        sub: string;
      } | null;
    } | null> | null;
  } | null;
};

export type CreatorPostFragmentFragment = {
  __typename?: 'PostConnection';
  nextToken?: string | null;
  items?: Array<{
    __typename?: 'Post';
    author: string;
    content: string;
    id: string;
    images?: Array<string | null> | null;
    commentsCount?: number | null;
    likesCount?: number | null;
    isLikedByUser?: boolean | null;
    pageId: string;
    createdAt?: string | null;
    topComments?: {
      __typename?: 'CommentConnection';
      items?: Array<{
        __typename?: 'Comment';
        content: string;
        createdAt?: string | null;
        id: string;
        isReply?: boolean | null;
        parentId?: string | null;
        postId: string;
        authorDetails?: {
          __typename?: 'User';
          name?: string | null;
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
    likes?: Array<{
      __typename?: 'PostLikes';
      authorDetails?: {
        __typename?: 'User';
        avatar?: string | null;
        sub: string;
        name?: string | null;
      } | null;
    } | null> | null;
    creatorPage?: {
      __typename?: 'VirtuosoCreators';
      CreatorID: string;
      CreatorName?: string | null;
      CreatorImage?: string | null;
    } | null;
    venuePage?: {
      __typename?: 'VirtuosoVenues';
      VenueID: string;
      VenueName?: string | null;
      VenueProfileImage?: string | null;
    } | null;
    authorDetails?: {
      __typename?: 'User';
      avatar?: string | null;
      name?: string | null;
      sub: string;
    } | null;
  } | null> | null;
};

export type CreatorPostAuthorDetailsFragment = {
  __typename?: 'User';
  avatar?: string | null;
  name?: string | null;
  sub: string;
};

export type ListDirectMessagesQueryVariables = Exact<{
  dmId: Scalars['String']['input'];
  includeSender: Scalars['Boolean']['input'];
}>;

export type ListDirectMessagesQuery = {
  __typename?: 'Query';
  dms?: {
    __typename?: 'DirectMessageConnection';
    items?: Array<{
      __typename?: 'DirectMessage';
      attachments?: Array<string> | null;
      status?: number | null;
      senderId: string;
      reported?: boolean | null;
      receiverId: string;
      images?: Array<string> | null;
      id: string;
      dmId: string;
      reactions?: Array<string> | null;
      createdAt: string;
      content: string;
      audio?: string | null;
      sender?: { __typename?: 'User'; sub: string; avatar?: string | null };
    } | null> | null;
  } | null;
};

export type UpdateDirectMessageMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  dmId: Scalars['String']['input'];
  reactions?: InputMaybe<
    Array<Scalars['String']['input']> | Scalars['String']['input']
  >;
}>;

export type UpdateDirectMessageMutation = {
  __typename?: 'Mutation';
  dm?: { __typename?: 'DirectMessage'; id: string } | null;
};

export type GetEventQueryVariables = Exact<{
  eventId: Scalars['String']['input'];
  sub?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetEventQuery = {
  __typename?: 'Query';
  getVirtuosoEvents?: {
    __typename?: 'VirtuosoEvents';
    EventCategory?: string | null;
    EventCreatorID?: string | null;
    EventDescription?: string | null;
    EventImages?: Array<string | null> | null;
    EventName?: string | null;
    isEventLive?: boolean | null;
    EventDate?: string | null;
    isLive?: boolean | null;
    StartTime?: string | null;
    EndTime?: string | null;
    VenueID?: string | null;
    isTicketOwnedByUser?: boolean | null;
    EventID: string;
    showOrganizer?: boolean | null;
    timezone?: string | null;
    showCreator?: boolean | null;
    isRecording?: boolean | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    Price?: string | null;
    SitemapID?: string | null;
    isVipEntryAllowed?: boolean | null;
    VenueLocation?: string | null;
    EventCreatorPageId?: string | null;
    isRealEvent?: boolean | null;
    RealTicketLink?: string | null;
    vipPrice?: string | null;
    creatorPage?: {
      __typename?: 'VirtuosoCreators';
      CreatorBio?: string | null;
      CreatorName?: string | null;
      CreatorImage?: string | null;
      CreatorID: string;
      CreatorCover?: string | null;
    } | null;
    sitemap?: {
      __typename?: 'VirtuosoSiteMaps';
      SiteMapID: string;
      SiteMapName?: string | null;
      SiteMapImage?: string | null;
    } | null;
    StageStreamMaps?: Array<{
      __typename?: 'StageStreamMap';
      stageID?: string | null;
      stageName?: string | null;
      streamID?: string | null;
    } | null> | null;
    venue?: {
      __typename?: 'VirtuosoVenues';
      VenueID: string;
      VenueName?: string | null;
      VenueProfileImage?: string | null;
      VenueProfileCover?: string | null;
    } | null;
    eventOwner?: {
      __typename?: 'User';
      avatar?: string | null;
      name?: string | null;
      sub: string;
    } | null;
  } | null;
};

export type DeleteVirtuosoEventMutationVariables = Exact<{
  EventId: Scalars['String']['input'];
}>;

export type DeleteVirtuosoEventMutation = {
  __typename?: 'Mutation';
  event?: { __typename?: 'VirtuosoEvents'; EventID: string } | null;
};

export type GetEventTicketStatusQueryVariables = Exact<{
  eventId: Scalars['String']['input'];
  sub: Scalars['String']['input'];
}>;

export type GetEventTicketStatusQuery = {
  __typename?: 'Query';
  getVirtuosoEvents?: {
    __typename?: 'VirtuosoEvents';
    EventID: string;
    isTicketOwnedByUser?: boolean | null;
  } | null;
};

export type ListEventsQueryVariables = Exact<{
  nextToken?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListEventsQuery = {
  __typename?: 'Query';
  events?: {
    __typename?: 'VirtuosoEventsConnection';
    nextToken?: string | null;
    items?: Array<{
      __typename?: 'VirtuosoEvents';
      EventID: string;
      EventImages?: Array<string | null> | null;
      EventName?: string | null;
      isLive?: boolean | null;
      isEventLive?: boolean | null;
      venue?: {
        __typename?: 'VirtuosoVenues';
        VenueName?: string | null;
        VenueProfileImage?: string | null;
        VenueID: string;
      } | null;
    } | null> | null;
  } | null;
};

export type GetStreamsAndRecordingsQueryVariables = Exact<{
  eventId?: InputMaybe<Scalars['String']['input']>;
  stageId?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetStreamsAndRecordingsQuery = {
  __typename?: 'Query';
  live?: {
    __typename?: 'StreamConfigurationsConnection';
    items?: Array<{
      __typename?: 'StreamConfigurations';
      streamID: string;
      playbackURL?: string | null;
      streamName?: string | null;
      isLive?: string | null;
    } | null> | null;
  } | null;
  recordings?: {
    __typename?: 'StreamRecordingConnection';
    items?: Array<{
      __typename?: 'StreamRecording';
      id: string;
      status?: string | null;
      playback_id?: string | null;
    } | null> | null;
  } | null;
};

export type ListPaginatedEventsByCategoryQueryVariables = Exact<{
  category?: InputMaybe<Scalars['String']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListPaginatedEventsByCategoryQuery = {
  __typename?: 'Query';
  events?: {
    __typename?: 'VirtuosoEventsConnection';
    nextToken?: string | null;
    items?: Array<{
      __typename?: 'VirtuosoEvents';
      EventID: string;
      EventImages?: Array<string | null> | null;
      EventName?: string | null;
      isLive?: boolean | null;
      isEventLive?: boolean | null;
      venue?: {
        __typename?: 'VirtuosoVenues';
        VenueName?: string | null;
        VenueProfileImage?: string | null;
        VenueID: string;
      } | null;
    } | null> | null;
  } | null;
};

export type ListEventsByCategoryQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListEventsByCategoryQuery = {
  __typename?: 'Query';
  music?: {
    __typename?: 'VirtuosoEventsConnection';
    items?: Array<{
      __typename?: 'VirtuosoEvents';
      EventID: string;
      EventImages?: Array<string | null> | null;
      EventName?: string | null;
      isLive?: boolean | null;
      isEventLive?: boolean | null;
      venue?: {
        __typename?: 'VirtuosoVenues';
        VenueName?: string | null;
        VenueProfileImage?: string | null;
        VenueID: string;
      } | null;
    } | null> | null;
  } | null;
  sports?: {
    __typename?: 'VirtuosoEventsConnection';
    items?: Array<{
      __typename?: 'VirtuosoEvents';
      EventID: string;
      EventImages?: Array<string | null> | null;
      EventName?: string | null;
      isLive?: boolean | null;
      isEventLive?: boolean | null;
      venue?: {
        __typename?: 'VirtuosoVenues';
        VenueName?: string | null;
        VenueProfileImage?: string | null;
        VenueID: string;
      } | null;
    } | null> | null;
  } | null;
  expos?: {
    __typename?: 'VirtuosoEventsConnection';
    items?: Array<{
      __typename?: 'VirtuosoEvents';
      EventID: string;
      EventImages?: Array<string | null> | null;
      EventName?: string | null;
      isLive?: boolean | null;
      isEventLive?: boolean | null;
      venue?: {
        __typename?: 'VirtuosoVenues';
        VenueName?: string | null;
        VenueProfileImage?: string | null;
        VenueID: string;
      } | null;
    } | null> | null;
  } | null;
  performance?: {
    __typename?: 'VirtuosoEventsConnection';
    items?: Array<{
      __typename?: 'VirtuosoEvents';
      EventID: string;
      EventImages?: Array<string | null> | null;
      EventName?: string | null;
      isLive?: boolean | null;
      isEventLive?: boolean | null;
      venue?: {
        __typename?: 'VirtuosoVenues';
        VenueName?: string | null;
        VenueProfileImage?: string | null;
        VenueID: string;
      } | null;
    } | null> | null;
  } | null;
  movies?: {
    __typename?: 'VirtuosoEventsConnection';
    items?: Array<{
      __typename?: 'VirtuosoEvents';
      EventID: string;
      EventImages?: Array<string | null> | null;
      EventName?: string | null;
      isLive?: boolean | null;
      isEventLive?: boolean | null;
      venue?: {
        __typename?: 'VirtuosoVenues';
        VenueName?: string | null;
        VenueProfileImage?: string | null;
        VenueID: string;
      } | null;
    } | null> | null;
  } | null;
  education?: {
    __typename?: 'VirtuosoEventsConnection';
    items?: Array<{
      __typename?: 'VirtuosoEvents';
      EventID: string;
      EventImages?: Array<string | null> | null;
      EventName?: string | null;
      isLive?: boolean | null;
      isEventLive?: boolean | null;
      venue?: {
        __typename?: 'VirtuosoVenues';
        VenueName?: string | null;
        VenueProfileImage?: string | null;
        VenueID: string;
      } | null;
    } | null> | null;
  } | null;
  social?: {
    __typename?: 'VirtuosoEventsConnection';
    items?: Array<{
      __typename?: 'VirtuosoEvents';
      EventID: string;
      EventImages?: Array<string | null> | null;
      EventName?: string | null;
      isLive?: boolean | null;
      isEventLive?: boolean | null;
      venue?: {
        __typename?: 'VirtuosoVenues';
        VenueName?: string | null;
        VenueProfileImage?: string | null;
        VenueID: string;
      } | null;
    } | null> | null;
  } | null;
  cities?: {
    __typename?: 'VirtuosoEventsConnection';
    items?: Array<{
      __typename?: 'VirtuosoEvents';
      EventID: string;
      EventImages?: Array<string | null> | null;
      EventName?: string | null;
      isLive?: boolean | null;
      isEventLive?: boolean | null;
      venue?: {
        __typename?: 'VirtuosoVenues';
        VenueName?: string | null;
        VenueProfileImage?: string | null;
        VenueID: string;
      } | null;
    } | null> | null;
  } | null;
  workplace?: {
    __typename?: 'VirtuosoEventsConnection';
    items?: Array<{
      __typename?: 'VirtuosoEvents';
      EventID: string;
      EventImages?: Array<string | null> | null;
      EventName?: string | null;
      isLive?: boolean | null;
      isEventLive?: boolean | null;
      venue?: {
        __typename?: 'VirtuosoVenues';
        VenueName?: string | null;
        VenueProfileImage?: string | null;
        VenueID: string;
      } | null;
    } | null> | null;
  } | null;
};

export type EventCardDetailsFragment = {
  __typename?: 'VirtuosoEventsConnection';
  items?: Array<{
    __typename?: 'VirtuosoEvents';
    EventID: string;
    EventImages?: Array<string | null> | null;
    EventName?: string | null;
    isLive?: boolean | null;
    isEventLive?: boolean | null;
    venue?: {
      __typename?: 'VirtuosoVenues';
      VenueName?: string | null;
      VenueProfileImage?: string | null;
      VenueID: string;
    } | null;
  } | null> | null;
};

export type GetVenueSitemapsAndStreamsQueryVariables = Exact<{
  VenueID: Scalars['String']['input'];
  CreatorID?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetVenueSitemapsAndStreamsQuery = {
  __typename?: 'Query';
  venue?: {
    __typename?: 'VirtuosoVenues';
    StageNames?: Array<string | null> | null;
  } | null;
  sitemaps?: {
    __typename?: 'VirtuosoSiteMapsConnection';
    items?: Array<{
      __typename?: 'VirtuosoSiteMaps';
      SiteMapName?: string | null;
      SiteMapID: string;
    } | null> | null;
  } | null;
  livestreams?: {
    __typename?: 'StreamConfigurationsConnection';
    items?: Array<{
      __typename?: 'StreamConfigurations';
      creatorID?: string | null;
      streamID: string;
      streamName?: string | null;
      playbackURL?: string | null;
      streamKey?: string | null;
      streamType?: string | null;
    } | null> | null;
  } | null;
};

export type CreateEventMutationVariables = Exact<{
  EventName?: InputMaybe<Scalars['String']['input']>;
  EventOwnerID?: InputMaybe<Scalars['String']['input']>;
  EventCreatorID?: InputMaybe<Scalars['String']['input']>;
  EventCategory?: InputMaybe<Scalars['String']['input']>;
  EventImages?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  EventTimeCreated?: InputMaybe<Scalars['String']['input']>;
  EventDescription?: InputMaybe<Scalars['String']['input']>;
  VenueID?: InputMaybe<Scalars['String']['input']>;
  SitemapID?: InputMaybe<Scalars['String']['input']>;
  StageStreamMaps?: InputMaybe<
    Array<InputMaybe<StageStreamMapInput>> | InputMaybe<StageStreamMapInput>
  >;
  Price?: InputMaybe<Scalars['String']['input']>;
  EventDate?: InputMaybe<Scalars['String']['input']>;
  StartTime?: InputMaybe<Scalars['String']['input']>;
  EndTime?: InputMaybe<Scalars['String']['input']>;
  isVipEntryAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  vipPrice?: InputMaybe<Scalars['String']['input']>;
  isEventLive?: InputMaybe<Scalars['Boolean']['input']>;
  EventID: Scalars['String']['input'];
  showOrganizer?: InputMaybe<Scalars['Boolean']['input']>;
  showCreator?: InputMaybe<Scalars['Boolean']['input']>;
  isRecording?: InputMaybe<Scalars['Boolean']['input']>;
  VenueLocation?: InputMaybe<Scalars['String']['input']>;
  EventCreatorPageId?: InputMaybe<Scalars['String']['input']>;
  isRealEvent?: InputMaybe<Scalars['Boolean']['input']>;
  RealTicketLink?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
}>;

export type CreateEventMutation = {
  __typename?: 'Mutation';
  createVirtuosoEvents?: {
    __typename?: 'VirtuosoEvents';
    EventID: string;
    EventName?: string | null;
    EventImages?: Array<string | null> | null;
    EventDate?: string | null;
    isLive?: boolean | null;
    StartTime?: string | null;
    EndTime?: string | null;
    Price?: string | null;
    isEventLive?: boolean | null;
    timezone?: string | null;
    VenueLocation?: string | null;
    VenueID?: string | null;
    StageStreamMaps?: Array<{
      __typename?: 'StageStreamMap';
      stageName?: string | null;
      streamID?: string | null;
      stageID?: string | null;
    } | null> | null;
    venue?: { __typename?: 'VirtuosoVenues'; VenueName?: string | null } | null;
  } | null;
};

export type UpdateEventMutationVariables = Exact<{
  EventName?: InputMaybe<Scalars['String']['input']>;
  EventOwnerID?: InputMaybe<Scalars['String']['input']>;
  EventCreatorID?: InputMaybe<Scalars['String']['input']>;
  EventCategory?: InputMaybe<Scalars['String']['input']>;
  EventImages?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  EventTimeCreated?: InputMaybe<Scalars['String']['input']>;
  EventDescription?: InputMaybe<Scalars['String']['input']>;
  EventID: Scalars['String']['input'];
  VenueID?: InputMaybe<Scalars['String']['input']>;
  SitemapID?: InputMaybe<Scalars['String']['input']>;
  StageStreamMaps?: InputMaybe<
    Array<InputMaybe<StageStreamMapInput>> | InputMaybe<StageStreamMapInput>
  >;
  Price?: InputMaybe<Scalars['String']['input']>;
  EventDate?: InputMaybe<Scalars['String']['input']>;
  StartTime?: InputMaybe<Scalars['String']['input']>;
  EndTime?: InputMaybe<Scalars['String']['input']>;
  isVipEntryAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  vipPrice?: InputMaybe<Scalars['String']['input']>;
  isEventLive?: InputMaybe<Scalars['Boolean']['input']>;
  showOrganizer?: InputMaybe<Scalars['Boolean']['input']>;
  showCreator?: InputMaybe<Scalars['Boolean']['input']>;
  isRecording?: InputMaybe<Scalars['Boolean']['input']>;
  VenueLocation?: InputMaybe<Scalars['String']['input']>;
  isRealEvent?: InputMaybe<Scalars['Boolean']['input']>;
  RealTicketLink?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateEventMutation = {
  __typename?: 'Mutation';
  updateVirtuosoEvents?: {
    __typename?: 'VirtuosoEvents';
    EventID: string;
    EventName?: string | null;
    EventImages?: Array<string | null> | null;
    EventDate?: string | null;
    StartTime?: string | null;
    isLive?: boolean | null;
    EndTime?: string | null;
    timezone?: string | null;
    isEventLive?: boolean | null;
    Price?: string | null;
    VenueLocation?: string | null;
    VenueID?: string | null;
    StageStreamMaps?: Array<{
      __typename?: 'StageStreamMap';
      stageName?: string | null;
      streamID?: string | null;
      stageID?: string | null;
    } | null> | null;
    venue?: { __typename?: 'VirtuosoVenues'; VenueName?: string | null } | null;
  } | null;
};

export type CreateFriendMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  friendId: Scalars['String']['input'];
  requestId: Scalars['String']['input'];
  notificationId: Scalars['String']['input'];
}>;

export type CreateFriendMutation = {
  __typename?: 'Mutation';
  friend?: {
    __typename?: 'FriendsTable';
    createdAt: string;
    friendId: string;
    userId: string;
  } | null;
};

export type DeleteFriendMutationVariables = Exact<{
  userId: Scalars['String']['input'];
  friendId: Scalars['String']['input'];
}>;

export type DeleteFriendMutation = {
  __typename?: 'Mutation';
  deletedFriend?: {
    __typename?: 'FriendsTable';
    createdAt: string;
    friendId: string;
    userId: string;
  } | null;
};

export type RejectFriendRequestMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  notificationId: Scalars['String']['input'];
}>;

export type RejectFriendRequestMutation = {
  __typename?: 'Mutation';
  request?: { __typename?: 'FriendRequest'; id?: string | null } | null;
};

export type SendFriendRequestMutationVariables = Exact<{
  data: Scalars['String']['input'];
  receiverId: Scalars['String']['input'];
  senderId: Scalars['String']['input'];
}>;

export type SendFriendRequestMutation = {
  __typename?: 'Mutation';
  request?: { __typename?: 'Notification'; id: string } | null;
};

export type ListFriendsQueryVariables = Exact<{
  UserID: Scalars['String']['input'];
}>;

export type ListFriendsQuery = {
  __typename?: 'Query';
  friends?: {
    __typename?: 'FriendsTableConnection';
    items?: Array<{
      __typename?: 'FriendsTable';
      friendId: string;
      friendDetails?: {
        __typename?: 'User';
        sub: string;
        name?: string | null;
        avatar?: string | null;
        username: string;
      } | null;
    } | null> | null;
  } | null;
};

export type ListUserNotificationsQueryVariables = Exact<{
  sub: Scalars['String']['input'];
}>;

export type ListUserNotificationsQuery = {
  __typename?: 'Query';
  notifications?: {
    __typename?: 'NotificationConnection';
    nextToken?: string | null;
    items?: Array<{
      __typename?: 'Notification';
      content: string;
      createdAt: string;
      id: string;
      read: boolean;
      receiverId: string;
      senderId: string;
      requestId?: string | null;
      type?: string | null;
      postId?: string | null;
      sender?: {
        __typename?: 'User';
        avatar?: string | null;
        username: string;
        sub: string;
        name?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type DeleteNotificationMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type DeleteNotificationMutation = {
  __typename?: 'Mutation';
  notification?: {
    __typename?: 'Notification';
    id: string;
    createdAt: string;
    postId?: string | null;
    read: boolean;
  } | null;
};

export type GetVenuesQueryVariables = Exact<{
  sub: Scalars['ID']['input'];
}>;

export type GetVenuesQuery = {
  __typename?: 'Query';
  ownership?: {
    __typename?: 'Ownership';
    venues?: {
      __typename?: 'VirtuosoVenuesConnection';
      items?: Array<{
        __typename?: 'VirtuosoVenues';
        price?: number | null;
        VenueProfileCover?: string | null;
        VenueName?: string | null;
        VenueID: string;
        Bio?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetStagesQueryVariables = Exact<{
  sub: Scalars['ID']['input'];
}>;

export type GetStagesQuery = {
  __typename?: 'Query';
  ownership?: {
    __typename?: 'Ownership';
    stages?: {
      __typename?: 'UserAssetConnection';
      items?: Array<{
        __typename?: 'UserAsset';
        id: string;
        price: string;
        productName: string;
        rating?: string | null;
        quantity?: string | null;
        image?: Array<string | null> | null;
        creatorId?: string | null;
        assetType: string;
        description?: string | null;
        vendor?: {
          __typename?: 'VirtuosoVendors';
          VendorID: string;
          VendorName?: string | null;
          VendorImage?: string | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetOwnedSitemapsQueryVariables = Exact<{
  sub: Scalars['ID']['input'];
}>;

export type GetOwnedSitemapsQuery = {
  __typename?: 'Query';
  ownership?: {
    __typename?: 'Ownership';
    sitemaps?: {
      __typename?: 'VirtuosoSiteMapsConnection';
      items?: Array<{
        __typename?: 'VirtuosoSiteMaps';
        SiteMapID: string;
        SiteMapDescription?: string | null;
        SiteMapImage?: string | null;
        SiteMapName?: string | null;
        price?: number | null;
        venue?: {
          __typename?: 'VirtuosoVenues';
          VenueID: string;
          VenueName?: string | null;
          VenueProfileImage?: string | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetOwnedInGameItemsQueryVariables = Exact<{
  sub: Scalars['ID']['input'];
}>;

export type GetOwnedInGameItemsQuery = {
  __typename?: 'Query';
  ownership?: {
    __typename?: 'Ownership';
    inGameItems?: {
      __typename?: 'UserAssetConnection';
      items?: Array<{
        __typename?: 'UserAsset';
        id: string;
        price: string;
        productName: string;
        rating?: string | null;
        quantity?: string | null;
        image?: Array<string | null> | null;
        creatorId?: string | null;
        assetType: string;
        description?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetOwnedAvatarClothingQueryVariables = Exact<{
  sub: Scalars['ID']['input'];
}>;

export type GetOwnedAvatarClothingQuery = {
  __typename?: 'Query';
  ownership?: {
    __typename?: 'Ownership';
    avatarClothing?: {
      __typename?: 'UserAssetConnection';
      items?: Array<{
        __typename?: 'UserAsset';
        id: string;
        price: string;
        productName: string;
        rating?: string | null;
        quantity?: string | null;
        image?: Array<string | null> | null;
        creatorId?: string | null;
        assetType: string;
        description?: string | null;
        vendor?: {
          __typename?: 'VirtuosoVendors';
          VendorID: string;
          VendorName?: string | null;
          VendorImage?: string | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetOwnedTicketsQueryVariables = Exact<{
  sub: Scalars['ID']['input'];
}>;

export type GetOwnedTicketsQuery = {
  __typename?: 'Query';
  ownership?: {
    __typename?: 'Ownership';
    tickets?: {
      __typename?: 'VirtuosoTicketsConnection';
      items?: Array<{
        __typename?: 'VirtuosoTickets';
        EventID?: string | null;
        NumberOfTicket?: number | null;
        ItemID?: string | null;
        PaymentIntentID?: string | null;
        TicketID: string;
        Price?: string | null;
        createdAt?: string | null;
        UserID?: string | null;
        Type?: string | null;
        Event?: {
          __typename?: 'VirtuosoEvents';
          EventImages?: Array<string | null> | null;
          EventOwnerID?: string | null;
          EventDescription?: string | null;
          EventCreatorID?: string | null;
          EventName?: string | null;
          Price?: string | null;
          EventDate?: string | null;
          StartTime?: string | null;
          EndTime?: string | null;
          vipPrice?: string | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type ListVirtuosoPagesQueryVariables = Exact<{
  showCreators: Scalars['Boolean']['input'];
  showVenues: Scalars['Boolean']['input'];
  showVendors: Scalars['Boolean']['input'];
  creatorFilter?: InputMaybe<TableVirtuosoCreatorsFilterInput>;
  venueFilter?: InputMaybe<TableVirtuosoVenuesFilterInput>;
  vendorFilter?: InputMaybe<TableVirtuosoVendorsFilterInput>;
}>;

export type ListVirtuosoPagesQuery = {
  __typename?: 'Query';
  creators?: {
    __typename?: 'VirtuosoCreatorsConnection';
    items?: Array<{
      __typename?: 'VirtuosoCreators';
      CreatorBio?: string | null;
      CreatorCategory?: string | null;
      CreatorGuestlistID?: string | null;
      CreatorID: string;
      CreatorLocationID?: string | null;
      CreatorName?: string | null;
      CreatorOwnerID?: string | null;
      CreatorStartDate?: string | null;
      CreatorVisibility?: string | null;
      CreatorImage?: string | null;
      CreatorCover?: string | null;
      followerCount?: number | null;
      followers?: {
        __typename?: 'VirtuosoPageFollowConnection';
        items?: Array<{
          __typename?: 'VirtuosoPageFollow';
          pageId: string;
          pageType: string;
          userId: string;
          user?: {
            __typename?: 'User';
            avatar?: string | null;
            sub: string;
          } | null;
        } | null> | null;
      } | null;
    } | null> | null;
  } | null;
  venues?: {
    __typename?: 'VirtuosoVenuesConnection';
    items?: Array<{
      __typename?: 'VirtuosoVenues';
      Address?: string | null;
      Android_PAKURL?: string | null;
      Bio?: string | null;
      IsRealWorldVenue?: string | null;
      Linux_PAKURL?: string | null;
      NumberOfStages?: number | null;
      Mac_PAKURL?: string | null;
      VenueAuthor?: string | null;
      VenueCreatorID?: string | null;
      VenueID: string;
      VenueImages?: Array<string | null> | null;
      VenueName?: string | null;
      VenueOwnerID?: string | null;
      VenueProfileCover?: string | null;
      VenueProfileImage?: string | null;
      VenueProfileImages?: string | null;
      VenueTimeCreated?: string | null;
      VenueUMAP_Name?: string | null;
      Windows_PAKURL?: string | null;
      iOS_PAKURL?: string | null;
      followerCount?: number | null;
      followers?: {
        __typename?: 'VirtuosoPageFollowConnection';
        items?: Array<{
          __typename?: 'VirtuosoPageFollow';
          pageId: string;
          pageType: string;
          userId: string;
          user?: {
            __typename?: 'User';
            avatar?: string | null;
            sub: string;
          } | null;
        } | null> | null;
      } | null;
    } | null> | null;
  } | null;
  vendors?: {
    __typename?: 'VirtuosoVendorsConnection';
    items?: Array<{
      __typename?: 'VirtuosoVendors';
      GuestlistID?: string | null;
      IsRealWorldVendor?: string | null;
      VendorBio?: string | null;
      VendorCreatorID?: string | null;
      VendorID: string;
      VendorName?: string | null;
      VendorCover?: string | null;
      VendorImage?: string | null;
      VendorOwnerID?: string | null;
      VendorVisibility?: string | null;
      followerCount?: number | null;
      followers?: {
        __typename?: 'VirtuosoPageFollowConnection';
        items?: Array<{
          __typename?: 'VirtuosoPageFollow';
          pageId: string;
          pageType: string;
          userId: string;
          user?: {
            __typename?: 'User';
            avatar?: string | null;
            sub: string;
          } | null;
        } | null> | null;
      } | null;
    } | null> | null;
  } | null;
};

export type FollowPageMutationVariables = Exact<{
  pageId: Scalars['String']['input'];
  pageType: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;

export type FollowPageMutation = {
  __typename?: 'Mutation';
  createVirtuosoPageFollow?: {
    __typename?: 'VirtuosoPageFollow';
    pageId: string;
    pageType: string;
    userId: string;
  } | null;
};

export type UnfollowPageMutationVariables = Exact<{
  pageId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;

export type UnfollowPageMutation = {
  __typename?: 'Mutation';
  deleteVirtuosoPageFollow?: {
    __typename?: 'VirtuosoPageFollow';
    pageId: string;
    pageType: string;
    userId: string;
  } | null;
};

export type VirtuosoCreatorsDatasetFragment = {
  __typename?: 'VirtuosoCreators';
  CreatorBio?: string | null;
  CreatorCategory?: string | null;
  CreatorGuestlistID?: string | null;
  CreatorID: string;
  CreatorLocationID?: string | null;
  CreatorName?: string | null;
  CreatorOwnerID?: string | null;
  CreatorStartDate?: string | null;
  CreatorVisibility?: string | null;
  CreatorImage?: string | null;
  CreatorCover?: string | null;
  followerCount?: number | null;
  followers?: {
    __typename?: 'VirtuosoPageFollowConnection';
    items?: Array<{
      __typename?: 'VirtuosoPageFollow';
      pageId: string;
      pageType: string;
      userId: string;
      user?: {
        __typename?: 'User';
        avatar?: string | null;
        sub: string;
      } | null;
    } | null> | null;
  } | null;
};

export type VirtuosoVenuesDatasetFragment = {
  __typename?: 'VirtuosoVenues';
  Address?: string | null;
  Android_PAKURL?: string | null;
  Bio?: string | null;
  IsRealWorldVenue?: string | null;
  Linux_PAKURL?: string | null;
  NumberOfStages?: number | null;
  Mac_PAKURL?: string | null;
  VenueAuthor?: string | null;
  VenueCreatorID?: string | null;
  VenueID: string;
  VenueImages?: Array<string | null> | null;
  VenueName?: string | null;
  VenueOwnerID?: string | null;
  VenueProfileCover?: string | null;
  VenueProfileImage?: string | null;
  VenueProfileImages?: string | null;
  VenueTimeCreated?: string | null;
  VenueUMAP_Name?: string | null;
  Windows_PAKURL?: string | null;
  iOS_PAKURL?: string | null;
  followerCount?: number | null;
  followers?: {
    __typename?: 'VirtuosoPageFollowConnection';
    items?: Array<{
      __typename?: 'VirtuosoPageFollow';
      pageId: string;
      pageType: string;
      userId: string;
      user?: {
        __typename?: 'User';
        avatar?: string | null;
        sub: string;
      } | null;
    } | null> | null;
  } | null;
};

export type VirtuosoVendorsDatasetFragment = {
  __typename?: 'VirtuosoVendors';
  GuestlistID?: string | null;
  IsRealWorldVendor?: string | null;
  VendorBio?: string | null;
  VendorCreatorID?: string | null;
  VendorID: string;
  VendorName?: string | null;
  VendorCover?: string | null;
  VendorImage?: string | null;
  VendorOwnerID?: string | null;
  VendorVisibility?: string | null;
  followerCount?: number | null;
  followers?: {
    __typename?: 'VirtuosoPageFollowConnection';
    items?: Array<{
      __typename?: 'VirtuosoPageFollow';
      pageId: string;
      pageType: string;
      userId: string;
      user?: {
        __typename?: 'User';
        avatar?: string | null;
        sub: string;
      } | null;
    } | null> | null;
  } | null;
};

export type CreatePostMutationVariables = Exact<{
  author: Scalars['String']['input'];
  content: Scalars['String']['input'];
  images?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  pageId: Scalars['ID']['input'];
}>;

export type CreatePostMutation = {
  __typename?: 'Mutation';
  newPost?: {
    __typename?: 'Post';
    author: string;
    content: string;
    id: string;
    images?: Array<string | null> | null;
    likesCount?: number | null;
    pageId: string;
  } | null;
};

export type GetPostByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;

export type GetPostByIdQuery = {
  __typename?: 'Query';
  posts?: {
    __typename?: 'PostConnection';
    nextToken?: string | null;
    items?: Array<{
      __typename?: 'Post';
      author: string;
      id: string;
      pageId: string;
      images?: Array<string | null> | null;
      content: string;
      isLikedByUser?: boolean | null;
      commentsCount?: number | null;
      likesCount?: number | null;
      shares?: number | null;
      createdAt?: string | null;
      topComments?: {
        __typename?: 'CommentConnection';
        items?: Array<{
          __typename?: 'Comment';
          content: string;
          createdAt?: string | null;
          id: string;
          isReply?: boolean | null;
          parentId?: string | null;
          postId: string;
          authorDetails?: {
            __typename?: 'User';
            name?: string | null;
            avatar?: string | null;
            sub: string;
          } | null;
        } | null> | null;
      } | null;
      likes?: Array<{
        __typename?: 'PostLikes';
        authorDetails?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
          name?: string | null;
        } | null;
      } | null> | null;
      creatorPage?: {
        __typename?: 'VirtuosoCreators';
        CreatorID: string;
        CreatorName?: string | null;
        CreatorImage?: string | null;
      } | null;
      venuePage?: {
        __typename?: 'VirtuosoVenues';
        VenueID: string;
        VenueName?: string | null;
        VenueProfileImage?: string | null;
      } | null;
      authorDetails?: {
        __typename?: 'User';
        avatar?: string | null;
        name?: string | null;
        sub: string;
      } | null;
    } | null> | null;
  } | null;
};

export type ListPostsQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  nextToken?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListPostsQuery = {
  __typename?: 'Query';
  posts?: {
    __typename?: 'PostConnection';
    nextToken?: string | null;
    items?: Array<{
      __typename?: 'Post';
      author: string;
      id: string;
      pageId: string;
      images?: Array<string | null> | null;
      content: string;
      isLikedByUser?: boolean | null;
      commentsCount?: number | null;
      likesCount?: number | null;
      shares?: number | null;
      createdAt?: string | null;
      topComments?: {
        __typename?: 'CommentConnection';
        items?: Array<{
          __typename?: 'Comment';
          content: string;
          createdAt?: string | null;
          id: string;
          isReply?: boolean | null;
          parentId?: string | null;
          postId: string;
          authorDetails?: {
            __typename?: 'User';
            name?: string | null;
            avatar?: string | null;
            sub: string;
          } | null;
        } | null> | null;
      } | null;
      likes?: Array<{
        __typename?: 'PostLikes';
        authorDetails?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
          name?: string | null;
        } | null;
      } | null> | null;
      creatorPage?: {
        __typename?: 'VirtuosoCreators';
        CreatorID: string;
        CreatorName?: string | null;
        CreatorImage?: string | null;
      } | null;
      venuePage?: {
        __typename?: 'VirtuosoVenues';
        VenueID: string;
        VenueName?: string | null;
        VenueProfileImage?: string | null;
      } | null;
      authorDetails?: {
        __typename?: 'User';
        avatar?: string | null;
        name?: string | null;
        sub: string;
      } | null;
    } | null> | null;
  } | null;
};

export type ListPostsByAuthorQueryVariables = Exact<{
  author: Scalars['ID']['input'];
  userId: Scalars['String']['input'];
}>;

export type ListPostsByAuthorQuery = {
  __typename?: 'Query';
  posts?: {
    __typename?: 'PostConnection';
    nextToken?: string | null;
    items?: Array<{
      __typename?: 'Post';
      author: string;
      id: string;
      pageId: string;
      images?: Array<string | null> | null;
      content: string;
      isLikedByUser?: boolean | null;
      commentsCount?: number | null;
      likesCount?: number | null;
      shares?: number | null;
      createdAt?: string | null;
      topComments?: {
        __typename?: 'CommentConnection';
        items?: Array<{
          __typename?: 'Comment';
          content: string;
          createdAt?: string | null;
          id: string;
          isReply?: boolean | null;
          parentId?: string | null;
          postId: string;
          authorDetails?: {
            __typename?: 'User';
            name?: string | null;
            avatar?: string | null;
            sub: string;
          } | null;
        } | null> | null;
      } | null;
      likes?: Array<{
        __typename?: 'PostLikes';
        authorDetails?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
          name?: string | null;
        } | null;
      } | null> | null;
      creatorPage?: {
        __typename?: 'VirtuosoCreators';
        CreatorID: string;
        CreatorName?: string | null;
        CreatorImage?: string | null;
      } | null;
      venuePage?: {
        __typename?: 'VirtuosoVenues';
        VenueID: string;
        VenueName?: string | null;
        VenueProfileImage?: string | null;
      } | null;
      authorDetails?: {
        __typename?: 'User';
        avatar?: string | null;
        name?: string | null;
        sub: string;
      } | null;
    } | null> | null;
  } | null;
};

export type LikeAPostMutationVariables = Exact<{
  author: Scalars['String']['input'];
  postId: Scalars['String']['input'];
}>;

export type LikeAPostMutation = {
  __typename?: 'Mutation';
  like?: { __typename?: 'PostLikes'; id: string } | null;
};

export type RemoveLikeOnAPostMutationVariables = Exact<{
  author: Scalars['String']['input'];
  postId: Scalars['String']['input'];
}>;

export type RemoveLikeOnAPostMutation = {
  __typename?: 'Mutation';
  deletedLike?: { __typename?: 'PostLikes'; id: string } | null;
};

export type DeleteAPostMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  pageId: Scalars['String']['input'];
}>;

export type DeleteAPostMutation = {
  __typename?: 'Mutation';
  deletePost?: { __typename?: 'Post'; id: string } | null;
};

export type GetPostQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  userId: Scalars['String']['input'];
  pageId: Scalars['String']['input'];
}>;

export type GetPostQuery = {
  __typename?: 'Query';
  post?: {
    __typename?: 'Post';
    author: string;
    id: string;
    pageId: string;
    images?: Array<string | null> | null;
    content: string;
    shares?: number | null;
    isLikedByUser?: boolean | null;
    commentsCount?: number | null;
    likesCount?: number | null;
    createdAt?: string | null;
    topComments?: {
      __typename?: 'CommentConnection';
      items?: Array<{
        __typename?: 'Comment';
        content: string;
        createdAt?: string | null;
        id: string;
        isReply?: boolean | null;
        parentId?: string | null;
        postId: string;
        authorDetails?: {
          __typename?: 'User';
          name?: string | null;
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
    likes?: Array<{
      __typename?: 'PostLikes';
      authorDetails?: {
        __typename?: 'User';
        avatar?: string | null;
        sub: string;
        name?: string | null;
      } | null;
    } | null> | null;
    creatorPage?: {
      __typename?: 'VirtuosoCreators';
      CreatorID: string;
      CreatorName?: string | null;
      CreatorImage?: string | null;
    } | null;
    venuePage?: {
      __typename?: 'VirtuosoVenues';
      VenueID: string;
      VenueName?: string | null;
      VenueProfileImage?: string | null;
    } | null;
    authorDetails?: {
      __typename?: 'User';
      avatar?: string | null;
      name?: string | null;
      sub: string;
    } | null;
  } | null;
};

export type PostDetailsFragment = {
  __typename?: 'PostConnection';
  nextToken?: string | null;
  items?: Array<{
    __typename?: 'Post';
    author: string;
    id: string;
    pageId: string;
    images?: Array<string | null> | null;
    content: string;
    isLikedByUser?: boolean | null;
    commentsCount?: number | null;
    likesCount?: number | null;
    shares?: number | null;
    createdAt?: string | null;
    topComments?: {
      __typename?: 'CommentConnection';
      items?: Array<{
        __typename?: 'Comment';
        content: string;
        createdAt?: string | null;
        id: string;
        isReply?: boolean | null;
        parentId?: string | null;
        postId: string;
        authorDetails?: {
          __typename?: 'User';
          name?: string | null;
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
    likes?: Array<{
      __typename?: 'PostLikes';
      authorDetails?: {
        __typename?: 'User';
        avatar?: string | null;
        sub: string;
        name?: string | null;
      } | null;
    } | null> | null;
    creatorPage?: {
      __typename?: 'VirtuosoCreators';
      CreatorID: string;
      CreatorName?: string | null;
      CreatorImage?: string | null;
    } | null;
    venuePage?: {
      __typename?: 'VirtuosoVenues';
      VenueID: string;
      VenueName?: string | null;
      VenueProfileImage?: string | null;
    } | null;
    authorDetails?: {
      __typename?: 'User';
      avatar?: string | null;
      name?: string | null;
      sub: string;
    } | null;
  } | null> | null;
};

export type AuthorPostsDetailsFragment = {
  __typename?: 'User';
  avatar?: string | null;
  name?: string | null;
  sub: string;
};

export type UpdateSharesMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  pageId: Scalars['ID']['input'];
  shares?: InputMaybe<Scalars['Int']['input']>;
}>;

export type UpdateSharesMutation = {
  __typename?: 'Mutation';
  post?: {
    __typename?: 'Post';
    id: string;
    pageId: string;
    shares?: number | null;
  } | null;
};

export type ListChatRoomsQueryVariables = Exact<{ [key: string]: never }>;

export type ListChatRoomsQuery = {
  __typename?: 'Query';
  rooms?: {
    __typename?: 'ChatRoomsConnection';
    items?: Array<{
      __typename?: 'ChatRooms';
      avatar?: string | null;
      cover?: string | null;
      createdAt: string;
      createdBy: string;
      description?: string | null;
      title: string;
      id: string;
    } | null> | null;
  } | null;
};

export type GetChatRoomQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetChatRoomQuery = {
  __typename?: 'Query';
  room?: {
    __typename?: 'ChatRooms';
    avatar?: string | null;
    id: string;
    title: string;
    description?: string | null;
    cover?: string | null;
    createdBy: string;
    createdAt: string;
  } | null;
};

export type CreateChatRoomsMutationVariables = Exact<{
  avatar?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  createdBy: Scalars['String']['input'];
  title: Scalars['String']['input'];
}>;

export type CreateChatRoomsMutation = {
  __typename?: 'Mutation';
  rooms?: { __typename?: 'ChatRooms'; id: string } | null;
};

export type UpdateChatRoomMutationVariables = Exact<{
  avatar?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  id: Scalars['ID']['input'];
}>;

export type UpdateChatRoomMutation = {
  __typename?: 'Mutation';
  room?: { __typename?: 'ChatRooms'; id: string } | null;
};

export type DeleteChatRoomsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type DeleteChatRoomsMutation = {
  __typename?: 'Mutation';
  room?: { __typename?: 'ChatRooms'; id: string } | null;
};

export type GetSitemapsByVenueIdQueryVariables = Exact<{
  SiteMapVenueID?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetSitemapsByVenueIdQuery = {
  __typename?: 'Query';
  listVirtuosoSiteMaps?: {
    __typename?: 'VirtuosoSiteMapsConnection';
    items?: Array<{
      __typename?: 'VirtuosoSiteMaps';
      SiteMapVenueID?: string | null;
      SiteMapOwnerID?: string | null;
      SiteMapName?: string | null;
      SiteMapImage?: string | null;
      SiteMapID: string;
      SiteMapDescription?: string | null;
      SiteMapDateCreated?: string | null;
      SiteMapGuestlistID?: string | null;
    } | null> | null;
  } | null;
};

export type ListMarketplaceSitemapsQueryVariables = Exact<{
  userId: Scalars['String']['input'];
  nextToken?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListMarketplaceSitemapsQuery = {
  __typename?: 'Query';
  sitemaps?: {
    __typename?: 'VirtuosoSiteMapsConnection';
    nextToken?: string | null;
    items?: Array<{
      __typename?: 'VirtuosoSiteMaps';
      SiteMapID: string;
      price?: number | null;
      isOwnedByUser?: boolean | null;
      SiteMapName?: string | null;
      SiteMapImage?: string | null;
      SiteMapDescription?: string | null;
      venue?: {
        __typename?: 'VirtuosoVenues';
        VenueID: string;
        VenueName?: string | null;
        VenueProfileImage?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type CreateVenueSiteMapMutationVariables = Exact<{
  SiteMapID: Scalars['String']['input'];
  SiteMapCreatorID?: InputMaybe<Scalars['String']['input']>;
  SiteMapOwnerID?: InputMaybe<Scalars['String']['input']>;
  SiteMapVenueID?: InputMaybe<Scalars['String']['input']>;
  SiteMapName?: InputMaybe<Scalars['String']['input']>;
  SiteMapImage?: InputMaybe<Scalars['String']['input']>;
  Android_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Linux_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Mac_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Windows_PAKURL?: InputMaybe<Scalars['String']['input']>;
  iOS_PAKURL?: InputMaybe<Scalars['String']['input']>;
  SiteMapDescription?: InputMaybe<Scalars['String']['input']>;
  umapConfig?: InputMaybe<UmapConfigInput>;
  SiteMapUMAP_Name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
}>;

export type CreateVenueSiteMapMutation = {
  __typename?: 'Mutation';
  newSitemap?: {
    __typename?: 'VirtuosoSiteMaps';
    Android_PAKURL?: string | null;
    iOS_PAKURL?: string | null;
    Linux_PAKURL?: string | null;
    Mac_PAKURL?: string | null;
    SiteMapCreatorID?: string | null;
    SiteMapDateCreated?: string | null;
    SiteMapDescription?: string | null;
    SiteMapGuestlistID?: string | null;
    SiteMapID: string;
    SiteMapImage?: string | null;
    SiteMapName?: string | null;
    SiteMapOwnerID?: string | null;
    SiteMapVenueID?: string | null;
    Windows_PAKURL?: string | null;
    SiteMapUMAP_Name?: string | null;
    price?: number | null;
    venue?: {
      __typename?: 'VirtuosoVenues';
      VenueID: string;
      VenueName?: string | null;
      VenueProfileImage?: string | null;
    } | null;
    umapConfig?: {
      __typename?: 'UmapConfig';
      linux?: string | null;
      windows?: string | null;
      mac?: string | null;
      ios?: string | null;
      android?: string | null;
      linux_dedicated?: string | null;
    } | null;
  } | null;
};

export type GetVirtuosoSitemapQueryVariables = Exact<{
  SiteMapID: Scalars['String']['input'];
  sub?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetVirtuosoSitemapQuery = {
  __typename?: 'Query';
  getVirtuosoSiteMaps?: {
    __typename?: 'VirtuosoSiteMaps';
    isOwnedByUser?: boolean | null;
    Android_PAKURL?: string | null;
    iOS_PAKURL?: string | null;
    Linux_PAKURL?: string | null;
    Mac_PAKURL?: string | null;
    SiteMapCreatorID?: string | null;
    SiteMapDateCreated?: string | null;
    SiteMapDescription?: string | null;
    SiteMapGuestlistID?: string | null;
    SiteMapID: string;
    SiteMapImage?: string | null;
    SiteMapName?: string | null;
    SiteMapOwnerID?: string | null;
    SiteMapVenueID?: string | null;
    Windows_PAKURL?: string | null;
    SiteMapUMAP_Name?: string | null;
    price?: number | null;
    venue?: {
      __typename?: 'VirtuosoVenues';
      VenueID: string;
      VenueName?: string | null;
      VenueProfileImage?: string | null;
    } | null;
    umapConfig?: {
      __typename?: 'UmapConfig';
      linux?: string | null;
      windows?: string | null;
      mac?: string | null;
      ios?: string | null;
      android?: string | null;
      linux_dedicated?: string | null;
    } | null;
  } | null;
};

export type VirtuosoSiteMapsFragmentFragment = {
  __typename?: 'VirtuosoSiteMaps';
  Android_PAKURL?: string | null;
  iOS_PAKURL?: string | null;
  Linux_PAKURL?: string | null;
  Mac_PAKURL?: string | null;
  SiteMapCreatorID?: string | null;
  SiteMapDateCreated?: string | null;
  SiteMapDescription?: string | null;
  SiteMapGuestlistID?: string | null;
  SiteMapID: string;
  SiteMapImage?: string | null;
  SiteMapName?: string | null;
  SiteMapOwnerID?: string | null;
  SiteMapVenueID?: string | null;
  Windows_PAKURL?: string | null;
  SiteMapUMAP_Name?: string | null;
  price?: number | null;
  venue?: {
    __typename?: 'VirtuosoVenues';
    VenueID: string;
    VenueName?: string | null;
    VenueProfileImage?: string | null;
  } | null;
  umapConfig?: {
    __typename?: 'UmapConfig';
    linux?: string | null;
    windows?: string | null;
    mac?: string | null;
    ios?: string | null;
    android?: string | null;
    linux_dedicated?: string | null;
  } | null;
};

export type UpdateVirtuosoSiteMapMutationVariables = Exact<{
  SiteMapDescription?: InputMaybe<Scalars['String']['input']>;
  SiteMapID: Scalars['String']['input'];
  SiteMapImage?: InputMaybe<Scalars['String']['input']>;
  SiteMapName?: InputMaybe<Scalars['String']['input']>;
  Android_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Linux_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Mac_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Windows_PAKURL?: InputMaybe<Scalars['String']['input']>;
  iOS_PAKURL?: InputMaybe<Scalars['String']['input']>;
  SiteMapUMAP_Name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
}>;

export type UpdateVirtuosoSiteMapMutation = {
  __typename?: 'Mutation';
  updateVirtuosoSiteMaps?: {
    __typename?: 'VirtuosoSiteMaps';
    SiteMapID: string;
  } | null;
};

export type ListStreamsQueryVariables = Exact<{
  creatorID: Scalars['String']['input'];
}>;

export type ListStreamsQuery = {
  __typename?: 'Query';
  streams?: {
    __typename?: 'StreamConfigurationsConnection';
    items?: Array<{
      __typename?: 'StreamConfigurations';
      creatorID?: string | null;
      playbackURL?: string | null;
      streamID: string;
      streamKey?: string | null;
      streamName?: string | null;
      streamType?: string | null;
      timestamp?: string | null;
      isLive?: string | null;
      event?: {
        __typename?: 'VirtuosoEvents';
        EventID: string;
        EventName?: string | null;
        EventImages?: Array<string | null> | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GenerateStreamMutationVariables = Exact<{
  creatorID?: InputMaybe<Scalars['String']['input']>;
  streamID: Scalars['String']['input'];
  playbackURL?: InputMaybe<Scalars['String']['input']>;
  streamKey?: InputMaybe<Scalars['String']['input']>;
  streamName?: InputMaybe<Scalars['String']['input']>;
  streamType?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
}>;

export type GenerateStreamMutation = {
  __typename?: 'Mutation';
  stream?: {
    __typename?: 'StreamConfigurations';
    creatorID?: string | null;
    playbackURL?: string | null;
    streamID: string;
    streamKey?: string | null;
    streamName?: string | null;
    streamType?: string | null;
    timestamp?: string | null;
    isLive?: string | null;
    event?: {
      __typename?: 'VirtuosoEvents';
      EventID: string;
      EventName?: string | null;
      EventImages?: Array<string | null> | null;
    } | null;
  } | null;
};

export type DeleteStreamMutationVariables = Exact<{
  streamID: Scalars['String']['input'];
}>;

export type DeleteStreamMutation = {
  __typename?: 'Mutation';
  stream?: {
    __typename?: 'StreamConfigurations';
    streamID: string;
    streamName?: string | null;
  } | null;
};

export type UpdateStreamConfigurationsMutationVariables = Exact<{
  streamID: Scalars['String']['input'];
  eventId?: InputMaybe<Scalars['String']['input']>;
  venueId?: InputMaybe<Scalars['String']['input']>;
  stageId?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateStreamConfigurationsMutation = {
  __typename?: 'Mutation';
  stream?: { __typename?: 'StreamConfigurations'; streamID: string } | null;
};

export type StreamDataSetFragment = {
  __typename?: 'StreamConfigurations';
  creatorID?: string | null;
  playbackURL?: string | null;
  streamID: string;
  streamKey?: string | null;
  streamName?: string | null;
  streamType?: string | null;
  timestamp?: string | null;
  isLive?: string | null;
  event?: {
    __typename?: 'VirtuosoEvents';
    EventID: string;
    EventName?: string | null;
    EventImages?: Array<string | null> | null;
  } | null;
};

export type CreateSupportTicketMutationVariables = Exact<{
  input: CreateSupportTicketInput;
}>;

export type CreateSupportTicketMutation = {
  __typename?: 'Mutation';
  tickets?: {
    __typename?: 'SupportTicket';
    assignedTo?: string | null;
    createdAt: string;
    description: string;
    id: string;
    priority?: string | null;
    status: string;
    title: string;
    updatedAt?: string | null;
    userId: string;
  } | null;
};

export type GetUserOwnedTicketsQueryVariables = Exact<{
  UserID: Scalars['String']['input'];
}>;

export type GetUserOwnedTicketsQuery = {
  __typename?: 'Query';
  ticket?: {
    __typename?: 'VirtuosoTicketsConnection';
    items?: Array<{
      __typename?: 'VirtuosoTickets';
      TicketID: string;
      EventID?: string | null;
      UserID?: string | null;
      Price?: string | null;
      Type?: string | null;
      Event?: {
        __typename?: 'VirtuosoEvents';
        EventImages?: Array<string | null> | null;
        EventOwnerID?: string | null;
        EventDescription?: string | null;
        EventCreatorID?: string | null;
        EventName?: string | null;
        EventDate?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetUserQueryVariables = Exact<{
  sub: Scalars['String']['input'];
}>;

export type GetUserQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'User';
    about?: string | null;
    avatar?: string | null;
    name?: string | null;
    sub: string;
    username: string;
    gender?: string | null;
    email: string;
    stripeCustomerId?: string | null;
    subscriptionId?: string | null;
    subscriptionStatus?: string | null;
    connectedStripeAccountId?: string | null;
    cover?: string | null;
    createdAt?: string | null;
  } | null;
};

export type GetUserAddressQueryVariables = Exact<{
  sub: Scalars['String']['input'];
}>;

export type GetUserAddressQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'User';
    sub: string;
    addresses?: Array<{
      __typename?: 'Contact';
      name?: string | null;
      phone?: string | null;
      address?: {
        __typename?: 'Address';
        state?: string | null;
        postal_code?: string | null;
        line2?: string | null;
        line1?: string | null;
        country?: string | null;
        city?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetProfileQueryVariables = Exact<{
  sub: Scalars['String']['input'];
  friendId: Scalars['String']['input'];
}>;

export type GetProfileQuery = {
  __typename?: 'Query';
  user?: {
    __typename?: 'User';
    about?: string | null;
    avatar?: string | null;
    name?: string | null;
    sub: string;
    username: string;
    isFriendOfUser?: boolean | null;
    hasSentRequestToUser?: boolean | null;
    gender?: string | null;
    email: string;
    stripeCustomerId?: string | null;
    subscriptionId?: string | null;
    subscriptionStatus?: string | null;
    connectedStripeAccountId?: string | null;
    cover?: string | null;
    createdAt?: string | null;
  } | null;
};

export type UpdateUserMutationVariables = Exact<{
  about?: InputMaybe<Scalars['String']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  cover?: InputMaybe<Scalars['String']['input']>;
  addresses?: InputMaybe<Array<ContactInput> | ContactInput>;
  gender?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sub: Scalars['String']['input'];
}>;

export type UpdateUserMutation = {
  __typename?: 'Mutation';
  update?: {
    __typename?: 'User';
    about?: string | null;
    avatar?: string | null;
    cover?: string | null;
    email: string;
    createdAt?: string | null;
    gender?: string | null;
    name?: string | null;
    sub: string;
    username: string;
  } | null;
};

export type UserDetailsFragment = {
  __typename?: 'User';
  about?: string | null;
  avatar?: string | null;
  name?: string | null;
  sub: string;
  username: string;
  gender?: string | null;
  email: string;
  stripeCustomerId?: string | null;
  subscriptionId?: string | null;
  subscriptionStatus?: string | null;
  connectedStripeAccountId?: string | null;
  cover?: string | null;
  createdAt?: string | null;
};

export type UserProfileFragment = {
  __typename?: 'User';
  about?: string | null;
  avatar?: string | null;
  name?: string | null;
  sub: string;
  username: string;
  isFriendOfUser?: boolean | null;
  hasSentRequestToUser?: boolean | null;
  gender?: string | null;
  email: string;
  stripeCustomerId?: string | null;
  subscriptionId?: string | null;
  subscriptionStatus?: string | null;
  connectedStripeAccountId?: string | null;
  cover?: string | null;
  createdAt?: string | null;
};

export type ListUserAssetQueryVariables = Exact<{
  creatorId?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListUserAssetQuery = {
  __typename?: 'Query';
  listUserAssets?: {
    __typename?: 'UserAssetConnection';
    items?: Array<{
      __typename?: 'UserAsset';
      accessibility?: string | null;
      creatorId?: string | null;
      assetType: string;
      description?: string | null;
      id: string;
      image?: Array<string | null> | null;
      isDeleted?: boolean | null;
      isNFT?: boolean | null;
      materialsID?: Array<string | null> | null;
      nftURL?: string | null;
      price: string;
      productName: string;
      quantity?: string | null;
      rating?: string | null;
      vendorPageId?: string | null;
      Android_PAKURL?: string | null;
      iOS_PAKURL?: string | null;
      Linux_PAKURL?: string | null;
      Linux_Dedicated_Server_PAKURL?: string | null;
      Mac_PAKURL?: string | null;
      Windows_PAKURL?: string | null;
      AssetUMAP_Name?: string | null;
      vendor?: {
        __typename?: 'VirtuosoVendors';
        VendorID: string;
        VendorName?: string | null;
      } | null;
      umapConfig?: {
        __typename?: 'UmapConfig';
        linux?: string | null;
        windows?: string | null;
        mac?: string | null;
        ios?: string | null;
        android?: string | null;
        linux_dedicated?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetUserAssetQueryQueryVariables = Exact<{
  id: Scalars['String']['input'];
  sub?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetUserAssetQueryQuery = {
  __typename?: 'Query';
  userasset?: {
    __typename?: 'UserAsset';
    isOwnedByUser?: boolean | null;
    accessibility?: string | null;
    creatorId?: string | null;
    assetType: string;
    description?: string | null;
    id: string;
    image?: Array<string | null> | null;
    isDeleted?: boolean | null;
    isNFT?: boolean | null;
    materialsID?: Array<string | null> | null;
    nftURL?: string | null;
    price: string;
    productName: string;
    quantity?: string | null;
    rating?: string | null;
    vendorPageId?: string | null;
    Android_PAKURL?: string | null;
    iOS_PAKURL?: string | null;
    Linux_PAKURL?: string | null;
    Linux_Dedicated_Server_PAKURL?: string | null;
    Mac_PAKURL?: string | null;
    Windows_PAKURL?: string | null;
    AssetUMAP_Name?: string | null;
    vendor?: {
      __typename?: 'VirtuosoVendors';
      VendorID: string;
      VendorName?: string | null;
      VendorImage?: string | null;
    } | null;
    umapConfig?: {
      __typename?: 'UmapConfig';
      linux?: string | null;
      windows?: string | null;
      mac?: string | null;
      ios?: string | null;
      android?: string | null;
      linux_dedicated?: string | null;
    } | null;
  } | null;
};

export type ListUserAssetByAssetTypeQueryVariables = Exact<{
  creatorId?: InputMaybe<Scalars['String']['input']>;
  assetType?: InputMaybe<Scalars['String']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListUserAssetByAssetTypeQuery = {
  __typename?: 'Query';
  listUserAssets?: {
    __typename?: 'UserAssetConnection';
    nextToken?: string | null;
    items?: Array<{
      __typename?: 'UserAsset';
      isOwnedByUser?: boolean | null;
      accessibility?: string | null;
      creatorId?: string | null;
      assetType: string;
      description?: string | null;
      id: string;
      image?: Array<string | null> | null;
      isDeleted?: boolean | null;
      isNFT?: boolean | null;
      materialsID?: Array<string | null> | null;
      nftURL?: string | null;
      price: string;
      productName: string;
      quantity?: string | null;
      rating?: string | null;
      vendorPageId?: string | null;
      Android_PAKURL?: string | null;
      iOS_PAKURL?: string | null;
      Linux_PAKURL?: string | null;
      Linux_Dedicated_Server_PAKURL?: string | null;
      Mac_PAKURL?: string | null;
      Windows_PAKURL?: string | null;
      AssetUMAP_Name?: string | null;
      vendor?: {
        __typename?: 'VirtuosoVendors';
        VendorID: string;
        VendorName?: string | null;
        VendorImage?: string | null;
      } | null;
      umapConfig?: {
        __typename?: 'UmapConfig';
        linux?: string | null;
        windows?: string | null;
        mac?: string | null;
        ios?: string | null;
        android?: string | null;
        linux_dedicated?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type ListUserAssetsForManagementQueryVariables = Exact<{
  creatorId?: InputMaybe<Scalars['String']['input']>;
}>;

export type ListUserAssetsForManagementQuery = {
  __typename?: 'Query';
  listUserAssets?: {
    __typename?: 'UserAssetConnection';
    items?: Array<{
      __typename?: 'UserAsset';
      accessibility?: string | null;
      creatorId?: string | null;
      assetType: string;
      description?: string | null;
      id: string;
      image?: Array<string | null> | null;
      isDeleted?: boolean | null;
      isNFT?: boolean | null;
      materialsID?: Array<string | null> | null;
      nftURL?: string | null;
      price: string;
      productName: string;
      quantity?: string | null;
      rating?: string | null;
      vendorPageId?: string | null;
      Android_PAKURL?: string | null;
      iOS_PAKURL?: string | null;
      Linux_PAKURL?: string | null;
      Linux_Dedicated_Server_PAKURL?: string | null;
      Mac_PAKURL?: string | null;
      Windows_PAKURL?: string | null;
      AssetUMAP_Name?: string | null;
      umapConfig?: {
        __typename?: 'UmapConfig';
        linux?: string | null;
        windows?: string | null;
        mac?: string | null;
        ios?: string | null;
        android?: string | null;
        linux_dedicated?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type PublishUserAssetMutationVariables = Exact<{
  id: Scalars['String']['input'];
  accessibility?: InputMaybe<Scalars['String']['input']>;
}>;

export type PublishUserAssetMutation = {
  __typename?: 'Mutation';
  updatedUserAsset?: {
    __typename?: 'UserAsset';
    accessibility?: string | null;
    creatorId?: string | null;
    assetType: string;
    description?: string | null;
    id: string;
    image?: Array<string | null> | null;
    isDeleted?: boolean | null;
    isNFT?: boolean | null;
    materialsID?: Array<string | null> | null;
    nftURL?: string | null;
    price: string;
    productName: string;
    quantity?: string | null;
    rating?: string | null;
    vendorPageId?: string | null;
    Android_PAKURL?: string | null;
    iOS_PAKURL?: string | null;
    Linux_PAKURL?: string | null;
    Linux_Dedicated_Server_PAKURL?: string | null;
    Mac_PAKURL?: string | null;
    Windows_PAKURL?: string | null;
    AssetUMAP_Name?: string | null;
    umapConfig?: {
      __typename?: 'UmapConfig';
      linux?: string | null;
      windows?: string | null;
      mac?: string | null;
      ios?: string | null;
      android?: string | null;
      linux_dedicated?: string | null;
    } | null;
  } | null;
};

export type CreateUserAssetMutationVariables = Exact<{
  assetID: Scalars['String']['input'];
  creatorId?: InputMaybe<Scalars['String']['input']>;
  AssetOwnerID?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  nftURL?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['String']['input'];
  productName: Scalars['String']['input'];
  isNFT: Scalars['Boolean']['input'];
  assetType: Scalars['String']['input'];
  vendorPageId?: InputMaybe<Scalars['String']['input']>;
  accessibility?: InputMaybe<Scalars['String']['input']>;
  Android_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Linux_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Mac_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Windows_PAKURL?: InputMaybe<Scalars['String']['input']>;
  iOS_PAKURL?: InputMaybe<Scalars['String']['input']>;
  umapConfig?: InputMaybe<UmapConfigInput>;
  AssetUMAP_Name?: InputMaybe<Scalars['String']['input']>;
  Linux_Dedicated_Server_PAKURL?: InputMaybe<Scalars['String']['input']>;
}>;

export type CreateUserAssetMutation = {
  __typename?: 'Mutation';
  newUserAsset?: {
    __typename?: 'UserAsset';
    accessibility?: string | null;
    creatorId?: string | null;
    assetType: string;
    description?: string | null;
    id: string;
    image?: Array<string | null> | null;
    isDeleted?: boolean | null;
    isNFT?: boolean | null;
    materialsID?: Array<string | null> | null;
    nftURL?: string | null;
    price: string;
    productName: string;
    quantity?: string | null;
    rating?: string | null;
    vendorPageId?: string | null;
    Android_PAKURL?: string | null;
    iOS_PAKURL?: string | null;
    Linux_PAKURL?: string | null;
    Linux_Dedicated_Server_PAKURL?: string | null;
    Mac_PAKURL?: string | null;
    Windows_PAKURL?: string | null;
    AssetUMAP_Name?: string | null;
    umapConfig?: {
      __typename?: 'UmapConfig';
      linux?: string | null;
      windows?: string | null;
      mac?: string | null;
      ios?: string | null;
      android?: string | null;
      linux_dedicated?: string | null;
    } | null;
  } | null;
};

export type UpdateUserAssetMutationVariables = Exact<{
  id: Scalars['String']['input'];
  creatorId?: InputMaybe<Scalars['String']['input']>;
  AssetOwnerID?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  nftURL?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['String']['input']>;
  productName?: InputMaybe<Scalars['String']['input']>;
  isNFT?: InputMaybe<Scalars['Boolean']['input']>;
  assetType?: InputMaybe<Scalars['String']['input']>;
  vendorPageId?: InputMaybe<Scalars['String']['input']>;
  accessibility?: InputMaybe<Scalars['String']['input']>;
  Android_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Linux_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Mac_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Windows_PAKURL?: InputMaybe<Scalars['String']['input']>;
  iOS_PAKURL?: InputMaybe<Scalars['String']['input']>;
  umapConfig?: InputMaybe<UmapConfigInput>;
  AssetUMAP_Name?: InputMaybe<Scalars['String']['input']>;
  Linux_Dedicated_Server_PAKURL?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateUserAssetMutation = {
  __typename?: 'Mutation';
  update?: {
    __typename?: 'UserAsset';
    accessibility?: string | null;
    creatorId?: string | null;
    assetType: string;
    description?: string | null;
    id: string;
    image?: Array<string | null> | null;
    isDeleted?: boolean | null;
    isNFT?: boolean | null;
    materialsID?: Array<string | null> | null;
    nftURL?: string | null;
    price: string;
    productName: string;
    quantity?: string | null;
    rating?: string | null;
    vendorPageId?: string | null;
    Android_PAKURL?: string | null;
    iOS_PAKURL?: string | null;
    Linux_PAKURL?: string | null;
    Linux_Dedicated_Server_PAKURL?: string | null;
    Mac_PAKURL?: string | null;
    Windows_PAKURL?: string | null;
    AssetUMAP_Name?: string | null;
    umapConfig?: {
      __typename?: 'UmapConfig';
      linux?: string | null;
      windows?: string | null;
      mac?: string | null;
      ios?: string | null;
      android?: string | null;
      linux_dedicated?: string | null;
    } | null;
  } | null;
};

export type DeleteUserAssetMutationVariables = Exact<{
  id: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;

export type DeleteUserAssetMutation = {
  __typename?: 'Mutation';
  asset?: { __typename?: 'UserAsset'; id: string; productName: string } | null;
};

export type UserAssetDatasetFragment = {
  __typename?: 'UserAsset';
  accessibility?: string | null;
  creatorId?: string | null;
  assetType: string;
  description?: string | null;
  id: string;
  image?: Array<string | null> | null;
  isDeleted?: boolean | null;
  isNFT?: boolean | null;
  materialsID?: Array<string | null> | null;
  nftURL?: string | null;
  price: string;
  productName: string;
  quantity?: string | null;
  rating?: string | null;
  vendorPageId?: string | null;
  Android_PAKURL?: string | null;
  iOS_PAKURL?: string | null;
  Linux_PAKURL?: string | null;
  Linux_Dedicated_Server_PAKURL?: string | null;
  Mac_PAKURL?: string | null;
  Windows_PAKURL?: string | null;
  AssetUMAP_Name?: string | null;
  umapConfig?: {
    __typename?: 'UmapConfig';
    linux?: string | null;
    windows?: string | null;
    mac?: string | null;
    ios?: string | null;
    android?: string | null;
    linux_dedicated?: string | null;
  } | null;
};

export type GetVendorPageQueryVariables = Exact<{
  VendorID: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;

export type GetVendorPageQuery = {
  __typename?: 'Query';
  vendor?: {
    __typename?: 'VirtuosoVendors';
    isFollowedByUser?: boolean | null;
    GuestlistID?: string | null;
    IsRealWorldVendor?: string | null;
    VendorBio?: string | null;
    VendorCover?: string | null;
    VendorID: string;
    VendorCreatorID?: string | null;
    VendorImage?: string | null;
    VendorName?: string | null;
    VendorOwnerID?: string | null;
    VendorVisibility?: string | null;
    followerCount?: number | null;
    isDeactivated?: boolean | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type ListVirtuosoVendorsQueryVariables = Exact<{
  filter?: InputMaybe<TableVirtuosoVendorsFilterInput>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListVirtuosoVendorsQuery = {
  __typename?: 'Query';
  vendors?: {
    __typename?: 'VirtuosoVendorsConnection';
    nextToken?: string | null;
    items?: Array<{
      __typename?: 'VirtuosoVendors';
      GuestlistID?: string | null;
      IsRealWorldVendor?: string | null;
      VendorBio?: string | null;
      VendorCreatorID?: string | null;
      VendorID: string;
      VendorName?: string | null;
      VendorCover?: string | null;
      VendorImage?: string | null;
      VendorOwnerID?: string | null;
      VendorVisibility?: string | null;
      followerCount?: number | null;
      followers?: {
        __typename?: 'VirtuosoPageFollowConnection';
        items?: Array<{
          __typename?: 'VirtuosoPageFollow';
          pageId: string;
          pageType: string;
          userId: string;
          user?: {
            __typename?: 'User';
            avatar?: string | null;
            sub: string;
          } | null;
        } | null> | null;
      } | null;
    } | null> | null;
  } | null;
};

export type GetVendorProductsQueryVariables = Exact<{
  vendorPageId: Scalars['String']['input'];
}>;

export type GetVendorProductsQuery = {
  __typename?: 'Query';
  listUserAssets?: {
    __typename?: 'UserAssetConnection';
    items?: Array<{
      __typename?: 'UserAsset';
      description?: string | null;
      image?: Array<string | null> | null;
      id: string;
      price: string;
      productName: string;
      assetType: string;
      vendorPageId?: string | null;
      vendor?: {
        __typename?: 'VirtuosoVendors';
        VendorID: string;
        VendorName?: string | null;
        VendorImage?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type CreateVendorPageMutationVariables = Exact<{
  VendorName?: InputMaybe<Scalars['String']['input']>;
  VendorBio?: InputMaybe<Scalars['String']['input']>;
  VendorOwnerID?: InputMaybe<Scalars['String']['input']>;
  VendorCreatorID?: InputMaybe<Scalars['String']['input']>;
}>;

export type CreateVendorPageMutation = {
  __typename?: 'Mutation';
  newVendor?: {
    __typename?: 'VirtuosoVendors';
    GuestlistID?: string | null;
    IsRealWorldVendor?: string | null;
    VendorBio?: string | null;
    VendorCover?: string | null;
    VendorID: string;
    VendorCreatorID?: string | null;
    VendorImage?: string | null;
    VendorName?: string | null;
    VendorOwnerID?: string | null;
    VendorVisibility?: string | null;
    followerCount?: number | null;
    isDeactivated?: boolean | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type UpdateVendorBioMutationVariables = Exact<{
  VendorID: Scalars['String']['input'];
  VendorBio?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateVendorBioMutation = {
  __typename?: 'Mutation';
  update?: { __typename?: 'VirtuosoVendors'; VendorBio?: string | null } | null;
};

export type UpdateVendorHeaderMutationVariables = Exact<{
  VendorID: Scalars['String']['input'];
  VendorImage?: InputMaybe<Scalars['String']['input']>;
  VendorCover?: InputMaybe<Scalars['String']['input']>;
  VendorName?: InputMaybe<Scalars['String']['input']>;
  VendorBio?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateVendorHeaderMutation = {
  __typename?: 'Mutation';
  update?: {
    __typename?: 'VirtuosoVendors';
    GuestlistID?: string | null;
    IsRealWorldVendor?: string | null;
    VendorBio?: string | null;
    VendorCover?: string | null;
    VendorID: string;
    VendorCreatorID?: string | null;
    VendorImage?: string | null;
    VendorName?: string | null;
    VendorOwnerID?: string | null;
    VendorVisibility?: string | null;
    followerCount?: number | null;
    isDeactivated?: boolean | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type UpdateVendorDeactivatedMutationVariables = Exact<{
  VendorID: Scalars['String']['input'];
  isDeactivated?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type UpdateVendorDeactivatedMutation = {
  __typename?: 'Mutation';
  VirtuosoVendor?: {
    __typename?: 'VirtuosoVendors';
    GuestlistID?: string | null;
    IsRealWorldVendor?: string | null;
    VendorBio?: string | null;
    VendorCover?: string | null;
    VendorID: string;
    VendorCreatorID?: string | null;
    VendorImage?: string | null;
    VendorName?: string | null;
    VendorOwnerID?: string | null;
    VendorVisibility?: string | null;
    followerCount?: number | null;
    isDeactivated?: boolean | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type VirtuosoVendorsDetailsFragment = {
  __typename?: 'VirtuosoVendors';
  GuestlistID?: string | null;
  IsRealWorldVendor?: string | null;
  VendorBio?: string | null;
  VendorCover?: string | null;
  VendorID: string;
  VendorCreatorID?: string | null;
  VendorImage?: string | null;
  VendorName?: string | null;
  VendorOwnerID?: string | null;
  VendorVisibility?: string | null;
  followerCount?: number | null;
  isDeactivated?: boolean | null;
  followers?: {
    __typename?: 'VirtuosoPageFollowConnection';
    items?: Array<{
      __typename?: 'VirtuosoPageFollow';
      pageId: string;
      pageType: string;
      userId: string;
      user?: {
        __typename?: 'User';
        avatar?: string | null;
        sub: string;
      } | null;
    } | null> | null;
  } | null;
};

export type GetVenuePageQueryVariables = Exact<{
  VenueID: Scalars['String']['input'];
  userId: Scalars['String']['input'];
}>;

export type GetVenuePageQuery = {
  __typename?: 'Query';
  venue?: {
    __typename?: 'VirtuosoVenues';
    isFollowedByUser?: boolean | null;
    isOwnedByUser?: boolean | null;
    Address?: string | null;
    Android_PAKURL?: string | null;
    Bio?: string | null;
    IsRealWorldVenue?: string | null;
    Linux_PAKURL?: string | null;
    NumberOfStages?: number | null;
    Mac_PAKURL?: string | null;
    VenueAuthor?: string | null;
    StageNames?: Array<string | null> | null;
    VenueCreatorID?: string | null;
    VenueID: string;
    VenueImages?: Array<string | null> | null;
    VenueName?: string | null;
    VenueOwnerID?: string | null;
    Linux_Dedicated_Server_PAKURL?: string | null;
    VenueProfileCover?: string | null;
    VenueProfileImage?: string | null;
    VenueProfileImages?: string | null;
    VenueTimeCreated?: string | null;
    VenueUMAP_Name?: string | null;
    Windows_PAKURL?: string | null;
    iOS_PAKURL?: string | null;
    followerCount?: number | null;
    isDeactivated?: boolean | null;
    price?: number | null;
    posts?: {
      __typename?: 'PostConnection';
      nextToken?: string | null;
      items?: Array<{
        __typename?: 'Post';
        author: string;
        content: string;
        id: string;
        images?: Array<string | null> | null;
        commentsCount?: number | null;
        likesCount?: number | null;
        pageId: string;
        isLikedByUser?: boolean | null;
        createdAt?: string | null;
        topComments?: {
          __typename?: 'CommentConnection';
          items?: Array<{
            __typename?: 'Comment';
            content: string;
            createdAt?: string | null;
            id: string;
            isReply?: boolean | null;
            parentId?: string | null;
            postId: string;
            authorDetails?: {
              __typename?: 'User';
              name?: string | null;
              avatar?: string | null;
              sub: string;
            } | null;
          } | null> | null;
        } | null;
        likes?: Array<{
          __typename?: 'PostLikes';
          authorDetails?: {
            __typename?: 'User';
            avatar?: string | null;
            sub: string;
            name?: string | null;
          } | null;
        } | null> | null;
        creatorPage?: {
          __typename?: 'VirtuosoCreators';
          CreatorID: string;
          CreatorName?: string | null;
          CreatorImage?: string | null;
        } | null;
        venuePage?: {
          __typename?: 'VirtuosoVenues';
          VenueID: string;
          VenueName?: string | null;
          VenueProfileImage?: string | null;
        } | null;
        authorDetails?: {
          __typename?: 'User';
          avatar?: string | null;
          name?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetVenueQueryVariables = Exact<{
  VenueID: Scalars['String']['input'];
}>;

export type GetVenueQuery = {
  __typename?: 'Query';
  venue?: {
    __typename?: 'VirtuosoVenues';
    Address?: string | null;
    Android_PAKURL?: string | null;
    Bio?: string | null;
    IsRealWorldVenue?: string | null;
    Linux_PAKURL?: string | null;
    NumberOfStages?: number | null;
    Mac_PAKURL?: string | null;
    VenueAuthor?: string | null;
    StageNames?: Array<string | null> | null;
    VenueCreatorID?: string | null;
    VenueID: string;
    VenueImages?: Array<string | null> | null;
    VenueName?: string | null;
    VenueOwnerID?: string | null;
    Linux_Dedicated_Server_PAKURL?: string | null;
    VenueProfileCover?: string | null;
    VenueProfileImage?: string | null;
    VenueProfileImages?: string | null;
    VenueTimeCreated?: string | null;
    VenueUMAP_Name?: string | null;
    Windows_PAKURL?: string | null;
    iOS_PAKURL?: string | null;
    followerCount?: number | null;
    isDeactivated?: boolean | null;
    price?: number | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type ListVirtuosoVenuesQueryVariables = Exact<{
  filter?: InputMaybe<TableVirtuosoVenuesFilterInput>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListVirtuosoVenuesQuery = {
  __typename?: 'Query';
  venues?: {
    __typename?: 'VirtuosoVenuesConnection';
    nextToken?: string | null;
    items?: Array<{
      __typename?: 'VirtuosoVenues';
      Address?: string | null;
      Android_PAKURL?: string | null;
      Bio?: string | null;
      IsRealWorldVenue?: string | null;
      Linux_PAKURL?: string | null;
      NumberOfStages?: number | null;
      Mac_PAKURL?: string | null;
      VenueAuthor?: string | null;
      VenueCreatorID?: string | null;
      VenueID: string;
      VenueImages?: Array<string | null> | null;
      VenueName?: string | null;
      VenueOwnerID?: string | null;
      VenueProfileCover?: string | null;
      VenueProfileImage?: string | null;
      VenueProfileImages?: string | null;
      VenueTimeCreated?: string | null;
      VenueUMAP_Name?: string | null;
      Windows_PAKURL?: string | null;
      iOS_PAKURL?: string | null;
      followerCount?: number | null;
      followers?: {
        __typename?: 'VirtuosoPageFollowConnection';
        items?: Array<{
          __typename?: 'VirtuosoPageFollow';
          pageId: string;
          pageType: string;
          userId: string;
          user?: {
            __typename?: 'User';
            avatar?: string | null;
            sub: string;
          } | null;
        } | null> | null;
      } | null;
    } | null> | null;
  } | null;
};

export type ListMarketplaceVenuesQueryVariables = Exact<{
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sub?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type ListMarketplaceVenuesQuery = {
  __typename?: 'Query';
  venues?: {
    __typename?: 'VirtuosoVenuesConnection';
    nextToken?: string | null;
    items?: Array<{
      __typename?: 'VirtuosoVenues';
      price?: number | null;
      VenueProfileCover?: string | null;
      VenueName?: string | null;
      VenueID: string;
      Bio?: string | null;
      isOwnedByUser?: boolean | null;
    } | null> | null;
  } | null;
};

export type GetVenuesCreatedByUserQueryVariables = Exact<{
  VenueCreatorID: Scalars['String']['input'];
}>;

export type GetVenuesCreatedByUserQuery = {
  __typename?: 'Query';
  listVirtuosoVenues?: {
    __typename?: 'VirtuosoVenuesConnection';
    items?: Array<{
      __typename?: 'VirtuosoVenues';
      VenueImages?: Array<string | null> | null;
      VenueName?: string | null;
      VenueID: string;
      VenueOwnerID?: string | null;
      NumberOfStages?: number | null;
      VenueCreatorID?: string | null;
    } | null> | null;
  } | null;
};

export type CreateVenuePageMutationVariables = Exact<{
  Bio?: InputMaybe<Scalars['String']['input']>;
  VenueName?: InputMaybe<Scalars['String']['input']>;
  VenueOwnerID?: InputMaybe<Scalars['String']['input']>;
  VenueAuthor?: InputMaybe<Scalars['String']['input']>;
  IsRealWorldVenue: Scalars['String']['input'];
  VenueCreatorID: Scalars['String']['input'];
}>;

export type CreateVenuePageMutation = {
  __typename?: 'Mutation';
  newVenue?: {
    __typename?: 'VirtuosoVenues';
    Address?: string | null;
    Android_PAKURL?: string | null;
    Bio?: string | null;
    IsRealWorldVenue?: string | null;
    Linux_PAKURL?: string | null;
    NumberOfStages?: number | null;
    Mac_PAKURL?: string | null;
    VenueAuthor?: string | null;
    StageNames?: Array<string | null> | null;
    VenueCreatorID?: string | null;
    VenueID: string;
    VenueImages?: Array<string | null> | null;
    VenueName?: string | null;
    VenueOwnerID?: string | null;
    Linux_Dedicated_Server_PAKURL?: string | null;
    VenueProfileCover?: string | null;
    VenueProfileImage?: string | null;
    VenueProfileImages?: string | null;
    VenueTimeCreated?: string | null;
    VenueUMAP_Name?: string | null;
    Windows_PAKURL?: string | null;
    iOS_PAKURL?: string | null;
    followerCount?: number | null;
    isDeactivated?: boolean | null;
    price?: number | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type UpdateVenueBioMutationVariables = Exact<{
  VenueID: Scalars['String']['input'];
  Bio?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateVenueBioMutation = {
  __typename?: 'Mutation';
  update?: {
    __typename?: 'VirtuosoVenues';
    Bio?: string | null;
    VenueID: string;
  } | null;
};

export type UpdateVenueHeaderMutationVariables = Exact<{
  Bio?: InputMaybe<Scalars['String']['input']>;
  VenueID: Scalars['String']['input'];
  VenueProfileImage?: InputMaybe<Scalars['String']['input']>;
  VenueProfileCover?: InputMaybe<Scalars['String']['input']>;
  VenueName?: InputMaybe<Scalars['String']['input']>;
}>;

export type UpdateVenueHeaderMutation = {
  __typename?: 'Mutation';
  update?: {
    __typename?: 'VirtuosoVenues';
    Address?: string | null;
    Android_PAKURL?: string | null;
    Bio?: string | null;
    IsRealWorldVenue?: string | null;
    Linux_PAKURL?: string | null;
    NumberOfStages?: number | null;
    Mac_PAKURL?: string | null;
    VenueAuthor?: string | null;
    StageNames?: Array<string | null> | null;
    VenueCreatorID?: string | null;
    VenueID: string;
    VenueImages?: Array<string | null> | null;
    VenueName?: string | null;
    VenueOwnerID?: string | null;
    Linux_Dedicated_Server_PAKURL?: string | null;
    VenueProfileCover?: string | null;
    VenueProfileImage?: string | null;
    VenueProfileImages?: string | null;
    VenueTimeCreated?: string | null;
    VenueUMAP_Name?: string | null;
    Windows_PAKURL?: string | null;
    iOS_PAKURL?: string | null;
    followerCount?: number | null;
    isDeactivated?: boolean | null;
    price?: number | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type UpdateVenuePakMutationVariables = Exact<{
  VenueID: Scalars['String']['input'];
  Android_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Linux_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Mac_PAKURL?: InputMaybe<Scalars['String']['input']>;
  Linux_Dedicated_Server_PAKURL?: InputMaybe<Scalars['String']['input']>;
  NumberOfStages?: InputMaybe<Scalars['Int']['input']>;
  Windows_PAKURL?: InputMaybe<Scalars['String']['input']>;
  iOS_PAKURL?: InputMaybe<Scalars['String']['input']>;
  VenueImages?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  StageNames?: InputMaybe<
    | Array<InputMaybe<Scalars['String']['input']>>
    | InputMaybe<Scalars['String']['input']>
  >;
  VenueUMAP_Name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Int']['input']>;
}>;

export type UpdateVenuePakMutation = {
  __typename?: 'Mutation';
  update?: {
    __typename?: 'VirtuosoVenues';
    Address?: string | null;
    Android_PAKURL?: string | null;
    Bio?: string | null;
    IsRealWorldVenue?: string | null;
    Linux_PAKURL?: string | null;
    NumberOfStages?: number | null;
    Mac_PAKURL?: string | null;
    VenueAuthor?: string | null;
    StageNames?: Array<string | null> | null;
    VenueCreatorID?: string | null;
    VenueID: string;
    VenueImages?: Array<string | null> | null;
    VenueName?: string | null;
    VenueOwnerID?: string | null;
    Linux_Dedicated_Server_PAKURL?: string | null;
    VenueProfileCover?: string | null;
    VenueProfileImage?: string | null;
    VenueProfileImages?: string | null;
    VenueTimeCreated?: string | null;
    VenueUMAP_Name?: string | null;
    Windows_PAKURL?: string | null;
    iOS_PAKURL?: string | null;
    followerCount?: number | null;
    isDeactivated?: boolean | null;
    price?: number | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type UpdateVenueDeactivatedMutationVariables = Exact<{
  VenueID: Scalars['String']['input'];
  isDeactivated?: InputMaybe<Scalars['Boolean']['input']>;
}>;

export type UpdateVenueDeactivatedMutation = {
  __typename?: 'Mutation';
  VirtuosoVenue?: {
    __typename?: 'VirtuosoVenues';
    Address?: string | null;
    Android_PAKURL?: string | null;
    Bio?: string | null;
    IsRealWorldVenue?: string | null;
    Linux_PAKURL?: string | null;
    NumberOfStages?: number | null;
    Mac_PAKURL?: string | null;
    VenueAuthor?: string | null;
    StageNames?: Array<string | null> | null;
    VenueCreatorID?: string | null;
    VenueID: string;
    VenueImages?: Array<string | null> | null;
    VenueName?: string | null;
    VenueOwnerID?: string | null;
    Linux_Dedicated_Server_PAKURL?: string | null;
    VenueProfileCover?: string | null;
    VenueProfileImage?: string | null;
    VenueProfileImages?: string | null;
    VenueTimeCreated?: string | null;
    VenueUMAP_Name?: string | null;
    Windows_PAKURL?: string | null;
    iOS_PAKURL?: string | null;
    followerCount?: number | null;
    isDeactivated?: boolean | null;
    price?: number | null;
    followers?: {
      __typename?: 'VirtuosoPageFollowConnection';
      items?: Array<{
        __typename?: 'VirtuosoPageFollow';
        pageId: string;
        pageType: string;
        userId: string;
        user?: {
          __typename?: 'User';
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type VirtuosoVenueDetailsFragment = {
  __typename?: 'VirtuosoVenues';
  Address?: string | null;
  Android_PAKURL?: string | null;
  Bio?: string | null;
  IsRealWorldVenue?: string | null;
  Linux_PAKURL?: string | null;
  NumberOfStages?: number | null;
  Mac_PAKURL?: string | null;
  VenueAuthor?: string | null;
  StageNames?: Array<string | null> | null;
  VenueCreatorID?: string | null;
  VenueID: string;
  VenueImages?: Array<string | null> | null;
  VenueName?: string | null;
  VenueOwnerID?: string | null;
  Linux_Dedicated_Server_PAKURL?: string | null;
  VenueProfileCover?: string | null;
  VenueProfileImage?: string | null;
  VenueProfileImages?: string | null;
  VenueTimeCreated?: string | null;
  VenueUMAP_Name?: string | null;
  Windows_PAKURL?: string | null;
  iOS_PAKURL?: string | null;
  followerCount?: number | null;
  isDeactivated?: boolean | null;
  price?: number | null;
  followers?: {
    __typename?: 'VirtuosoPageFollowConnection';
    items?: Array<{
      __typename?: 'VirtuosoPageFollow';
      pageId: string;
      pageType: string;
      userId: string;
      user?: {
        __typename?: 'User';
        avatar?: string | null;
        sub: string;
      } | null;
    } | null> | null;
  } | null;
};

export type VenuePostFragmentFragment = {
  __typename?: 'PostConnection';
  nextToken?: string | null;
  items?: Array<{
    __typename?: 'Post';
    author: string;
    content: string;
    id: string;
    images?: Array<string | null> | null;
    commentsCount?: number | null;
    likesCount?: number | null;
    pageId: string;
    isLikedByUser?: boolean | null;
    createdAt?: string | null;
    topComments?: {
      __typename?: 'CommentConnection';
      items?: Array<{
        __typename?: 'Comment';
        content: string;
        createdAt?: string | null;
        id: string;
        isReply?: boolean | null;
        parentId?: string | null;
        postId: string;
        authorDetails?: {
          __typename?: 'User';
          name?: string | null;
          avatar?: string | null;
          sub: string;
        } | null;
      } | null> | null;
    } | null;
    likes?: Array<{
      __typename?: 'PostLikes';
      authorDetails?: {
        __typename?: 'User';
        avatar?: string | null;
        sub: string;
        name?: string | null;
      } | null;
    } | null> | null;
    creatorPage?: {
      __typename?: 'VirtuosoCreators';
      CreatorID: string;
      CreatorName?: string | null;
      CreatorImage?: string | null;
    } | null;
    venuePage?: {
      __typename?: 'VirtuosoVenues';
      VenueID: string;
      VenueName?: string | null;
      VenueProfileImage?: string | null;
    } | null;
    authorDetails?: {
      __typename?: 'User';
      avatar?: string | null;
      name?: string | null;
      sub: string;
    } | null;
  } | null> | null;
};

export type VenuePostAuthorDetailsFragment = {
  __typename?: 'User';
  avatar?: string | null;
  name?: string | null;
  sub: string;
};

export const CommentAuthorDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CommentAuthorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CommentAuthorDetailsFragment, unknown>;
export const ReplyFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ReplyFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Comment' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authorDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CommentAuthorDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CommentAuthorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ReplyFragmentFragment, unknown>;
export const CommentDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CommentDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Comment' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'replies' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ReplyFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authorDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CommentAuthorDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CommentAuthorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ReplyFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Comment' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authorDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CommentAuthorDetails' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CommentDetailsFragment, unknown>;
export const VirtuosoCreatorDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoCreatorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoCreators' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCategory' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'CreatorGuestlistID' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorLocationID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorStartDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'isDisabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VirtuosoCreatorDetailsFragment, unknown>;
export const CreatorPostAuthorDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CreatorPostAuthorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreatorPostAuthorDetailsFragment, unknown>;
export const CreatorPostFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CreatorPostFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PostConnection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'author' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'images' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'commentsCount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'likesCount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isLikedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
                { kind: 'Field', name: { kind: 'Name', value: 'pageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'topComments' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authorDetails' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'avatar' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sub' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isReply' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'parentId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postId' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'likes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'authorDetails' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creatorPage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venuePage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authorDetails' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'CreatorPostAuthorDetails',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CreatorPostAuthorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreatorPostFragmentFragment, unknown>;
export const EventCardDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventCardDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoEventsConnection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'EventID' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventImages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isLive' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isEventLive' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venue' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileImage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EventCardDetailsFragment, unknown>;
export const VirtuosoCreatorsDatasetFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoCreatorsDataset' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoCreators' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCategory' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'CreatorGuestlistID' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorLocationID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorStartDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VirtuosoCreatorsDatasetFragment, unknown>;
export const VirtuosoVenuesDatasetFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVenuesDataset' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVenues' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'Address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVenue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'NumberOfStages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueAuthor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueImages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileImage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'VenueProfileImages' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueTimeCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueUMAP_Name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VirtuosoVenuesDatasetFragment, unknown>;
export const VirtuosoVendorsDatasetFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVendorsDataset' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVendors' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'GuestlistID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVendor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VirtuosoVendorsDatasetFragment, unknown>;
export const AuthorPostsDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AuthorPostsDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AuthorPostsDetailsFragment, unknown>;
export const PostDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PostConnection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'author' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'images' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isLikedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'commentsCount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'likesCount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'topComments' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authorDetails' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'avatar' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sub' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isReply' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'parentId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postId' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'likes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'authorDetails' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creatorPage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venuePage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileImage' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authorDetails' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'AuthorPostsDetails' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AuthorPostsDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PostDetailsFragment, unknown>;
export const VirtuosoSiteMapsFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoSiteMapsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoSiteMaps' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapCreatorID' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'SiteMapDateCreated' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'SiteMapDescription' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'SiteMapGuestlistID' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapVenueID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapUMAP_Name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'venue' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
                { kind: 'Field', name: { kind: 'Name', value: 'VenueName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'VenueProfileImage' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'umapConfig' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'linux' } },
                { kind: 'Field', name: { kind: 'Name', value: 'windows' } },
                { kind: 'Field', name: { kind: 'Name', value: 'mac' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ios' } },
                { kind: 'Field', name: { kind: 'Name', value: 'android' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'linux_dedicated' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VirtuosoSiteMapsFragmentFragment, unknown>;
export const StreamDataSetFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'streamDataSet' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'StreamConfigurations' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'creatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'playbackURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isLive' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'event' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'EventID' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventImages' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<StreamDataSetFragment, unknown>;
export const UserDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stripeCustomerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subscriptionId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subscriptionStatus' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'connectedStripeAccountId' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserDetailsFragment, unknown>;
export const UserProfileFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserProfile' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'isFriendOfUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'friendId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'friendId' },
                },
              },
            ],
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hasSentRequestToUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'receiverId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'friendId' },
                },
              },
            ],
          },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stripeCustomerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subscriptionId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subscriptionStatus' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'connectedStripeAccountId' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserProfileFragment, unknown>;
export const UserAssetDatasetFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserAssetDataset' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UserAsset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accessibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'creatorId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'assetType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeleted' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isNFT' } },
          { kind: 'Field', name: { kind: 'Name', value: 'materialsID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nftURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vendorPageId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'AssetUMAP_Name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'umapConfig' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'linux' } },
                { kind: 'Field', name: { kind: 'Name', value: 'windows' } },
                { kind: 'Field', name: { kind: 'Name', value: 'mac' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ios' } },
                { kind: 'Field', name: { kind: 'Name', value: 'android' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'linux_dedicated' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserAssetDatasetFragment, unknown>;
export const VirtuosoVendorsDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVendorsDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVendors' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'GuestlistID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVendor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VirtuosoVendorsDetailsFragment, unknown>;
export const VirtuosoVenueDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVenueDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVenues' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'Address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVenue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'NumberOfStages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueAuthor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'StageNames' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueImages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueOwnerID' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileImage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'VenueProfileImages' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueTimeCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueUMAP_Name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VirtuosoVenueDetailsFragment, unknown>;
export const VenuePostAuthorDetailsFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VenuePostAuthorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VenuePostAuthorDetailsFragment, unknown>;
export const VenuePostFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VenuePostFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PostConnection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'author' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'images' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'commentsCount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'likesCount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isLikedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'topComments' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authorDetails' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'avatar' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sub' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isReply' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'parentId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postId' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'likes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'authorDetails' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creatorPage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venuePage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authorDetails' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'VenuePostAuthorDetails' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VenuePostAuthorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VenuePostFragmentFragment, unknown>;
export const GetOrderedAndCreatedStagesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getOrderedAndCreatedStages' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'BuyerID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'AssetType' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'assets' },
            name: { kind: 'Name', value: 'listUserAssets' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'creatorId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'BuyerID' },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'assetType' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'AssetType' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'assetType' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'order' },
            name: { kind: 'Name', value: 'getOwnership' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sub' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sub' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'stages' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'productName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'assetType' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetOrderedAndCreatedStagesQuery,
  GetOrderedAndCreatedStagesQueryVariables
>;
export const ListCommentsOnAPostDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listCommentsOnAPost' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'postId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'comments' },
            name: { kind: 'Name', value: 'listCommentsOnAPost' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'postId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'postId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'CommentDetails' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CommentAuthorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ReplyFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Comment' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authorDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CommentAuthorDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CommentDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Comment' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'replies' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ReplyFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authorDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CommentAuthorDetails' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListCommentsOnAPostQuery,
  ListCommentsOnAPostQueryVariables
>;
export const CommentOnAPostDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'commentOnAPost' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'postId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'author' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'content' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'postAuthor' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'newComment' },
            name: { kind: 'Name', value: 'createComment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'postId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'postId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'author' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'author' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'content' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'content' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'postAuthor' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'postAuthor' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CommentDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CommentAuthorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ReplyFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Comment' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authorDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CommentAuthorDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CommentDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Comment' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'replies' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'ReplyFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authorDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CommentAuthorDetails' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CommentOnAPostMutation,
  CommentOnAPostMutationVariables
>;
export const ReplyOnACommentDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'replyOnAComment' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'author' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'postAuthor' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'content' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'parentId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'postId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'reply' },
            name: { kind: 'Name', value: 'replyOnAComment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'author' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'author' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'postAuthor' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'postAuthor' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'content' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'content' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'parentId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'parentId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'postId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'postId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'ReplyFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CommentAuthorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'ReplyFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Comment' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'content' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'authorDetails' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'CommentAuthorDetails' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ReplyOnACommentMutation,
  ReplyOnACommentMutationVariables
>;
export const DeleteACommentDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteAComment' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'postId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'deletedComment' },
            name: { kind: 'Name', value: 'deleteComment' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'postId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'postId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteACommentMutation,
  DeleteACommentMutationVariables
>;
export const GetCreatorPageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCreatorPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'creator' },
            name: { kind: 'Name', value: 'getVirtuosoCreators' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'CreatorID' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'CreatorID' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoCreatorDetails' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isFollowedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'posts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'CreatorPostFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CreatorPostAuthorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoCreatorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoCreators' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCategory' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'CreatorGuestlistID' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorLocationID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorStartDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'isDisabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'CreatorPostFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PostConnection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'author' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'images' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'commentsCount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'likesCount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isLikedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
                { kind: 'Field', name: { kind: 'Name', value: 'pageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'topComments' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authorDetails' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'avatar' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sub' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isReply' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'parentId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postId' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'likes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'authorDetails' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creatorPage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venuePage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authorDetails' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'CreatorPostAuthorDetails',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCreatorPageQuery, GetCreatorPageQueryVariables>;
export const ListVirtuosoCreatorsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listVirtuosoCreators' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'TableVirtuosoCreatorsFilterInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nextToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: { kind: 'StringValue', value: '', block: false },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '20' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'creators' },
            name: { kind: 'Name', value: 'listVirtuosoCreators' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nextToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'nextToken' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorBio' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorCategory' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorGuestlistID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorLocationID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorOwnerID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorStartDate' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorVisibility' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorImage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorCover' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'followerCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'followers' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'pageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'pageType' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'avatar',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sub' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListVirtuosoCreatorsQuery,
  ListVirtuosoCreatorsQueryVariables
>;
export const CreateCreatorPageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateCreatorPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorBio' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorOwnerID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorName' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorImage' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorCover' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'newCreator' },
            name: { kind: 'Name', value: 'createVirtuosoCreators' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'CreatorBio' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'CreatorBio' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'CreatorOwnerID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'CreatorOwnerID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'CreatorName' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'CreatorName' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'CreatorImage' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'CreatorImage' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'CreatorCover' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'CreatorCover' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoCreatorDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoCreatorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoCreators' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCategory' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'CreatorGuestlistID' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorLocationID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorStartDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'isDisabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateCreatorPageMutation,
  CreateCreatorPageMutationVariables
>;
export const UpdateCreatorBioDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateCreatorBio' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorBio' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'update' },
            name: { kind: 'Name', value: 'updateVirtuosoCreators' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'CreatorBio' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'CreatorBio' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'CreatorID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'CreatorBio' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateCreatorBioMutation,
  UpdateCreatorBioMutationVariables
>;
export const UpdateCreatorHeaderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateCreatorHeader' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorImage' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorCover' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorName' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorBio' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'update' },
            name: { kind: 'Name', value: 'updateVirtuosoCreators' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'CreatorID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'CreatorImage' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'CreatorImage' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'CreatorCover' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'CreatorCover' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'CreatorName' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'CreatorName' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'CreatorBio' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'CreatorBio' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoCreatorDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoCreatorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoCreators' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCategory' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'CreatorGuestlistID' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorLocationID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorStartDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'isDisabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateCreatorHeaderMutation,
  UpdateCreatorHeaderMutationVariables
>;
export const UpdateCreatorDisabilityDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateCreatorDisability' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isDisabled' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'VirtuosoCreator' },
            name: { kind: 'Name', value: 'updateVirtuosoCreators' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'CreatorID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isDisabled' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isDisabled' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoCreatorDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoCreatorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoCreators' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCategory' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'CreatorGuestlistID' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorLocationID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorStartDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'isDisabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateCreatorDisabilityMutation,
  UpdateCreatorDisabilityMutationVariables
>;
export const UpdateCreatorDeactivatedDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateCreatorDeactivated' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isDeactivated' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'VirtuosoCreator' },
            name: { kind: 'Name', value: 'updateVirtuosoCreators' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'CreatorID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isDeactivated' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isDeactivated' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoCreatorDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoCreatorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoCreators' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCategory' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'CreatorGuestlistID' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorLocationID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorStartDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'isDisabled' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateCreatorDeactivatedMutation,
  UpdateCreatorDeactivatedMutationVariables
>;
export const ListDirectMessagesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listDirectMessages' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'dmId' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'includeSender' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'dms' },
            name: { kind: 'Name', value: 'listDirectMessages' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'dmId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'dmId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'attachments' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'senderId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sender' },
                        directives: [
                          {
                            kind: 'Directive',
                            name: { kind: 'Name', value: 'include' },
                            arguments: [
                              {
                                kind: 'Argument',
                                name: { kind: 'Name', value: 'if' },
                                value: {
                                  kind: 'Variable',
                                  name: {
                                    kind: 'Name',
                                    value: 'includeSender',
                                  },
                                },
                              },
                            ],
                          },
                        ],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reported' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'receiverId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'images' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'dmId' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reactions' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'audio' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListDirectMessagesQuery,
  ListDirectMessagesQueryVariables
>;
export const UpdateDirectMessageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateDirectMessage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'dmId' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'reactions' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'String' },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'dm' },
            name: { kind: 'Name', value: 'updateDirectMessage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'dmId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'dmId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'reactions' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'reactions' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateDirectMessageMutation,
  UpdateDirectMessageMutationVariables
>;
export const GetEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'eventId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: { kind: 'StringValue', value: 'guest', block: false },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'EventID' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'eventId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'EventCategory' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'EventCreatorID' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'EventDescription' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'EventImages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isEventLive' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isLive' } },
                { kind: 'Field', name: { kind: 'Name', value: 'StartTime' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EndTime' } },
                { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isTicketOwnedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'sub' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'sub' },
                      },
                    },
                  ],
                },
                { kind: 'Field', name: { kind: 'Name', value: 'EventID' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isLive' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'showOrganizer' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'timezone' } },
                { kind: 'Field', name: { kind: 'Name', value: 'showCreator' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isRecording' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'Price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'SitemapID' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isVipEntryAllowed' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'VenueLocation' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'EventCreatorPageId' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'isRealEvent' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'RealTicketLink' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creatorPage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorBio' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorImage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorCover' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'vipPrice' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sitemap' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'StageStreamMaps' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'stageID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'stageName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'streamID' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venue' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileImage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileCover' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'eventOwner' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'avatar' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetEventQuery, GetEventQueryVariables>;
export const DeleteVirtuosoEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteVirtuosoEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'event' },
            name: { kind: 'Name', value: 'deleteVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'EventID' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteVirtuosoEventMutation,
  DeleteVirtuosoEventMutationVariables
>;
export const GetEventTicketStatusDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getEventTicketStatus' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'eventId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'EventID' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'eventId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'EventID' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isTicketOwnedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'sub' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'sub' },
                      },
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetEventTicketStatusQuery,
  GetEventTicketStatusQueryVariables
>;
export const ListEventsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listEvents' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nextToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: { kind: 'StringValue', value: '', block: false },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '15' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'events' },
            name: { kind: 'Name', value: 'listVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nextToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'nextToken' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'EventID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'EventImages' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'EventName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isLive' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isEventLive' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'venue' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VenueName' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'VenueProfileImage',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VenueID' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListEventsQuery, ListEventsQueryVariables>;
export const GetStreamsAndRecordingsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getStreamsAndRecordings' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'eventId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: { kind: 'StringValue', value: '', block: false },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'stageId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: { kind: 'StringValue', value: '', block: false },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'live' },
            name: { kind: 'Name', value: 'getStreamsByStage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'eventId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'eventId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'stageId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'stageId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'streamID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'playbackURL' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'streamName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isLive' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'recordings' },
            name: { kind: 'Name', value: 'getStreamRecordingsByStage' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'eventId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'eventId' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'stageId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'stageId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'status' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'playback_id' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetStreamsAndRecordingsQuery,
  GetStreamsAndRecordingsQueryVariables
>;
export const ListPaginatedEventsByCategoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listPaginatedEventsByCategory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'category' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nextToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: { kind: 'StringValue', value: '', block: false },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '15' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'events' },
            name: { kind: 'Name', value: 'listVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCategory' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'category' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nextToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'nextToken' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'EventID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'EventImages' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'EventName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isLive' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isEventLive' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'venue' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VenueName' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'VenueProfileImage',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VenueID' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListPaginatedEventsByCategoryQuery,
  ListPaginatedEventsByCategoryQueryVariables
>;
export const ListEventsByCategoryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listEventsByCategory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '9' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'music' },
            name: { kind: 'Name', value: 'listVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCategory' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'StringValue',
                              value: 'Music',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EventCardDetails' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'sports' },
            name: { kind: 'Name', value: 'listVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCategory' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'StringValue',
                              value: 'Sports',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EventCardDetails' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'expos' },
            name: { kind: 'Name', value: 'listVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCategory' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'StringValue',
                              value: 'Expos',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EventCardDetails' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'performance' },
            name: { kind: 'Name', value: 'listVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCategory' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'StringValue',
                              value: 'Performance',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EventCardDetails' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'movies' },
            name: { kind: 'Name', value: 'listVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCategory' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'StringValue',
                              value: 'Movies',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EventCardDetails' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'education' },
            name: { kind: 'Name', value: 'listVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCategory' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'StringValue',
                              value: 'Education',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EventCardDetails' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'social' },
            name: { kind: 'Name', value: 'listVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCategory' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'StringValue',
                              value: 'Social',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EventCardDetails' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'cities' },
            name: { kind: 'Name', value: 'listVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCategory' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'StringValue',
                              value: 'Cities',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EventCardDetails' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'workplace' },
            name: { kind: 'Name', value: 'listVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCategory' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'StringValue',
                              value: 'Workplace',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'EventCardDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'EventCardDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoEventsConnection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'EventID' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventImages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isLive' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isEventLive' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venue' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileImage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListEventsByCategoryQuery,
  ListEventsByCategoryQueryVariables
>;
export const GetVenueSitemapsAndStreamsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getVenueSitemapsAndStreams' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'CreatorID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'venue' },
            name: { kind: 'Name', value: 'getVirtuosoVenues' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'VenueID' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'VenueID' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'StageNames' } },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'sitemaps' },
            name: { kind: 'Name', value: 'listVirtuosoSiteMapsByVenueID' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'venueId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'VenueID' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapID' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'livestreams' },
            name: { kind: 'Name', value: 'listStreamConfigurations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'creatorID' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'CreatorID' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'creatorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'streamID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'streamName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'playbackURL' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'streamKey' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'streamType' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetVenueSitemapsAndStreamsQuery,
  GetVenueSitemapsAndStreamsQueryVariables
>;
export const CreateEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventName' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventOwnerID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventCreatorID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventCategory' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventImages' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventTimeCreated' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventDescription' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SitemapID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'StageStreamMaps' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'StageStreamMapInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Price' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventDate' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'StartTime' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EndTime' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isVipEntryAllowed' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'vipPrice' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isEventLive' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'showOrganizer' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'showCreator' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isRecording' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueLocation' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventCreatorPageId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isRealEvent' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'RealTicketLink' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'timezone' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventName' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventName' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventOwnerID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventOwnerID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCreatorID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventCreatorID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCategory' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventCategory' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventImages' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventImages' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventTimeCreated' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventTimeCreated' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventDescription' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventDescription' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SitemapID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SitemapID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'StageStreamMaps' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'StageStreamMaps' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Price' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Price' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EndTime' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EndTime' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'StartTime' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'StartTime' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventDate' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventDate' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isVipEntryAllowed' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isVipEntryAllowed' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'vipPrice' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'vipPrice' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isEventLive' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isEventLive' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'showOrganizer' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'showOrganizer' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'showCreator' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'showCreator' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isRecording' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isRecording' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueLocation' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueLocation' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCreatorPageId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventCreatorPageId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isRealEvent' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isRealEvent' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'RealTicketLink' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'RealTicketLink' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'timezone' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'timezone' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'EventID' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventImages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isLive' } },
                { kind: 'Field', name: { kind: 'Name', value: 'StartTime' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EndTime' } },
                { kind: 'Field', name: { kind: 'Name', value: 'Price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isEventLive' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timezone' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'VenueLocation' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'StageStreamMaps' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'stageName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'streamID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'stageID' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venue' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateEventMutation, CreateEventMutationVariables>;
export const UpdateEventDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateEvent' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventName' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventOwnerID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventCreatorID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventCategory' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventImages' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventTimeCreated' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventDescription' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SitemapID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'StageStreamMaps' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'StageStreamMapInput' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Price' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EventDate' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'StartTime' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'EndTime' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isVipEntryAllowed' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'vipPrice' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isEventLive' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'showOrganizer' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'showCreator' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isRecording' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueLocation' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isRealEvent' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'RealTicketLink' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'timezone' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateVirtuosoEvents' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventName' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventName' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventOwnerID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventOwnerID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCreatorID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventCreatorID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventCategory' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventCategory' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventImages' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventImages' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventTimeCreated' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventTimeCreated' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventDescription' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventDescription' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SitemapID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SitemapID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'StageStreamMaps' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'StageStreamMaps' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Price' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Price' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EndTime' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EndTime' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'StartTime' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'StartTime' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'EventDate' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'EventDate' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isVipEntryAllowed' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isVipEntryAllowed' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'vipPrice' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'vipPrice' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isEventLive' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isEventLive' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'showOrganizer' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'showOrganizer' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'showCreator' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'showCreator' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isRecording' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isRecording' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueLocation' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueLocation' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isRealEvent' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isRealEvent' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'RealTicketLink' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'RealTicketLink' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'timezone' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'timezone' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'EventID' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventImages' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventDate' } },
                { kind: 'Field', name: { kind: 'Name', value: 'StartTime' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isLive' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EndTime' } },
                { kind: 'Field', name: { kind: 'Name', value: 'timezone' } },
                { kind: 'Field', name: { kind: 'Name', value: 'isEventLive' } },
                { kind: 'Field', name: { kind: 'Name', value: 'Price' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'VenueLocation' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'StageStreamMaps' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'stageName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'streamID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'stageID' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venue' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateEventMutation, UpdateEventMutationVariables>;
export const CreateFriendDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createFriend' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'friendId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'requestId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'notificationId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'friend' },
            name: { kind: 'Name', value: 'createFriendsTable' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'friendId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'friendId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'requestId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'requestId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'notificationId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'notificationId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'friendId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateFriendMutation,
  CreateFriendMutationVariables
>;
export const DeleteFriendDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteFriend' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'friendId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'deletedFriend' },
            name: { kind: 'Name', value: 'deleteFriendsTable' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'friendId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'friendId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'friendId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteFriendMutation,
  DeleteFriendMutationVariables
>;
export const RejectFriendRequestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'rejectFriendRequest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'notificationId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'request' },
            name: { kind: 'Name', value: 'deleteFriendRequest' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'notificationId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'notificationId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RejectFriendRequestMutation,
  RejectFriendRequestMutationVariables
>;
export const SendFriendRequestDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'sendFriendRequest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'data' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'receiverId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'senderId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'request' },
            name: { kind: 'Name', value: 'sendFriendRequest' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'data' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'data' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'receiverId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'receiverId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'senderId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'senderId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SendFriendRequestMutation,
  SendFriendRequestMutationVariables
>;
export const ListFriendsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listFriends' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'UserID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'friends' },
            name: { kind: 'Name', value: 'listFriendsTables' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'UserID' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'friendId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'friendDetails' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListFriendsQuery, ListFriendsQueryVariables>;
export const ListUserNotificationsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listUserNotifications' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'notifications' },
            name: { kind: 'Name', value: 'listUserNotifications' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sub' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sub' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'read' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'receiverId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'senderId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'requestId' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'postId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'sender' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'username' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListUserNotificationsQuery,
  ListUserNotificationsQueryVariables
>;
export const DeleteNotificationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteNotification' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'notification' },
            name: { kind: 'Name', value: 'deleteNotification' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'postId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'read' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteNotificationMutation,
  DeleteNotificationMutationVariables
>;
export const GetVenuesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getVenues' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ownership' },
            name: { kind: 'Name', value: 'getOwnership' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sub' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sub' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venues' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'VenueProfileCover',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VenueName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VenueID' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'Bio' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetVenuesQuery, GetVenuesQueryVariables>;
export const GetStagesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getStages' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ownership' },
            name: { kind: 'Name', value: 'getOwnership' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sub' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sub' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'stages' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'productName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rating' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'quantity' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'creatorId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'assetType' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'vendor' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'VendorID' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'VendorName' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'VendorImage',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetStagesQuery, GetStagesQueryVariables>;
export const GetOwnedSitemapsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getOwnedSitemaps' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ownership' },
            name: { kind: 'Name', value: 'getOwnership' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sub' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sub' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'sitemaps' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'SiteMapID' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'SiteMapDescription',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'SiteMapImage' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'SiteMapName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'venue' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'VenueID' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'VenueName' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'VenueProfileImage',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetOwnedSitemapsQuery,
  GetOwnedSitemapsQueryVariables
>;
export const GetOwnedInGameItemsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getOwnedInGameItems' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ownership' },
            name: { kind: 'Name', value: 'getOwnership' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sub' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sub' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'inGameItems' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'productName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rating' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'quantity' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'creatorId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'assetType' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetOwnedInGameItemsQuery,
  GetOwnedInGameItemsQueryVariables
>;
export const GetOwnedAvatarClothingDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getOwnedAvatarClothing' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ownership' },
            name: { kind: 'Name', value: 'getOwnership' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sub' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sub' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'avatarClothing' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'productName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'rating' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'quantity' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'creatorId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'assetType' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'vendor' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'VendorID' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'VendorName' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'VendorImage',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetOwnedAvatarClothingQuery,
  GetOwnedAvatarClothingQueryVariables
>;
export const GetOwnedTicketsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getOwnedTickets' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ownership' },
            name: { kind: 'Name', value: 'getOwnership' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sub' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sub' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tickets' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'EventID' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'NumberOfTicket' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ItemID' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'PaymentIntentID' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'TicketID' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'Price' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'UserID' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'Event' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'EventImages',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'EventOwnerID',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'EventDescription',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'EventCreatorID',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'EventName' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'Price' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'EventDate' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'StartTime' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'EndTime' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'vipPrice' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'Type' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetOwnedTicketsQuery,
  GetOwnedTicketsQueryVariables
>;
export const ListVirtuosoPagesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ListVirtuosoPages' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'showCreators' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'showVenues' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'showVendors' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'creatorFilter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'TableVirtuosoCreatorsFilterInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'venueFilter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'TableVirtuosoVenuesFilterInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'vendorFilter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'TableVirtuosoVendorsFilterInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'creators' },
            name: { kind: 'Name', value: 'listVirtuosoCreators' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'creatorFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '200' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  directives: [
                    {
                      kind: 'Directive',
                      name: { kind: 'Name', value: 'include' },
                      arguments: [
                        {
                          kind: 'Argument',
                          name: { kind: 'Name', value: 'if' },
                          value: {
                            kind: 'Variable',
                            name: { kind: 'Name', value: 'showCreators' },
                          },
                        },
                      ],
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: {
                          kind: 'Name',
                          value: 'VirtuosoCreatorsDataset',
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'venues' },
            name: { kind: 'Name', value: 'listVirtuosoVenues' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'venueFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '200' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  directives: [
                    {
                      kind: 'Directive',
                      name: { kind: 'Name', value: 'include' },
                      arguments: [
                        {
                          kind: 'Argument',
                          name: { kind: 'Name', value: 'if' },
                          value: {
                            kind: 'Variable',
                            name: { kind: 'Name', value: 'showVenues' },
                          },
                        },
                      ],
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'VirtuosoVenuesDataset' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'vendors' },
            name: { kind: 'Name', value: 'listVirtuosoVendors' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'vendorFilter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '200' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  directives: [
                    {
                      kind: 'Directive',
                      name: { kind: 'Name', value: 'include' },
                      arguments: [
                        {
                          kind: 'Argument',
                          name: { kind: 'Name', value: 'if' },
                          value: {
                            kind: 'Variable',
                            name: { kind: 'Name', value: 'showVendors' },
                          },
                        },
                      ],
                    },
                  ],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'VirtuosoVendorsDataset' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoCreatorsDataset' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoCreators' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCategory' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'CreatorGuestlistID' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorLocationID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorStartDate' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'CreatorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVenuesDataset' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVenues' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'Address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVenue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'NumberOfStages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueAuthor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueImages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileImage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'VenueProfileImages' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueTimeCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueUMAP_Name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVendorsDataset' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVendors' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'GuestlistID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVendor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListVirtuosoPagesQuery,
  ListVirtuosoPagesQueryVariables
>;
export const FollowPageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'followPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pageId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pageType' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createVirtuosoPageFollow' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'pageId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'pageType' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'pageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pageType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FollowPageMutation, FollowPageMutationVariables>;
export const UnfollowPageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'unfollowPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pageId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deleteVirtuosoPageFollow' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'pageId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'pageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pageType' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UnfollowPageMutation,
  UnfollowPageMutationVariables
>;
export const CreatePostDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreatePost' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'author' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'content' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'images' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pageId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'newPost' },
            name: { kind: 'Name', value: 'createPost' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'author' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'author' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'content' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'content' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'images' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'images' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'pageId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'author' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'images' } },
                { kind: 'Field', name: { kind: 'Name', value: 'likesCount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pageId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const GetPostByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPostById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'posts' },
            name: { kind: 'Name', value: 'getPostById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PostDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AuthorPostsDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PostConnection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'author' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'images' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isLikedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'commentsCount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'likesCount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'topComments' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authorDetails' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'avatar' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sub' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isReply' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'parentId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postId' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'likes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'authorDetails' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creatorPage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venuePage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileImage' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authorDetails' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'AuthorPostsDetails' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPostByIdQuery, GetPostByIdQueryVariables>;
export const ListPostsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listPosts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nextToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '5' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'posts' },
            name: { kind: 'Name', value: 'listPosts' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nextToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'nextToken' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PostDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AuthorPostsDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PostConnection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'author' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'images' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isLikedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'commentsCount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'likesCount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'topComments' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authorDetails' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'avatar' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sub' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isReply' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'parentId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postId' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'likes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'authorDetails' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creatorPage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venuePage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileImage' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authorDetails' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'AuthorPostsDetails' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListPostsQuery, ListPostsQueryVariables>;
export const ListPostsByAuthorDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listPostsByAuthor' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'author' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'posts' },
            name: { kind: 'Name', value: 'listPostsByAuthor' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'author' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'author' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'PostDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AuthorPostsDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PostDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PostConnection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'author' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'images' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isLikedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'commentsCount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'likesCount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'topComments' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authorDetails' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'avatar' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sub' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isReply' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'parentId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postId' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'likes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'authorDetails' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creatorPage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venuePage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileImage' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authorDetails' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'AuthorPostsDetails' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListPostsByAuthorQuery,
  ListPostsByAuthorQueryVariables
>;
export const LikeAPostDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'LikeAPost' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'author' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'postId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'like' },
            name: { kind: 'Name', value: 'createPostLikes' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'author' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'author' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'postId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'postId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LikeAPostMutation, LikeAPostMutationVariables>;
export const RemoveLikeOnAPostDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'removeLikeOnAPost' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'author' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'postId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'deletedLike' },
            name: { kind: 'Name', value: 'deletePostLikes' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'author' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'author' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'postId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'postId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  RemoveLikeOnAPostMutation,
  RemoveLikeOnAPostMutationVariables
>;
export const DeleteAPostDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteAPost' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pageId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'deletePost' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'pageId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteAPostMutation, DeleteAPostMutationVariables>;
export const GetPostDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getPost' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pageId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'post' },
            name: { kind: 'Name', value: 'getPost' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'pageId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pageId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'author' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'images' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isLikedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'commentsCount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'likesCount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'topComments' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authorDetails' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'avatar' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sub' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isReply' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'parentId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postId' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'likes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'authorDetails' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creatorPage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venuePage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileImage' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authorDetails' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'AuthorPostsDetails' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'AuthorPostsDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPostQuery, GetPostQueryVariables>;
export const UpdateSharesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateShares' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pageId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'shares' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'post' },
            name: { kind: 'Name', value: 'updatePost' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'pageId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'shares' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'shares' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pageId' } },
                { kind: 'Field', name: { kind: 'Name', value: 'shares' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateSharesMutation,
  UpdateSharesMutationVariables
>;
export const ListChatRoomsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listChatRooms' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'rooms' },
            name: { kind: 'Name', value: 'listChatRooms' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'avatar' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAt' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdBy' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListChatRoomsQuery, ListChatRoomsQueryVariables>;
export const GetChatRoomDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getChatRoom' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'room' },
            name: { kind: 'Name', value: 'getChatRooms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdBy' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetChatRoomQuery, GetChatRoomQueryVariables>;
export const CreateChatRoomsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createChatRooms' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'avatar' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cover' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'description' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createdBy' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'title' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'rooms' },
            name: { kind: 'Name', value: 'createChatRooms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'avatar' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'avatar' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'cover' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'cover' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'description' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'description' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'createdBy' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'createdBy' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'title' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'title' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateChatRoomsMutation,
  CreateChatRoomsMutationVariables
>;
export const UpdateChatRoomDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateChatRoom' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'avatar' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cover' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'description' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'title' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'room' },
            name: { kind: 'Name', value: 'updateChatRooms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'avatar' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'avatar' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'cover' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'cover' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'description' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'description' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'title' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'title' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateChatRoomMutation,
  UpdateChatRoomMutationVariables
>;
export const DeleteChatRoomsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteChatRooms' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'room' },
            name: { kind: 'Name', value: 'deleteChatRooms' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteChatRoomsMutation,
  DeleteChatRoomsMutationVariables
>;
export const GetSitemapsByVenueIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getSitemapsByVenueID' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapVenueID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listVirtuosoSiteMaps' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SiteMapVenueID' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'SiteMapVenueID' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapVenueID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapOwnerID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapImage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapDescription' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapDateCreated' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapGuestlistID' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetSitemapsByVenueIdQuery,
  GetSitemapsByVenueIdQueryVariables
>;
export const ListMarketplaceSitemapsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listMarketplaceSitemaps' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nextToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '9' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'sitemaps' },
            name: { kind: 'Name', value: 'listVirtuosoSiteMaps' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nextToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'nextToken' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapID' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isOwnedByUser' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'sub' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'userId' },
                            },
                          },
                        ],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapImage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'SiteMapDescription' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'venue' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VenueID' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VenueName' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'VenueProfileImage',
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListMarketplaceSitemapsQuery,
  ListMarketplaceSitemapsQueryVariables
>;
export const CreateVenueSiteMapDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateVenueSiteMap' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapCreatorID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapOwnerID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapVenueID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapName' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapImage' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Android_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Linux_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Mac_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Windows_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'iOS_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapDescription' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'umapConfig' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'UmapConfigInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapUMAP_Name' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'price' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'newSitemap' },
            name: { kind: 'Name', value: 'createVirtuosoSiteMaps' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Mac_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Mac_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SiteMapCreatorID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SiteMapCreatorID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SiteMapName' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SiteMapName' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Android_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Android_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Linux_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Linux_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SiteMapID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SiteMapID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SiteMapImage' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SiteMapImage' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SiteMapOwnerID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SiteMapOwnerID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SiteMapVenueID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SiteMapVenueID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Windows_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Windows_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'iOS_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'iOS_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SiteMapDescription' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SiteMapDescription' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'umapConfig' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'umapConfig' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SiteMapUMAP_Name' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SiteMapUMAP_Name' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'price' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'price' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoSiteMapsFragment' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoSiteMapsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoSiteMaps' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapCreatorID' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'SiteMapDateCreated' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'SiteMapDescription' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'SiteMapGuestlistID' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapVenueID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapUMAP_Name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'venue' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
                { kind: 'Field', name: { kind: 'Name', value: 'VenueName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'VenueProfileImage' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'umapConfig' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'linux' } },
                { kind: 'Field', name: { kind: 'Name', value: 'windows' } },
                { kind: 'Field', name: { kind: 'Name', value: 'mac' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ios' } },
                { kind: 'Field', name: { kind: 'Name', value: 'android' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'linux_dedicated' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateVenueSiteMapMutation,
  CreateVenueSiteMapMutationVariables
>;
export const GetVirtuosoSitemapDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getVirtuosoSitemap' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getVirtuosoSiteMaps' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'SiteMapID' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'SiteMapID' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoSiteMapsFragment' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isOwnedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'sub' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'sub' },
                      },
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoSiteMapsFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoSiteMaps' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapCreatorID' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'SiteMapDateCreated' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'SiteMapDescription' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'SiteMapGuestlistID' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapVenueID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'SiteMapUMAP_Name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'venue' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
                { kind: 'Field', name: { kind: 'Name', value: 'VenueName' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'VenueProfileImage' },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'umapConfig' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'linux' } },
                { kind: 'Field', name: { kind: 'Name', value: 'windows' } },
                { kind: 'Field', name: { kind: 'Name', value: 'mac' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ios' } },
                { kind: 'Field', name: { kind: 'Name', value: 'android' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'linux_dedicated' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetVirtuosoSitemapQuery,
  GetVirtuosoSitemapQueryVariables
>;
export const UpdateVirtuosoSiteMapDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateVirtuosoSiteMap' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapDescription' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapImage' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapName' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Android_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Linux_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Mac_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Windows_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'iOS_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'SiteMapUMAP_Name' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'price' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'updateVirtuosoSiteMaps' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SiteMapDescription' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SiteMapDescription' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SiteMapID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SiteMapID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SiteMapImage' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SiteMapImage' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SiteMapName' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SiteMapName' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Mac_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Mac_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Android_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Android_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Linux_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Linux_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Windows_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Windows_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'iOS_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'iOS_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'SiteMapUMAP_Name' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'SiteMapUMAP_Name' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'price' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'price' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'SiteMapID' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateVirtuosoSiteMapMutation,
  UpdateVirtuosoSiteMapMutationVariables
>;
export const ListStreamsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listStreams' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'creatorID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'streams' },
            name: { kind: 'Name', value: 'listStreamConfigurations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'creatorID' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'creatorID' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'streamDataSet' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'streamDataSet' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'StreamConfigurations' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'creatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'playbackURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isLive' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'event' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'EventID' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventImages' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListStreamsQuery, ListStreamsQueryVariables>;
export const GenerateStreamDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'generateStream' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'creatorID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'streamID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'playbackURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'streamKey' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'streamName' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'streamType' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'timestamp' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'stream' },
            name: { kind: 'Name', value: 'createStreamConfigurations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'creatorID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'creatorID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'playbackURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'playbackURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'streamID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'streamID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'streamKey' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'streamKey' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'streamName' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'streamName' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'streamType' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'streamType' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'timestamp' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'timestamp' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'streamDataSet' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'streamDataSet' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'StreamConfigurations' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'creatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'playbackURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamKey' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'streamType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isLive' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'event' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'EventID' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventName' } },
                { kind: 'Field', name: { kind: 'Name', value: 'EventImages' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GenerateStreamMutation,
  GenerateStreamMutationVariables
>;
export const DeleteStreamDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteStream' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'streamID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'stream' },
            name: { kind: 'Name', value: 'deleteStreamConfigurations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'streamID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'streamID' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'streamID' } },
                { kind: 'Field', name: { kind: 'Name', value: 'streamName' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteStreamMutation,
  DeleteStreamMutationVariables
>;
export const UpdateStreamConfigurationsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateStreamConfigurations' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'streamID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'eventId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'venueId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'stageId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'stream' },
            name: { kind: 'Name', value: 'updateStreamConfigurations' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'streamID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'streamID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'eventId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'eventId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'venueId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'venueId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'stageId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'stageId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'streamID' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateStreamConfigurationsMutation,
  UpdateStreamConfigurationsMutationVariables
>;
export const CreateSupportTicketDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createSupportTicket' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateSupportTicketInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'tickets' },
            name: { kind: 'Name', value: 'createSupportTicket' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'assignedTo' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'priority' } },
                { kind: 'Field', name: { kind: 'Name', value: 'status' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'userId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateSupportTicketMutation,
  CreateSupportTicketMutationVariables
>;
export const GetUserOwnedTicketsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getUserOwnedTickets' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'UserID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'ticket' },
            name: { kind: 'Name', value: 'listVirtuosoTickets' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'UserID' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'UserID' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'TicketID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'EventID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'UserID' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'Price' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'Type' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'Event' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'EventImages' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'EventOwnerID' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'EventDescription' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'EventCreatorID' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'EventName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'EventDate' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetUserOwnedTicketsQuery,
  GetUserOwnedTicketsQueryVariables
>;
export const GetUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'user' },
            name: { kind: 'Name', value: 'getUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sub' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sub' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UserDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stripeCustomerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subscriptionId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subscriptionStatus' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'connectedStripeAccountId' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUserAddressDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getUserAddress' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'user' },
            name: { kind: 'Name', value: 'getUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sub' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sub' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'addresses' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'phone' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'address' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'state' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postal_code' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'line2' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'line1' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'country' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'city' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserAddressQuery, GetUserAddressQueryVariables>;
export const GetProfileDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getProfile' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'friendId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'user' },
            name: { kind: 'Name', value: 'getUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'sub' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'sub' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UserProfile' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserProfile' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'about' } },
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
          { kind: 'Field', name: { kind: 'Name', value: 'username' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'isFriendOfUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'friendId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'friendId' },
                },
              },
            ],
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'hasSentRequestToUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'receiverId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'friendId' },
                },
              },
            ],
          },
          { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
          { kind: 'Field', name: { kind: 'Name', value: 'email' } },
          { kind: 'Field', name: { kind: 'Name', value: 'stripeCustomerId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'subscriptionId' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subscriptionStatus' },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'connectedStripeAccountId' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const UpdateUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'about' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'avatar' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'cover' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'addresses' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'ContactInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'gender' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'name' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'update' },
            name: { kind: 'Name', value: 'updateUser' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'about' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'about' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'avatar' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'avatar' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'cover' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'cover' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'addresses' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'addresses' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'gender' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'gender' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'name' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'name' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'sub' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'sub' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'about' } },
                { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
                { kind: 'Field', name: { kind: 'Name', value: 'cover' } },
                { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'gender' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
                { kind: 'Field', name: { kind: 'Name', value: 'username' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateUserMutation, UpdateUserMutationVariables>;
export const ListUserAssetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listUserAsset' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'creatorId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listUserAssets' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isDeleted' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: { kind: 'BooleanValue', value: false },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'accessibility' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'StringValue',
                              value: 'public',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'creatorId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'ne' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'creatorId' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UserAssetDataset' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'vendor' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VendorID' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VendorName' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserAssetDataset' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UserAsset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accessibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'creatorId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'assetType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeleted' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isNFT' } },
          { kind: 'Field', name: { kind: 'Name', value: 'materialsID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nftURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vendorPageId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'AssetUMAP_Name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'umapConfig' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'linux' } },
                { kind: 'Field', name: { kind: 'Name', value: 'windows' } },
                { kind: 'Field', name: { kind: 'Name', value: 'mac' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ios' } },
                { kind: 'Field', name: { kind: 'Name', value: 'android' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'linux_dedicated' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ListUserAssetQuery, ListUserAssetQueryVariables>;
export const GetUserAssetQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getUserAssetQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'userasset' },
            name: { kind: 'Name', value: 'getUserAsset' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UserAssetDataset' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isOwnedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'sub' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'sub' },
                      },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'vendor' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VendorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VendorName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VendorImage' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserAssetDataset' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UserAsset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accessibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'creatorId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'assetType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeleted' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isNFT' } },
          { kind: 'Field', name: { kind: 'Name', value: 'materialsID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nftURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vendorPageId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'AssetUMAP_Name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'umapConfig' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'linux' } },
                { kind: 'Field', name: { kind: 'Name', value: 'windows' } },
                { kind: 'Field', name: { kind: 'Name', value: 'mac' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ios' } },
                { kind: 'Field', name: { kind: 'Name', value: 'android' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'linux_dedicated' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetUserAssetQueryQuery,
  GetUserAssetQueryQueryVariables
>;
export const ListUserAssetByAssetTypeDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listUserAssetByAssetType' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'creatorId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'assetType' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nextToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '9' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listUserAssets' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isDeleted' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: { kind: 'BooleanValue', value: false },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'accessibility' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'StringValue',
                              value: 'public',
                              block: false,
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'creatorId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'ne' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'creatorId' },
                            },
                          },
                        ],
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'assetType' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'assetType' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nextToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'nextToken' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UserAssetDataset' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isOwnedByUser' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'sub' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'creatorId' },
                            },
                          },
                        ],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'vendor' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VendorID' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VendorName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VendorImage' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserAssetDataset' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UserAsset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accessibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'creatorId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'assetType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeleted' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isNFT' } },
          { kind: 'Field', name: { kind: 'Name', value: 'materialsID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nftURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vendorPageId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'AssetUMAP_Name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'umapConfig' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'linux' } },
                { kind: 'Field', name: { kind: 'Name', value: 'windows' } },
                { kind: 'Field', name: { kind: 'Name', value: 'mac' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ios' } },
                { kind: 'Field', name: { kind: 'Name', value: 'android' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'linux_dedicated' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListUserAssetByAssetTypeQuery,
  ListUserAssetByAssetTypeQueryVariables
>;
export const ListUserAssetsForManagementDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listUserAssetsForManagement' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'creatorId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listUserAssets' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'creatorId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'creatorId' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'UserAssetDataset' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserAssetDataset' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UserAsset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accessibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'creatorId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'assetType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeleted' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isNFT' } },
          { kind: 'Field', name: { kind: 'Name', value: 'materialsID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nftURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vendorPageId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'AssetUMAP_Name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'umapConfig' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'linux' } },
                { kind: 'Field', name: { kind: 'Name', value: 'windows' } },
                { kind: 'Field', name: { kind: 'Name', value: 'mac' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ios' } },
                { kind: 'Field', name: { kind: 'Name', value: 'android' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'linux_dedicated' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListUserAssetsForManagementQuery,
  ListUserAssetsForManagementQueryVariables
>;
export const PublishUserAssetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'publishUserAsset' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'accessibility' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'updatedUserAsset' },
            name: { kind: 'Name', value: 'updateUserAsset' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'accessibility' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'accessibility' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UserAssetDataset' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserAssetDataset' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UserAsset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accessibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'creatorId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'assetType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeleted' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isNFT' } },
          { kind: 'Field', name: { kind: 'Name', value: 'materialsID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nftURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vendorPageId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'AssetUMAP_Name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'umapConfig' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'linux' } },
                { kind: 'Field', name: { kind: 'Name', value: 'windows' } },
                { kind: 'Field', name: { kind: 'Name', value: 'mac' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ios' } },
                { kind: 'Field', name: { kind: 'Name', value: 'android' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'linux_dedicated' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PublishUserAssetMutation,
  PublishUserAssetMutationVariables
>;
export const CreateUserAssetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUserAsset' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'assetID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'creatorId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'AssetOwnerID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'description' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'images' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nftURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'price' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'productName' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isNFT' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'assetType' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'vendorPageId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'accessibility' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: { kind: 'StringValue', value: 'private', block: false },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Android_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Linux_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Mac_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Windows_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'iOS_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'umapConfig' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'UmapConfigInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'AssetUMAP_Name' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'newUserAsset' },
            name: { kind: 'Name', value: 'createUserAsset' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'assetID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'creatorId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'creatorId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'AssetOwnerID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'AssetOwnerID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'description' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'description' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'nftURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'nftURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'price' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'price' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'productName' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'productName' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isNFT' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isNFT' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'image' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'images' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'assetType' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'assetType' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'accessibility' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'accessibility' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'vendorPageId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'vendorPageId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isDeleted' },
                      value: { kind: 'BooleanValue', value: false },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Mac_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Mac_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Android_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Android_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Linux_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Linux_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Windows_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Windows_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'Linux_Dedicated_Server_PAKURL',
                      },
                      value: {
                        kind: 'Variable',
                        name: {
                          kind: 'Name',
                          value: 'Linux_Dedicated_Server_PAKURL',
                        },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'iOS_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'iOS_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'umapConfig' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'umapConfig' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'AssetUMAP_Name' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'AssetUMAP_Name' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UserAssetDataset' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserAssetDataset' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UserAsset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accessibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'creatorId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'assetType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeleted' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isNFT' } },
          { kind: 'Field', name: { kind: 'Name', value: 'materialsID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nftURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vendorPageId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'AssetUMAP_Name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'umapConfig' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'linux' } },
                { kind: 'Field', name: { kind: 'Name', value: 'windows' } },
                { kind: 'Field', name: { kind: 'Name', value: 'mac' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ios' } },
                { kind: 'Field', name: { kind: 'Name', value: 'android' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'linux_dedicated' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateUserAssetMutation,
  CreateUserAssetMutationVariables
>;
export const UpdateUserAssetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateUserAsset' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'creatorId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'AssetOwnerID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'description' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'images' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nftURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'price' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'productName' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isNFT' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'assetType' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'vendorPageId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'accessibility' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Android_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Linux_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Mac_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Windows_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'iOS_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'umapConfig' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'UmapConfigInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'AssetUMAP_Name' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'update' },
            name: { kind: 'Name', value: 'updateUserAsset' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'creatorId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'creatorId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'AssetOwnerID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'AssetOwnerID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'description' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'description' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'nftURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'nftURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'price' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'price' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'productName' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'productName' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isNFT' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isNFT' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'image' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'images' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'assetType' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'assetType' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'accessibility' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'accessibility' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'vendorPageId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'vendorPageId' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isDeleted' },
                      value: { kind: 'BooleanValue', value: false },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Mac_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Mac_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Android_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Android_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Linux_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Linux_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Windows_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Windows_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'Linux_Dedicated_Server_PAKURL',
                      },
                      value: {
                        kind: 'Variable',
                        name: {
                          kind: 'Name',
                          value: 'Linux_Dedicated_Server_PAKURL',
                        },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'iOS_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'iOS_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'umapConfig' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'umapConfig' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'AssetUMAP_Name' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'AssetUMAP_Name' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'UserAssetDataset' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'UserAssetDataset' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'UserAsset' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'accessibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'creatorId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'assetType' } },
          { kind: 'Field', name: { kind: 'Name', value: 'description' } },
          { kind: 'Field', name: { kind: 'Name', value: 'id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeleted' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isNFT' } },
          { kind: 'Field', name: { kind: 'Name', value: 'materialsID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'nftURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          { kind: 'Field', name: { kind: 'Name', value: 'productName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'quantity' } },
          { kind: 'Field', name: { kind: 'Name', value: 'rating' } },
          { kind: 'Field', name: { kind: 'Name', value: 'vendorPageId' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'AssetUMAP_Name' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'umapConfig' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'linux' } },
                { kind: 'Field', name: { kind: 'Name', value: 'windows' } },
                { kind: 'Field', name: { kind: 'Name', value: 'mac' } },
                { kind: 'Field', name: { kind: 'Name', value: 'ios' } },
                { kind: 'Field', name: { kind: 'Name', value: 'android' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'linux_dedicated' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateUserAssetMutation,
  UpdateUserAssetMutationVariables
>;
export const DeleteUserAssetDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'deleteUserAsset' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'asset' },
            name: { kind: 'Name', value: 'deleteUserAsset' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'id' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'id' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'productName' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteUserAssetMutation,
  DeleteUserAssetMutationVariables
>;
export const GetVendorPageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetVendorPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VendorID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'vendor' },
            name: { kind: 'Name', value: 'getVirtuosoVendors' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'VendorID' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'VendorID' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoVendorsDetails' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isFollowedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVendorsDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVendors' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'GuestlistID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVendor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetVendorPageQuery, GetVendorPageQueryVariables>;
export const ListVirtuosoVendorsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listVirtuosoVendors' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'TableVirtuosoVendorsFilterInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nextToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: { kind: 'StringValue', value: '', block: false },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '20' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'vendors' },
            name: { kind: 'Name', value: 'listVirtuosoVendors' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nextToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'nextToken' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'GuestlistID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'IsRealWorldVendor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VendorBio' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VendorCreatorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VendorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VendorName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VendorCover' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VendorImage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VendorOwnerID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VendorVisibility' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'followerCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'followers' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'pageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'pageType' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'avatar',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sub' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListVirtuosoVendorsQuery,
  ListVirtuosoVendorsQueryVariables
>;
export const GetVendorProductsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getVendorProducts' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'vendorPageId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listUserAssets' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'vendorPageId' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'vendorPageId' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'productName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'assetType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'vendorPageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'vendor' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VendorID' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VendorName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'VendorImage' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetVendorProductsQuery,
  GetVendorProductsQueryVariables
>;
export const CreateVendorPageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateVendorPage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VendorName' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VendorBio' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VendorOwnerID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VendorCreatorID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'newVendor' },
            name: { kind: 'Name', value: 'createVirtuosoVendors' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VendorName' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VendorName' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VendorBio' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VendorBio' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VendorOwnerID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VendorOwnerID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VendorCreatorID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VendorCreatorID' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoVendorsDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVendorsDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVendors' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'GuestlistID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVendor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateVendorPageMutation,
  CreateVendorPageMutationVariables
>;
export const UpdateVendorBioDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateVendorBio' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VendorID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VendorBio' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'update' },
            name: { kind: 'Name', value: 'updateVirtuosoVendors' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VendorBio' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VendorBio' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VendorID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VendorID' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'VendorBio' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateVendorBioMutation,
  UpdateVendorBioMutationVariables
>;
export const UpdateVendorHeaderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateVendorHeader' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VendorID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VendorImage' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VendorCover' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VendorName' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VendorBio' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'update' },
            name: { kind: 'Name', value: 'updateVirtuosoVendors' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VendorID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VendorID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VendorImage' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VendorImage' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VendorCover' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VendorCover' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VendorName' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VendorName' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VendorBio' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VendorBio' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoVendorsDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVendorsDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVendors' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'GuestlistID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVendor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateVendorHeaderMutation,
  UpdateVendorHeaderMutationVariables
>;
export const UpdateVendorDeactivatedDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateVendorDeactivated' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VendorID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isDeactivated' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'VirtuosoVendor' },
            name: { kind: 'Name', value: 'updateVirtuosoVendors' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VendorID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VendorID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isDeactivated' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isDeactivated' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoVendorsDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVendorsDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVendors' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'GuestlistID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVendor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorBio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorImage' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorOwnerID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VendorVisibility' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateVendorDeactivatedMutation,
  UpdateVendorDeactivatedMutationVariables
>;
export const GetVenuePageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetVenuePage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'userId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'venue' },
            name: { kind: 'Name', value: 'getVirtuosoVenues' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'VenueID' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'VenueID' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoVenueDetails' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isFollowedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isOwnedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'sub' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'posts' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'VenuePostFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VenuePostAuthorDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'avatar' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'sub' } },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVenueDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVenues' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'Address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVenue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'NumberOfStages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueAuthor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'StageNames' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueImages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueOwnerID' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileImage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'VenueProfileImages' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueTimeCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueUMAP_Name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VenuePostFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'PostConnection' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'items' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'author' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'images' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'commentsCount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'likesCount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pageId' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'isLikedByUser' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'userId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'userId' },
                      },
                    },
                  ],
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'topComments' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'items' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'authorDetails' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'avatar' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sub' },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'content' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'createdAt' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'isReply' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'parentId' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'postId' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'likes' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'authorDetails' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'creatorPage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'CreatorImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'venuePage' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileImage' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'authorDetails' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'VenuePostAuthorDetails' },
                      },
                    ],
                  },
                },
              ],
            },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetVenuePageQuery, GetVenuePageQueryVariables>;
export const GetVenueDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetVenue' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'venue' },
            name: { kind: 'Name', value: 'getVirtuosoVenues' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'VenueID' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'VenueID' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoVenueDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVenueDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVenues' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'Address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVenue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'NumberOfStages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueAuthor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'StageNames' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueImages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueOwnerID' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileImage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'VenueProfileImages' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueTimeCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueUMAP_Name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetVenueQuery, GetVenueQueryVariables>;
export const ListVirtuosoVenuesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listVirtuosoVenues' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'filter' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'TableVirtuosoVenuesFilterInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nextToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: { kind: 'StringValue', value: '', block: false },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '200' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'venues' },
            name: { kind: 'Name', value: 'listVirtuosoVenues' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'filter' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nextToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'nextToken' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'Address' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'Android_PAKURL' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'Bio' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'IsRealWorldVenue' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'Linux_PAKURL' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'NumberOfStages' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'Mac_PAKURL' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueAuthor' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueCreatorID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueImages' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueOwnerID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileCover' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileImage' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileImages' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueTimeCreated' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueUMAP_Name' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'Windows_PAKURL' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'iOS_PAKURL' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'followerCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'followers' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'items' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'pageId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'pageType' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'userId' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'user' },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'avatar',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'sub' },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListVirtuosoVenuesQuery,
  ListVirtuosoVenuesQueryVariables
>;
export const ListMarketplaceVenuesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'listMarketplaceVenues' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'nextToken' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'sub' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          defaultValue: { kind: 'IntValue', value: '9' },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'venues' },
            name: { kind: 'Name', value: 'listVirtuosoVenues' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'nextToken' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'nextToken' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'price' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueProfileCover' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'Bio' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'isOwnedByUser' },
                        arguments: [
                          {
                            kind: 'Argument',
                            name: { kind: 'Name', value: 'sub' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          },
                        ],
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'nextToken' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ListMarketplaceVenuesQuery,
  ListMarketplaceVenuesQueryVariables
>;
export const GetVenuesCreatedByUserDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetVenuesCreatedByUser' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueCreatorID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'listVirtuosoVenues' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'filter' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueCreatorID' },
                      value: {
                        kind: 'ObjectValue',
                        fields: [
                          {
                            kind: 'ObjectField',
                            name: { kind: 'Name', value: 'eq' },
                            value: {
                              kind: 'Variable',
                              name: { kind: 'Name', value: 'VenueCreatorID' },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueImages' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueOwnerID' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'NumberOfStages' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'VenueCreatorID' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetVenuesCreatedByUserQuery,
  GetVenuesCreatedByUserQueryVariables
>;
export const CreateVenuePageDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateVenuePage' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'Bio' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueName' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueOwnerID' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueAuthor' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'IsRealWorldVenue' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueCreatorID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'newVenue' },
            name: { kind: 'Name', value: 'createVirtuosoVenues' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Bio' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Bio' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueName' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueOwnerID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueOwnerID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueAuthor' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueAuthor' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'IsRealWorldVenue' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'IsRealWorldVenue' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueCreatorID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueCreatorID' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoVenueDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVenueDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVenues' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'Address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVenue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'NumberOfStages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueAuthor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'StageNames' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueImages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueOwnerID' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileImage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'VenueProfileImages' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueTimeCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueUMAP_Name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateVenuePageMutation,
  CreateVenuePageMutationVariables
>;
export const UpdateVenueBioDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateVenueBio' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'Bio' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'update' },
            name: { kind: 'Name', value: 'updateVirtuosoVenues' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Bio' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Bio' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'Bio' } },
                { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateVenueBioMutation,
  UpdateVenueBioMutationVariables
>;
export const UpdateVenueHeaderDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateVenueHeader' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'Bio' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueProfileImage' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueProfileCover' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueName' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'update' },
            name: { kind: 'Name', value: 'updateVirtuosoVenues' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Bio' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Bio' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueProfileImage' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueProfileImage' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueProfileCover' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueProfileCover' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueName' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueName' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoVenueDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVenueDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVenues' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'Address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVenue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'NumberOfStages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueAuthor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'StageNames' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueImages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueOwnerID' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileImage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'VenueProfileImages' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueTimeCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueUMAP_Name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateVenueHeaderMutation,
  UpdateVenueHeaderMutationVariables
>;
export const UpdateVenuePakDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateVenuePak' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Android_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Linux_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Mac_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'NumberOfStages' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'Windows_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'iOS_PAKURL' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueImages' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'StageNames' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueUMAP_Name' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'price' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'update' },
            name: { kind: 'Name', value: 'updateVirtuosoVenues' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Android_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Android_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Linux_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Linux_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Mac_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Mac_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: {
                        kind: 'Name',
                        value: 'Linux_Dedicated_Server_PAKURL',
                      },
                      value: {
                        kind: 'Variable',
                        name: {
                          kind: 'Name',
                          value: 'Linux_Dedicated_Server_PAKURL',
                        },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'NumberOfStages' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'NumberOfStages' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'Windows_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'Windows_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'iOS_PAKURL' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'iOS_PAKURL' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueImages' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueImages' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'StageNames' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'StageNames' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueUMAP_Name' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueUMAP_Name' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'price' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'price' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoVenueDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVenueDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVenues' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'Address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVenue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'NumberOfStages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueAuthor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'StageNames' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueImages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueOwnerID' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileImage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'VenueProfileImages' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueTimeCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueUMAP_Name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateVenuePakMutation,
  UpdateVenuePakMutationVariables
>;
export const UpdateVenueDeactivatedDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'updateVenueDeactivated' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'VenueID' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'isDeactivated' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'VirtuosoVenue' },
            name: { kind: 'Name', value: 'updateVirtuosoVenues' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'VenueID' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'VenueID' },
                      },
                    },
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'isDeactivated' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'isDeactivated' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'FragmentSpread',
                  name: { kind: 'Name', value: 'VirtuosoVenueDetails' },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'VirtuosoVenueDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'VirtuosoVenues' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'Address' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Android_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Bio' } },
          { kind: 'Field', name: { kind: 'Name', value: 'IsRealWorldVenue' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Linux_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'NumberOfStages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Mac_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueAuthor' } },
          { kind: 'Field', name: { kind: 'Name', value: 'StageNames' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueCreatorID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueID' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueImages' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueName' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueOwnerID' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'Linux_Dedicated_Server_PAKURL' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileCover' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueProfileImage' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'VenueProfileImages' },
          },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueTimeCreated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'VenueUMAP_Name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'Windows_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'iOS_PAKURL' } },
          { kind: 'Field', name: { kind: 'Name', value: 'followerCount' } },
          { kind: 'Field', name: { kind: 'Name', value: 'isDeactivated' } },
          { kind: 'Field', name: { kind: 'Name', value: 'price' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'followers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'pageType' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'userId' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'user' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'avatar' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'sub' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateVenueDeactivatedMutation,
  UpdateVenueDeactivatedMutationVariables
>;
