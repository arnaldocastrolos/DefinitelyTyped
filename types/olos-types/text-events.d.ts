import { OlosEvent } from "./olos-events";

export interface LoginResponse extends OlosEvent {
  eventData: {
    agentName: string;
    errorCode: number;
    errorMessage: string;
  };
}

export interface LoginCampaignText extends OlosEvent {
  eventData: {
    agentId: string;
    campaignId: number;
    campaignName: string;
    campaignCode: string;
  };
}

export interface LogoutCampaign extends OlosEvent {
  eventData: {
    agentId: string;
    campaignId: number;
    campaignCode: string;
  };
}

export interface ResponseToAgent extends OlosEvent {
  eventData: {
    agentId: string;
    errorCode: number;
    errorMessage: string;
  };
}

export interface ScreenPopText extends OlosEvent {
  eventData: {
    dialogId: string;
    journeyId: string;
    campaignId: number;
    userNickName: string;
    conversation: CurrentBotConversation;
    extraData: string;
    conversationId: string;
  };
}

export interface MessageResponse extends OlosEvent {
  eventData: {
    dialogId: string;
    reqId: string;
    messageId: string;
    errorCode: number;
    errorMessage: string;
  };
}

export interface MessageReceived extends OlosEvent {
  eventData: {
    agentId: string;
    dialogId: string;
    messageId: string;
    message: string;
    sender: number;
    attachments: string;
  };
}

export interface Typing extends OlosEvent {
  eventData: {
    agentId: string;
    dialogId: string;
  };
}

export interface ChangeStatusText extends OlosEvent {
  eventData: {
    agentId: string;
    campaignId: number;
    status: number;
    nextStatus?: number;
    reasonId?: number;
  };
}

export interface InactivityAlert extends OlosEvent {
  eventData: {
    agentId: string;
    dialogId: string;
    message: string;
  };
}

export interface GenericResponse extends OlosEvent {
  eventData: {
    agentId: string;
    errorCode: number;
    errorMessage: string;
  };
}

export interface DispositionResponse extends OlosEvent {
  eventData: {
    agentId: string;
    dialogId: string;
    errorCode: number;
    errorMessage: string;
  };
}

export interface DialogTerminated extends OlosEvent {
  eventData: {
    agentId: string;
    dialogId: string;
    dispositionId?: number;
    dispositionCode: string;
  };
}

export interface CurrentDialogsResponse extends OlosEvent {
  eventData: {
    lstCurrentDialog: { [key: number]: string };
    errorCode: number;
    errorMessage: string;
  };
}

export interface HeartbeatNotify extends OlosEvent {
  eventData: {
    agentId: string;
    timestamp: string;
  };
}

export interface ListPauseReasonsResponse extends OlosEvent {
  eventData: {
    agentId: string;
    pauseReasons: PauseReasonData[];
    errorCode: number;
    errorMessage: string;
  };
}

export interface ListDispositionsResponse extends OlosEvent {
  eventData: {
    agentId: string;
    dispositions: DispositionData[];
    errorCode: number;
    errorMessage: string;
    campaignId: number;
  };
}

export interface AsyncMessageReceived extends OlosEvent {
  eventData: {
    agentId: string;
    campaignId: number;
    conversationId: string;
    channel: string;
    from: string;
    subject: string;
    hasAttachment: boolean;
    expirationDateTime: string;
    lastUpdate: string;
    lastMessageReceived: string;
    lastMessageSent: string;
  };
}

export interface AsyncMessageScreenPop extends OlosEvent {
  eventData: {
    agentId: string;
    campaignId: number;
    conversationId: string;
    messageId: string;
    instant: string;
    channel: string;
    from: string;
    to: string;
    subject: string;
    content: string;
    formatedContent: string;
    attachments: string;
    expirationDateTime: string;
    extraData: string;
  };
}

export interface AsyncMessageListResponse extends OlosEvent {
  eventData: {
    agentId: string;
    messages: AsyncMessageData[];
  };
}

export interface AsyncMessageHistoricalResponse extends OlosEvent {
  eventData: {
    agentId: string;
    conversationId: string;
    campaignId: number;
    channel: string;
    messages: AsyncMessageContentData[];
  };
}

