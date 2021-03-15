import {Observable, fromObject}  from "@nativescript/core";


function createViewModel() {
    const obs = new Observable();

    let testerMesage = {
        "messageSubject": "Handbill Message",
        "messageText": "Enter your post here",
        "messageAudience": "message recipients"
    };

    const viewModel = fromObject({
        "emailAddress": "test email",
        "result": "nothing yet",
        "album": testerMesage,
        "saveEmail": () => {setResult()}

    });
    
    function setResult() {
        viewModel.result = `You entered: ${viewModel.get("emailAddress")}`;
        console.log("clicked");
        
    }

    return viewModel;
}

export {createViewModel};