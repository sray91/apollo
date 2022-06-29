const sharp = require("sharp");

/*1920x1080*/

/*cybersecurity header image*/
/*async function cropImage() {

      try {
        await sharp("./pages/images/coding.jpg")
          .resize({
            width: 1920,
            height: 1080
          })
          .extract({ width: 1920, height: 300, left: 0, top: 300  })
          .toFile("./pages/images/codingNew.jpg");
      } catch (error) {
        console.log(error);
      }
    }

cropImage();

/*project header image*/
async function cropImage() {

  try {
    await sharp("./pages/images/coding.jpg")
      .resize({
        width: 1920,
        height: 1280
      })
      .extract({ width: 1920, height: 300, left: 0, top: 250  })
      .toFile("./pages/images/codingNew.jpg");
  } catch (error) {
    console.log(error);
  }
}

cropImage();

/*transform header image*/
/*async function cropImage() {

  try {
    await sharp("./pages/images/advance.jpg")
      .resize({
        width: 1920,
        height: 1080
      })
      .extract({ width: 1920, height: 300, left: 0, top: 200  })
      .toFile("./pages/images/advanceNew.jpg");
  } catch (error) {
    console.log(error);
  }
}

cropImage();


/*Managed IT header image*/
/*async function cropImage() {

  try {
    await sharp("./pages/images/eclipse.jpg")
      .resize({
        width: 300,
        height: 300
      })
      .extract({ width: 300, height: 200, left: 0, top: 50  })
      .toFile("./public/eclipseNew.jpg");
  } catch (error) {
    console.log(error);
  }
}

cropImage();  */


/*const compositeImage = () => {
  sharp ('./pages/images/starsDark.jpg')
  .composite([{input: './pages/images/apolloHero.svg', left:710 , top: 200}])
  .toFile("./public/stars_homepage.jpg");
}

compositeImage()*/