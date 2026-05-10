// Codes by mahdi tasha
// Creating and exporting General purpos typeso
export interface Article {
   author: {
      name: string;
      image?: string;
   };
   href: string;
   createdAt: string; // ISO
   description: string;
   content: string;
}
