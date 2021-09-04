using System;
using System.Collections.Generic;
using DataFactory;
using Microsoft.EntityFrameworkCore;
using ModelFactory.Patients;
using System.Linq;
using System.Data.SqlClient;

namespace BusinessFactory.Patients
{
    public class BALPatient : IBALPatient
    {
        MyOwnMedContext objMyOwnMedContext;

        public BALPatient(MyOwnMedContext _MyOwnMedContext)
        {
            objMyOwnMedContext = _MyOwnMedContext;
        }

        public List<Patient> GetPatientList(int MamberId, string AgeGroupList, string GenderId)
        {
            try
            {
                SqlParameter[] sqlPara = new SqlParameter[3];
                sqlPara[0] = new SqlParameter("@MbrId", MamberId);
                sqlPara[1] = new SqlParameter("@AgeGroupIdList", AgeGroupList);
                sqlPara[2] = new SqlParameter("@GenderId", GenderId);

                string sqlQuery = "EXEC [dbo].[usp_GetPatientList] @MbrId,@AgeGroupIdList,@GenderId";

                var lst =  objMyOwnMedContext.Query<Patient>().FromSql(sqlQuery, sqlPara).ToList();
                return lst;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
