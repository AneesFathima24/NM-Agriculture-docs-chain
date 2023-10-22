import AgricultureRegistryJSON from './AgricultureRegistry.json'
import { ethers } from "ethers";
import Web3Modal from "web3modal";



export const AgricultureRegistryAddress = "0xcB43b53b5ae111b059e4a6D0339e6767246AFD2C";

export const AgricultureRegistryABI = AgricultureRegistryJSON.abi;


if (!window.ethereum) {
    alert('Meta Mask Not Found')
    window.open("https://metamask.io/download/")
} 


        // const signer = providers.getSigner();
        // const contract = fetchContract(signer);

        // return contract;

const web3modal = new Web3Modal();
const connection = await web3modal.connect();
const provider = new ethers.providers.Web3Provider(connection);
// export const provider = new ethers.providers.Web3Provider(window.ethereum);
// console.log(provider);
export const signer = provider.getSigner();


export const contract = new ethers.Contract(AgricultureRegistryAddress, AgricultureRegistryABI, signer);
// console.log(contract);