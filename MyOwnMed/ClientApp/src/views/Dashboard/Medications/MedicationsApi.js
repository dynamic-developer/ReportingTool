import axiosInstance from '../../../axiosInterceptor';


export async function GetNonProprietaryDetail(MamberId, filter) {
  const access_token = JSON.parse(localStorage.getItem('access_token'))
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token.token
  }
  const uri = `api/Medications/NonProprietary?MamberId=${MamberId}&filter=${filter}`;
  const response = await axiosInstance.get(uri, { headers: headers });

  return response.data;
}

export async function GetProprietaryDetail(MamberId, DrugSetID, filter) {
  const access_token = JSON.parse(localStorage.getItem('access_token'))
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token.token
  }
  const uri = `api/Medications/Proprietary?MamberId=${MamberId}&DrugSetID=${DrugSetID}&filter=${filter}`;
  const response = await axiosInstance.get(uri, { headers: headers });

  return response.data;
}

export async function GetNDCManufacturerDetail(MamberId, DrugSetID, DosageFormID, filter) {
  const access_token = JSON.parse(localStorage.getItem('access_token'))
  var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + access_token.token
  }
  const uri = `api/Medications/NDCManufacturer?MamberId=${MamberId}&DrugSetID=${DrugSetID}&DosageFormID=${DosageFormID}&filter=${filter}`;
  const response = await axiosInstance.get(uri, { headers: headers });

  return response.data;
}
