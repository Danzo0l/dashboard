// import npm libs
import { Route, Routes } from "react-router";
// import local libs
import MyAccount from "../../pages/MyAccount";
import EditAccount from "../../pages/EditAccount";
import Settings from "../../pages/Settings";
import { ContentProps } from "../../types";
// import styles

const Content = (props: ContentProps) => {
  return (
    <main>
      <Routes>
        <Route path="" element={props.children} />
        <Route path="/account/view" element={<MyAccount />}></Route>
        <Route path="/account/edit" element={<EditAccount />}></Route>
        <Route path="/account/settings" element={<Settings />}></Route>
      </Routes>
    </main>
  );
};

export default Content;
