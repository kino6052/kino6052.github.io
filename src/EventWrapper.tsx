import React from "react";
import { Subject } from "rxjs";

export type EventType = "click" | "change" | "focus" | "state";
export type Id = string;
export type IEvent = [EventType, Id, string | undefined];

export const EventSubject = new Subject<IEvent>();

export const EventWrapper: React.FC<{ id: string; value?: string }> = (
  props
) => {
  const { children, id, value = "" } = props;
  const childrenWithProps = React.Children.map<
    React.ReactNode,
    React.ReactNode
  >(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        id,
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          EventSubject.next(["click", id, value]);
        },
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
          e.preventDefault();
          EventSubject.next(["change", id, value || e?.target?.value]);
        },
        onFocus: (e: React.FocusEvent) => {
          e.preventDefault();
          EventSubject.next(["focus", id, value]);
        }
      });
    }
    return child;
  });
  return <>{childrenWithProps}</>;
};
