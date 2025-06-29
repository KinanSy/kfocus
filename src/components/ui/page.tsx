import { ReactNode } from "react";
import Section from "./section";

export default function PageLayout({children} : {children: ReactNode}){

    return(
        <Section className="flex-1 mt-5 px-4 pb-10">
            {children}
        </Section>
    )
}