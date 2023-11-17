import { TextEditor } from "./textEditor";
import { Observer } from "../interface/observer";

export class Editor {
  private observers: Observer[] = [];
  protected lines: string[] = [];

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.lines);
    }
  }

  public insertLine(lineNumber: number, text: string): void {
    this.lines.splice(lineNumber - 1, 0, text);
    this.notifyObservers();
  }

  public removeLine(lineNumber: number): void {
    if (lineNumber >= 1 && lineNumber <= this.lines.length) {
      this.lines.splice(lineNumber - 1, 1);
      this.notifyObservers();
    }
  }
  public open(text: string[]): void {
    this.lines = text;
    this.notifyObservers();
  }

  public save(): void {
    console.log("Conteúdo salvo:");
    console.log(this.lines.join("\n"));
  }
}
