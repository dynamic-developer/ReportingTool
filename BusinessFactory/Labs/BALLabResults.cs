using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using DataFactory;
using Microsoft.EntityFrameworkCore;
using ModelFactory.Labs;

namespace BusinessFactory.Labs
{
    public class BALLabResults : IBALLabResults
    {
        MyOwnMedContext objMyOwnMedContext;

        public BALLabResults(MyOwnMedContext _MyOwnMedContext)
        {
            objMyOwnMedContext = _MyOwnMedContext;
        }

        public List<LabGroupResults> GetLabGroupResults(int MamberId, string filter, DateTime? FromDate, DateTime? ToDate)
        {
            try
            {
                SqlParameter[] sqlPara = new SqlParameter[4];
                sqlPara[0] = new SqlParameter("@MbrId", MamberId);
                sqlPara[1] = new SqlParameter("@filter", filter);
                sqlPara[2] = new SqlParameter("@FromDate", FromDate == null ? "" : ((DateTime)FromDate).ToString("yyyy-mm-dd"));
                sqlPara[3] = new SqlParameter("@ToDate", ToDate == null ? "" : ((DateTime)ToDate).ToString("yyyy-mm-dd"));

                string sqlQuery = "EXEC [dbo].[usp_GetPatientLabGroupResults] @MbrId , @filter , @FromDate , @ToDate";

                var lst = objMyOwnMedContext.Query<LabGroupResults>().FromSql(sqlQuery, sqlPara).ToList();
                return lst;
            }
            catch (Exception ex)
            {
                return null;
            }
        }

        public List<LabTypeResults> GetLabTypResults(int MamberId, int LabGroupID, string filter, DateTime? FromDate, DateTime? ToDate)
        {
            try
            {
                SqlParameter[] sqlPara = new SqlParameter[5];
                sqlPara[0] = new SqlParameter("@MbrId", MamberId);
                sqlPara[1] = new SqlParameter("@LabGroupID", LabGroupID);
                sqlPara[2] = new SqlParameter("@filter", filter);
                sqlPara[3] = new SqlParameter("@FromDate", FromDate == null ? "" : ((DateTime)FromDate).ToString("yyyy-mm-dd"));
                sqlPara[4] = new SqlParameter("@ToDate", ToDate == null ? "" : ((DateTime)ToDate).ToString("yyyy-mm-dd"));

                string sqlQuery = "EXEC [dbo].[usp_GetPatientLabTypResults] @MbrId , @LabGroupID , @filter , @FromDate , @ToDate";

                var lst = objMyOwnMedContext.Query<LabTypeResults>().FromSql(sqlQuery, sqlPara).ToList();
                return lst;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}
