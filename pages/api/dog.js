import { internalApiGetImageDog } from "../../src/services";

export default async function handler(req, res) {
  internalApiGetImageDog()
    .then(response => res.status(200).json(response))
    .catch(erro => res.status(500).json(erro));
}
