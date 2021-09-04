import axiosInstance from '../../../axiosInterceptor';

export async function getCondiations(MamberId) {
  const userDetails = JSON.parse(localStorage.getItem('access_token'))
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + userDetails.token
  }
  const response = await axiosInstance.get(`/api/Master/Condiation?MamberId=${MamberId}`, { headers: headers });

  return response.data;
}

export async function getConditionsCatDetails(MamberId, filter) {
  const access_token = JSON.parse(localStorage.getItem('access_token'))
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token.token
  }
  const uri = `api/Conditions/ConditionsCatDetails?MamberId=${MamberId}&filter=${filter}`;
  const response = await axiosInstance.get(uri, { headers: headers });

  return response.data;
}

export async function getConditionsDetails(MamberId, ConditionCatId, filter) {
  const access_token = JSON.parse(localStorage.getItem('access_token'))
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token.token
  }
  const uri = `api/Conditions/ConditionsDetails?MamberId=${MamberId}&ConditionCatId=${ConditionCatId}&filter=${filter}`;
  const response = await axiosInstance.get(uri, { headers: headers });

  return response.data;
}

export async function GetConditionsPatients(MamberId, ConditionID, filter) {
  const access_token = JSON.parse(localStorage.getItem('access_token'))
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token.token
  }
  const uri = `api/Conditions/ConditionsPatients?MamberId=${MamberId}&ConditionID=${ConditionID}&filter=${filter}`;
  const response = await axiosInstance.get(uri, { headers: headers });

  return response.data;
}

export async function GetPatientConditions(MamberId, ConditionID, PatientId) {
  const access_token = JSON.parse(localStorage.getItem('access_token'))
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token.token
  }
  const uri = `api/Conditions/PatientConditions?MamberId=${MamberId}&ConditionID=${ConditionID}&PatientId=${PatientId}`;
  const response = await axiosInstance.get(uri, { headers: headers });

  return response.data;
}
