import { useState } from 'react';
import { View } from 'react-native';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { Text } from '~/components/ui/text';
import ExampleSelect from '../components/example-select';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

export default function Index() {
  const [dialogOpen, setDialogOpen] = useState(false);

  function onDialogToggled() {
    setDialogOpen((current) => !current);
  }

  return (
    <View className='flex-1 items-center justify-center'>
      <Card>
        <CardHeader>
          <CardTitle>Hello!</CardTitle>
        </CardHeader>
        <CardContent className='flex flex-col items-center gap-2'>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button onPress={onDialogToggled}>
                <Text>Open Dialog</Text>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog!!</DialogTitle>
                <DialogDescription>This is a dialog working in react native</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button onPress={onDialogToggled}>
                    <Text>Ok</Text>
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <ExampleSelect />
        </CardContent>
      </Card>
    </View>
  );
}
