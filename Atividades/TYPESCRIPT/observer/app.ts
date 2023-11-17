import { TextEditor } from "./models/textEditor";
import { Editor } from "./models/editor";

// Exemplo de uso

// Adicionando Observador
const editor = new Editor();
const textObserver = new TextEditor(editor);


editor.open(["Linha 1", "Linha 2", "Linha 3"]);
editor.removeLine(2);
editor.save();


