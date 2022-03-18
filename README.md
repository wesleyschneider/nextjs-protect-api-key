## NextJS Protect API Key

Primeiro, rode a aplicação em desenvolvimento:

```bash
npm run dev
# or
yarn dev
```

Nas requisições a seguir, procure o request header <b>x-api-key</b>.
<ul>
  <li>https://api.thedogapi.com/v1/images/search <b>(exibe api key)</b></li>
  <li>http://localhost:3000/api/dog <b>(esconde api key)</b></li>
</ul>