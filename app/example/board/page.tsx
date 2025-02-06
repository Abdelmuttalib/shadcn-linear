// pages/board.js
import React from "react";
import { TaskCard, TaskCardDialog } from "./components/task-card";
import { Button } from "@/components/ui/button";
import { BellIcon } from "lucide-react";
import {
  ActiveIcon,
  AllTasksIcon,
  BacklogIcon,
  DisplayIcon,
  DoneIcon,
  EllipsisIcon,
  FilterIcon,
  InProgressIcon,
  NewViewIcon,
  NotificationBellIcon,
  TodoIcon,
} from "./components/icons";
import { tasks } from "./data";
import { Badge } from "@/components/ui/badge";

export default function BoardPage() {
  const statuses = [
    {
      title: "backlog",
      icon: BacklogIcon,
    },
    {
      title: "todo",
      icon: TodoIcon,
    },
    {
      title: "in progress",
      icon: InProgressIcon,
    },
    {
      title: "done",
      icon: DoneIcon,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-between border-y px-4 py-2 sm:px-6">
        <div className="flex space-x-2">
          <Button variant="outline" size={"sm"}>
            <AllTasksIcon />
            All tasks
          </Button>
          <Button variant="outline" size={"sm"}>
            <ActiveIcon />
            Active
          </Button>
          <Button variant="outline" size={"sm"}>
            <BacklogIcon />
            Backlog
          </Button>
          <Button variant="outline" size={"icon-sm"}>
            <NewViewIcon />
          </Button>
        </div>
        <div>
          <Button variant="outline" size={"icon-sm"}>
            <NotificationBellIcon />
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between border-b px-4 py-2 sm:px-6">
        <div className="flex space-x-2">
          <Button variant="outline" size={"sm"} className="">
            <FilterIcon />
            Filter
          </Button>
        </div>
        <div>
          <Button variant="outline" size={"sm"}>
            <span className="relative">
              <DisplayIcon />

              <span
                aria-hidden="true"
                className="absolute right-0 top-0 inline-block size-1.5 rounded-full border bg-primary"
              ></span>
            </span>
            Display
          </Button>
        </div>
      </div>
      <div className="flex space-x-4 overflow-x-auto px-4 py-4 sm:px-6">
        {statuses.map((status) => (
          <div
            key={status.title}
            className="flex-1 space-y-2 rounded-lg bg-background"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <status.icon />
                <h2 className="text-sm font-medium capitalize">
                  {status.title}
                </h2>
                <Badge variant="secondary" className="rounded">
                  {tasks.filter((task) => task.status === status.title).length}
                </Badge>
              </div>
              <Button variant="ghost" size={"icon-sm"}>
                <EllipsisIcon />
              </Button>
            </div>
            <div className="space-y-4">
              {tasks
                .filter((task) => task.status === status.title)
                .map((task) => (
                  <TaskCardDialog key={task.id} task={task} />
                  // <TaskCard key={task.id} task={task} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
