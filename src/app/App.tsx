import { classNames } from "shared/lib/classNames/classNames";
import { type ReactNode } from "react";

const App = (): ReactNode => {
  return (
    <div className={classNames("app", {}, [])}>
      <h1>asdasdasd</h1>
    </div>
  );
};

export default App;
