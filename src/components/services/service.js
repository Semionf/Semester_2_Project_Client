import axios from "axios";
const URLServer = "http://localhost:7186/api/";
export const getCampaigns = async () => {
  let response = await axios.get(`${URLServer}Campaign/GET`);

  if (response.status === 200) {
    return Object.values(response.data);
  }
};

export const postCampaign = async (Campaign) => {
  await axios.post(`${URLServer}Campaign/POST`, Campaign);
};

export const postMessage = async (UserMessage) => {
  console.log(UserMessage);
  await axios.post(`${URLServer}UserMessage/`, UserMessage);
};

export const insertProduct = async (Product) => {
  await axios.post(`${URLServer}Product/POST`, Product);
};

export const getProducts = async (ID) => {
  let response = await axios.get(`${URLServer}Product/GET/${ID}`);

  if (response.status === 200) {
    return Object.values(response.data);
  }
};

export const getRoles = async (userID) => {
  try {
    console.log(userID);
    let endpointRoles = `${URLServer}Roles/${userID}`;

    let response = await axios.get(endpointRoles);
    return Object.values(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getOrganizationMail = async (Email) => {
  let response = await axios.get(`${URLServer}User/CHECK/${Email}`);
  console.log(response);
  if (response.status === 200) {
    return response.data;
  }
};

export const getActivistMail = async (Email) => {
  let response = await axios.post(`${URLServer}Activist/CHECK`, Email);

  if (response.status === 200) {
    return Object.values(response.data);
  }
};

export const newUser = async (user) => {
  await axios.post(`${URLServer}User/POST`, user);
};

export const postDonation = async (Donation) => {
  await axios.post(`${URLServer}Donation/`, Donation);
};
