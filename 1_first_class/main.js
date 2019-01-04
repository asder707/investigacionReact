let sayHello = (name)=>{
  return "Hola "+name;
}

let name = 'Abner';
let imageSrc = 'data:image/jpeg;base64,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';

let nameHtml = (
  <h1 data-test={15+5}>
    {sayHello(name)}!
  </h1>);

let imageHtml = (
  <img src={imageSrc}/>
);

let html = nameHtml;

ReactDOM.render(html,document.getElementById('main'));