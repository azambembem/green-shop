import type { FC } from "react";
import { Form, Input, Divider } from "antd";
import {
  ScanOutlined,
  GoogleOutlined,
  FacebookFilled,
} from "@ant-design/icons";

interface OnAuthType {
  email: string;
  password: string;
}

const Login: FC = () => {
  const onAuth = (e: OnAuthType) => {
    console.log(e);
  };
  return (
    <div className="w-4/5 m-auto">
      <h3 className="text-sm  mt-8 font-normal">
        Enter your username and password to login.
      </h3>
      <Form onFinish={onAuth}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input
            className="h-[40px] mt-[14px] border border-[#46A358]"
            placeholder="azamjan1020@gmail.com"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password
            className="h-[40px] mt-[17px] border border-[#46A358]"
            placeholder="**********"
            type="password"
          />
        </Form.Item>
        <h3 className="text-[#46A358] font-normal mt-[14px] cursor-pointer w-fit ml-auto">
          Forgot Password?
        </h3>
        <button
          type="submit"
          className="w-full h-[45px] my-[27px] bg-[#46A358] text-white rounded-md "
        >
          Login
        </button>
      </Form>
      <Divider className="font-normal text-xs" plain>
        Or login with
      </Divider>
      <button className="cursor-pointer flex items-center gap-2 border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]">
        <FacebookFilled className="pl-[15px]" />
        Login with Facebook
      </button>
      <button className="cursor-pointer flex items-center gap-2 border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]">
        <GoogleOutlined className="pl-[15px]" />
        Login with Google
      </button>
      <button className="cursor-pointer flex items-center gap-2 border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px]">
        <ScanOutlined className="pl-[15px]" />
        Login with Qr Code
      </button>
    </div>
  );
};

export default Login;
