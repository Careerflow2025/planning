import {
  Document,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Header,
  Footer,
  PageNumber,
  NumberFormat,
  Packer,
} from 'docx';
import type { GeneratedDocument } from '@/types';

interface DocxOptions {
  clientName?: string;
  companyName?: string;
  projectRef?: string;
  date?: string;
}

export async function generateDocx(
  document: GeneratedDocument,
  options: DocxOptions = {}
): Promise<Buffer> {
  const sections = buildDocxSections(document, options);

  const doc = new Document({
    creator: 'InstantAI Assessment',
    title: document.title,
    description: `Generated planning assessment: ${document.title}`,
    styles: {
      paragraphStyles: [
        {
          id: 'Normal',
          name: 'Normal',
          run: { size: 24, font: 'Arial' },
          paragraph: { spacing: { after: 120, line: 276 } },
        },
      ],
    },
    sections: [
      {
        headers: {
          default: new Header({
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [
                  new TextRun({
                    text: document.title,
                    size: 18,
                    color: '666666',
                    font: 'Arial',
                  }),
                ],
              }),
            ],
          }),
        },
        footers: {
          default: new Footer({
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                children: [
                  new TextRun({ text: 'Page ', size: 18, font: 'Arial' }),
                  new TextRun({
                    children: [PageNumber.CURRENT],
                    size: 18,
                    font: 'Arial',
                  }),
                ],
              }),
            ],
          }),
        },
        properties: {
          page: {
            pageNumbers: { start: 1, formatType: NumberFormat.DECIMAL },
          },
        },
        children: sections,
      },
    ],
  });

  return Buffer.from(await Packer.toBuffer(doc));
}

function buildDocxSections(
  document: GeneratedDocument,
  options: DocxOptions
): Paragraph[] {
  const paragraphs: Paragraph[] = [];

  // Title page
  paragraphs.push(
    new Paragraph({ spacing: { before: 4000 } }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: document.title,
          bold: true,
          size: 48,
          font: 'Arial',
        }),
      ],
    }),
    new Paragraph({ spacing: { before: 400 } }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new TextRun({
          text: options.date ?? new Date().toLocaleDateString('en-GB'),
          size: 28,
          color: '666666',
          font: 'Arial',
        }),
      ],
    })
  );

  if (options.companyName) {
    paragraphs.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: `Prepared by: ${options.companyName}`,
            size: 24,
            color: '666666',
            font: 'Arial',
          }),
        ],
      })
    );
  }

  if (options.projectRef) {
    paragraphs.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new TextRun({
            text: `Reference: ${options.projectRef}`,
            size: 24,
            color: '666666',
            font: 'Arial',
          }),
        ],
      })
    );
  }

  // Page break before TOC
  paragraphs.push(new Paragraph({ pageBreakBefore: true }));

  // Table of Contents heading
  paragraphs.push(
    new Paragraph({
      heading: HeadingLevel.HEADING_1,
      children: [new TextRun({ text: 'Table of Contents', bold: true })],
    }),
    new Paragraph({
      children: [new TextRun({ text: '[Table of Contents - update field in Word]', italics: true, color: '999999', size: 20 })],
    })
  );

  // Document sections
  document.sections.forEach((section, index) => {
    paragraphs.push(new Paragraph({ pageBreakBefore: index > 0 }));

    // Section heading
    paragraphs.push(
      new Paragraph({
        heading: HeadingLevel.HEADING_1,
        children: [
          new TextRun({
            text: `${index + 1}. ${section.name}`,
            bold: true,
            size: 32,
            font: 'Arial',
          }),
        ],
      })
    );

    // Section content - split by paragraphs
    const contentParagraphs = section.content.split('\n\n').filter(Boolean);
    for (const para of contentParagraphs) {
      const trimmed = para.trim();
      if (!trimmed) continue;

      // Check for subheadings
      if (trimmed.startsWith('## ') || trimmed.startsWith('### ')) {
        const level = trimmed.startsWith('### ')
          ? HeadingLevel.HEADING_3
          : HeadingLevel.HEADING_2;
        const text = trimmed.replace(/^#+\s*/, '');
        paragraphs.push(
          new Paragraph({
            heading: level,
            children: [
              new TextRun({ text, bold: true, size: 26, font: 'Arial' }),
            ],
          })
        );
      } else {
        paragraphs.push(
          new Paragraph({
            children: [new TextRun({ text: trimmed, size: 24, font: 'Arial' })],
            spacing: { after: 120 },
          })
        );
      }
    }
  });

  return paragraphs;
}
