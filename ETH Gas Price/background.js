function getGasPrice() {
    fetch('https://api.etherscan.io/api?module=gastracker&action=gasoracle')
      .then(response => response.json())
      .then(data => {
        if (data.status === '1') {
          const gasPrice = data.result.ProposeGasPrice;
          chrome.action.setBadgeText({ text: `${gasPrice}` });
        }
      })
      .catch(error => {
        console.error('Failed to retrieve gas price:', error);
      });
  }
  
  function updateGasPrice() {
    getGasPrice();
    setTimeout(updateGasPrice, 30000); // Call every 30 seconds
  }
  
  updateGasPrice();