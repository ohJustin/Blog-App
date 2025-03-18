1. Firebase Configuration: The db and auth objects are imported from firebaseConfig.js.
2. State Management: State variables are used to manage the title, content, loading state, and error state.
3. handleSubmit Function: This function:
    -Gets the currently logged-in user using auth.currentUser.
    -Creates a new post object with the title, content, and user information.
    -Saves the post to the Firebase Firestore database using addDoc.
    -Calls the onSubmit function with the new post object and closes the dialog.