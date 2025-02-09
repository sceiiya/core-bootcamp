"use client";
import Button from "@/component/Button";

// import { MetaMaskInpageProviders } from "@metamask/providers";
import { MetaMaskInpageProvider } from "@metamask/providers";

import { useEffect, useState } from "react";
import { myCA, myCAABI } from "./lib/contracts";
import { ethers } from "ethers";

declare global {
  interface window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export default function Home() {
  const [acc, setAcc] = useState<string | null>("");
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [count, setCount] = useState<number>(0);
  const [loadingl, setLoadingl] = useState(false);
  const [loadingg, setLoadingg] = useState(false);
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      try {
        const acc = (await window.ethereum.request({
          method: "eth_requestAccounts",
        })) as string[];

        if (acc) {
          setAcc(acc[0]);
          const contIn = new ethers.Contract(myCA, myCAABI, signer);
          setContract(contIn);
          fetchCount(contIn);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const fetchCount = async (contIn: ethers.Contract) => {
    if (contIn) {
      const count = await contIn.getCount();
      setCount(count);
    }
  };

  const gain = async () => {
    if (contract) {
      setLoadingg(true);
      try {        
        const tx = await contract.gain();
        await tx.wait();
      } catch (err) {
        console.log(err)
      }
      fetchCount(contract);
      setLoadingg(false);
    }
  };

  const loss = async () => {
    if (contract) {
      setLoadingl(true);
      try {        
        const tx = await contract.loss();
        await tx.wait();
      } catch (err) {
        console.log(err)
      }
      fetchCount(contract);
      setLoadingl(false);
    }
  };

  useEffect(() => {
    connectWallet();
  });

  const walletMsg = acc ? `Connected: ${acc}` : "Wallet Not Connected";

  return (
    <main className="bg-gray-600 w-full flex flex-col items-center justify-center min-h-screen py-0.5">
      <div className=" text-center font-extrabold text-[20px] gap-y-2 text-white w-[500px]  flex flex-col items-center justify-center min-h-screen py-10">
        <div className="w-full rounded-md p-6 bg-yellow-500 text-[10px] italic py-0.5">
          Status: {walletMsg}
        </div>
        <div className="w-full rounded-md p-6 bg-yellow-700 text-[10px] italic py-0.5">
          Current Count : {count}
        </div>
        <Button
          disabled={!acc}
          className="mb-10 w-full rounded-md hover:bg-opacity-50 hover:cursor-pointer p-6 bg-green-400"
          title={!acc ? "Connect Wallet" : "Already Connected"}
          process="connect"
          onclick={() => {
            connectWallet();
          }}
        />
        <Button
          className="w-full rounded-md hover:bg-opacity-50 hover:cursor-pointer p-6 bg-blue-500"
          title={loadingg ? "gaining. . ." : "Gain"}
          process="gain"
          onclick={gain}
          disabled={loadingg}
          />
        <Button
          className="w-full rounded-md hover:bg-opacity-50 hover:cursor-pointer p-6 bg-rose-500"
          title={loadingl ? "losing. . ." : "Loss"}
          process="loss"
          onclick={loss}
          disabled={loadingl}
        />
      </div>
    </main>
  );
}
