import { Injectable } from '@nestjs/common';
import * as dotenv from "dotenv";
import { ethers } from 'ethers';
import * as contractsaddresses from '../assets/contracts-addresses.json';
import * as auctionFactoryJson from '../assets/AuctionFactory.json';

dotenv.config();

@Injectable()
export class TransactionService {
  contract: ethers.Contract;
  provider: ethers.providers.Provider;


  constructor() {
    this.provider = new ethers.providers.JsonRpcProvider(process.env.ALCHEMY_API_KEY);
    this.contract = new ethers.Contract(
      contractsaddresses.auctionFactory,
      auctionFactoryJson.abi,
      this.provider
    );

  }


  async getDeployedAuctions() {
    const deployedAuctions = await this.contract.deployedAuctions(0);
    return deployedAuctions;
  }
}

