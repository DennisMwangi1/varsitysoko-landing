// request.ts
import axios, { Method } from "axios";

const getAuthToken = () => {
  const sessionToken = localStorage.getItem("sessionToken");
  return { sessionToken };
};

const apiBase = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:3000";

/**
 * Makes a request to the API.
 *
 * @param method - The HTTP method to use.
 * @param endpoint - The API endpoint to request.
 * @param data - Optional data to send with the request.
 * @returns The response data from the API.
 * @throws If there is an error with the request.
 */
const request = async (
  method: Method,
  endpoint: string,
  data?: any
): Promise<any> => {
  const { sessionToken }: { sessionToken?: string | null } = getAuthToken();
  const headers: Record<string, string> = {};

  if (sessionToken) {
    headers["Authorization"] = `Bearer ${sessionToken}`;
  }
  const isFormData = data instanceof FormData;
  if (!isFormData) {
    headers["Content-Type"] = "application/json";
  }
  try {
    const response = await axios({
      method,
      url: `${apiBase}/api/${endpoint}`,
      data,
      headers,
    });
    return response.data;
  } catch (error: unknown) {
    return error;
  }
};

export default request;
