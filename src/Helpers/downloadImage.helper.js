function downloadImage (   link , url     )  { 

    var a = document.createElement('a');
    a.href = link;
    a.download = `${url}/${link}.png`
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
 
}


export default downloadImage;