import axios from "axios";
const URLServer = "http://localhost:7186/api/";

export const postMessage = async (UserMessage) => {
  await axios.post(`${URLServer}UserMessage/`, UserMessage);
};

export const insertProduct = async (Product) => {
  await axios.post(`${URLServer}Product/POST`, Product);
};

export const getProductsBought = async (Email) => {
  let response = await axios.get(`${URLServer}Product/BOUGHT/${Email}`);

  if (response.status === 200) {
    return Object.values(response.data);
  }
};

export const getProducts = async (Email) => {
  let response = await axios.get(`${URLServer}Product/BUSINESS/${Email}`);

  if (response.status === 200) {
    return Object.values(response.data);
  }
};

export const getRoles = async (userID) => {
  try {
    let endpointRoles = `${URLServer}Roles/${userID}`;

    let response = await axios.get(endpointRoles);
    return Object.values(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getMail = async (Email) => {
  let response = await axios.get(`${URLServer}User/CHECK/${Email}`);
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

export const getDonations = async (Email) => {
  let response = await axios.get(`${URLServer}Product/GET/${Email}`);

  if (response.status === 200) {
    return Object.values(response.data);
  }
};

export const newCampaign = async (campaign) => {
  await axios.post(`${URLServer}Campaign/POST`, campaign);
};

export const getCampaigns = async (Email) => {
  let response = await axios.get(`${URLServer}Campaign/GET/${Email}`);

  if (response.status === 200) {
    return Object.values(response.data);
  }
};

export const getAllCampaigns = async () => {
  let response = await axios.get(`${URLServer}Campaign/LOAD/`);
  console.log(response);
  if (response.status === 200) {
    return Object.values(response.data);
  }
};

export const getAllProducts = async () => {
  let response = await axios.get(`${URLServer}Product/GETALL/`);
  console.log(response);
  if (response.status === 200) {
    return Object.values(response.data);
  }
};

export const getBalance = async (Email) => {
  let response = await axios.get(`${URLServer}User/BALANCE/${Email}`);

  if (response.status === 200) {
    return response.data;
  }
};

export const buyProduct = async (product) => {
  await axios.post(`${URLServer}Product/BUY`, product);
};
