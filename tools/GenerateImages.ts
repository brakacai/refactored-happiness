import rq from "request-promise-native";
import path from "path";
import sharp from "sharp";
import crypto from "crypto";
import { links, links2 } from "./links";

links.forEach(link => {
  rq.get(link, { encoding: null }).then(val => {
    sharp(val)
      .resize(512, 512)
      .toFile(
        `E:/Documents/icons/${link.substring(
          "https://Bungie.net/common/destiny2_content/icons/DestinyActivityModeDefinition_".length
        )}`
      );
  });
});

links2.forEach(link => {
  rq.get(link, { encoding: null }).then(val => {
    const image = sharp(val);
    image
      .metadata()
      .then(function(metadata) {
        let upscaleRatio = 1;
        if (metadata.width < 1024) {
          upscaleRatio = 1024 / metadata.width;
        }
        if (metadata.height < 1024) {
          upscaleRatio = 1024 / metadata.height;
        }
        console.log(metadata.width);
        console.log(metadata.height);
        console.log(upscaleRatio);
        if (upscaleRatio == 1) {
          return image.toFormat("jpg").toBuffer();
        }
        return image
          .resize(Math.round(metadata.width * upscaleRatio), Math.round(metadata.height * upscaleRatio))
          .toFormat("jpg")
          .toBuffer();
      })
      .then(data => {
        sharp(data).toFile(
          `E:/Documents/icons/${crypto
            .createHash("md5")
            .update(path.parse(new URL(link).pathname).name)
            .digest("hex")}.jpg`
        );
      });
  });
});
