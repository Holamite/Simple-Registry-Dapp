import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ethers } from "ethers";
import contractABI from "./abi.json";

function App() {
  const contractAddress = "0xFeCe593B6eB317f4fD94804264742b092B4566c6";

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function updateAge() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userAge = prompt("Enter Age");
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.updateAge(userAge);

        await transaction.wait();
        console.log("Age successfully Set");
        setAge(userAge);
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  async function updateName() {
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const userName = prompt("Enter Name");
      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );

      try {
        const transaction = await contract.updateName("Just they play");
        await transaction.wait();
        console.log("Name successfully Set");
        setName(userName);
      } catch (err) {
        console.error("Error:", err);
      }
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Register Dapp</h1>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <img src={logo} className="App-logo" alt="logo" />

        <button onClick={updateName}>Set Name</button>
        <button onClick={updateAge}>Set Age</button>
      </header>
    </div>
  );
}

export default App;
