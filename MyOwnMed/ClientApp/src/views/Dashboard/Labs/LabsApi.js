import axiosInstance from '../../../axiosInterceptor';

export async function GetLabGroupResults(MamberId, filter, FromDate,ToDate) {
  const access_token = JSON.parse(localStorage.getItem('access_token'))
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token.token
  }
  const uri = `api/Lab/LabGroupResults?MamberId=${MamberId}&filter=${filter}&FromDate=${FromDate}&ToDate=${ToDate}`;
  const response = await axiosInstance.get(uri, { headers: headers });
  return response.data;
}

export async function GetLabTypResults(MamberId, LabGroupID, filter, FromDate, ToDate) {
  const access_token = JSON.parse(localStorage.getItem('access_token'))
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token.token
  }
  const uri = `api/Lab/LabTypResults?MamberId=${MamberId}&LabGroupID=${LabGroupID}&filter=${filter}&FromDate=${FromDate}&ToDate=${ToDate}`;
  const response = await axiosInstance.get(uri, { headers: headers });
  return response.data;
}
