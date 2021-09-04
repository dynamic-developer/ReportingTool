import axiosInstance from '../../../axiosInterceptor';

export async function getAgeGroup(token) {
  var headers = {
    'Content-Type': 'application/json',
    'x-access-token': token
  }
  const response = await axiosInstance.get(`${Uri.GDC_GET_URL}`, { headers: headers });
  return response.data;
}
