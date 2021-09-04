using DataFactory;
using ModelFactory.Users;
using System.Linq;

namespace BusinessFactory.Users
{
    public class BALPortalUser : IBALPortalUser
    {
        MyOwnMedContext objMyOwnMedContext;

        public BALPortalUser(MyOwnMedContext _MyOwnMedContext)
        {
            objMyOwnMedContext = _MyOwnMedContext;
        }

        public PortalUser GetLoginUser(PortalUser _PortalUser)
        {
            try
            {
                var portalUser = objMyOwnMedContext.entPortalUser.Where(f => f.UserName == _PortalUser.UserName
                                                   && f.UserPwd == _PortalUser.UserPwd)
                                                   .FirstOrDefault();
                return portalUser;
            }
            catch (System.Exception Ex)
            {
                return null;
            }
        }
    }
}
