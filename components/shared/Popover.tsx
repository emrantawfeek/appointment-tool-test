"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useEffect, useId, useRef, useState } from "react";
import { RiStickyNoteAddFill, RiStickyNoteFill } from "react-icons/ri";
import { RxArrowLeft } from "react-icons/rx";

import useClickOutside from "@hooks/useClickOutside";

import { Button } from "@components/ui/button";

const TRANSITION = {
  type: "spring",
  bounce: 0.05,
  duration: 0.3,
};

export default function Popover({
  importedNote,
}: {
  importedNote: string | null;
}) {
  const uniqueId = useId();
  const formContainerRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [note, setNote] = useState<string | null>(importedNote);

  const openMenu = () => {
    // setNote(importedNote);
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
    // setNote(null);
  };

  useClickOutside(formContainerRef, () => {
    closeMenu();
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <MotionConfig transition={TRANSITION}>
      <div className="relative flex items-center justify-center">
        <motion.button
          key="button"
          layoutId={`popover-${uniqueId}`}
          className="z-10 flex h-9 items-center border border-input bg-background px-3 hover:bg-accent hover:text-accent-foreground"
          style={{
            borderRadius: 8,
          }}
          onClick={openMenu}
        >
          <motion.span
            layoutId={`popover-label-${uniqueId}`}
            className="text-sm"
          >
            {importedNote ? <RiStickyNoteFill /> : <RiStickyNoteAddFill />}
          </motion.span>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={formContainerRef}
              layoutId={`popover-${uniqueId}`}
              className="absolute z-50 h-[200px] w-[364px] overflow-hidden border bg-muted/40 shadow-lg outline-none"
              style={{
                borderRadius: 12,
              }}
            >
              <form
                className="flex h-full flex-col bg-background"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <motion.span
                  layoutId={`popover-label-${uniqueId}`}
                  aria-hidden="true"
                  style={{
                    opacity: note ? 0 : 1,
                  }}
                  className="absolute left-4 top-3 select-none text-sm text-muted-foreground"
                >
                  Add Note
                </motion.span>
                <textarea
                  className="h-full w-full resize-none rounded-md bg-transparent px-4 py-3 text-sm outline-none"
                  autoFocus
                  value={note || ""}
                  onChange={(e) => setNote(e.target.value)}
                />
                <div key="close" className="flex justify-between px-3 py-3">
                  <Button
                    className="flex items-center"
                    onClick={closeMenu}
                    variant="ghost"
                    size="sm"
                    aria-label="Close popover"
                  >
                    <RxArrowLeft
                      size={16}
                      className="text-zinc-900 dark:text-zinc-100"
                    />
                  </Button>
                  <Button
                    className="active:scale-[0.98]"
                    aria-label="Submit note"
                    size="sm"
                    onClick={() => {
                      closeMenu();
                    }}
                  >
                    {importedNote ? "Edit" : "Submit"} Note
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
