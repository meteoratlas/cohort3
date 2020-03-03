import React from "react";
import { Editor, EditorState, convertToRaw, convertFromRaw } from "draft-js";

const PostEditor = () => {
    const [editorState, setEditorState] = React.useState(
        EditorState.createEmpty()
    );
    const saveContent = () => {
        // https://draftjs.org/docs/api-reference-data-conversion/#converttoraw
        const raw = convertToRaw(editorState.getCurrentContent());
    };
    return <Editor editorState={editorState} onChange={setEditorState} />;
};

export default PostEditor;
