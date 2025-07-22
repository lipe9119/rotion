import Document from "@tiptap/extension-document";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        document: false,
      }),
      Highlight,
      Typography,
      Document.extend({
        content: "heading block*",
      }),
      Placeholder.configure({
        placeholder: "Untitled",
        emptyNodeClass:
          "before:content-[attr(data-placeholder)] before:text-gray-500 before:h-0 before:float-left before:pointer-events-none",
        
      }),
    ],
    autofocus: "end",
    editable: true,
    content: "<h1>Hello World! 🌎️</h1><p>Primeiro Documento</p>",
    editorProps: {
      attributes: {
        class: "focus:outline-none prose prose-invert prose-headings:mt-0 prose-lg max-w-none",
      },
    },
  });

  return <EditorContent className="w-[65ch]" editor={editor} />;
}
