import {commonApi} from"./commonApi";
import {serverUrl} from "./ServerUrl";

export const registerlists = async (reqBody) => {
   return await commonApi("post", `${serverUrl}/RegisteredDetails`, reqBody);
};
export const   registerlistered = async () => {

    return  await commonApi("get", `${serverUrl}/RegisteredDetails`, "");
}

// add donation form details
export const donationlistApi = async (reqBody)=>{
    return await commonApi('POST',`${serverUrl}/DonatedDetails`,reqBody)
}

// get donation form details
export const getDonationlistApi = async (reqBody)=>{
    return await commonApi('GET',`${serverUrl}/DonatedDetails`,"")
}
