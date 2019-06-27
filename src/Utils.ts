import {
  DestinyComponentType,
  DestinyProfileResponse
} from "bungie-api-ts/destiny2";
import { get as Get } from "request";
import request = require("request");

interface BungieSearchParams {
  uri: string;
  components?: DestinyComponentType | DestinyComponentType[];
}

export async function get(data: BungieSearchParams, bungiekey: string) {
  const url = new URL(`https://www.bungie.net/Platform/${data.uri}`);
  // Normalize components as an array.
  if (data.components) {
    data.components = Array.isArray(data.components)
      ? data.components
      : [data.components];
    url.searchParams.set("components", data.components.join(","));
  }
  return new Promise((resolve, reject) => {
    Get(
      url.toString(),
      { headers: { "X-API-Key": bungiekey } },
      (err, response) => {
        if (err) {
          reject(err);
        }
        if (response && response.statusCode === 200) {
          resolve(JSON.parse(response.body) as any);
        }
      }
    );
  });
}

export function isValidPlatform(
  platform: string
): platform is "pc" | "xbox" | "playstation" {
  return platform !== "pc" && platform !== "xbox" && platform !== "playstation";
}
