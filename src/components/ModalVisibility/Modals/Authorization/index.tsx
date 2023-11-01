import type { FC } from "react";
import { useState } from "react";
import { Modal } from "antd";
import { useReduxSelector } from "../../../../hooks/useRedux";
import Login from "./Login";
import Register from "./Register";

type ActiveType = "login" | "register";

const Authorization: FC = () => {
  const [active, setActive] = useState<ActiveType>("login");
  const { authModalVisibility } = useReduxSelector((state) => state.modal);

  const active_style: string = "text-[#46A358]";
  return (
    <Modal open={authModalVisibility.open} footer={false}>
      <div className="flex flex-col items-center">
        <div className="flex mt-[52px]  items-center gap-3">
          <div
            className={`text-[#3D3D3D] text-xl transition-all cursor-pointer ${
              active === "login" ? active_style : ""
            }`}
            onClick={() => {
              setActive("login");
            }}
          >
            Login
          </div>
          <div className="bg-[#3D3D3D] border-[1px] h-4"></div>
          <div
            className={`text-[#3D3D3D] text-xl transition-all cursor-pointer ${
              active === "register" ? active_style : ""
            }`}
            onClick={() => {
              setActive("register");
            }}
          >
            Register
          </div>
        </div>
        {active === "login" ? <Login /> : <Register />}
      </div>
    </Modal>
  );
};

export default Authorization;
