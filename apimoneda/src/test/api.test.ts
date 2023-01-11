import { getApi } from "../services/api";
import { describe, test } from "node:test";

describe("Pruebas en api.ts", () => {
  test("getApi debe de retornar un error si no tenemos api", () => {
    const resp = getApi();
  });
});
