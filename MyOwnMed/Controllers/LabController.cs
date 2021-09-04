using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessFactory.Labs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyOwnMed.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class LabController : ControllerBase
    {
        IBALLabResults objBALLabResults;
        public LabController(IBALLabResults _IBALLabResults)
        {
            objBALLabResults = _IBALLabResults;
        }

        [HttpGet]
        [Route("LabGroupResults")]
        public IActionResult GetLabGroupResults(int MamberId, string filter, DateTime? FromDate, DateTime? ToDate)
        {
            var PatientList = objBALLabResults.GetLabGroupResults(MamberId, string.IsNullOrEmpty(filter) ? "" : filter, FromDate, ToDate);
            return Ok(PatientList);
        }

        [HttpGet]
        [Route("LabTypResults")]
        public IActionResult GetLabTypResults(int MamberId, int LabGroupID, string filter, DateTime? FromDate, DateTime? ToDate)
        {
            var PatientList = objBALLabResults.GetLabTypResults(MamberId, LabGroupID, string.IsNullOrEmpty(filter) ? "" : filter, FromDate, ToDate);
            return Ok(PatientList);
        }
    }
}