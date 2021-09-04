using BusinessFactory.Masters;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MyOwnMed.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class MasterController : Controller
    {
        IBALMasters objBALMasters;
        public MasterController(IBALMasters _IBALMasters)
        {
            objBALMasters = _IBALMasters;
        }

        [HttpGet]
        [Route("AgeGroupList")]
        public IActionResult GetAgeGroupList()
        {
            var AgeGroupList = objBALMasters.GetAgeGroup();

            return Ok(AgeGroupList);
        }

        [HttpGet]
        [Route("EthnicityList")]
        public IActionResult GetEthnicityList()
        {
            var EthnicityList = objBALMasters.GetEthnicity();

            return Ok(EthnicityList);
        }

        [HttpGet]
        [Route("GenderList")]
        public IActionResult GetGenderList()
        {
            var GenderList = objBALMasters.GetGender();

            return Ok(GenderList);
        }

        [HttpGet]
        [Route("RaceList")]
        public IActionResult GetRaceList()
        {
            var RaceList = objBALMasters.GetRace();

            return Ok(RaceList);
        }

        [HttpGet]
        [Route("Condiation")]
        public IActionResult GetCondiationList(int MamberId)
        {
            var RaceList = objBALMasters.GetCondition(MamberId);

            return Ok(RaceList);
        }

        [HttpGet]
        [Route("ConditionCategory")]
        public IActionResult GetConditionCategory(int MamberId)
        {
            var RaceList = objBALMasters.GetConditionCategory(MamberId);

            return Ok(RaceList);
        }
    }
}