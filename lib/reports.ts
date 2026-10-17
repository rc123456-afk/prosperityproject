/* Published reports, newest first. The download buttons on /reporting and the
   report list at the foot of the page both read from here, so the file, its
   size and its page count can never disagree between them.

   To add a report: drop the PDF into public/downloads/ unchanged, then add an
   entry at the top. `size` follows the textbooks' convention (bytes / 1024,
   rounded); `downloadName` is the filename the reader's browser saves.       */

export type Report = {
  id: string;
  title: string;
  date: string;
  pages: number;
  size: string;
  file: string;
  downloadName: string;
};

export const REPORTS: Report[] = [
  {
    id: "2026-10",
    title: "Impact report",
    date: "October 2026",
    pages: 12,
    size: "123 KB",
    file: "/downloads/prosperity-project-impact-report-2026-10.pdf",
    downloadName: "The_Prosperity_Project_Impact_Report_October_2026.pdf",
  },
];

export const LATEST_REPORT = REPORTS[0];
