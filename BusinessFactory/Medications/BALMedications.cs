using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using DataFactory;
using Microsoft.EntityFrameworkCore;
using ModelFactory.Medications;

namespace BusinessFactory.Medications
{
    public class BALMedications : IBALMedications
    {
        MyOwnMedContext objMyOwnMedContext;

        public BALMedications(MyOwnMedContext _MyOwnMedContext)
        {
            objMyOwnMedContext = _MyOwnMedContext;
        }
        
        public List<NonProprietary> GetNonProprietaryDetail(int MamberId, string filter)
        {
            try
            {
                SqlParameter[] sqlPara = new SqlParameter[2];
                sqlPara[0] = new SqlParameter("@MbrId", MamberId);
                sqlPara[1] = new SqlParameter("@filter", filter);

                string sqlQuery = "EXEC [dbo].[usp_GetNonProprietaryDetail] @MbrId,@filter";

                var lst = objMyOwnMedContext.Query<NonProprietary>().FromSql(sqlQuery, sqlPara).ToList();
                return lst;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public List<Proprietary> GetProprietaryDetail(int MamberId, int DrugSetID, string filter)
        {
            try
            {
                SqlParameter[] sqlPara = new SqlParameter[3];
                sqlPara[0] = new SqlParameter("@MbrId", MamberId);
                sqlPara[1] = new SqlParameter("@DrugSetID", DrugSetID);
                sqlPara[2] = new SqlParameter("@filter", filter);

                string sqlQuery = "EXEC [dbo].[usp_GetProprietaryDetail] @MbrId , @DrugSetID , @filter";

                var lst = objMyOwnMedContext.Query<Proprietary>().FromSql(sqlQuery, sqlPara).ToList();
                return lst;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public List<NDCManufacturer> GetNDCManufacturerDetail(int MamberId, int DrugSetID, string DosageFormID, string filter)
        {
            try
            {
                SqlParameter[] sqlPara = new SqlParameter[4];
                sqlPara[0] = new SqlParameter("@MbrId", MamberId);
                sqlPara[1] = new SqlParameter("@DrugSetID", DrugSetID);
                sqlPara[2] = new SqlParameter("@DosageFormID", DosageFormID);
                sqlPara[3] = new SqlParameter("@filter", filter);

                string sqlQuery = "EXEC [dbo].[usp_GetNDCManufacturerDetail] @MbrId , @DrugSetID , @DosageFormID , @filter";

                var lst = objMyOwnMedContext.Query<NDCManufacturer>().FromSql(sqlQuery, sqlPara).ToList();
                return lst;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
