import { Developer } from "@/types";
import request from "./request";

export const createDeveloper = async (
  developerData: Developer
): Promise<any> => {
  return await request("POST", "potential/developer", developerData);
};
