"use client";
import { useSwitch } from "@/components/Context/SwitchContext";
import { useEffect } from "react";

export const TitleUpdater = () => {
  const { isSwitchOn } = useSwitch();

  useEffect(() => {
    document.title = isSwitchOn ? "0xmatti" : "0xmatti-it";
  }, [isSwitchOn]);

  return null;
};
