// import npm libs
import { Route, Routes } from "react-router";
// import local libs
import MyAccount from "../../pages/MyAccount";
import { ContentProps } from "../../types";
// import styles

const Content = (props: ContentProps) => {
  return (
    <main>
      <Routes>
        <Route path="" element={props.children} />
        <Route path="account/profile" element={<MyAccount />}></Route>
      </Routes>
    </main>
  );
};

export default Content;
