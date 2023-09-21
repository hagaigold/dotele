# dotele

[Telefunc](https://telefunc.com/) + [Vite](https://vitejs.dev/) on DigitalOcean.

A **very** basic exmaple for using Telefunc with DigitalOcean:
* The Client side deploy as static site
* The Server side (Telefunc) deploy as serverless function


### Create

```
doctl apps create --spec .do/app.yaml
```

For more information on create apps using `doctl` go [here](https://docs.digitalocean.com/products/app-platform/how-to/create-apps/#create-resource-from-source-code-using-automation).
