import { registerApplication, start } from "single-spa"

const apps = {
  "monthly": "@mfe/monthly"
}

export function registerSpas() {
  for (const [route, moduleName] of Object.entries(apps)) {
    registerApplication({
      name: route,
      app: () => import(/* @vite-ignore */ moduleName),
      activeWhen: `/${route}`,
      customProps: {
        basePath: `/${route}`
      }
    })
  }
  runSpas();
}

export function runSpas() {
  start();
}