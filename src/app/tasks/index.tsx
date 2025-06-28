import AddTaskSection from "@/components/addTaskSection";
import ItemsList from "@/components/ui/ItemsList";
import Section from "@/components/ui/section";
import { H2 } from "@/components/ui/typography";
import { HospitalIcon } from "lucide-react-native";


export default function Page() {

    const exampleItems = [
        {
            icon: HospitalIcon,
            label: "Go to the hospital",
            description: "Appointement to the doctor M.Montenegro"
        },
        {
            icon: HospitalIcon,
            label: "Go to the hospital",
            description: "Appointement to the doctor M.Montenegro"
        },
        {
            icon: HospitalIcon,
            label: "Go to the hospital",
            description: "Appointement to the doctor M.Montenegro"
        },
        {
            icon: HospitalIcon,
            label: "Go to the hospital",
            description: "Appointement to the doctor M.Montenegro"
        },
        {
            icon: HospitalIcon,
            label: "Go to the hospital",
            description: "Appointement to the doctor M.Montenegro"
        },
        {
            icon: HospitalIcon,
            label: "Go to the hospital",
            description: "Appointement to the doctor M.Montenegro"
        },
        {
            icon: HospitalIcon,
            label: "Go to the hospital",
            description: "Appointement to the doctor M.Montenegro"
        },
        {
            icon: HospitalIcon,
            label: "Go to the hospital",
            description: "Appointement to the doctor M.Montenegro"
        },

    ]
    return (
        <>
            <Section className="mt-0">
                <H2 className="text-center mt-0">Backlog</H2>
                <ItemsList items={exampleItems}></ItemsList>
            </Section>
            <Section className="mt-20">
                <AddTaskSection />
            </Section>
        </>
    )
}