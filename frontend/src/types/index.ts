export interface AlertState {
    isVisible: boolean;
    type: "success" | "error";
    title?: string;
    message: string;
}