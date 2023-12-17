/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = ({ onChange }: { onChange: (richText: string) => void }) => {
  const editor = useEditor({
    extensions: [StarterKit.configure()],
    content: "...",
    editorProps: {
      attributes: {
        class: "rounded-md border min-h-[150px] border-input px-1.5 py-1",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
  });

  //   ? use html-react-parser to show string as an html element
  return (
    <div className="w-[500px]">
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
