import { useEffect, useState, useRef } from "react";

export function useScrollSpy(ids: string[], options: IntersectionObserverInit) {
  const [activeId, setActiveId] = useState<string>();
  const observer = useRef<IntersectionObserver>();
  useEffect(() => {
    const elements = ids.map((id) => document.getElementById(id));
    observer.current?.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);
    elements.forEach((el) => {
      if (el) {
        observer.current?.observe(el);
      }
    });
    return () => observer.current?.disconnect();
  }, [ids, options]);
  return activeId;
}
