// Codes by mahdi tasha
// Creating and exporting type of props in pages
export interface ErrorPageProps {
   error: Error & { digest?: string };
   reset: () => void;
}

export interface ArticlePageProps {
   params: Promise<{
      articleID: string;
   }>;
}
