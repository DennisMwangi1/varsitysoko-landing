import { Investor } from "@/types";
import request from "./request";

export const createInvestor = async (investorData: Investor): Promise<any> => {
  return await request("POST", "potential/investor", investorData);
};
