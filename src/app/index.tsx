import ThemeToggle from '@/components/theme-toggle';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThemeToggle />

      <Text className='text-4xl text-primary'>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
