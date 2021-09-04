using ModelFactory.Users;

namespace BusinessFactory.Users
{
    public interface IBALPortalUser
    {
        PortalUser GetLoginUser(PortalUser _PortalUser);
    }
}
