import { HttpException, Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as TokenJson from '../assets/MyToken.json'

const CONTRACT_ADDRESS = "0x8AE3C9bf30481901ce9B5b8AEAAc214aA67ec81F";

 export class PaymentOrder {
  id:string;
  secret: string;
  amount: number;
}

export class ClaimPaymentDTO {
  id:string;
  secret: string;
  amount: number;
}

@Injectable()
export class AppService {
  provider: ethers.providers.Provider;
  contract: ethers.Contract;
  database: PaymentOrder[];

  constructor() {
    this.provider = ethers.getDefaultProvider("goerli");
    this.contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      TokenJson.abi,
      this.provider
    );
    this.database = [];
  }
  async getTotalSupply() {
    const totalSupplyBN = await this.contract.totalSupply();
    const totalSupply = ethers.utils.formatEther(totalSupplyBN);
    return totalSupply;
  }

  async getAllowance(from: string, to: string) {
    const allowanceBN = await this.contract.allowance(from, to);
    const allowance = ethers.utils.formatEther(allowanceBN);
    return allowance;
  }

   getTransactionByHash(hash: string) {
    return this.provider.getTransaction(hash);
  }

  async getTransactionReceiptByHash(hash: string) {
    const tx = await this.getTransactionByHash(hash);
    return await tx.wait();
  }

  getPaymentOrderById(id: string) {
    const element = this.database.find((elt)=> elt.id === id);
    if(!element) throw new HttpException("NOt Found", 404);
    return {id: element.id, amoumt: element.amount};
  }



  createPaymentOrder(body: PaymentOrder) {
    this.database.push(body);
  }

  listPaymentOrders() {
    const filtredDatabase = [];
    this.database.forEach(element => {
      filtredDatabase.push({id: element.id, amount: element.amount});
    })
    console.log(this.database);
    return filtredDatabase;
  }

  // claimPayment(body: ClaimPaymentDTO ) {
  //   const element = this.database.find((elt)=> elt.id === body.id);
  //   if(!element) throw new HttpException("NOt Found", 404);  }
  // if(body.secret)

}
