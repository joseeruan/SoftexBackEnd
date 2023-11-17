import { Editor } from './editor';
import { Observer } from '../interface/observer';

export class TextEditor implements Observer {
  private editor: Editor;

  public constructor(editor: Editor) {
    this.editor = editor;
    this.editor.registerObserver(this);
  }

  public update(text: string[]): void {
    console.clear();
    console.log("Conteúdo atualizado:");
    console.log(text.join("\n"));
  }
}