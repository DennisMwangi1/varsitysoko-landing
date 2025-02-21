import { Seller } from "@/types";
import request from "./request";

export const createSeller = async (sellerData: Seller): Promise<any> => {
  return await request("POST", "potential/seller", sellerData);
};
