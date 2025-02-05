import * as React from "react";
import { ChevronRight } from "lucide-react";

// import { VersionSwitcher } from "@/components/version-switcher";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { SidebarOptInForm } from "./sidebar-get-access";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      items: [
        {
          title: "Installation",
          url: "/dashboard",
        },
        {
          title: "Overview",
          url: "/dashboard/overview",
          isActive: true,
        },
        {
          title: "Showcase",
          url: "/dashboard/showcase",
          isActive: true,
        },
        {
          title: "Board",
          url: "/dashboard/board",
        },
        {
          title: "Charts",
          url: "/dashboard/charts",
          // isActive: true,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      {/* <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader> */}
      <SidebarHeader className="m-0 mb-4 p-0">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="mx-0 h-full w-full rounded-md px-4 py-4 text-foreground">
              <h6 className="text-2xl font-medium">
                shadcn{" "}
                <span className="text-primary-500 font-semibold">Carbon</span>
              </h6>
              <p className="text-muted-foreground">a carbon style for shadcn</p>
            </div>
            {/* <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton> */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={item.isActive}
                          className="w-full border-transparent px-8 ring-inset focus:ring-2 data-[active=true]:border-l-2 data-[active=true]:border-ring data-[active=true]:bg-sidebar-accent data-[active=true]:text-foreground"
                        >
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarFooter className="border-none p-0">
        <SidebarOptInForm />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
