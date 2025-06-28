import { View, Text, TouchableOpacity } from 'react-native';
import { Home, Calendar, BarChart, Settings, HomeIcon, CalendarIcon, TrendingUpDownIcon, SettingsIcon, ListChecksIcon } from 'lucide-react-native';
import { usePathname, useRouter } from 'expo-router';
import MutedText from './ui/typography';
import IconBtn from './ui/iconBtn';

export default function AppFooter() {

    const activeLinkColor = "#2563eb";
    const inactiveLinkColor = "#6b7280";
    const linkSize = 24;
    const Links = [
        {
            url: "/",
            icon: HomeIcon,
            active: true,
        },
        {
            url: "/tasks",
            icon: ListChecksIcon,
            active: false,
        },
        {
            url: "/calendar",
            icon: CalendarIcon,
            active: false,
        },
        {
            url: "/settings",
            icon: SettingsIcon,
            active: false,
        },

    ]
    const router = useRouter();
    const currentPath = usePathname();

    return (
        <View className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 z-50 flex-row justify-around items-center">
            {Links.map((link) => {
                const Icon = link.icon;
                const iconColor = link.url == currentPath ? activeLinkColor : inactiveLinkColor;
                return (
                    <IconBtn icon={Icon} key={link.url} onPress={() => router.push(link.url)} size={linkSize} color={iconColor}/>
                )
            })}
        </View>
    );
}
