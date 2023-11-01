async function downloadImage (   link , url     )  { 

    const ele = document.createElement("a"); 
  
    ele.href =link
    ele.download = `qrcode.png`
    ele.click()
 
}


export default downloadImage;