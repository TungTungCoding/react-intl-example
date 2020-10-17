import React from "react";
import { useIntl } from "react-intl";

const App = ({ changeLocale, browserLocale }) => {
  const intl = useIntl()

  const browserLanguage = intl.formatMessage({ id: browserLocale })

  const title = intl.formatMessage({ id: "title", defaultMessage: "지원하지 않는 언어입니다." }, { browserLocale: browserLanguage })
  const menu = intl.formatMessage({ id: "menu", defaultMessage: "언어선택" })
  const korean = intl.formatMessage({ id: "ko", defaultMessage: "한국어" })
  const englash = intl.formatMessage({ id: "en", defaultMessage: "영어" })

  return (
    <>
      <h1>{title}</h1>
      <hr />
      <h4>{menu}</h4>
      <button onClick={() => changeLocale("ko")} >{korean}</button>
      <button onClick={() => changeLocale("en")}>{englash}</button>
    </>
  );
};

export default App;
