using ModelFactory.Patients;
using System.Collections.Generic;

namespace BusinessFactory.Patients
{
    public interface IBALPatient
    {
        List<Patient> GetPatientList(int MamberId, string AgeGroupList, string GenderId);
    }
}
