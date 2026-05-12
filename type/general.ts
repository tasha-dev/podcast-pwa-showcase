// Codes by mahdi tasha
// Creating and exporting General purpos typeso
export interface Article {
   author: {
      name: string;
      image?: string;
   };
   id: string;
   createdAt: string; // ISO
   description: string;
   content: string;
}
