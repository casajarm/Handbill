import { createViewModel } from "./emailaddress-view-model";

function onNavigatingTo(args) {
    /*
    This gets a reference this page’s <Page> UI component. You can
    view the API reference of the Page to see what’s available at
    https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
    */
    const page = args.object;

    /*
    A page’s bindingContext is an object that should be used to perform
    data binding between XML markup and JavaScript code. Properties
    on the bindingContext can be accessed using the {{ }} syntax in XML.
    In this example, the {{ message }} and {{ onTap }} bindings are resolved
    against the object returned by createViewModel().

    You can learn more about data binding in NativeScript at
    https://docs.nativescript.org/core-concepts/data-binding.
    */
    page.bindingContext = createViewModel();
}

/*
Exporting a function in a NativeScript code-behind file makes it accessible
to the file’s corresponding XML file. In this case, exporting the onNavigatingTo
function here makes the navigatingTo="onNavigatingTo" binding in this page’s XML
file work.
*/


const Observable = require("data/observable").Observable;

let page;
let album = new Observable();
let pageData = new Observable();

const pageLoaded = function(args) {
    page = args.object;
//    page.bindingContext = pageData;

    let album = {
        "bandName": "Arcade Fire",
        "albumName": "Funeral",
        "year": "2004",
        "owned": true,
        "myRating": "9.5"
    };

    let testerMesage = {
        "messageSubject": "Handbill Message",
        "messageText": "Enter your post here",
        "messageAudience": "message recipients"
    };

   // page.bindingContext.set("album", testerMesage);
    //pageData.set("album", testerMesage);
};




const _onNavigatingTo = onNavigatingTo;
export {pageLoaded, onNavigatingTo};