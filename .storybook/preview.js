import "../src/styles/globals.css";
import "../next.config"

import { Provider } from "react-redux";
import { Router } from "next/router";
import { RouterContext } from "next/dist/shared/lib/router-context";
import {store} from '../src/redux/store'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    locale: "en" // optional
  },
}

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  )
]