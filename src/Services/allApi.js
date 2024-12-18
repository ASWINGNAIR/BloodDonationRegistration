import {commonApi} from"./commonApi";
import {serverUrl} from "./ServerUrl";

// add registration details
export const registerlists = async (reqBody) => {
   return await commonApi("POST", `${serverUrl}/RegisteredDetails`, reqBody);
};

// get registration details
export const   registerlistered = async () => {
    return  await commonApi("GET", `${serverUrl}/RegisteredDetails`, "");
}

// add donation form details
export const donationlistApi = async (reqBody)=>{
    return await commonApi('POST',`${serverUrl}/DonatedDetails`,reqBody)
}

// get donation form details
export const getDonationlistApi = async (reqBody)=>{
    return await commonApi('GET',`${serverUrl}/DonatedDetails`,"")
}

// delete 
export const  deleteregister = async (id)=>{
    return await commonApi ("DELETE",`${serverUrl}/RegisteredDetails/${id}`,"")
 }
