import {commonApi} from"./commonApi";
import {serverUrl} from "./ServerUrl";

export const registerlists = async (reqBody) => {
   return await commonApi("post", `${serverUrl}/RegisteredDetails`, reqBody);
};
export const   registerlistered = async () => {

    return  await commonApi("get", `${serverUrl}/RegisteredDetails`, "");
}