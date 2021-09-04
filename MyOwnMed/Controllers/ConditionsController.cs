using BusinessFactory.Conditions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MyOwnMed.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class ConditionsController : Controller
    {
        IBALConditions objBALConditions;
        public ConditionsController(IBALConditions _IBALConditions)
        {
            objBALConditions = _IBALConditions;
        }

        [HttpGet]
        [Route("ConditionsCatDetails")]
        public IActionResult ConditionsCatDetails(int MamberId, string filter)
        {
            var PatientList = objBALConditions.GetConditionsCatDetails(MamberId, string.IsNullOrEmpty(filter) ? "" : filter);
            return Ok(PatientList);
        }

        [HttpGet]
        [Route("ConditionsDetails")]
        public IActionResult GetConditionsDetails(int MamberId, int ConditionCatId, string filter)
        {
            var PatientList = objBALConditions.GetConditionsDetails(MamberId, ConditionCatId, string.IsNullOrEmpty(filter) ? "" : filter);
            return Ok(PatientList);
        }

        [HttpGet]
        [Route("ConditionsPatients")]
        public IActionResult GetConditionsPatients(int MamberId, int ConditionID, string filter)
        {
            var PatientList = objBALConditions.GetConditionsPatients(MamberId, ConditionID, string.IsNullOrEmpty(filter) ? "" : filter);
            return Ok(PatientList);
        }

        [HttpGet]
        [Route("PatientConditions")]
        public IActionResult GetPatientConditions(int MamberId, int ConditionID, int PatientId)
        {
            var PatientList = objBALConditions.GetPatientConditions(MamberId, ConditionID, PatientId);
            return Ok(PatientList);
        }
    }
}