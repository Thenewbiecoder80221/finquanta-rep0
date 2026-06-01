export interface TelemetryEvent {
  sessionId: string;
  userId: string;
  eventType:
    | "KEYSTROKE"
    | "MOUSE_MOVE"
    | "TAB_SWITCH"
    | "CLIPBOARD";

  value: number;
  timestamp: number;
}