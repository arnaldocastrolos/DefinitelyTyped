import { OlosEvent } from "./olos-events";

export interface LoginCCM extends OlosEvent {
  eventData: {
    agentId: string;
    agentName: string;
    campaignCode: string;
  };
}

export interface LoginCampaignVoice extends OlosEvent {
  eventData: {
    agentId: string;
    campaignId: number;
    campaignName: string;
    campaignCode: string;
  };
}

export interface LogoutCCM extends OlosEvent {
  eventData: {
    agentId: string;
    campaignId: number;
  };
}

export interface LogoutReason extends OlosEvent {
  eventData: {
    agentId: string;
    reason: string;
  };
}

export interface ChangeStatusVoice extends OlosEvent {
  eventData: {
    agentId: string;
    agentStatusId: EnumAgentStatusId;
    reasonId: number;
  };
}

export interface ScreenPopVoice extends OlosEvent {
  eventData: {
    callId: number;
    campaignId: number;
    phoneNumber: string;
    campaignData: string;
    customerId: string;
    agentIdOrigin: number;
    campaignIdOrigin: number;
    readOnly: boolean;
    campaignCode: string;
    tableName: string;
    priorityCampaign: boolean;
    phoneNumberList: string[];
    previewCall: boolean;
    automaticPreviewCall: boolean;
  };
}

export interface ThirdPartyScreenPop extends OlosEvent {
  eventData: {
    thirdPartyCallId: number;
    campaignId: number;
    campaignCode: string;
    phoneNumber: string;
    skillGroup: string;
    priorityCampaign: boolean;
    campaignData: string;
  };
}

export interface ChangeManualCallState extends OlosEvent {
  eventData: {
    callId: number;
    callState: EnumCallControlStatusId;
  };
}

export interface PreviewCallState extends OlosEvent {
  eventData: {
    callId: number;
    callState: EnumCallControlStatusId;
    phoneNumber: string;
  };
}

export interface PreviewCallResult extends OlosEvent {
  eventData: {
    callId: number;
    result: string;
    phoneNumber: string;
  };
}

export interface CustomerClosureConfirmation extends OlosEvent {
  eventData: {
    campaignData: string;
    customerId: string;
    tableName: string;
  };
}

export interface PreviewDnisLocateResult extends OlosEvent {
  eventData: {
    phoneNumber: string;
    disposition: string;
    result: string;
  };
}

export interface ListActiveCalls extends OlosEvent {
  eventData: {
    activeCalls: ActiveCallFull[];
  };
}

export interface ListCalls extends OlosEvent {
  eventData: {
    calls: Call[];
  };
}

export interface SetCurrentCustomerFail extends OlosEvent {
  eventData: GenericError;
}

export interface ConferenceRequestAccepted extends OlosEvent {
  eventData: ConferenceData;
}

export interface ParticipantJoinedConference extends OlosEvent {
  eventData: ConferenceData;
}

export interface ParticipantLeftConference extends OlosEvent {
  eventData: ConferenceData;
}

export interface StopConferenceRequestAccepted extends OlosEvent {
  eventData: ConferenceData;
}

export interface PauseRecordingResponse extends OlosEvent {
  eventData: RecordingResponse;
}

export interface ResumeRecordingResponse extends OlosEvent {
  eventData: RecordingResponse;
}

export interface ThirdPartyEvent extends OlosEvent {
  eventData: {
    data: string;
  };
}

export interface RecordStateNotify extends OlosEvent {
  eventData: {
    state: string;
  };
}

export interface OnlineCampaignChangeStatusId extends OlosEvent {
  eventData: {
    campaignId: number;
  };
}

export interface LoginCampaignFail extends OlosEvent {
  eventData: {
    campaignId: number;
  };
}

export interface DispositionRequestFail extends OlosEvent {
  eventData: {
    callId: number;
  };
}

export interface LogoutCCMFail extends OlosEvent {}

export interface LogoutCampaignFail extends OlosEvent {
  eventData: {
    campaignId: number;
  };
}

export interface ChangeStatusFail extends OlosEvent {
  eventData: {
    description: string;
  };
}

export interface DispositionRequestFail extends OlosEvent {
  eventData: {
    callId: number;
  };
}

export interface Passcode extends OlosEvent {
  eventData: {
    code: number;
  };
}

export interface ConsultingRequestFail extends OlosEvent {
  eventData: {
    description: string;
  };
}

export interface ActiveCall extends OlosEvent {
  eventData: {
    callId: number;
  };
}

export interface ManualCallRequestFail extends OlosEvent {
  eventData: {
    description: string;
  };
}

export interface RedialRequestFail extends OlosEvent {
  eventData: {
    description: string;
  };
}

export interface RedialSuccess extends OlosEvent {}

export interface PrivateCallbackFail extends OlosEvent {
  eventData: {
    description: string;
  };
}

export interface StopConferenceRequestFail extends OlosEvent {
  eventData: GenericError;
}

export interface ConferencePaused extends OlosEvent {}

export interface ConferenceResumed extends OlosEvent {}

