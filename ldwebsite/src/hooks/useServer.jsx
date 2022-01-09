import { useState, useEffect } from "react";

const useServer = (video) => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(null);
    useEffect(() => {
        setLoading(true)
        setResponse(null)
        // POST request using fetch inside useEffect React hook
        if (!video)
            return

        if (!video.size)
            return

        var formData = new FormData();
        formData.append("video", video);
        const requestOptions = {
            method: 'POST',
            body: formData
        };

        console.log(formData)
        fetch('http://194.35.120.182/upload', requestOptions)
            .then(response => {
                return response.json().then(data => {
                    // `data` is the parsed version of the JSON returned from the above endpoint.
                    setResponse(data)
                    setLoading(false)
                    console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
                });;
            })


        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [video]);
    // do something with value in parent component, like save to state

    return { response, loading }
}
export default useServer;

const blobToBase64 = blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise(resolve => {
        reader.onloadend = () => {
            resolve(reader.result);
        };
    });
};