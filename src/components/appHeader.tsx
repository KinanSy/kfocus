import { usePathname, useRouter } from 'expo-router';
import { ArrowLeftIcon } from 'lucide-react-native';
import { View, Text, Image } from 'react-native';
import IconBtn from './ui/iconBtn';

export default function AppHeader() {

    const currentPath = usePathname();
    const isHome = currentPath == "/";
    const router = useRouter();

    const handleBackPress = () => {
        router.back()
    }
    return (
        <>
            <View className="absolute top-0 left-0 right-0 h-24 bg-white border-b border-gray-200 z-50 px-4">
                <View className="flex-row items-center h-full mt-2">
                    <View className="w-12 items-center">
                        {!isHome && <IconBtn icon={ArrowLeftIcon} onPress={handleBackPress} />}
                    </View>
                    <View className="flex-1 items-center justify-center">
                        <Text className="text-2xl font-extrabold text-gray-800">KFocus</Text>
                    </View>
                    <View className="w-12" />
                </View>
            </View>
        </>
    );
}
