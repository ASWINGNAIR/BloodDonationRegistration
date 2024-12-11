import {commonApi} from"./commonApi";
import {serverUrl} from "./ServerUrl";

export const registerlists = async (reqbody) => {
   return await commonApi("post", `${serverUrl}/RegisteredDetails`, reqbody);
};
export const   registerlistered = async () => {

    return  await commonApi("get", `${serverUrl}/RegisteredDetails`, "");
}