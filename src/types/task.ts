import { LucideIcon } from "lucide-react-native";

type Task = {
  id: string;
  label: string;
  description?: string;
  icon: LucideIcon;
  date?: string;
  status: "backlog" | "planned" | "completed";
};

export default Task;