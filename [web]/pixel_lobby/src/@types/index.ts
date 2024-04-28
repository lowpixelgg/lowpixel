
interface Language {
    Greetings: string[];
    Options: string[];
    Messages: string[];
    Jobs: string[];
    Tips: string[];
}
  
export interface Languages {
    [key: string]: Language;
}