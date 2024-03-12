import axios from 'axios';
import * as apiService from './ApiHelper';
import { StoreDataKeys } from './Constants';
import { getLocalStoreData } from './Utility';

let baseUrl = 'https://sms.cooledsys.com:';

export const loginApi = async payload => {
  try {
    const response = await fetch(`${baseUrl}8002/parent/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: payload,
    });
    const json = await response.json();
    return { data: json, headers: response.headers.map };
  } catch (error) {
    console.error(error);
  }
};
export const forgotPassword = async payload => {
  try {
    const response = await fetch(`${baseUrl}8002/parent/forgotpassword`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: payload,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const getStudentList = async () => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        try {
          const response = await fetch(`${baseUrl}8280/pa/student/list`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              tokenid: token,
            },
          });
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })

    .catch(() => {
      return null;
    });
};
export const getDashboard = async () => {
  console.log("calling getDashboard... https://sms.cooledsys.com:8280/pa/dashboard/data")
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      console.log("inside getDashboard" + JSON.stringify(res))
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log(`${baseUrl}8280/pa/dashboard/data`)
        console.log(token)
        try {
          const response = await fetch(`${baseUrl}8280/pa/dashboard/data`, {
            method: 'POST',
            headers: {
              // Accept: 'application/json',
              'Content-Type': 'application/json',
              tokenid: token,
            },
          });
          const json = await response.json();
          console.log("dashboard json=" + JSON.stringify(json))
          return json;
        } catch (error) {
          console.log("error in getDashboard...")
          console.error(error);
        }
      }
    })
    .catch(e => {
      console.log('error', e);
      return null;
    });
};
export const getProfile = async () => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;

        try {
          const response = await fetch(`${baseUrl}8280/pa/profile/dtls`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              tokenid: token,
            },
          });
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(() => {
      return null;
    });
};
export const updateSession = async payload => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;

        try {
          const response = await fetch(
            `${baseUrl}8280/pa/student/updateSession`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                tokenid: token,
              },
              body: payload,
            },
          );

          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(error => {
      console.log('error', error);
      return null;
    });
};
export const getFeesList = async () => {
  console.log("getFeeList called");
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log('token', token, ", getFeeList method url ", baseUrl+"8280/pa/fees/student/bill/list"  );
        try {
          const response = await fetch(
            `${baseUrl}8280/pa/fees/student/bill/list`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                tokenid: token,
              },
            },
          );
          const json = await response.json();

          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })

    .catch(() => {
      return null;
    });
};
export const getFeesDetails = async payload => {
  console.log("getFeesDetails called, payload", payload);
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log('token', token, ", getPaymentInitiate method url ", baseUrl+"8280/pa/fees/student/bill/dtls"  );
        try {
          const response = await fetch(
            `${baseUrl}8280/pa/fees/student/bill/dtls`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                tokenid: token,
              },
              body: payload,
            },
          );
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })

    .catch(() => {
      return null;
    });
};
export const getDateTimeTable = async payload => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;

        try {
          const response = await fetch(`${baseUrl}8280/pa/timetable/view_dt`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              tokenid: token,
            },
            body: payload,
          });
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })

    .catch(() => {
      return null;
    });
};
export const getWeekTimeTable = async payload => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;

        try {
          const response = await fetch(
            `${baseUrl}8280/pa/timetable/view_week`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                tokenid: token,
              },
              body: payload,
            },
          );
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })

    .catch(() => {
      return null;
    });
};
export const getPaymentInitiate = async payload => {
  console.log("getPaymentInitiate called, payload received", payload);

  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log('token', token, ", getPaymentInitiate method url ", baseUrl+"8280/pa/payment/initiate"  );
        try {
          const response = await fetch(`${baseUrl}8280/pa/payment/initiate`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              tokenid: token,
            },
            body: payload,
          });
          console.log("response in getPaymentInitiate", response);
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })

    .catch(() => {
      return null;
    });
};
export const paymentSave = async payload => {
  console.log("paymentSave called, payload received", payload);

  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log('token', token, ", getPaymentInitiate method url ", baseUrl+"8280/pa/payment/save"  );
        try {
          const response = await fetch(`${baseUrl}8280/pa/payment/save`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              tokenid: token,
            },
            body: payload,
          });
          console.log("response in paymentSave", response);
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
        console.log("response in paymentSave service ", res);
      }
    })

    .catch(() => {
      return null;
    });
};
export const getPaymentConfirm = async payload => {
  console.log("getPaymentConfirm called, payload received", payload);
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log('token', token, ", getPaymentConfirm method url ", baseUrl+"8280/pa/payment/verify"  );
        try {
          const response = await fetch(`${baseUrl}8280/pa/payment/verify`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              tokenid: token,
            },
            body: payload,
          });
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
        console.log("response in getPaymentConfirm service ", res);
      }
    })

    .catch(() => {
      return null;
    });
};
export const getDiary = async payload => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        //console.log('token', token, payload);
        try {
          const response = await fetch(`${baseUrl}8280/pa/diary/list`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              tokenid: token,
            },
            body: payload,
          });
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })

    .catch(() => {
      return null;
    });
};
export const getChangeDiary = async payload => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        //console.log('token', token, payload);
        try {
          const response = await fetch(`${baseUrl}8280/pa/diary/setStatus`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              tokenid: token,
            },
            body: payload,
          });
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(() => {
      return null;
    });
};
export const getEventList = async () => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        try {
          const response = await fetch(`${baseUrl}8280/pa/event/list`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              tokenid: token,
            },
          });
          const json = await response.json();

          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })

    .catch(() => {
      return null;
    });
};
export const getFeedbackList = async () => {
  console.log("getFeedbackList api called");
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log("url", baseUrl+"8280/pa/feedback/list");
        try {
          const response = await fetch(`${baseUrl}8280/pa/feedback/list`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              tokenid: token,
            },
          });
          const json = await response.json();
          console.log("response in getFeedbackList", json);
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(() => {
      return null;
    });
};
export const getFeedback = async payload => {
  console.log("getFeedback api called ");
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log('token', token, payload, ", url", baseUrl+"8280/pa/feedback/dtls");
        try {
          const response = await fetch(`${baseUrl}8280/pa/feedback/dtls`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              tokenid: token,
            },
            body: payload,
          });
          const json = await response.json();
          console.log("response in getFeedback", json);
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(() => {
      return null;
    });
};

export const getAreaList = async () => {
  console.log("getAreaList api called ");
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log("url", baseUrl+"8280/pa/feedback/area/list");
        try {
          const response = await fetch(`${baseUrl}8280/pa/feedback/area/list`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              tokenid: token,
            },
          });
          const json = await response.json();

          return json;
        } catch (error) {
          console.error(error);
          console.log("response in getAreaList", json);
        }
      }
    })
    .catch(() => {
      return null;
    });
};
export const getTeacherList = async () => {
  console.log("getTeacher api called ");
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log("url", baseUrl+"8280/pa/feedback/tch/list");
        try {
          const response = await fetch(`${baseUrl}8280/pa/feedback/tch/list`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              tokenid: token,
            },
          });
          const json = await response.json();

          return json;
        } catch (error) {
          console.error(error);
          console.log("response in getTeacherList", json);
        }
      }
    })
    .catch(() => {
      return null;
    });
};
export const getTypeList = async () => {
  console.log("getTypeList api called ");
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log("url", baseUrl+"8280/pa/feedback/type/list");
        try {
          const response = await fetch(`${baseUrl}8280/pa/feedback/type/list`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              tokenid: token,
            },
          });
          const json = await response.json();
          console.log("response in getTypeList", json);
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(() => {
      return null;
    });
};
export const saveFeedback = async payload => {
  console.log("saveFeedback api called");
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log("url", baseUrl+"8280/pa/feedback/save, payload", payload);
        try {
          const response = await fetch(`${baseUrl}8280/pa/feedback/save`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              tokenid: token,
            },
            body: payload,
          });
          const json = await response.json();
          console.log("response in saveFeedback", json);
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(() => {
      return null;
    });
};
export const getImageUrl = async (schoolId, studentId) => {
  console.log("getImageUrl called from ");
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log("service called", baseUrl + "8280/pa/student/fetch/image?studentId=" + studentId + "&schoolId=" + schoolId);
        return axios({
          url: `${baseUrl}8280/pa/student/fetch/image?studentId=${studentId}&schoolId=${schoolId}`,
          method: 'GET',
          headers: { tokenid: token },
          responseType: 'blob',
          withCredentials: true,
        })
          .then(response => {
            let base64 = '';
            let file = new Blob([response.data], { type: 'image/jpeg' });
            return file;
          })
          .catch(e => {
            console.error('Service failed: ' + e);
          });
      }
    })
    .catch(() => {
      return null;
    });
};

export const replayFeedback = async payload => {
  console.log("replayFeedback api called");
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log("url", baseUrl+"8280/pa/feedback/reply, payload", payload);
        try {
          const response = await fetch(`${baseUrl}8280/pa/feedback/reply`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              tokenid: token,
            },
            body: payload,
          });

          const json = await response.json();
          console.log("response in replayFeedback", json);
          return { data: json };
        } catch (error) {
          console.error('error in replayFeedback : ' + error);
        }
      }
    })
    .catch(() => {
      return null;
    });
};

export const saveFeedbackStatus = async payload => {
  console.log(`${baseUrl}8280/pa/feedback/status/save`)
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        try {
          const response = await fetch(`${baseUrl}8280/pa/feedback/status_save`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              tokenid: token,
            },
            body: payload,
          });
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(() => {
      return null;
    });
};
export const logout = async payload => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(res => {
      let apiCall = `userLogout`;
      if (res !== null) {
        const token = res.token;
        return apiService.post(apiCall, payload, {}, { Authorization: token });
      }
    })

    .catch(() => {
      return null;
    });
};

export const getNotificationsList = async () => {
  console.log("getNotificationsList called ");
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log(`${baseUrl}8280/pa/notification/list`);
        try {
          const response = await fetch(
            `${baseUrl}8280/pa/notification/list`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                tokenid: token,
              },
            },
          );
          const json = await response.json();
          // console.log("response in get NotificationList ", json);
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })

    .catch(() => {
      return null;
    });
};

export const saveFcmToken = async (payload) => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;

        try {
          const response = await fetch(
            `${baseUrl}8002/parent/fcm/save`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                // 'Content-Type': 'multipart/form-data',
                tokenid: token,
              },
              body: payload,
            },
          );

          const json = await response.json();
          console.log("save fcm token json = " + JSON.stringify(json));
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(error => {
      console.log('error', error);
      return null;
    });
};
export const markRead = async (payload) => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log(`${baseUrl}8280/pa/notification/mark_read?commRecipientId=${payload}`)
        try {
          const response = await fetch(
            `${baseUrl}8280/pa/notification/mark_read?commRecipientId=${payload}`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                tokenid: token,
              },
            },
          );

          const json = await response.json();
          console.log("mark read token json = " + JSON.stringify(json));
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(error => {
      console.log('error', error);
      return null;
    });

};
export const getPtmList = async () => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log(`${baseUrl}8280/pa/ptm/feedback/list`)
        try {
          const response = await fetch(`${baseUrl}8280/pa/ptm/feedback/list`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              tokenid: token,
            },
          });
          const json = await response.json();
          // console.log(767)
          console.log("response in https://sms.cooledsys.com:8280/pa/ptm/feedback/list", json);
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(() => {
      return null;
    });
};

export const getPtmFeedbackDtls = async (payload) => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log(`${baseUrl}8280/pa/ptm/feedback/dtls, payload`, payload);
        try {
          const response = await fetch(`${baseUrl}8280/pa/ptm/feedback/dtls`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              tokenid: token,
            },
            body: payload,
          });
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(() => {
      return null;
    });
};


export const getLeaveListSvc = async () => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
  .then(async res => {
    if (res !== null) {
      const token = res.headers.tokeind;
      try {
        const response = await fetch(`${baseUrl}8280/pa/leave/list`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            tokeind: token,
          },
        });
        const json = await response.json();
        return json;
      } catch (error) {
        console.error(error);
      }
    }
  })
  .catch(() => {
    return null;
  });
}


export const getLeaveDtlsSvc = async (payload) => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
  .then(async res => {
    if (res !== null) {
      const token = res.headers.tokeind;
      try {
        const response = await fetch(`${baseUrl}8280/pa/leave/dtls`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/formdata',
            tokeind: token,
          },
          body: payload,
        });
        const json = await response.json();
        return json;
      } catch (error) {
        console.error(error);
      }
    }
  })
  .catch(() => {
    return null;
  });
}


export const saveLeaveSvc = async (payload) => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
  .then(async res => {
    if (res !== null) {
      const token = res.headers.tokeind;
      try {
        const response = await fetch(`${baseUrl}8280/pa/leave/save`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/formdata',
            tokeind: token,
          },
          body: payload,
        });
        const json = await response.json();
        return json;
      } catch (error) {
        console.error(error);
      }
    }
  })
  .catch(() => {
    return null;
  });
}

export const getLeaveTypeListSvc = async () => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
  .then(async res => {
    if (res !== null) {
      const token = res.headers.tokeind;
      try {
        const response = await fetch(`${baseUrl}8280/pa/leave/type/list`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            tokeind: token,
          },
        });
        const json = await response.json();
        return json;
      } catch (error) {
        console.error(error);
      }
    }
  })
  .catch(() => {
    return null;
  });
}

export const getSubjectList = async (payload) => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log(`${baseUrl}8280/pa/mst/section/subject/list, payload`, payload);
        try {
          const response = await fetch(`${baseUrl}8280/pa/mst/section/subject/list`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              tokenid: token,
            },
            body: payload,
          });
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
        }
      }
    })
    .catch(() => {
      return null;
    });
};
export const getTeachersList = async (payload) => {
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.headers.tokenid;
        console.log(`teacherlist service: ${baseUrl}8280/pa/mst/section/teacher/list,`);
        try {
          const response = await fetch(`${baseUrl}8280/pa/mst/section/teacher/list`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data',
              tokenid: token,
            },
            body: payload,
          });
          const json = await response.json();
          return json;
        } catch (error) {
          console.error(error);
          return error;
        }
      }
    })
    .catch(() => {
      return null;
    });
};

export const changePwdApi = async payload => {
  console.log(`${baseUrl}8002/parent/changepassword`);
  console.log(payload);
  return getLocalStoreData(StoreDataKeys.UserDetails)
    .then(async res => {
      if (res !== null) {
        const token = res.token;
        try {
          const response = await fetch(
            `${baseUrl}8002/parent/changepassword`,
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                tokenid: token,
              },
              body: payload,
            },
          );
          const json = await response.json();
          console.log(json);
          return { data: json };
        } catch (error) {
          console.error(error);
        }
      }
    })

    .catch(() => {
      return null;
    });
};
