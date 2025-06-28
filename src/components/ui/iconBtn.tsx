import { LucideIcon } from "lucide-react-native";
import { TouchableOpacity } from "react-native";

type CustomIconButtonProps = {
  icon: LucideIcon;
  size?: number;
  color?: string;
  variant?: string; // To implement
  onPress?: () => void;
  className?: string;
  iconClassName?: string;
};

export default function IconBtn({
  icon : Icon,
  size,
  color,
  variant,
  onPress,
  className,
  iconClassName,
}: CustomIconButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${className}`}
    >
      <Icon size={size} className={`${iconClassName}`} color={color} />
    </TouchableOpacity>
  );
}
