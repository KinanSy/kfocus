import { LucideIcon } from "lucide-react-native";
import Task from "./task";

type DayTasks = {
  id: string;
  date: string;
  tasks: Task[];
};

export default DayTasks;