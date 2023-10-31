import * as Icons from "react-icons/ri";
import { IconType } from "react-icons";
import { IconBaseProps } from "react-icons/lib";

export interface RiIconsProps extends IconBaseProps {
  icon: string;
}

const RiIcons: React.FC<RiIconsProps> = ({ icon, ...props }) => {
  const IconComponent: IconType = Icons[icon];

  if (!IconComponent) {
    // Handle cases where the icon is not found
    return null;
  }

  return <IconComponent {...props} />;
};

export default RiIcons;
