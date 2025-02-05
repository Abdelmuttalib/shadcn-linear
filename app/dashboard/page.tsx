"use client";

import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

import {
  AccordionDemo,
  AlertDialogDemo,
  AvatarDemo,
  BreadcrumbDemo,
  CalendarDemo,
  CarouselDemo,
  CheckboxDemo,
  CollapsibleDemo,
  ComboboxDemo,
  CommandDemo,
  ContextMenuDemo,
  DataTableDemo,
  DatePickerDemo,
  DialogDemo,
  DrawerDemo,
  HoverCardDemo,
  InputDemo,
  InputOTPDemo,
  LabelDemo,
  MenubarDemo,
  NavigationMenuDemo,
  PaginationDemo,
  PopoverDemo,
  RadioGroupDemo,
  SelectDemo,
  SheetDemo,
  SkeletonDemo,
  SliderDemo,
  SwitchDemo,
  TableDemo,
  TabsDemo,
  TextareaDemo,
  ToggleDemo,
  ToggleGroupDemo,
  TooltipDemo,
} from "@/components/showcase";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex flex-col gap-8 pb-96">
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant={"secondary"}>Secondary</Button>
          <Button variant={"outline"}>Outline</Button>
          <Button variant={"destructive"}>Destructive</Button>
          <Button variant={"ghost"}>Ghost</Button>
          <Button variant={"link"}>Link</Button>
          <Button size={"icon"}>
            <Book className="h-5 w-5" />
          </Button>
          <Button variant={"secondary"} size={"icon"}>
            <Book className="h-5 w-5" />
          </Button>
          <Button variant={"outline"} size={"icon"}>
            <Book className="h-5 w-5" />
          </Button>
          <Button variant={"destructive"} size={"icon"}>
            <Book className="h-5 w-5" />
          </Button>
          <Button variant={"ghost"} size={"icon"}>
            <Book className="h-5 w-5" />
          </Button>
          <Button variant={"link"} size={"icon"}>
            <Book className="h-5 w-5" />
          </Button>
        </div>
        <SelectDemo />
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <DataTableDemo />
          </div>
          <TabsDemo />
        </div>
        <div className="flex flex-wrap gap-4 md:gap-10">
          <DialogDemo />
          <AlertDialogDemo />
          <AvatarDemo />
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={"default"}>Badge</Badge>
            <Badge variant={"secondary"}>Badge</Badge>
            <Badge variant={"outline"}>Badge</Badge>
            <Badge variant={"destructive"}>Badge</Badge>
          </div>
          <BreadcrumbDemo />
          <CalendarDemo />
          <CarouselDemo />
          <HoverCardDemo />
          <div>
            <RadioGroupDemo />
          </div>
          <SwitchDemo />
          <SkeletonDemo />
          <CheckboxDemo />
          <TableDemo />
          <DataTableDemo />
          <PaginationDemo />
          <MenubarDemo />
          <NavigationMenuDemo />
          <PopoverDemo />
          <SheetDemo />
          <TextareaDemo />
          <InputDemo />
          <TooltipDemo />
          <ToggleDemo />
          <ToggleGroupDemo />
          <SliderDemo />
          <DrawerDemo />
          <DatePickerDemo />
          <InputOTPDemo />
          <LabelDemo />
          <CommandDemo />
          <ContextMenuDemo />
          <ComboboxDemo />
          <CollapsibleDemo />
          <AccordionDemo />
        </div>
      </main>
    </div>
  );
}
