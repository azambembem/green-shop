import type { FC } from "react";
import { Modal } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setSiteMapModalVisibility } from "../../../../redux/modalSlice";

const SiteMap: FC = () => {
  const { siteMapModalVisibility } = useReduxSelector((store) => store.modal);
  const dispatch = useReduxDispatch();
  const custom_link_style: string =
    "text-[1rem] font-normal leading-6 cursor-pointer";
  const lint_hover_style: string =
    "hover:border-l-[5px] hover:border-[#46A358] hover:pl-[5px] hover:text-[#46A358] transition-colors duration-500";
  const lint_active_style: string =
    "border-l-[5px] border-[#46A358] pl-[5px] text-[#46A358] transition-colors ";

  return (
    <Modal
      open={siteMapModalVisibility}
      title="Site map"
      footer={false}
      onCancel={() => {
        dispatch(setSiteMapModalVisibility());
      }}
    >
      <div className="flex gap-4 flex-col mt-5">
        <h3 className={` ${lint_active_style} ${custom_link_style}`}>Home</h3>
        <h3 className={` ${lint_hover_style} ${custom_link_style}`}>Blog</h3>
      </div>
      <button className="w-[80%] m-auto flex gap-3 items-center justify-center bg-[#46A358] h-[49px] text-[white] font-medium text-[16px] mt-[41px] rounded-md">
        <LoginOutlined /> Login
      </button>
    </Modal>
  );
};

export default SiteMap;
