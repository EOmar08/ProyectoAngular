class Result {
  correct: boolean;
  errorMessage: string;
  object: object;
  objects: Array<object>;
  excepcion: any;
  constructor(correct: boolean, errorMessage: string, object: object, objects: Array<object>) {
    this.correct = correct;
    this.errorMessage = errorMessage;
    this.object = object;
    this.objects = objects;
  }

}
