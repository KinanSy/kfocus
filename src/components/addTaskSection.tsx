import Btn from "./ui/btn";
import Input from "./ui/input";
import Section from "./ui/section";
import { H3 } from "./ui/typography";


export default function AddTaskSection() {

    return (
        <Section>
            <H3 className="font-extrabold">Today's focus</H3>
            <Input
                className="border border-gray-300 rounded-lg p-4 text-base mt-4"
                placeholder="Add a new task for today..."
            />
            <Btn label="Add a New Task for Today"></Btn>
        </Section>
    )
}