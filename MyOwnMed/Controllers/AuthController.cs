using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using BusinessFactory.Users;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ModelFactory.Users;
using MyOwnMed.MyOwnMedSecurity;

namespace MyOwnMed.Controllers
{
    [Route("api/[controller]")]
    [AllowAnonymous]
    public class AuthController : Controller
    {
        IBALPortalUser objBALPortalUser;
        IBALDimMbr objBALDimMbr;
        public AuthController(IBALPortalUser _IBALPortalUser, IBALDimMbr _IBALDimMbr)
        {
            objBALPortalUser = _IBALPortalUser;
            objBALDimMbr = _IBALDimMbr;
        }

        [HttpPost]
        public IActionResult Login([FromBody]PortalUser _PortalUser)
        {
            var user = objBALPortalUser.GetLoginUser(_PortalUser);
            Thread.Sleep(2000);
            if (user == null) { return Ok(null); };
            var mamber = objBALDimMbr.GetMember(user.MbrId);
            var token = new JwtTokenBuilder()
                               .AddSecurityKey(JwtSecurityKey.Create("myownmed-secret-key"))
                               .AddSubject(user.UserName)
                               .AddIssuer("MyOwnMed.Security.Bearer")
                               .AddAudience("MyOwnMed.Security.Bearer")
                               .AddClaim("MembershipId", "111")
                               .AddExpiry(60)
                               .Build();

            return Ok(new { token = token.Value, user = new { UserName = user.UserName , MamberId = user.MbrId, UserFirstName = user.UserFirstName , UserLastName  = user.UserLastName , MamberType = mamber.MbrName } });
        }
    }
}