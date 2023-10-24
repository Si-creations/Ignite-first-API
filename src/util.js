//Media resize (images)

export const smallImage = (imagePath, size) => {
    let image;
    if (imagePath) {
      image = imagePath.match(/media\/screenshots/)
        ? imagePath.replace(
            "media/screenshots",
            `media/resize/${size}/-/screenshots`
          )
        : imagePath.replace("/media/games", `/media/resize/${size}/-/games`);
    } else {
      image = imagePath;
    }
  
    return image;
};


//https://media.rawg.io/media/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg
//https://media.rawg.io/media/screenshots/eb7/eb7d75e25be2c76d6e1bd454f2071aad.jpg