export interface ScreenPopPossibleCustomers extends OlosEvent {
  eventData: {
    callId: number;
    customers: ScreenPopPossibleCustomer[];
  };
}

export interface SetCurrentCustomerSuccess extends OlosEvent {
  eventData: {
    recordId: number;
  };
}

export interface AgentCallConnected extends OlosEvent {
  eventData: {
    phoneNumber: string;
  };
}

export interface AgentCallDisconnected extends OlosEvent {
  eventData: {
    phoneNumber: string;
  };
}

export interface DisableHeartbeatControlResponse extends OlosEvent {
  eventData: {
    response: string;
  };
}

export interface ConnectAgentLoginCallFail extends OlosEvent {
  eventData: {
    response: string;
  };
}

export interface DropAgentLoginCallFail extends OlosEvent {
  eventData: {
    response: string;
  };
}

export interface ExtendWrapTimeoutResponse extends OlosEvent {
  eventData: {
    code: number;
    description: string;
  };
}

export interface SendMsgToSupervisorFail extends OlosEvent {
  eventData: {
    agentId: string;
    reason: SendMessageResult;
    description: string;
  };
}

export interface NewMsgFromSupervisor extends OlosEvent {
  eventData: {
    messageId: number;
    broadcastId: number;
    agentId: string;
    supervisorId: number;
    message: string;
  };
}

export interface ConferenceRequestFail extends OlosEvent {
  eventData: GenericError;
}

/** types that do not represent a text event */

export type ScreenPopPossibleCustomer = {
  index: number;
  campaignId: number;
  recordId: number;
  customerId: string;
  campaignData: string;
};

export type RecordingResponse = {
  result: string;
  code: string;
  description: string;
};

export type ConferenceData = {
  calls: string[];
};

export type GenericError = {
  errorCode: string;
  description: string;
};

export type Call = {
  callId: number;
  customerCall: boolean;
  consulting: boolean;
  redialed: boolean;
  manualCall: boolean;
  finished: boolean;
  phoneNumber: string;
};

export type ActiveCallFull = {
  callId: number;
  customerCall: boolean;
  phoneNumber: string;
};

export enum SendMessageResult {
  GenericError = -1,
  Ok = 0,
  AgentIdNotFound = 1,
  SupervisorNotFound = 2,
  ServiceNotAvail = 3,
  SysConfNotFound = 4,
  NotSupervisorOfAgent = 5,
  EmptyMessage = 6,
  MessageTooLong = 7,
  NotChatSupervisorOfAgent = 8,
}

export enum EnumCallControlStatusId {
  Nothing = -1,
  Started = 0,
  Alerting = 1,
  CustomerConnected = 2,
  Routing = 3,
  AgentConnected = 4,
  Finished = 5,
  Consulting = 6,
  Transfering = 7,
  Queue = 8,
  Holding = 9,
}

export enum EnumAgentStatusId {
  Nothing = 0,
  Idle = 1,
  Talking = 2,
  Wrap = 3,
  Pause = 4,
  Ending = 5,
  TalkingWithPause = 6,
  WrapWithPause = 7,
  TalkingWithEnding = 8,
  WrapWithEnding = 9,
  Consulting = 10,
  InChat = 11,
  InChatWithPause = 12,
  InChatWithEnding = 13,
  ConsultingWithPause = 14,
  ConsultingWithEnding = 15,
  Transfer = 16,
  Holding = 17,
  HoldingWithPause = 18,
  HoldingWithEnding = 19,
  ManualCall = 20,
  TalkingWithManualCall = 21,
  WrapWithManualCall = 22,
  ConsultingWithManualCall = 23,
  HoldingWithManualCall = 24,
  Redial = 25,
  PrivateCallback = 26,
  TalkingWithPrivateCallback = 27,
  WrapWithPrivateCallback = 28,
  ManualcallWithPrivateCallback = 29,
  ConsultingWithPrivateCallback = 30,
  HoldingWithPrivateCallback = 31,
  ThirdPartyCampaign = 32,
  PersonalCall = 33,
  TalkingWithPersonalCall = 34,
  WrapWithPersonalCall = 35,
  ManualcallWithPersonalCall = 36,
  ConsultingWithPersonalCall = 37,
  HoldingWithPersonalCall = 38,
  PersonalCallWithPause = 39,
  PersonalCallWithEnding = 40,
  Analyzing = 41,
  Attempting = 42,
  Waiting = 43,
  AnalyzingWithPause = 44,
  AnalyzingWithEnding = 45,
  AnalyzingWithPrivateCallback = 46,
  AnalyzingWithPersonalCall = 47,
  AttemptingWithPause = 48,
  AttemptingWithEnding = 49,
  AttemptingWithPersonalCall = 50,
  AttemptingWithPrivateCallback = 51,
  AfterAttempting = 52,
  AfterAttemptWithPersonalCall = 53,
  RedialWithPersonalCall = 54,
  InConference = 55,
  InConferenceWithPause = 56,
  InConferenceWithEnding = 57,
  InConferenceWithManualCall = 58,
  InConferenceWithPrivateCallback = 59,
  InConferenceWithPersonalCall = 60,
  Pausing = 62,
}
