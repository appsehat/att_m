import { router } from "expo-router";
import * as Crypto from "expo-crypto";
import * as FileSystem from "expo-file-system";
import * as SecureStore from "expo-secure-store";
import * as Sharing from "expo-sharing";
import moment from "moment";
import Axios from "axios";
Axios.defaults.withCredentials = true;

import _config from "@/_config.json";

export async function LoginLoad() {
  if (_config.DEBUG == 2) await SecureStore.deleteItemAsync("s");
  if (await SecureStore.getItemAsync("s")) router.push("/tabs");

  let uuid = await SecureStore.getItemAsync("uuid");
  if (!uuid) {
    uuid = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.MD5,
      Crypto.randomUUID()
    );

    await SecureStore.setItemAsync("uuid", uuid);
  }

  let endPoint = "/auth/login/";
  if (_config.DEBUG) console.log("End Point: " + endPoint);
  if (_config.DEBUG) console.log("UUID: " + uuid);

  let respond;
  await Axios.get(_config.URL_API + endPoint + uuid)
    .then((json) => {
      if (json.data.message == "OK") {
        respond = _json;
        SecureStore.setItemAsync("d", json.data.d);
      } else alert(json.data.message);
    })
    .catch((error) => alert(error));

  if (respond) return respond;
}
