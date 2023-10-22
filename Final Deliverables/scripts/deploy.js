
const main = async () => {
    const AgricultureRegistry = await hre.ethers.getContractFactory("AgricultureRegistry");
    const agricultureRegistry = await AgricultureRegistry.deploy();
  
    await agricultureRegistry.deployed();
  
    console.log( "Transaction deployed to:" ,agricultureRegistry.address);
  }
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
  
  runMain();