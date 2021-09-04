import axiosInstance from '../../axiosInterceptor';

export async function getAgeGroup() {
  const userDetails = JSON.parse(localStorage.getItem('access_token'))
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + userDetails.token
  }
  const response = await axiosInstance.get("api/Master/AgeGroupList", { headers: headers });

  return response.data;
}

export async function getPatientList(MamberId, AgeGroupList, GenderId) {
  const access_token = JSON.parse(localStorage.getItem('access_token'))
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token.token
  }
  const uri = `api/Patient/PatientList?MamberId=${MamberId}&AgeGroupList=${AgeGroupList}&GenderId=${GenderId}`;
  const response = await axiosInstance.get(uri, { headers: headers });

  return response.data;
}
