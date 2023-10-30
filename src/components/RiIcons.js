import * as Icons from "react-icons/ri";

export default function RiIcons({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}
