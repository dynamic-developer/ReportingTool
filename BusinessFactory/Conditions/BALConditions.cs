using DataFactory;
using Microsoft.EntityFrameworkCore;
using ModelFactory.Conditions;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace BusinessFactory.Conditions
{
    public class BALConditions : IBALConditions
    {
        MyOwnMedContext objMyOwnMedContext;

        public BALConditions(MyOwnMedContext _MyOwnMedContext)
        {
            objMyOwnMedContext = _MyOwnMedContext;
        }

        public List<ConditionsCatDetails> GetConditionsCatDetails(int MamberId, string filter)
        {
            try
            {
                SqlParameter[] sqlPara = new SqlParameter[2];
                sqlPara[0] = new SqlParameter("@MbrId", MamberId);
                sqlPara[1] = new SqlParameter("@filter", filter);

                string sqlQuery = "EXEC [dbo].[usp_GetConditionsCatDetail_new] @MbrId , @filter";

                var lst = objMyOwnMedContext.Query<ConditionsCatDetails>().FromSql(sqlQuery, sqlPara).ToList();
                return lst;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public List<ConditionsDetails> GetConditionsDetails(int MamberId, int ConditionCatId, string filter)
        {
            try
            {
                SqlParameter[] sqlPara = new SqlParameter[3];
                sqlPara[0] = new SqlParameter("@MbrId", MamberId);
                sqlPara[1] = new SqlParameter("@ConditionCatId", ConditionCatId);
                sqlPara[2] = new SqlParameter("@filter", filter);

                string sqlQuery = "EXEC [dbo].[usp_GetConditionsDetail_new] @MbrId , @ConditionCatId , @filter";

                var lst = objMyOwnMedContext.Query<ConditionsDetails>().FromSql(sqlQuery, sqlPara).ToList();
                return lst;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public List<ConditionsPatients> GetConditionsPatients(int MamberId, int ConditionID, string filter)
        {
            try
            {
                SqlParameter[] sqlPara = new SqlParameter[3];
                sqlPara[0] = new SqlParameter("@MbrId", MamberId);
                sqlPara[1] = new SqlParameter("@ConditionID", ConditionID);
                sqlPara[2] = new SqlParameter("@filter", filter);

                string sqlQuery = "EXEC [dbo].[usp_GetConditionsPatient] @MbrId,@ConditionID,@filter";

                var lst = objMyOwnMedContext.Query<ConditionsPatients>().FromSql(sqlQuery, sqlPara).ToList();
                return lst;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public List<PatientConditions> GetPatientConditions(int MamberId, int ConditionID, int PatientId)
        {
            try
            {
                SqlParameter[] sqlPara = new SqlParameter[3];
                sqlPara[0] = new SqlParameter("@MbrId", MamberId);
                sqlPara[1] = new SqlParameter("@ConditionID", ConditionID);
                sqlPara[2] = new SqlParameter("@PatientId", PatientId);

                string sqlQuery = "EXEC [dbo].[usp_GetPatientConditions] @MbrId,@ConditionID,@PatientId";

                var lst = objMyOwnMedContext.Query<PatientConditions>().FromSql(sqlQuery, sqlPara).ToList();
                return lst;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
