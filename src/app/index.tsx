import AddTaskSection from "@/components/addTaskSection";
import PageLayout from "@/components/ui/page";
import Section from "@/components/ui/section";
import Timeline from "@/components/ui/timeline";
import MutedText, { H1, H3 } from "@/components/ui/typography";
import { CalendarIcon, HomeIcon, SettingsIcon } from "lucide-react-native";
import React from "react";
import { View } from "react-native";

export default function Page() {

  const activities = [
    { icon: HomeIcon, label: "Home task", description: "Clean the kitchen", hour: 15, minute: 30, done: false},
    { icon: CalendarIcon, label: "Meeting", description: "With the design team", hour: 15, minute: 30, done: true },
    { icon: SettingsIcon, label: "Setup", description: "Configure project settings", hour: 15, minute: 30, done: true },
  ];

  return (
    <PageLayout>
      <Section>
        <H1>Good Afternoon, Kinan</H1>
        <MutedText className="text-gray-600">Today, 28 June</MutedText>
      </Section>
      <Section>
        <H3 className="font-extrabold">Timeline</H3>
        {activities.length < 1 ?
          <MutedText>Nothing done yet...</MutedText>
          :
          <Timeline activities={activities} />
        }
      </Section>
    </PageLayout>
  );
}

