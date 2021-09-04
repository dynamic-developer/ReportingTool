using ModelFactory.Labs;
using System;
using System.Collections.Generic;
namespace BusinessFactory.Labs
{
    public interface IBALLabResults
    {
        List<LabGroupResults> GetLabGroupResults(int MamberId, string filter , DateTime? FromDate , DateTime? ToDate);

        List<LabTypeResults> GetLabTypResults(int MamberId , int LabGroupID, string filter, DateTime? FromDate, DateTime? ToDate);
    }
}
