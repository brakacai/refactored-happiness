import { DestinyComponentType } from "bungie-api-ts/destiny2";
import { get } from "request";

interface BungieSearchParams {
  uri: string;
  components?: DestinyComponentType | DestinyComponentType[];
}

export async function getFromBungie<T>(
  data: BungieSearchParams,
  bungiekey: string
): Promise<T> {
  const url = new URL(`https://www.bungie.net/Platform/${data.uri}`);
  // Normalize components as an array.
  if (data.components) {
    data.components = Array.isArray(data.components)
      ? data.components
      : [data.components];
    url.searchParams.set("components", data.components.join(","));
  }
  return new Promise<T>((resolve, reject): void => {
    get(
      url.toString(),
      { headers: { "X-API-Key": bungiekey } },
      (err, response): void => {
        if (err) {
          reject(err);
        }
        if (response && response.statusCode === 200) {
          resolve(JSON.parse(response.body) as T);
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
