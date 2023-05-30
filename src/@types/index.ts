type AbbrevProps = {
   pt: string
   en: string
}

export type BooksProps = {
   abbrev: AbbrevProps
   author: string
   chapters: string
   group: string
   name: string
   testament: 'VT' | 'NT'
}
