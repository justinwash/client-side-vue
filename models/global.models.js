window.MyClass = class MyClass {
  constructor () {
    this.name = 'MyClass';
    this.create();
  }

  create() {
    console.log('Instantiated ' + this.name + '!');
  }
}
