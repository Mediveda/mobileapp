
import {StoreDataKeys} from './Constants';
import {getLocalStoreData} from './Utility';

const url = "https://sms.cooledsys.com:8280/pa/ptm/submit_feedback";
export const submitFeedbackApi = async (feedback) => {
    const formData = new FormData();
    formData.append('feedback', JSON.stringify(feedback));
    console.log("submitFeedbackApi called, feedback", feedback, ", url ", url);
    console.log("formData", formData);
    return getLocalStoreData(StoreDataKeys.UserDetails)
        .then(async res => {
            console.log("inside getDashborad " + res)
            console.log("inside getDashboard" + JSON.stringify(res))
            if (res !== null) {
                const token = res.headers.tokenid;

                try {
                    const response = await fetch(url, {
                        method: "POST",
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'multipart/form-data',
                            tokenid: token,
                        },
                        body: formData,
                    });
                    const json = await response.json();
                    console.log("response in submitFeedback", json);
                    return json;
                } catch (error) {
                    console.error(error);
                }
            }
        })
        .catch(e => {
            console.log('error', e);
            return null;
        });
};