export interface AsyncMessageResetReadingTimeoutResponse extends OlosEvent {
  eventData: {
    expirationTime: string;
    agentId: string;
    conversationId: string;
    errorCode: number;
    errorMsg: string;
  };
}

export interface TransferResponse extends OlosEvent {
  eventData: {
    agentId: string;
    dialogId: string;
    errorCode: number;
    errorMessage: string;
  };
}

export interface MessageNotice extends OlosEvent {
  eventData: {
    agentId: string;
    dialogId: string;
    messageId: string;
    status: string;
  };
}

export interface PauseResponse extends OlosEvent {
  eventData: {
    agentId: string;
    reasonId?: number;
    reasonCode: string;
    errorCode: number;
    errorMessage: string;
  };
}

export type AsyncMessageContentData = {
  messageId: string;
  instant: string;
  from: string;
  to: string;
  subject: string;
  content: string;
  agentId: string;
  formatedContent: string;
  attachments: string;
};

export type AsyncMessageData = {
  conversationId: string;
  campaignId: number;
  messageId: string;
  instant: string;
  channel: string;
  from: string;
  to: string;
  subject: string;
  content: string;
  hasAttachment: boolean;
  expirationDateTime: string;
  lastUpdate: string;
  lastMessageReceived: string;
  lastMessageSent: string;
  cc: string;
};

export type DispositionData = {
  id: number;
  name: string;
  type: DispositionTypeData;
  code: string;
  hasActionPlan: number;
};

export type DispositionTypeData = {
  typeId: number;
  description: string;
};

export type PauseReasonData = {
  id: number;
  name: string;
  type: PauseReasonType;
  code: string;
};

export type CurrentBotConversation = {
  botnckname: string;
  usrnckname: string;
  conv: BotMessage[];
};

export type BotMessage = {
  sender: number;
  messageId: string;
  text: string;
  instant: string;
  attachments: Attachment[];
};

export type Attachment = {
  eventData: {
    contentType: string;
    contentUrl: string;
    name: string;
  };
};

export enum PauseReasonType {
  None = 0,
  Productive = 1,
  Unproductive = 2,
  ThirdParty = 3,
}

export enum EnumChatEventType {
  LoginRequest = 1,
  LoginResponse = 2,
  LogoutRequest = 3,
  LogoutResponse = 4,
  LoginCampaign = 5,
  LogoutCampaign = 6,
  ScreenPop = 7,
  MessageResquest = 8,
  MessageResponse = 9,
  MessageReceived = 10,
  Typing = 11,
  ChangeStatus = 12,
  InactivityAlert = 13,
  PauseRequest = 14,
  PauseResponse = 15,
  QuitPauseRequest = 16,
  QuitPauseResponse = 17,
  DispositionRequest = 18,
  DispositionResponse = 19,
  DialogTerminated = 20,
  CurrentDialogsRequest = 21,
  CurrentDialogsResponse = 22,
  Heartbeat = 23,
  ListPauseReasonsRequest = 24,
  ListPauseReasonsResponse = 25,
  ListDispositionRequest = 26,
  ListDispositionResponse = 27,
  ResetInactivityTimerRequest = 28,
  ResetInactivityTimerResponse = 29,
  AsyncMessageReply = 30,
  GetAsyncMessage = 31,
  AsyncMessageListRequest = 32,
  AsyncMessageHistoricalRequest = 33,
  AsyncMessageReceived = 34,
  AsyncMessageScreenPop = 35,
  AsyncMessageRemoved = 36,
  AsyncMessageListResponse = 37,
  AsyncMessageHistoricalResponse = 38,
  GetAsyncMessageError = 39,
  AsyncMessageReplyResponse = 40,
  AsyncMessageTimeout = 41,
  Error = 42,
  AsyncMessageDismissRequest = 43,
  AsyncMessageDismissResponse = 44,
  AsyncMessageListRepliedRequest = 45,
  AsyncMessageListRepliedResponse = 46,
  AsyncMessageResetReadingTimeoutRequest = 47,
  AsyncMessageResetReadingTimeoutResponse = 48,
  TransferRequest = 49,
  TransferResponse = 50,
  MessageNotice = 51,
}
