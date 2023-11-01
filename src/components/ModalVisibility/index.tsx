import type { FC } from "react";
import { useReduxSelector } from "../../hooks/useRedux";
import SiteMap from "./Modals/SiteMap";
import Authorization from "./Modals/Authorization";
const ModalVisibility: FC = () => {
  const { siteMapModalVisibility, authModalVisibility } = useReduxSelector(
    (state) => state.modal,
  );
  console.log(authModalVisibility);

  return (
    <>
      {siteMapModalVisibility && <SiteMap />}
      {authModalVisibility.open && <Authorization />}
    </>
  );
};

export default ModalVisibility;
