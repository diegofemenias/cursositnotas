export type ChatMessage = {
  id: string;
  content: string;
  user: string;
  role: "user" | "assistant";
};

export type Message =
  | {
      type: "add";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "update";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "all";
      messages: ChatMessage[];
    };

export const names = [
  "Xaipo",
  "Wando",
  "Chinsu",
  "Martol",
  "Kuantos",
  "Freotou",
  "Molwem",
  "Zirah",
  "Moraaia",
  "Futala",
  "Mioleba",
  "Sutoro",
  "Kralk",
  "Mortaob",
  "Pleou",
  "Olavipa",
  "Webdow",
  "Xitire",
  "Chichira",
  "Mordero",
  "Uvalio",
  "Notore",
  "Asdaug",
  "Pipio",
  "Salver",
  "Kouko",
];
