import React, { useState } from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader/root";
import { IntlProvider } from "react-intl";
import App from "./src/App";
import ko from "./src/locale/ko.json";
import en from "./src/locale/en.json";

const LocaleData = { en, ko };

const Hot = hot(App);

const browserLocale = window.navigator.language.slice(0, 2);

const Intl = () => {

  const [locale, setLocale] = useState(browserLocale);

  const changeLocale = (code) => {
    setLocale(code)
  }

  return (
    <IntlProvider locale={locale} messages={LocaleData[locale]}>
      <Hot changeLocale={changeLocale} browserLocale={browserLocale} />
    </IntlProvider>
  );
};

ReactDOM.render(<Intl />, document.querySelector("#root"));
