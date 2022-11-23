export interface OlosEvent {
  eventId: string;
  agentId: string;
  eventType: string;
  campaignId: number;
  channelType: string;
  channel?: string;
  timestamp: number;
}
