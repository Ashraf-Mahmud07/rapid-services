export interface ApiErrorPayload {
  message?: string;
  code?: string;
  status?: number;
  [key: string]: unknown;
}

/**
 * Extracts a human-readable error message from any error object (RTK Query, Axios, Error instance, or plain string).
 */
export function getErrorMessage(
  error: unknown,
  fallbackMessage = "An unexpected error occurred. Please try again."
): string {
  if (!error) return fallbackMessage;

  if (typeof error === "string") return error;

  if (error instanceof Error) return error.message;

  if (typeof error === "object" && error !== null) {
    const errObj = error as Record<string, unknown>;

    // RTK Query / Axios data field
    if ("data" in errObj && errObj.data) {
      const data = errObj.data;
      if (typeof data === "string") return data;
      if (typeof data === "object" && data !== null) {
        const dataObj = data as Record<string, unknown>;
        if (typeof dataObj.message === "string") return dataObj.message;
        if (typeof dataObj.error === "string") return dataObj.error;
      }
    }

    // Direct message property
    if (typeof errObj.message === "string") return errObj.message;
    if (typeof errObj.error === "string") return errObj.error;
  }

  return fallbackMessage;
}
