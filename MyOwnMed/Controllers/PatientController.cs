using BusinessFactory.Patients;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MyOwnMed.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class PatientController : Controller
    {
        IBALPatient objBALPatient;
        public PatientController(IBALPatient _IBALPatient)
        {
            objBALPatient = _IBALPatient;
        }

        [HttpGet]
        [Route("PatientList")]
        public IActionResult GetPatientList(int MamberId, string AgeGroupList = "", string GenderId = "")
        {
            var PatientList = objBALPatient.GetPatientList(MamberId, string.IsNullOrEmpty(AgeGroupList) ? "" : AgeGroupList, string.IsNullOrEmpty(GenderId) ? "" : GenderId);

            return Ok(PatientList);
        }
    }
}