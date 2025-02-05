"use client";

import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

import {
  AccordionDemo,
  AlertDialogDemo,
  BreadcrumbDemo,
  CalendarDemo,
  ComboboxDemo,
  CommandDemo,
  ContextMenuDemo,
  DataTableDemo,
  DialogDemo,
  DrawerDemo,
  HoverCardDemo,
  InputDemo,
  InputOTPDemo,
  MenubarDemo,
  NavigationMenuDemo,
  PaginationDemo,
  PopoverDemo,
  SelectDemo,
  SheetDemo,
  SliderDemo,
  TableDemo,
  TabsDemo,
  TextareaDemo,
  ToggleDemo,
  ToggleGroupDemo,
  TooltipDemo,
} from "@/components/showcase";

export default function Showcase() {
  return (
    <div className="min-h-screen p-4">
      <main className="flex flex-col gap-8 pb-96">
        <ShowcaseComponent />
      </main>
    </div>
  );
}

export function ShowcaseComponent() {
  return (
    <>
      <div className="w-fit">
        <MenubarDemo />
      </div>
      <div>
        <BreadcrumbDemo />
      </div>
      <div className="flex flex-row flex-wrap gap-4">
        {["default", "sm", "lg", "icon"].map((size) => {
          return (
            <div key={size} className="flex flex-row flex-wrap gap-4">
              {[
                "default",
                "secondary",
                "outline",
                "destructive",
                "ghost",
                "link",
              ].map((variant) => (
                <Button
                  key={variant}
                  size={size}
                  variant={variant}
                  className="capitalize"
                >
                  {size === "icon" ? <Book className="h-5 w-5" /> : variant}
                </Button>
              ))}
            </div>
          );
        })}

        {/* <Button>Default</Button>
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
        </Button> */}
      </div>
      <div className="w-fit">
        <div className="flex flex-wrap gap-4">
          <SelectDemo />
          <div>
            <DialogDemo />
          </div>
          <div>
            <AlertDialogDemo />
          </div>
          <PopoverDemo />
          <ComboboxDemo />
          <DrawerDemo />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <div className="flex flex-col gap-4 xl:col-span-2">
          <DataTableDemo />
          <PaginationDemo />
        </div>
        <div className="flex w-full flex-col gap-4">
          <TabsDemo />
          <div className="flex flex-wrap gap-4">
            <SelectDemo />
            <div>
              <DialogDemo />
            </div>
            <div>
              <AlertDialogDemo />
            </div>
            <div>
              <PopoverDemo />
            </div>
            <div>
              <ComboboxDemo />
            </div>
            <div>
              <DrawerDemo />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-10">
        <div className="flex gap-4">
          <div>
            <TableDemo />
          </div>
          <div>
            <CalendarDemo />
          </div>
          <div>
            <HoverCardDemo />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <NavigationMenuDemo />
          </div>
          <div className="flex flex-col gap-4">
            <TextareaDemo />
            <InputDemo />
          </div>
          <div className="flex gap-4">
            <div>
              <SheetDemo />
            </div>
            <div>
              <TooltipDemo />
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <div>
              <ToggleDemo />
            </div>
            <div>
              <ToggleGroupDemo />
            </div>
          </div>
        </div>

        <div className="w-56">
          <SliderDemo />
        </div>

        <div>
          <CommandDemo />
        </div>
        <div className="flex flex-col gap-4">
          <ContextMenuDemo />
          <div>
            <InputOTPDemo />
          </div>
        </div>
        <AccordionDemo />
      </div>
    </>
  );
}
