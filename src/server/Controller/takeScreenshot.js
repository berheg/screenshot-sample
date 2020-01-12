const webshot = require('webshot');
export const takeScreenshot = ()=>{
  /*const takeScreenshot = async () =>{
    const browser = await puppeteer.launch({
    ignoreDefaultArgs: ['--disable-extensions'],
  });
    const page = await browser.newPage();
    const options = {
      path: './images/screenshot.png',
      fullPage: true,
      omitBackground: true,
    }
    await page.goto('https://codesnacks.net/');
    await page.screenshot(options);

    // close the browser
    await browser.close();
  };

  takeScreenshot();*/
  /*webshot('http://www.penta-code.com',
  'pentacode.png', (err)=>{
    if(!err){
      console.log('screenshot taken!');
    }
  })*/
  //Selector takeScreenshot
  /*const optionSelector = {
    captureSelector: '.tr-container'
  };
  webshot('http://www.penta-code.com',
  'pentacode-Selector.png',optionSelector, (err)=>{
    if(!err){
      console.log('screenshot taken!');
    }
  })*/
  const optionsMobile = {
    screenSize:{
      width: 414,
      height:736
    },
    shotSize:{
      width: 414,
      height: 'all'
    }
  };
  webshot('http://www.penta-code.com',
  'pentacode-Mobile.png',optionsMobile, (err)=>{
    if(!err){
      //console.log('screenshot taken!');
      return(pentacode-Moble.png);
    }
    else{
      return("Screeshot not taken");
    }
  })

}
export default takeScreenshot;
