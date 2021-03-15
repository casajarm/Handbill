import {Observable, Frame}  from "@nativescript/core";

function getMessage(counter) {    
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} tappity taps left`;
    }
}

function createViewModel() {

    const viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = () => {
        viewModel.counter--;
        viewModel.set("message", getMessage(viewModel.counter));
    };

    viewModel.goNext = () => {
        const frame = Frame.getFrameById("root-frame");
        // Navigate to page called “new-page”
        frame.navigate("emailaddress-page");
        }

    viewModel.emailIsValid = () => {
        return 'visible';
    }    

    return viewModel;
}

export {createViewModel};