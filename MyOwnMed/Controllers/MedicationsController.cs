using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BusinessFactory.Medications;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MyOwnMed.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicationsController : ControllerBase
    {
        IBALMedications objBALMedications;
        public MedicationsController(IBALMedications _IBALMedications)
        {
            objBALMedications = _IBALMedications;
        }

        [HttpGet]
        [Route("NonProprietary")]
        public IActionResult GetNonProprietaryDetail(int MamberId, string filter)
        {
            var PatientList = objBALMedications.GetNonProprietaryDetail(MamberId, string.IsNullOrEmpty(filter) ? "" : filter);
            return Ok(PatientList);
        }

        [HttpGet]
        [Route("Proprietary")]
        public IActionResult GetProprietaryDetail(int MamberId, int DrugSetID, string filter)
        {
            var PatientList = objBALMedications.GetProprietaryDetail(MamberId, DrugSetID, string.IsNullOrEmpty(filter) ? "" : filter);
            return Ok(PatientList);
        }

        [HttpGet]
        [Route("NDCManufacturer")]
        public IActionResult GetNDCManufacturerDetail(int MamberId, int DrugSetID, string DosageFormID, string filter)
        {
            var PatientList = objBALMedications.GetNDCManufacturerDetail(MamberId, DrugSetID, DosageFormID, string.IsNullOrEmpty(filter) ? "" : filter);
            return Ok(PatientList);
        }
    }
}