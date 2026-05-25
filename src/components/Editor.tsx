import type { PartialBlock } from '@blocknote/core';

import '@blocknote/core/fonts/inter.css';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { useCreateBlockNote } from '@blocknote/react';

import styles from './Editor.module.css';

export default function Editor() {
  const initialContent: PartialBlock[] = [
    { type: 'heading', props: { level: 1 }, content: 'Welcome to Aedium Editor' },
    {
      type: 'paragraph',
      content: 'A block-based rich text editor. Try it out!',
    },

    { type: 'heading', props: { level: 2 }, content: 'Quick Start' },
    {
      type: 'paragraph',
      content: [
        { type: 'text', text: 'Type ', styles: {} },
        { type: 'text', text: '/', styles: { bold: true } },
        { type: 'text', text: ' to open the slash menu and insert any block type.', styles: {} },
      ],
    },
    {
      type: 'paragraph',
      content: [
        { type: 'text', text: 'Select text to format it — ', styles: {} },
        { type: 'text', text: 'bold', styles: { bold: true } },
        { type: 'text', text: ', ', styles: {} },
        { type: 'text', text: 'italic', styles: { italic: true } },
        { type: 'text', text: ', ', styles: {} },
        { type: 'text', text: 'underline', styles: { underline: true } },
        { type: 'text', text: ', or add a ', styles: {} },
        { type: 'link', href: 'https://www.blocknotejs.org', content: 'link' },
        { type: 'text', text: '.', styles: {} },
      ],
    },

    {
      type: 'paragraph',
      content: [
        { type: 'text', text: 'When you are ready, press ', styles: {} },
        { type: 'text', text: '⌘A', styles: { bold: true } },
        { type: 'text', text: ' to select all, delete, and start writing!', styles: {} },
      ],
    },

    { type: 'heading', props: { level: 2 }, content: 'Supported Blocks' },
    { type: 'bulletListItem', content: 'Bullet list items' },
    { type: 'numberedListItem', content: 'Numbered list items' },
    { type: 'checkListItem', content: 'Checklist items' },
    { type: 'paragraph', content: 'Regular paragraphs' },
    {
      type: 'codeBlock',
      props: { language: 'typescript' },
      content: 'const editor = useCreateBlockNote();',
    },
    { type: 'quote', content: 'Blockquotes for callouts or citations' },
    { type: 'divider' },
    {
      type: 'table',
      content: {
        type: 'tableContent',
        rows: [
          { cells: ['Name', 'Type', 'Description'] },
          { cells: ['Heading', 'Block', 'Title with level 1-3'] },
          { cells: ['Paragraph', 'Block', 'Plain text body'] },
        ],
      },
    },
    {
      type: 'image',
      props: {
        url: 'https://placehold.co/600x200/eee/999?text=Image+Block',
        caption: 'Image with caption',
      },
    },
  ];

  const editor = useCreateBlockNote({ autofocus: true, initialContent });

  return <BlockNoteView className={styles.editor} editor={editor} />;
}
