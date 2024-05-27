import { FC } from "react";
import { ArrowIcon } from "./Icons";

// Define the props interface
interface LoginButtonsProps {
  text: string;
  Icon: FC; // FC stands for FunctionComponent
}

const LoginButtons: FC<LoginButtonsProps> = ({ text, Icon }) => {
  return (
    <div className="text-[1.25rem] font-medium bg-black my-[1rem] p-2 px-4 rounded-lg flex justify-between hover:cursor-pointer border-[1px]">
      <div className="flex">
        <span className="ml-3 mr-4 my-[auto]">
          <Icon />
        </span>
        <div>{`Continue With ${text}`}</div>
      </div>
      <span className="my-[auto]">
        <ArrowIcon />
      </span>
    </div>
  );
};

export default LoginButtons;
