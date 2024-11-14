import classes from "./ExampleComponent.module.css"

function ExampleComponent (){

    console.log(classes);

    let saluto = "Ciao a tutti!";

    return <h1 className="textColor backgroundColor">{saluto}</h1>

}

export default ExampleComponent;