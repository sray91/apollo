const sharp = require("sharp");

async function resizeImage() 
{
  try {
    await sharp("./pages/images/emergency.jpg")
      .resize({
        width: 1920,
        height: 1280
      })
      .extract({ width: 1920, height: 300, left: 0, top: 450 })
      .toFile("./pages/images/emergencyNew.jpg");
  } catch (error) {
    console.log(error);
  }
}

resizeImage();